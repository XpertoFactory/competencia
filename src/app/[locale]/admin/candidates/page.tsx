'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Select,
  Badge,
  ConfirmModal,
} from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import { useOrg } from '@/components/org';
import {
  getCandidates,
  saveCandidate,
  deleteCandidate,
  generateId,
  getJobProfiles,
} from '@/lib/firebase/firestore';
import type { Candidate, CandidateProcessStatus, CandidateOutcome, JobProfile } from '@/types';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  X,
  Loader2,
  UserSearch,
  Search,
  Send,
  MapPin,
  Phone,
  Briefcase,
} from 'lucide-react';

interface CandidateFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
}

const emptyForm: CandidateFormData = {
  name: '',
  email: '',
  phone: '',
  location: '',
};

const PROCESS_STATUSES: CandidateProcessStatus[] = [
  'interest-received',
  'contacted',
  'interviewed',
  'evaluated',
  'reference-check',
  'final-review',
];

const OUTCOMES: CandidateOutcome[] = [
  'pending',
  'approved-to-hire',
  'discarded',
  'preserved-for-future',
];

function getStatusBadgeVariant(
  status: CandidateProcessStatus
): 'default' | 'primary' | 'warning' | 'success' {
  switch (status) {
    case 'interest-received':
      return 'default';
    case 'contacted':
      return 'primary';
    case 'interviewed':
      return 'warning';
    case 'evaluated':
      return 'success';
    case 'reference-check':
      return 'primary';
    case 'final-review':
      return 'warning';
    default:
      return 'default';
  }
}

function getOutcomeBadgeVariant(
  outcome: CandidateOutcome
): 'default' | 'success' | 'primary' {
  switch (outcome) {
    case 'pending':
      return 'default';
    case 'approved-to-hire':
      return 'success';
    case 'preserved-for-future':
      return 'primary';
    case 'discarded':
      return 'default'; // handled with className override
    default:
      return 'default';
  }
}

export default function CandidatesPage() {
  const t = useTranslations('candidates');
  const tc = useTranslations('common');
  const locale = useLocale() as 'es' | 'en';
  const router = useRouter();
  const { currentOrg } = useOrg();

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [jobProfiles, setJobProfiles] = useState<JobProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<CandidateFormData>(emptyForm);
  const [deleteTarget, setDeleteTarget] = useState<Candidate | null>(null);

  // Search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterOutcome, setFilterOutcome] = useState<string>('');
  const [filterJobProfile, setFilterJobProfile] = useState<string>('');

  const orgId = currentOrg?.id || '';

  useEffect(() => {
    loadData();
  }, [orgId]);

  async function loadData() {
    setIsLoading(true);
    try {
      const [cands, profiles] = await Promise.all([
        getCandidates(orgId),
        getJobProfiles(false),
      ]);
      setCandidates(cands);
      setJobProfiles(profiles);
    } catch (error) {
      console.error('Failed to load candidates:', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Filtered candidates
  const filteredCandidates = useMemo(() => {
    let result = candidates;

    // Search by name or email
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q)
      );
    }

    // Filter by process status
    if (filterStatus) {
      result = result.filter((c) => c.processStatus === filterStatus);
    }

    // Filter by outcome
    if (filterOutcome) {
      result = result.filter((c) => c.outcome === filterOutcome);
    }

    // Filter by job profile
    if (filterJobProfile) {
      result = result.filter((c) => c.jobProfileIds.includes(filterJobProfile));
    }

    return result;
  }, [candidates, searchQuery, filterStatus, filterOutcome, filterJobProfile]);

  function handleCreate() {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  }

  function handleEdit(candidate: Candidate) {
    setEditingId(candidate.id);
    setForm({
      name: candidate.name,
      email: candidate.email,
      phone: candidate.phone || '',
      location: candidate.location || '',
    });
    setShowForm(true);
  }

  function handleCancel() {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  }

  async function handleSave() {
    if (!form.name || !form.email) return;

    setIsSaving(true);
    try {
      const now = Timestamp.now();
      const existingCandidate = editingId
        ? candidates.find((c) => c.id === editingId)
        : null;

      const candidate: Candidate = {
        id: editingId || generateId(),
        orgId,
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        location: form.location || undefined,
        processStatus: existingCandidate?.processStatus || 'interest-received',
        outcome: existingCandidate?.outcome || 'pending',
        recommendation: existingCandidate?.recommendation || 'contact',
        comments: existingCandidate?.comments || [],
        checklist: existingCandidate?.checklist || [],
        files: existingCandidate?.files || [],
        jobProfileIds: existingCandidate?.jobProfileIds || [],
        evaluationIds: existingCandidate?.evaluationIds || [],
        testSessionIds: existingCandidate?.testSessionIds || [],
        source: existingCandidate?.source || 'manual',
        createdBy: existingCandidate?.createdBy || '',
        createdAt: existingCandidate?.createdAt || now,
        updatedAt: now,
      };

      await saveCandidate(candidate);
      await loadData();
      handleCancel();
    } catch (error) {
      console.error('Failed to save candidate:', error);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    try {
      await deleteCandidate(deleteTarget.id);
      await loadData();
    } catch (error) {
      console.error('Failed to delete candidate:', error);
    } finally {
      setDeleteTarget(null);
    }
  }

  function handleCardClick(candidateId: string) {
    router.push(`/${locale}/admin/candidates/${candidateId}`);
  }

  function getJobProfileName(id: string): string {
    const profile = jobProfiles.find((p) => p.id === id);
    return profile ? profile.title[locale] : id;
  }

  // Select options
  const statusOptions = [
    { value: '', label: t('allStatuses') },
    ...PROCESS_STATUSES.map((s) => ({ value: s, label: t(`status.${s}`) })),
  ];

  const outcomeOptions = [
    { value: '', label: t('allOutcomes') },
    ...OUTCOMES.map((o) => ({ value: o, label: t(`outcome.${o}`) })),
  ];

  const jobProfileOptions = [
    { value: '', label: t('allPositions') },
    ...jobProfiles.map((p) => ({ value: p.id, label: p.title[locale] })),
  ];

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />

        <main className="flex-1 py-8">
          <div className="max-w-6xl mx-auto px-4">
            {/* Back Link */}
            <Link
              href={`/${locale}/admin`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {tc('back')}
            </Link>

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <UserSearch className="w-7 h-7" />
                  {t('title')}
                </h1>
                <p className="text-sm text-gray-500 mt-1">{t('subtitle')}</p>
              </div>
              {!showForm && (
                <div className="flex items-center gap-3">
                  <Link href={`/${locale}/admin/candidates/invite`}>
                    <Button variant="outline">
                      <Send className="w-4 h-4 mr-2" />
                      {t('sendInvitation')}
                    </Button>
                  </Link>
                  <Button variant="primary" onClick={handleCreate}>
                    <Plus className="w-4 h-4 mr-2" />
                    {t('addCandidate')}
                  </Button>
                </div>
              )}
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
                <span className="ml-3 text-gray-600">{tc('loading')}</span>
              </div>
            ) : showForm ? (
              /* ===== Create / Edit Form ===== */
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>
                    {editingId ? t('editCandidate') : t('addCandidate')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Row: Name, Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t('form.name')}
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      required
                    />
                    <Input
                      label={t('form.email')}
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      required
                    />
                  </div>

                  {/* Row: Phone, Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t('form.phone')}
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                    />
                    <Input
                      label={t('form.location')}
                      value={form.location}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, location: e.target.value }))
                      }
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-3 pt-4 border-t">
                    <Button variant="outline" onClick={handleCancel}>
                      <X className="w-4 h-4 mr-2" />
                      {tc('cancel')}
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleSave}
                      isLoading={isSaving}
                      disabled={!form.name || !form.email}
                    >
                      {t('form.save')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* ===== Search & Filters ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t('search')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                  <Select
                    options={statusOptions}
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    label={t('filterByStatus')}
                  />
                  <Select
                    options={outcomeOptions}
                    value={filterOutcome}
                    onChange={(e) => setFilterOutcome(e.target.value)}
                    label={t('filterByOutcome')}
                  />
                  <Select
                    options={jobProfileOptions}
                    value={filterJobProfile}
                    onChange={(e) => setFilterJobProfile(e.target.value)}
                    label={t('filterByPosition')}
                  />
                </div>

                {/* ===== Candidate List ===== */}
                {filteredCandidates.length === 0 ? (
                  <Card variant="bordered">
                    <CardContent className="py-16 text-center">
                      <UserSearch className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-500">{t('noCandidates')}</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredCandidates.map((candidate) => (
                      <Card
                        key={candidate.id}
                        variant="bordered"
                        className="hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <CardContent className="p-5">
                          {/* Header row: name + badges */}
                          <div
                            className="flex items-start justify-between mb-3"
                            onClick={() => handleCardClick(candidate.id)}
                          >
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-gray-900 truncate">
                                {candidate.name}
                              </h3>
                              <p className="text-sm text-gray-500 truncate">
                                {candidate.email}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                              <Badge variant={getStatusBadgeVariant(candidate.processStatus)}>
                                {t(`status.${candidate.processStatus}`)}
                              </Badge>
                              <Badge
                                variant={getOutcomeBadgeVariant(candidate.outcome)}
                                className={
                                  candidate.outcome === 'discarded'
                                    ? 'bg-red-100 text-red-800 border-red-200'
                                    : undefined
                                }
                              >
                                {t(`outcome.${candidate.outcome}`)}
                              </Badge>
                            </div>
                          </div>

                          {/* Details */}
                          <div
                            className="space-y-1 text-sm text-gray-600 mb-4"
                            onClick={() => handleCardClick(candidate.id)}
                          >
                            {candidate.phone && (
                              <p className="flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5 text-gray-400" />
                                {candidate.phone}
                              </p>
                            )}
                            {candidate.location && (
                              <p className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                {candidate.location}
                              </p>
                            )}
                            {candidate.jobProfileIds.length > 0 && (
                              <p className="flex items-center gap-1.5">
                                <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                                {candidate.jobProfileIds.length === 1
                                  ? getJobProfileName(candidate.jobProfileIds[0])
                                  : `${candidate.jobProfileIds.length} ${t('positions')}`}
                              </p>
                            )}
                            {typeof candidate.managerScore === 'number' && (
                              <p>
                                <span className="font-medium">{t('score')}:</span>{' '}
                                {candidate.managerScore}/10
                              </p>
                            )}
                          </div>

                          {/* Action buttons */}
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(candidate);
                              }}
                            >
                              <Pencil className="w-3.5 h-3.5 mr-1" />
                              {tc('edit')}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setDeleteTarget(candidate);
                              }}
                              className="text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-3.5 h-3.5 mr-1" />
                              {tc('delete')}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </main>

        <Footer />

        {/* Delete Confirmation Modal */}
        <ConfirmModal
          isOpen={!!deleteTarget}
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleDelete}
          title={t('deleteConfirm')}
          message={t('deleteConfirmMessage', { name: deleteTarget?.name || '' })}
          confirmLabel={tc('delete')}
          variant="danger"
        />
      </div>
    </AuthGuard>
  );
}
