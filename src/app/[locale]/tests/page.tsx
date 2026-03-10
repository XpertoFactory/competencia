'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Card, CardContent } from '@/components/ui';
import { Brain, Users, Target, Compass, ArrowRight } from 'lucide-react';

const testTypes = [
  {
    id: 'cognitive',
    icon: Brain,
    color: 'bg-blue-100 text-blue-600',
    cardBorder: 'border-blue-200 hover:border-blue-400',
  },
  {
    id: 'personality',
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
    cardBorder: 'border-purple-200 hover:border-purple-400',
  },
  {
    id: 'aptitude',
    icon: Target,
    color: 'bg-green-100 text-green-600',
    cardBorder: 'border-green-200 hover:border-green-400',
  },
  {
    id: 'disc',
    icon: Compass,
    color: 'bg-orange-100 text-orange-600',
    cardBorder: 'border-orange-200 hover:border-orange-400',
  },
] as const;

export default function TestsPage() {
  const t = useTranslations('tests');
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">{t('title')}</h1>
            <p className="text-gray-600 mt-2">{t('subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testTypes.map((test) => {
              const Icon = test.icon;
              return (
                <Link key={test.id} href={`/${locale}/tests/${test.id}`}>
                  <Card
                    variant="bordered"
                    className={`h-full transition-all duration-200 cursor-pointer ${test.cardBorder}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${test.color}`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-lg font-semibold text-gray-900 mb-1">
                            {t(`${test.id}.title`)}
                          </h2>
                          <p className="text-sm text-gray-600 mb-4">
                            {t(`${test.id}.description`)}
                          </p>
                          <div className="flex items-center text-sm font-medium text-primary-600">
                            {t('startTest')}
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
