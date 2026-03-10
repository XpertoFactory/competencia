'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Card, CardContent } from '@/components/ui';
import {
  UserCog,
  UserCheck,
  Briefcase,
  Users,
  TrendingUp,
  Brain,
  Fingerprint,
  Layers,
  Calculator,
  BookOpen,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

const evalItemIcons: Record<string, React.ElementType> = {
  professional: Briefcase,
  softSkills: Users,
  readiness: TrendingUp,
  cognitive: Brain,
  personality: Fingerprint,
  disc: Layers,
  aptitude: Calculator,
  technical: BookOpen,
};

const evalItemColors: Record<string, string> = {
  professional: 'bg-blue-100 text-blue-600',
  softSkills: 'bg-green-100 text-green-600',
  readiness: 'bg-amber-100 text-amber-600',
  cognitive: 'bg-purple-100 text-purple-600',
  personality: 'bg-pink-100 text-pink-600',
  disc: 'bg-indigo-100 text-indigo-600',
  aptitude: 'bg-cyan-100 text-cyan-600',
  technical: 'bg-orange-100 text-orange-600',
};

const EVAL_ITEMS = ['professional', 'softSkills', 'readiness', 'cognitive', 'personality', 'disc', 'aptitude', 'technical'];
const STEPS = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7'];
const TIPS = ['tip1', 'tip2', 'tip3'];

export default function InstructionsPage() {
  const t = useTranslations('instructions');
  const tl = useTranslations('landing');
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </section>

        {/* What Is Evaluated */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              {t('whatIsEvaluated')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {EVAL_ITEMS.map((key) => {
                const Icon = evalItemIcons[key];
                const text = t(`whatIsEvaluatedItems.${key}`);
                const [title, ...descParts] = text.split(' — ');
                const desc = descParts.join(' — ');
                return (
                  <div key={key} className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className={`p-2 rounded-lg ${evalItemColors[key]} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                      {desc && <p className="text-gray-600 text-sm mt-0.5">{desc}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Two-column: Evaluator & Candidate */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Evaluator */}
              <Card variant="bordered" className="overflow-hidden">
                <div className="bg-primary-600 text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <UserCog className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">{t('evaluatorTitle')}</h2>
                      <p className="text-primary-200 text-sm">{t('evaluatorSubtitle')}</p>
                    </div>
                  </div>
                  <p className="text-primary-100 text-sm mt-2">{t('evaluatorDescription')}</p>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary-600" />
                    {t('evaluatorSteps.title')}
                  </h3>
                  <ol className="space-y-3">
                    {STEPS.map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        <p className="text-gray-700 text-sm pt-1">{t(`evaluatorSteps.${step}`)}</p>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-semibold text-amber-800 text-sm flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4" />
                      {t('tips')}
                    </h4>
                    <ul className="space-y-1.5">
                      {TIPS.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-amber-900">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                          <span>{t(`evaluatorTips.${tip}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Candidate */}
              <Card variant="bordered" className="overflow-hidden">
                <div className="bg-green-600 text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <UserCheck className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">{t('evaluatedTitle')}</h2>
                      <p className="text-green-200 text-sm">{t('evaluatedSubtitle')}</p>
                    </div>
                  </div>
                  <p className="text-green-100 text-sm mt-2">{t('evaluatedDescription')}</p>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                    {t('evaluatedSteps.title')}
                  </h3>
                  <ol className="space-y-3">
                    {STEPS.map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        <p className="text-gray-700 text-sm pt-1">{t(`evaluatedSteps.${step}`)}</p>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-semibold text-amber-800 text-sm flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4" />
                      {t('tips')}
                    </h4>
                    <ul className="space-y-1.5">
                      {TIPS.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-amber-900">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                          <span>{t(`evaluatedTips.${tip}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {tl('startEvaluation')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
