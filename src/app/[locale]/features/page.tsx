'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Card, CardContent, Button } from '@/components/ui';
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
  ClipboardList,
  Star,
  ThermometerSun,
  Building2,
  BarChart3,
  Target,
  UserSearch,
  FileText,
  Shield,
  Megaphone,
} from 'lucide-react';

type Section =
  | 'overview'
  | 'evaluations'
  | 'tests'
  | 'profiles'
  | 'recruitment'
  | 'candidates'
  | 'reviews'
  | 'climate'
  | 'employees'
  | 'jobFit'
  | 'organizations'
  | 'results';

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
const EVALUATOR_STEPS = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7'];
const EVALUATOR_TIPS = ['tip1', 'tip2', 'tip3'];
const CANDIDATE_STEPS = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7'];
const CANDIDATE_TIPS = ['tip1', 'tip2', 'tip3'];

interface SectionNavItem {
  key: Section;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const SECTION_NAV: SectionNavItem[] = [
  { key: 'overview', icon: ClipboardList, color: 'text-primary-600', bgColor: 'bg-primary-100' },
  { key: 'evaluations', icon: ClipboardList, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { key: 'tests', icon: Brain, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  { key: 'profiles', icon: Briefcase, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
  { key: 'recruitment', icon: Megaphone, color: 'text-lime-600', bgColor: 'bg-lime-100' },
  { key: 'candidates', icon: UserSearch, color: 'text-cyan-600', bgColor: 'bg-cyan-100' },
  { key: 'reviews', icon: Star, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  { key: 'climate', icon: ThermometerSun, color: 'text-rose-600', bgColor: 'bg-rose-100' },
  { key: 'employees', icon: UserCheck, color: 'text-emerald-600', bgColor: 'bg-emerald-100' },
  { key: 'jobFit', icon: Target, color: 'text-violet-600', bgColor: 'bg-violet-100' },
  { key: 'organizations', icon: Building2, color: 'text-sky-600', bgColor: 'bg-sky-100' },
  { key: 'results', icon: BarChart3, color: 'text-teal-600', bgColor: 'bg-teal-100' },
];

function FeatureList({ items, color = 'text-green-500' }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2 mt-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${color}`} />
          <span className="text-sm text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function InstructionsPage() {
  const t = useTranslations('instructions');
  const tl = useTranslations('landing');
  const locale = useLocale();
  const [activeSection, setActiveSection] = useState<Section>('overview');

  function getSectionLabel(key: Section): string {
    if (key === 'overview') return t('platformOverview');
    return t(`sections.${key}`);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{t('title')}</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">{t('newSubtitle')}</p>
          </div>
        </section>

        {/* Section Navigation Cards */}
        <section className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {SECTION_NAV.map(({ key, icon: Icon, color, bgColor }) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeSection === key
                      ? `${bgColor} ${color} shadow-sm ring-1 ring-current/20`
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {getSectionLabel(key)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ===== OVERVIEW ===== */}
            {activeSection === 'overview' && (
              <div className="space-y-10">
                {/* What Is Evaluated */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('whatIsEvaluated')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {EVAL_ITEMS.map((key) => {
                      const Icon = evalItemIcons[key];
                      const text = t(`whatIsEvaluatedItems.${key}`);
                      const [title, ...descParts] = text.split(' — ');
                      const desc = descParts.join(' — ');
                      return (
                        <div key={key} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 hover:border-gray-200 transition-colors">
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

                {/* Evaluator & Candidate Guides */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Evaluator */}
                  <Card variant="bordered" className="overflow-hidden">
                    <div className="bg-primary-600 text-white p-5">
                      <div className="flex items-center gap-3">
                        <UserCog className="w-7 h-7" />
                        <div>
                          <h3 className="text-lg font-bold">{t('evaluatorTitle')}</h3>
                          <p className="text-primary-200 text-sm">{t('evaluatorSubtitle')}</p>
                        </div>
                      </div>
                      <p className="text-primary-100 text-sm mt-2">{t('evaluatorDescription')}</p>
                    </div>
                    <CardContent className="p-5">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-primary-600" />
                        {t('evaluatorSteps.title')}
                      </h4>
                      <ol className="space-y-2">
                        {EVALUATOR_STEPS.map((step, i) => (
                          <li key={step} className="flex items-start gap-2">
                            <span className="shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-bold">
                              {i + 1}
                            </span>
                            <p className="text-gray-700 text-sm pt-0.5">{t(`evaluatorSteps.${step}`)}</p>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <h5 className="font-semibold text-amber-800 text-xs flex items-center gap-1 mb-1.5">
                          <Lightbulb className="w-3.5 h-3.5" />
                          {t('tips')}
                        </h5>
                        <ul className="space-y-1">
                          {EVALUATOR_TIPS.map((tip) => (
                            <li key={tip} className="flex items-start gap-1.5 text-xs text-amber-900">
                              <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0" />
                              <span>{t(`evaluatorTips.${tip}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Candidate */}
                  <Card variant="bordered" className="overflow-hidden">
                    <div className="bg-green-600 text-white p-5">
                      <div className="flex items-center gap-3">
                        <UserCheck className="w-7 h-7" />
                        <div>
                          <h3 className="text-lg font-bold">{t('evaluatedTitle')}</h3>
                          <p className="text-green-200 text-sm">{t('evaluatedSubtitle')}</p>
                        </div>
                      </div>
                      <p className="text-green-100 text-sm mt-2">{t('evaluatedDescription')}</p>
                    </div>
                    <CardContent className="p-5">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-green-600" />
                        {t('evaluatedSteps.title')}
                      </h4>
                      <ol className="space-y-2">
                        {CANDIDATE_STEPS.map((step, i) => (
                          <li key={step} className="flex items-start gap-2">
                            <span className="shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">
                              {i + 1}
                            </span>
                            <p className="text-gray-700 text-sm pt-0.5">{t(`evaluatedSteps.${step}`)}</p>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <h5 className="font-semibold text-amber-800 text-xs flex items-center gap-1 mb-1.5">
                          <Lightbulb className="w-3.5 h-3.5" />
                          {t('tips')}
                        </h5>
                        <ul className="space-y-1">
                          {CANDIDATE_TIPS.map((tip) => (
                            <li key={tip} className="flex items-start gap-1.5 text-xs text-amber-900">
                              <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0" />
                              <span>{t(`evaluatedTips.${tip}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Feature Grid - quick nav to all sections */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('allFeatures')}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SECTION_NAV.filter(s => s.key !== 'overview').map(({ key, icon: Icon, color, bgColor }) => (
                      <button
                        key={key}
                        onClick={() => setActiveSection(key)}
                        className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all text-left group"
                      >
                        <div className={`p-3 rounded-lg ${bgColor} ${color} shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {getSectionLabel(key)}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {t(`${key}Section.description`)}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ===== EVALUATIONS ===== */}
            {activeSection === 'evaluations' && (
              <div>
                <SectionHeader
                  icon={ClipboardList}
                  title={t('evaluationsSection.title')}
                  description={t('evaluationsSection.description')}
                  color="text-blue-600"
                  bgColor="bg-blue-100"
                />
                <FeatureList
                  items={['f1', 'f2', 'f3', 'f4', 'f5'].map(k => t(`evaluationsSection.features.${k}`))}
                  color="text-blue-500"
                />
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('whatIsEvaluated')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {EVAL_ITEMS.map((key) => {
                      const Icon = evalItemIcons[key];
                      const text = t(`whatIsEvaluatedItems.${key}`);
                      const [title, ...descParts] = text.split(' — ');
                      const desc = descParts.join(' — ');
                      return (
                        <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-100">
                          <div className={`p-2 rounded-lg ${evalItemColors[key]} shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
                            {desc && <p className="text-gray-500 text-xs mt-0.5">{desc}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <CTAButton locale={locale} href={`/${locale}/profiles`} label={tl('startEvaluation')} />
              </div>
            )}

            {/* ===== TESTS ===== */}
            {activeSection === 'tests' && (
              <div>
                <SectionHeader
                  icon={Brain}
                  title={t('testsSection.title')}
                  description={t('testsSection.description')}
                  color="text-purple-600"
                  bgColor="bg-purple-100"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {(['cognitive', 'personality', 'disc', 'aptitude', 'technical'] as const).map(test => {
                    const icons: Record<string, React.ElementType> = {
                      cognitive: Brain, personality: Fingerprint, disc: Layers, aptitude: Calculator, technical: BookOpen,
                    };
                    const colors: Record<string, string> = {
                      cognitive: 'bg-purple-100 text-purple-600',
                      personality: 'bg-pink-100 text-pink-600',
                      disc: 'bg-indigo-100 text-indigo-600',
                      aptitude: 'bg-cyan-100 text-cyan-600',
                      technical: 'bg-orange-100 text-orange-600',
                    };
                    const TestIcon = icons[test];
                    return (
                      <Card key={test} variant="bordered" className="bg-white">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3">
                            <div className={`p-2.5 rounded-lg ${colors[test]} shrink-0`}>
                              <TestIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{t(`testsSection.${test}.title`)}</h3>
                              <p className="text-sm text-gray-600 mt-1">{t(`testsSection.${test}.desc`)}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <CTAButton locale={locale} href={`/${locale}/tests`} label={t('getStarted')} />
              </div>
            )}

            {/* ===== PROFILES ===== */}
            {activeSection === 'profiles' && (
              <div>
                <SectionHeader
                  icon={Briefcase}
                  title={t('profilesSection.title')}
                  description={t('profilesSection.description')}
                  color="text-indigo-600"
                  bgColor="bg-indigo-100"
                />
                <FeatureList
                  items={[
                    t('profilesSection.sectors'),
                    t('profilesSection.levels'),
                    t('profilesSection.customizable'),
                  ]}
                  color="text-indigo-500"
                />
                <CTAButton locale={locale} href={`/${locale}/profiles`} label={t('learnMore')} />
              </div>
            )}

            {/* ===== RECRUITMENT ===== */}
            {activeSection === 'recruitment' && (
              <div>
                <SectionHeader
                  icon={Megaphone}
                  title={t('recruitmentSection.title')}
                  description={t('recruitmentSection.description')}
                  color="text-lime-600"
                  bgColor="bg-lime-100"
                />
                <Badge label={t('forManagers')} />
                <FeatureList
                  items={['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'].map(k => t(`recruitmentSection.features.${k}`))}
                  color="text-lime-500"
                />
              </div>
            )}

            {/* ===== CANDIDATES ===== */}
            {activeSection === 'candidates' && (
              <div>
                <SectionHeader
                  icon={UserSearch}
                  title={t('candidatesSection.title')}
                  description={t('candidatesSection.description')}
                  color="text-cyan-600"
                  bgColor="bg-cyan-100"
                />
                <Badge label={t('forManagers')} />
                <FeatureList
                  items={['f1', 'f2', 'f3', 'f4', 'f5', 'f6'].map(k => t(`candidatesSection.features.${k}`))}
                  color="text-cyan-500"
                />
              </div>
            )}

            {/* ===== REVIEWS ===== */}
            {activeSection === 'reviews' && (
              <div>
                <SectionHeader
                  icon={Star}
                  title={t('reviewsSection.title')}
                  description={t('reviewsSection.description')}
                  color="text-orange-600"
                  bgColor="bg-orange-100"
                />
                <Badge label={t('forManagers')} />
                <FeatureList
                  items={['f1', 'f2', 'f3', 'f4'].map(k => t(`reviewsSection.features.${k}`))}
                  color="text-orange-500"
                />
              </div>
            )}

            {/* ===== CLIMATE ===== */}
            {activeSection === 'climate' && (
              <div>
                <SectionHeader
                  icon={ThermometerSun}
                  title={t('climateSection.title')}
                  description={t('climateSection.description')}
                  color="text-rose-600"
                  bgColor="bg-rose-100"
                />
                <Badge label={t('forManagers')} />
                <FeatureList
                  items={['f1', 'f2', 'f3', 'f4'].map(k => t(`climateSection.features.${k}`))}
                  color="text-rose-500"
                />
              </div>
            )}

            {/* ===== EMPLOYEES ===== */}
            {activeSection === 'employees' && (
              <div>
                <SectionHeader
                  icon={UserCheck}
                  title={t('employeesSection.title')}
                  description={t('employeesSection.description')}
                  color="text-emerald-600"
                  bgColor="bg-emerald-100"
                />
                <Badge label={t('forManagers')} />
                <FeatureList
                  items={['f1', 'f2', 'f3'].map(k => t(`employeesSection.features.${k}`))}
                  color="text-emerald-500"
                />
              </div>
            )}

            {/* ===== JOB FIT ===== */}
            {activeSection === 'jobFit' && (
              <div>
                <SectionHeader
                  icon={Target}
                  title={t('jobFitSection.title')}
                  description={t('jobFitSection.description')}
                  color="text-violet-600"
                  bgColor="bg-violet-100"
                />
                <Badge label={t('forManagers')} />
                <FeatureList
                  items={['f1', 'f2', 'f3', 'f4'].map(k => t(`jobFitSection.features.${k}`))}
                  color="text-violet-500"
                />
              </div>
            )}

            {/* ===== ORGANIZATIONS ===== */}
            {activeSection === 'organizations' && (
              <div>
                <SectionHeader
                  icon={Building2}
                  title={t('organizationsSection.title')}
                  description={t('organizationsSection.description')}
                  color="text-sky-600"
                  bgColor="bg-sky-100"
                />
                <FeatureList
                  items={['f1', 'f2', 'f3', 'f4'].map(k => t(`organizationsSection.features.${k}`))}
                  color="text-sky-500"
                />
              </div>
            )}

            {/* ===== RESULTS ===== */}
            {activeSection === 'results' && (
              <div>
                <SectionHeader
                  icon={BarChart3}
                  title={t('resultsSection.title')}
                  description={t('resultsSection.description')}
                  color="text-teal-600"
                  bgColor="bg-teal-100"
                />
                <FeatureList
                  items={['f1', 'f2', 'f3', 'f4', 'f5', 'f6'].map(k => t(`resultsSection.features.${k}`))}
                  color="text-teal-500"
                />
              </div>
            )}

          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href={`/${locale}/profiles`}
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

// --- Helper Components ---

function SectionHeader({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-2">
      <div className={`p-3 rounded-xl ${bgColor} ${color} shrink-0`}>
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
      <Shield className="w-3.5 h-3.5" />
      {label}
    </span>
  );
}

function CTAButton({ locale, href, label }: { locale: string; href: string; label: string }) {
  return (
    <div className="mt-8">
      <Link href={href}>
        <Button variant="primary">
          {label}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
}
