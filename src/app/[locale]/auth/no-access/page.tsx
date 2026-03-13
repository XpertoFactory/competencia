'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import { signOut } from '@/lib/firebase/auth';
import { ShieldX } from 'lucide-react';

export default function NoAccessPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push(`/${locale}/auth/login`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Card variant="bordered" className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="inline-flex p-3 rounded-full bg-red-100 mb-4">
              <ShieldX className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {t('auth.noAccess')}
            </h1>
            <p className="text-gray-600 mb-6">
              {t('auth.noAccessMessage')}
            </p>
            <Button
              variant="primary"
              className="w-full"
              onClick={handleLogout}
            >
              {t('auth.backToLogin')}
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
