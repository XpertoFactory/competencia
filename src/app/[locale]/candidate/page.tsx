'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Badge } from '@/components/ui';
import { getCandidatesByUser, getOrganization } from '@/lib/firebase/firestore';
import { firebaseAuth } from '@/lib/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import type { Candidate, Organization } from '@/types';
import {
  Loader2,
  Briefcase,
  ArrowRight,
  UserCircle,
  LogIn,
} from 'lucide-react';

interface CandidateWithOrg extends Candidate {
  orgName: string;
}

export default function CandidatePortalPage() {
  const t = useTranslations('candidates');
  const locale = useLocale();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [candidates, setCandidates] = useState<CandidateWithOrg[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }
      setAuthenticated(true);
      try {
        const candidateRecords = await getCandidatesByUser(user.uid);
        const withOrgs = await Promise.all(
          candidateRecords.map(async (c) => {
            let orgName = c.orgId;
            try {
              const org = await getOrganization(c.orgId);
              if (org) orgName = org.name || c.orgId;
            } catch { /* keep orgId as name */ }
            return { ...c, orgName } as CandidateWithOrg;
          })
        );
        setCandidates(withOrgs);
      } catch (error) {
        console.error('Error loading candidates:', error);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  function getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      'interest-received': 'bg-gray-100 text-gray-700',
      'contacted': 'bg-blue-100 text-blue-700',
      'interviewed': 'bg-amber-100 text-amber-700',
      'evaluated': 'bg-green-100 text-green-700',
      'reference-check': 'bg-purple-100 text-purple-700',
      'final-review': 'bg-indigo-100 text-indigo-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <UserCircle className="w-8 h-8 text-primary-600" />
          <h1 className="text-2xl font-bold text-gray-900">{t('portal.title')}</h1>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
          </div>
        ) : !authenticated ? (
          <Card variant="bordered">
            <CardContent className="text-center py-12">
              <LogIn className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">{t('portal.noApplications')}</p>
              <Link href={`/${locale}/auth/login?returnUrl=/${locale}/candidate`}>
                <Button variant="primary">
                  <LogIn className="w-4 h-4 mr-2" />
                  {locale === 'es' ? 'Iniciar Sesión' : 'Sign In'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : candidates.length === 0 ? (
          <Card variant="bordered">
            <CardContent className="text-center py-12">
              <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">{t('portal.noApplications')}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {candidates.map(c => (
              <Card key={c.id} variant="bordered" className="hover:shadow-md transition-shadow">
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{c.orgName}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(c.processStatus)}`}>
                          {t(`status.${c.processStatus}`)}
                        </span>
                        {c.jobProfileIds.length > 0 && (
                          <span className="text-xs text-gray-500">
                            {c.jobProfileIds.length} {t('tabs.positions').toLowerCase()}
                          </span>
                        )}
                      </div>
                    </div>
                    <Link href={`/${locale}/candidate/${c.orgId}`}>
                      <Button variant="outline" size="sm">
                        {t('portal.editProfile')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
