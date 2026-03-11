'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, TextArea } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import { useOrg } from '@/components/org';
import {
  getJobProfiles,
  generateId,
  saveCandidate,
  createCandidateInvite,
  getCandidateInvitesByOrg,
  updateCandidateInvite,
} from '@/lib/firebase/firestore';
import { firebaseAuth } from '@/lib/firebase/config';
import type { Candidate, CandidateInvite, JobProfile } from '@/types';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  Loader2,
  Send,
  Copy,
  Check,
  X,
  Mail,
  Briefcase,
} from 'lucide-react';

export default function CandidateInvitePage() {
  const t = useTranslations('candidates');
  const tc = useTranslations('common');
  const locale = useLocale();
  const { currentOrg } = useOrg();

  const [jobProfiles, setJobProfiles] = useState<JobProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inviteLink, setInviteLink] = useState('');
  const [copied, setCopied] = useState(false);

  // Form
  const [email, setEmail] = useState('');
  const [selectedJobProfileIds, setSelectedJobProfileIds] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  // Pending invites
  const [pendingInvites, setPendingInvites] = useState<CandidateInvite[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const jp = await getJobProfiles(false);
        setJobProfiles(jp.filter(j => j.isActive));
        if (currentOrg) {
          const invites = await getCandidateInvitesByOrg(currentOrg.id);
          setPendingInvites(invites.filter(i => i.status === 'pending'));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [currentOrg]);

  function toggleJobProfile(jpId: string) {
    setSelectedJobProfileIds(prev =>
      prev.includes(jpId) ? prev.filter(id => id !== jpId) : [...prev, jpId]
    );
  }

  async function handleSend() {
    if (!email.trim() || !currentOrg) return;
    setSending(true);
    try {
      const user = firebaseAuth.currentUser;
      const candidateId = generateId();
      const inviteId = generateId();

      // Create candidate record
      const candidate: Candidate = {
        id: candidateId,
        orgId: currentOrg.id,
        name: email.split('@')[0],
        email: email.trim(),
        processStatus: 'interest-received',
        outcome: 'pending',
        recommendation: 'no-recommendation',
        comments: [],
        checklist: [],
        files: [],
        positionIds: [],
        jobProfileIds: selectedJobProfileIds,
        evaluationIds: [],
        testSessionIds: [],
        source: 'invitation',
        createdBy: user?.uid || '',
        createdAt: Timestamp.now(),
      };
      await saveCandidate(candidate);

      // Create invite
      const invite: CandidateInvite = {
        id: inviteId,
        orgId: currentOrg.id,
        orgName: currentOrg.name || '',
        candidateId,
        positionIds: [],
        jobProfileIds: selectedJobProfileIds,
        email: email.trim(),
        invitedBy: user?.uid || '',
        invitedByName: user?.displayName || user?.email || '',
        status: 'pending',
        message: message.trim() || undefined,
        expiresAt: Timestamp.fromDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)),
        createdAt: Timestamp.now(),
      };
      await createCandidateInvite(invite);

      // Generate link
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      setInviteLink(`${baseUrl}/${locale}/candidate/invite/${inviteId}`);
      setSuccess(true);
      setPendingInvites(prev => [invite, ...prev]);

      // Reset form
      setEmail('');
      setSelectedJobProfileIds([]);
      setMessage('');
    } catch (error) {
      console.error('Error sending invitation:', error);
    } finally {
      setSending(false);
    }
  }

  async function handleCancelInvite(inviteId: string) {
    try {
      await updateCandidateInvite(inviteId, { status: 'cancelled' });
      setPendingInvites(prev => prev.filter(i => i.id !== inviteId));
    } catch (error) {
      console.error('Error cancelling invite:', error);
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function getJobProfileName(jpId: string): string {
    const jp = jobProfiles.find(j => j.id === jpId);
    return jp ? (jp.title[locale as 'es' | 'en'] || jp.title.es) : jpId;
  }

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

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
          <div className="mb-6">
            <Link
              href={`/${locale}/admin/candidates`}
              className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              {tc('back')}
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-primary-600" />
            {t('invite.title')}
          </h1>

          {/* Success message with link */}
          {success && inviteLink && (
            <Card variant="bordered" className="mb-6 border-green-200 bg-green-50">
              <CardContent className="py-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-green-800 font-medium mb-2">{t('invite.success')}</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={inviteLink}
                        readOnly
                        className="flex-1 text-sm bg-white border border-green-200 rounded px-3 py-1.5"
                      />
                      <Button variant="outline" size="sm" onClick={copyLink}>
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  <button onClick={() => setSuccess(false)} className="text-green-600 hover:text-green-800">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Invitation Form */}
          <Card variant="bordered" className="mb-8">
            <CardHeader>
              <CardTitle>{t('invite.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <Input
                label={t('invite.email')}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

              {/* Job Profile Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('invite.selectPositions')}
                </label>
                {jobProfiles.length === 0 ? (
                  <p className="text-sm text-gray-500">No active job profiles</p>
                ) : (
                  <div className="border border-gray-300 rounded-lg max-h-48 overflow-y-auto">
                    {jobProfiles.map(jp => (
                      <label
                        key={jp.id}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <input
                          type="checkbox"
                          checked={selectedJobProfileIds.includes(jp.id)}
                          onChange={() => toggleJobProfile(jp.id)}
                          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-900">
                            {jp.title[locale as 'es' | 'en'] || jp.title.es}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <TextArea
                label={t('invite.message')}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={t('invite.message')}
              />

              <p className="text-xs text-gray-400">{t('invite.expires')}</p>

              <Button onClick={handleSend} isLoading={sending} disabled={!email.trim()}>
                <Send className="w-4 h-4 mr-2" />
                {t('invite.send')}
              </Button>
            </CardContent>
          </Card>

          {/* Pending Invitations */}
          {pendingInvites.length > 0 && (
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t('invite.pendingInvites')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="divide-y">
                  {pendingInvites.map(invite => (
                    <div key={invite.id} className="flex items-center justify-between py-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{invite.email}</p>
                        <p className="text-xs text-gray-500">
                          {t('invite.inviteSent')} {invite.createdAt?.toDate?.() ? invite.createdAt.toDate().toLocaleDateString() : ''}
                          {invite.jobProfileIds.length > 0 && (
                            <> &middot; {invite.jobProfileIds.map(id => getJobProfileName(id)).join(', ')}</>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
                            navigator.clipboard.writeText(`${baseUrl}/${locale}/candidate/invite/${invite.id}`);
                          }}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCancelInvite(invite.id)}
                        >
                          <X className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </main>
        <Footer />
      </div>
    </AuthGuard>
  );
}
