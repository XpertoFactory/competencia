'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import {
  getCandidateInvite,
  updateCandidateInvite,
  updateCandidate,
  getJobProfiles,
} from '@/lib/firebase/firestore';
import { firebaseAuth } from '@/lib/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import type { CandidateInvite, JobProfile } from '@/types';
import { Timestamp } from 'firebase/firestore';
import {
  Loader2,
  Check,
  XCircle,
  Briefcase,
  Building2,
  LogIn,
} from 'lucide-react';

export default function AcceptInvitePage() {
  const t = useTranslations('candidates');
  const locale = useLocale();
  const router = useRouter();
  const params = useParams();
  const inviteId = params.inviteId as string;

  const [loading, setLoading] = useState(true);
  const [accepting, setAccepting] = useState(false);
  const [invite, setInvite] = useState<CandidateInvite | null>(null);
  const [jobProfiles, setJobProfiles] = useState<JobProfile[]>([]);
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [inv, jp] = await Promise.all([
          getCandidateInvite(inviteId),
          getJobProfiles(false),
        ]);
        setInvite(inv);
        setJobProfiles(jp);

        if (!inv) {
          setError('Invitation not found');
        } else if (inv.status === 'accepted') {
          setAccepted(true);
        } else if (inv.status === 'cancelled' || inv.status === 'expired') {
          setError('This invitation is no longer valid');
        } else if (inv.expiresAt?.toDate && inv.expiresAt.toDate() < new Date()) {
          setError('This invitation has expired');
        }
      } catch (err) {
        console.error('Error loading invite:', err);
        setError('Error loading invitation');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [inviteId]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUserId(user?.uid || null);
    });
    return () => unsubscribe();
  }, []);

  async function handleAccept() {
    if (!invite || !userId) return;
    setAccepting(true);
    try {
      // Link user to candidate record
      await updateCandidate(invite.candidateId, { userId });
      // Mark invite as accepted
      await updateCandidateInvite(invite.id, {
        status: 'accepted',
        acceptedAt: Timestamp.now(),
      });
      setAccepted(true);
      // Redirect to candidate portal after a moment
      setTimeout(() => {
        router.push(`/${locale}/candidate/${invite.orgId}`);
      }, 2000);
    } catch (err) {
      console.error('Error accepting invite:', err);
      setError('Error accepting invitation');
    } finally {
      setAccepting(false);
    }
  }

  function getJobProfileName(jpId: string): string {
    const jp = jobProfiles.find(j => j.id === jpId);
    return jp ? (jp.title[locale as 'es' | 'en'] || jp.title.es) : jpId;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Card variant="bordered" className="max-w-md w-full">
          <CardContent className="py-8 px-6 text-center">
            {error ? (
              <>
                <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {locale === 'es' ? 'Invitación no válida' : 'Invalid Invitation'}
                </h2>
                <p className="text-gray-500 mb-6">{error}</p>
                <Link href={`/${locale}`}>
                  <Button variant="outline">
                    {locale === 'es' ? 'Ir al Inicio' : 'Go Home'}
                  </Button>
                </Link>
              </>
            ) : accepted ? (
              <>
                <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {locale === 'es' ? '¡Invitación Aceptada!' : 'Invitation Accepted!'}
                </h2>
                <p className="text-gray-500 mb-4">
                  {locale === 'es' ? 'Redirigiendo a tu portal...' : 'Redirecting to your portal...'}
                </p>
                <Loader2 className="w-6 h-6 text-primary-600 animate-spin mx-auto" />
              </>
            ) : (
              <>
                <Building2 className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {t('portal.inviteFrom')}
                </h2>
                <p className="text-2xl font-bold text-primary-600 mb-4">
                  {invite?.orgName}
                </p>

                {invite && invite.jobProfileIds.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">{t('portal.forPosition')}</p>
                    <div className="space-y-1">
                      {invite.jobProfileIds.map(jpId => (
                        <div key={jpId} className="flex items-center justify-center gap-2">
                          <Briefcase className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-700">
                            {getJobProfileName(jpId)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {invite?.message && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                    <p className="text-sm text-gray-700 italic">&ldquo;{invite.message}&rdquo;</p>
                    <p className="text-xs text-gray-400 mt-1">— {invite.invitedByName}</p>
                  </div>
                )}

                {!userId ? (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-500">
                      {locale === 'es'
                        ? 'Inicia sesión o regístrate para aceptar esta invitación'
                        : 'Sign in or register to accept this invitation'}
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Link href={`/${locale}/auth/login?returnUrl=/${locale}/candidate/invite/${inviteId}`}>
                        <Button variant="primary">
                          <LogIn className="w-4 h-4 mr-2" />
                          {locale === 'es' ? 'Iniciar Sesión' : 'Sign In'}
                        </Button>
                      </Link>
                      <Link href={`/${locale}/auth/register?returnUrl=/${locale}/candidate/invite/${inviteId}`}>
                        <Button variant="outline">
                          {locale === 'es' ? 'Registrarse' : 'Register'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Button onClick={handleAccept} isLoading={accepting} className="w-full">
                    <Check className="w-4 h-4 mr-2" />
                    {t('portal.acceptInvite')}
                  </Button>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
