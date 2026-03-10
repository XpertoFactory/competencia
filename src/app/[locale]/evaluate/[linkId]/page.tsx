'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Header, Footer } from '@/components/layout';
import { Card, CardContent } from '@/components/ui';
import { Loader2, AlertCircle, LinkIcon } from 'lucide-react';
import { getEvaluationLink, incrementLinkUsage } from '@/lib/firebase/firestore';
import type { EvaluationLink } from '@/types';

type LinkState = 'loading' | 'valid' | 'expired' | 'maxUsesReached' | 'inactive' | 'notFound';

export default function EvaluateLinkPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const linkId = params.linkId as string;

  const [linkState, setLinkState] = useState<LinkState>('loading');

  useEffect(() => {
    async function validateLink() {
      try {
        const link = await getEvaluationLink(linkId);

        if (!link) {
          setLinkState('notFound');
          return;
        }

        if (!link.isActive) {
          setLinkState('inactive');
          return;
        }

        // Check expiration
        if (link.expiresAt) {
          const expiresDate = link.expiresAt.toDate
            ? link.expiresAt.toDate()
            : new Date(link.expiresAt as unknown as string);
          if (expiresDate < new Date()) {
            setLinkState('expired');
            return;
          }
        }

        // Check max uses
        if (link.maxUses > 0 && link.usesCount >= link.maxUses) {
          setLinkState('maxUsesReached');
          return;
        }

        // Link is valid - increment usage and redirect
        setLinkState('valid');
        await incrementLinkUsage(linkId);
        router.replace(`/${locale}/evaluation/${link.profileId}`);
      } catch (error) {
        console.error('Error validating evaluation link:', error);
        setLinkState('notFound');
      }
    }

    validateLink();
  }, [linkId, locale, router]);

  function getErrorMessage(): { title: string; description: string } {
    switch (linkState) {
      case 'expired':
        return {
          title: t('evaluationLink.expired'),
          description: t('evaluationLink.expiredDescription'),
        };
      case 'maxUsesReached':
        return {
          title: t('evaluationLink.maxUsesReached'),
          description: t('evaluationLink.maxUsesReachedDescription'),
        };
      case 'inactive':
        return {
          title: t('evaluationLink.inactive'),
          description: t('evaluationLink.inactiveDescription'),
        };
      case 'notFound':
      default:
        return {
          title: t('evaluationLink.notFound'),
          description: t('evaluationLink.notFoundDescription'),
        };
    }
  }

  if (linkState === 'loading' || linkState === 'valid') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-10 h-10 text-primary-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">{t('evaluationLink.validating')}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const errorInfo = getErrorMessage();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <Card variant="bordered" className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {errorInfo.title}
            </h2>
            <p className="text-gray-600">
              {errorInfo.description}
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
