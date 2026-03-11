'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Select, Badge, TextArea } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import {
  getCandidate,
  updateCandidate,
  getJobProfiles,
  generateId,
} from '@/lib/firebase/firestore';
import { uploadCandidateFile, deleteCandidateFile } from '@/lib/firebase/storage';
import { firebaseAuth } from '@/lib/firebase/config';
import type {
  Candidate,
  CandidateProcessStatus,
  CandidateOutcome,
  ManagerRecommendation,
  CandidateChecklistItem,
  CandidateFile,
  CandidateComment,
  JobProfile,
} from '@/types';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  Loader2,
  Save,
  Plus,
  Trash2,
  Download,
  Upload,
  Check,
  X,
  MessageSquare,
  FileText,
  ClipboardCheck,
  Briefcase,
  BarChart3,
  User,
  Settings,
} from 'lucide-react';

type Tab = 'profile' | 'files' | 'process' | 'checklist' | 'assessment' | 'comments' | 'positions' | 'evaluations';

const PROCESS_STATUSES: CandidateProcessStatus[] = [
  'interest-received', 'contacted', 'interviewed', 'evaluated', 'reference-check', 'final-review',
];

const OUTCOMES: CandidateOutcome[] = [
  'pending', 'approved-to-hire', 'discarded', 'preserved-for-future',
];

const RECOMMENDATIONS: ManagerRecommendation[] = [
  'no-recommendation', 'hire', 'discard', 'contact', 'keep-contact-info',
];

export default function CandidateDetailPage() {
  const t = useTranslations('candidates');
  const tc = useTranslations('common');
  const locale = useLocale();
  const params = useParams();
  const candidateId = params.candidateId as string;

  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [jobProfiles, setJobProfiles] = useState<JobProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  // Profile form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [location, setLocation] = useState('');

  // Checklist
  const [newChecklistItem, setNewChecklistItem] = useState('');

  // Comments
  const [newComment, setNewComment] = useState('');

  // Position linking
  const [selectedJobProfileId, setSelectedJobProfileId] = useState('');

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [cand, jp] = await Promise.all([
        getCandidate(candidateId),
        getJobProfiles(false),
      ]);
      if (cand) {
        setCandidate(cand);
        setName(cand.name);
        setEmail(cand.email);
        setPhone(cand.phone || '');
        setLinkedinUrl(cand.linkedinUrl || '');
        setLocation(cand.location || '');
      }
      setJobProfiles(jp);
    } catch (error) {
      console.error('Error loading candidate:', error);
    } finally {
      setLoading(false);
    }
  }, [candidateId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return (
      <AuthGuard>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
          </main>
          <Footer />
        </div>
      </AuthGuard>
    );
  }

  if (!candidate) {
    return (
      <AuthGuard>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Candidate not found</p>
          </main>
          <Footer />
        </div>
      </AuthGuard>
    );
  }

  // --- Handlers ---

  async function handleSaveProfile() {
    if (!candidate) return;
    setSaving(true);
    try {
      await updateCandidate(candidate.id, { name, email, phone, linkedinUrl, location });
      setCandidate({ ...candidate, name, email, phone, linkedinUrl, location });
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setSaving(false);
    }
  }

  async function handleStatusChange(status: CandidateProcessStatus) {
    if (!candidate) return;
    await updateCandidate(candidate.id, { processStatus: status });
    setCandidate({ ...candidate, processStatus: status });
  }

  async function handleOutcomeChange(outcome: CandidateOutcome) {
    if (!candidate) return;
    await updateCandidate(candidate.id, { outcome });
    setCandidate({ ...candidate, outcome });
  }

  async function handleScoreChange(score: number) {
    if (!candidate) return;
    await updateCandidate(candidate.id, { managerScore: score });
    setCandidate({ ...candidate, managerScore: score });
  }

  async function handleRecommendationChange(rec: ManagerRecommendation) {
    if (!candidate) return;
    await updateCandidate(candidate.id, { recommendation: rec });
    setCandidate({ ...candidate, recommendation: rec });
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>, fileType: CandidateFile['type']) {
    if (!candidate || !e.target.files?.[0]) return;
    const file = e.target.files[0];
    if (file.size > 10 * 1024 * 1024) {
      alert(t('files.maxSize'));
      return;
    }
    setSaving(true);
    try {
      const userId = firebaseAuth.currentUser?.uid || '';
      const fileData = await uploadCandidateFile(candidate.orgId, candidate.id, file, fileType, userId);
      const updatedFiles = [...candidate.files, fileData];
      await updateCandidate(candidate.id, { files: updatedFiles });
      setCandidate({ ...candidate, files: updatedFiles });
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setSaving(false);
      e.target.value = '';
    }
  }

  async function handleFileDelete(fileId: string) {
    if (!candidate) return;
    const file = candidate.files.find(f => f.id === fileId);
    if (!file || !confirm(t('files.deleteConfirm'))) return;
    try {
      await deleteCandidateFile(file.storagePath);
      const updatedFiles = candidate.files.filter(f => f.id !== fileId);
      await updateCandidate(candidate.id, { files: updatedFiles });
      setCandidate({ ...candidate, files: updatedFiles });
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  }

  async function handleAddChecklistItem() {
    if (!candidate || !newChecklistItem.trim()) return;
    const item: CandidateChecklistItem = {
      id: generateId(),
      label: newChecklistItem.trim(),
      completed: false,
    };
    const updatedChecklist = [...candidate.checklist, item];
    await updateCandidate(candidate.id, { checklist: updatedChecklist });
    setCandidate({ ...candidate, checklist: updatedChecklist });
    setNewChecklistItem('');
  }

  async function handleToggleChecklistItem(itemId: string) {
    if (!candidate) return;
    const userId = firebaseAuth.currentUser?.uid || '';
    const updatedChecklist = candidate.checklist.map(item =>
      item.id === itemId
        ? {
            ...item,
            completed: !item.completed,
            completedAt: !item.completed ? Timestamp.now() : undefined,
            completedBy: !item.completed ? userId : undefined,
          }
        : item
    );
    await updateCandidate(candidate.id, { checklist: updatedChecklist });
    setCandidate({ ...candidate, checklist: updatedChecklist });
  }

  async function handleDeleteChecklistItem(itemId: string) {
    if (!candidate) return;
    const updatedChecklist = candidate.checklist.filter(item => item.id !== itemId);
    await updateCandidate(candidate.id, { checklist: updatedChecklist });
    setCandidate({ ...candidate, checklist: updatedChecklist });
  }

  async function handleAddComment() {
    if (!candidate || !newComment.trim()) return;
    const user = firebaseAuth.currentUser;
    const comment: CandidateComment = {
      id: generateId(),
      text: newComment.trim(),
      authorId: user?.uid || '',
      authorName: user?.displayName || user?.email || 'Admin',
      createdAt: Timestamp.now(),
    };
    const updatedComments = [...candidate.comments, comment];
    await updateCandidate(candidate.id, { comments: updatedComments });
    setCandidate({ ...candidate, comments: updatedComments });
    setNewComment('');
  }

  async function handleLinkPosition() {
    if (!candidate || !selectedJobProfileId) return;
    if (candidate.jobProfileIds.includes(selectedJobProfileId)) return;
    const updated = [...candidate.jobProfileIds, selectedJobProfileId];
    await updateCandidate(candidate.id, { jobProfileIds: updated });
    setCandidate({ ...candidate, jobProfileIds: updated });
    setSelectedJobProfileId('');
  }

  async function handleUnlinkPosition(jpId: string) {
    if (!candidate) return;
    const updated = candidate.jobProfileIds.filter(id => id !== jpId);
    await updateCandidate(candidate.id, { jobProfileIds: updated });
    setCandidate({ ...candidate, jobProfileIds: updated });
  }

  function getJobProfileName(jpId: string): string {
    const jp = jobProfiles.find(j => j.id === jpId);
    return jp ? (jp.title[locale as 'es' | 'en'] || jp.title.es) : jpId;
  }

  function getStatusColor(status: CandidateProcessStatus): string {
    const colors: Record<CandidateProcessStatus, string> = {
      'interest-received': 'bg-gray-100 text-gray-700',
      'contacted': 'bg-blue-100 text-blue-700',
      'interviewed': 'bg-amber-100 text-amber-700',
      'evaluated': 'bg-green-100 text-green-700',
      'reference-check': 'bg-purple-100 text-purple-700',
      'final-review': 'bg-indigo-100 text-indigo-700',
    };
    return colors[status];
  }

  function getOutcomeVariant(outcome: CandidateOutcome): 'default' | 'success' | 'primary' {
    if (outcome === 'approved-to-hire') return 'success';
    if (outcome === 'preserved-for-future') return 'primary';
    return 'default';
  }

  // --- Tab Components ---

  const tabs: { key: Tab; icon: React.ElementType }[] = [
    { key: 'profile', icon: User },
    { key: 'files', icon: FileText },
    { key: 'process', icon: Settings },
    { key: 'checklist', icon: ClipboardCheck },
    { key: 'assessment', icon: BarChart3 },
    { key: 'comments', icon: MessageSquare },
    { key: 'positions', icon: Briefcase },
    { key: 'evaluations', icon: BarChart3 },
  ];

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
          {/* Back */}
          <div className="mb-6">
            <Link
              href={`/${locale}/admin/candidates`}
              className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              {tc('back')}
            </Link>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{candidate.name}</h1>
              <p className="text-gray-500">{candidate.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(candidate.processStatus)}`}>
                {t(`status.${candidate.processStatus}`)}
              </span>
              <Badge variant={getOutcomeVariant(candidate.outcome)}>
                {t(`outcome.${candidate.outcome}`)}
              </Badge>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex gap-1 overflow-x-auto">
              {tabs.map(({ key, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === key
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {t(`tabs.${key}`)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}

          {activeTab === 'profile' && (
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t('tabs.profile')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input label={t('form.name')} value={name} onChange={e => setName(e.target.value)} required />
                <Input label={t('form.email')} type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label={t('form.phone')} value={phone} onChange={e => setPhone(e.target.value)} />
                  <Input label={t('form.location')} value={location} onChange={e => setLocation(e.target.value)} />
                </div>
                <Input label={t('form.linkedin')} value={linkedinUrl} onChange={e => setLinkedinUrl(e.target.value)} />
                <div className="flex justify-end pt-2">
                  <Button onClick={handleSaveProfile} isLoading={saving}>
                    <Save className="w-4 h-4 mr-2" />
                    {t('form.save')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'files' && (
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t('tabs.files')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Upload buttons */}
                <div className="flex flex-wrap gap-3">
                  {(['cv', 'picture', 'certificate', 'other'] as const).map(fType => (
                    <label key={fType} className="cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        accept={fType === 'picture' ? 'image/*' : undefined}
                        onChange={e => handleFileUpload(e, fType)}
                      />
                      <span className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                        <Upload className="w-4 h-4" />
                        {t(`files.${fType}`)}
                      </span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-gray-400">{t('files.maxSize')}</p>

                {/* File list */}
                {candidate.files.length === 0 ? (
                  <p className="text-gray-500 text-center py-6">{t('files.noFiles')}</p>
                ) : (
                  <div className="divide-y">
                    {candidate.files.map(file => (
                      <div key={file.id} className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{file.name}</p>
                            <p className="text-xs text-gray-500">
                              {t(`files.${file.type}`)} &middot; {(file.sizeBytes / 1024).toFixed(0)} KB
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={file.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-primary-600"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                          <button onClick={() => handleFileDelete(file.id)} className="p-2 text-gray-400 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {activeTab === 'process' && (
            <div className="space-y-6">
              {/* Status Pipeline */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>{t('filterByStatus')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {PROCESS_STATUSES.map((status, idx) => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(status)}
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          candidate.processStatus === status
                            ? 'bg-primary-600 text-white shadow-md'
                            : PROCESS_STATUSES.indexOf(candidate.processStatus) > idx
                            ? 'bg-primary-100 text-primary-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {PROCESS_STATUSES.indexOf(candidate.processStatus) > idx && (
                          <Check className="w-4 h-4" />
                        )}
                        {t(`status.${status}`)}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Outcome */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>{t('filterByOutcome')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {OUTCOMES.map(outcome => (
                      <button
                        key={outcome}
                        onClick={() => handleOutcomeChange(outcome)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-all ${
                          candidate.outcome === outcome
                            ? outcome === 'approved-to-hire'
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : outcome === 'discarded'
                              ? 'border-red-500 bg-red-50 text-red-700'
                              : outcome === 'preserved-for-future'
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-500 bg-gray-50 text-gray-700'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {t(`outcome.${outcome}`)}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'checklist' && (
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t('tabs.checklist')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add item */}
                <div className="flex items-center gap-2">
                  <Input
                    value={newChecklistItem}
                    onChange={e => setNewChecklistItem(e.target.value)}
                    placeholder={t('checklist.placeholder')}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddChecklistItem(); }}}
                  />
                  <Button variant="outline" onClick={handleAddChecklistItem} disabled={!newChecklistItem.trim()}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {candidate.checklist.length === 0 ? (
                  <p className="text-gray-500 text-center py-6">{t('checklist.noItems')}</p>
                ) : (
                  <div className="divide-y">
                    {candidate.checklist.map(item => (
                      <div key={item.id} className="flex items-center gap-3 py-3">
                        <input
                          type="checkbox"
                          checked={item.completed}
                          onChange={() => handleToggleChecklistItem(item.id)}
                          className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <span className={`flex-1 text-sm ${item.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                          {item.label}
                        </span>
                        <button onClick={() => handleDeleteChecklistItem(item.id)} className="p-1 text-gray-400 hover:text-red-600">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Summary */}
                {candidate.checklist.length > 0 && (
                  <p className="text-sm text-gray-500">
                    {candidate.checklist.filter(i => i.completed).length}/{candidate.checklist.length} {t('checklist.completed')}
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          {activeTab === 'assessment' && (
            <div className="space-y-6">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>{t('assessment.score')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={candidate.managerScore ?? 0}
                        onChange={e => handleScoreChange(Number(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                      />
                      <span className="text-2xl font-bold text-primary-600 w-16 text-right">
                        {candidate.managerScore ?? 0}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>{t('assessment.recommendation')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select
                    value={candidate.recommendation}
                    onChange={e => handleRecommendationChange(e.target.value as ManagerRecommendation)}
                    options={RECOMMENDATIONS.map(r => ({
                      value: r,
                      label: t(`recommendation.${r}`),
                    }))}
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'comments' && (
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t('tabs.comments')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add comment */}
                <div className="flex items-start gap-2">
                  <TextArea
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    placeholder={t('comments.placeholder')}
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={handleAddComment} disabled={!newComment.trim()}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {candidate.comments.length === 0 ? (
                  <p className="text-gray-500 text-center py-6">{t('comments.noComments')}</p>
                ) : (
                  <div className="space-y-3">
                    {[...candidate.comments].reverse().map(comment => (
                      <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">{comment.authorName}</span>
                          <span className="text-xs text-gray-400">
                            {comment.createdAt?.toDate?.() ? comment.createdAt.toDate().toLocaleDateString() : ''}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {activeTab === 'positions' && (
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t('tabs.positions')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Link position */}
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Select
                      value={selectedJobProfileId}
                      onChange={e => setSelectedJobProfileId(e.target.value)}
                      placeholder={t('positions.selectPosition')}
                      options={jobProfiles
                        .filter(jp => !candidate.jobProfileIds.includes(jp.id))
                        .map(jp => ({
                          value: jp.id,
                          label: jp.title[locale as 'es' | 'en'] || jp.title.es,
                        }))}
                    />
                  </div>
                  <Button variant="outline" onClick={handleLinkPosition} disabled={!selectedJobProfileId}>
                    <Plus className="w-4 h-4 mr-1" />
                    {t('positions.link')}
                  </Button>
                </div>

                {candidate.jobProfileIds.length === 0 ? (
                  <p className="text-gray-500 text-center py-6">{t('positions.noPositions')}</p>
                ) : (
                  <div className="divide-y">
                    {candidate.jobProfileIds.map(jpId => (
                      <div key={jpId} className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <Briefcase className="w-5 h-5 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">{getJobProfileName(jpId)}</span>
                        </div>
                        <button onClick={() => handleUnlinkPosition(jpId)} className="text-sm text-red-500 hover:text-red-700">
                          {t('positions.unlink')}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {activeTab === 'evaluations' && (
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t('tabs.evaluations')}</CardTitle>
              </CardHeader>
              <CardContent>
                {candidate.evaluationIds.length === 0 && candidate.testSessionIds.length === 0 ? (
                  <p className="text-gray-500 text-center py-6">{t('evaluations.noEvaluations')}</p>
                ) : (
                  <div className="space-y-3">
                    {candidate.evaluationIds.map(evalId => (
                      <div key={evalId} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-900">{evalId}</span>
                        <Link href={`/${locale}/results/${evalId}`}>
                          <Button variant="outline" size="sm">
                            {t('evaluations.viewResults')}
                          </Button>
                        </Link>
                      </div>
                    ))}
                    {candidate.testSessionIds.map(sessionId => (
                      <div key={sessionId} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-700">{sessionId}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </main>
        <Footer />
      </div>
    </AuthGuard>
  );
}
