'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Input } from '@/components/ui';
import { xaidResetPassword } from '@/lib/firebase/auth';
import { KeyRound, AlertCircle, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const t = useTranslations();
  const locale = useLocale();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const result = await xaidResetPassword(email);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(t('errors.generic'));
      }
    } catch {
      setError(t('errors.generic'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Card variant="bordered" className="w-full max-w-md">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-full bg-primary-100 mb-4">
                <KeyRound className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                {t('auth.forgotPasswordTitle')}
              </h1>
              <p className="text-gray-600 mt-1">
                {t('auth.forgotPasswordSubtitle')}
              </p>
            </div>

            {error && (
              <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {success ? (
              <div className="text-center space-y-4">
                <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <p className="text-sm text-green-700">{t('auth.resetPasswordSent')}</p>
                </div>
                <Link
                  href={`/${locale}/auth/login`}
                  className="inline-block text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  {t('auth.backToLogin')}
                </Link>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label={t('auth.email')}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    isLoading={loading}
                    disabled={!email}
                  >
                    {t('auth.resetPassword')}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    href={`/${locale}/auth/login`}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {t('auth.backToLogin')}
                  </Link>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
