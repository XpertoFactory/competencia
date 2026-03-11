'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import {
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Building2,
  Briefcase,
  Target,
  BarChart3,
  ThermometerSun,
  Star,
  UserCheck,
  Megaphone,
  ArrowRight,
  CheckCircle,
  Zap,
  Layers,
  Palette,
  Globe,
  FileText,
  Rocket,
  GraduationCap,
  Compass,
  BadgeDollarSign,
  ChevronRight,
  Bot,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Audience = 'businesses' | 'individuals' | 'hrCompanies';

function StatHighlight({
  stat,
  label,
  color,
}: {
  stat: string;
  label: string;
  color: 'green' | 'blue' | 'purple' | 'amber' | 'rose' | 'emerald' | 'indigo' | 'teal';
}) {
  const colorMap = {
    green: 'from-green-500 to-emerald-600 shadow-green-200',
    blue: 'from-blue-500 to-blue-700 shadow-blue-200',
    purple: 'from-purple-500 to-purple-700 shadow-purple-200',
    amber: 'from-amber-500 to-orange-600 shadow-amber-200',
    rose: 'from-rose-500 to-red-600 shadow-rose-200',
    emerald: 'from-emerald-500 to-teal-600 shadow-emerald-200',
    indigo: 'from-indigo-500 to-indigo-700 shadow-indigo-200',
    teal: 'from-teal-500 to-teal-700 shadow-teal-200',
  };

  return (
    <div className="flex flex-col items-center text-center">
      <span
        className={cn(
          'text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r',
          colorMap[color]
        )}
      >
        {stat}
      </span>
      <span className="text-xs sm:text-sm text-gray-500 mt-1 max-w-[140px]">{label}</span>
    </div>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  description,
  stat,
  statLabel,
  statColor,
  accent,
}: {
  icon: any;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  statColor: 'green' | 'blue' | 'purple' | 'amber' | 'rose' | 'emerald' | 'indigo' | 'teal';
  accent: string;
}) {
  return (
    <Card variant="bordered" className="hover:shadow-lg transition-all hover:border-gray-300 bg-white">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={cn('p-3 rounded-xl shrink-0', accent)}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <StatHighlight stat={stat} label={statLabel} color={statColor} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function WhitelabelFeature({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 p-4">
      <div className="p-2.5 rounded-xl bg-violet-100 text-violet-600 h-fit shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function BenefitsPage() {
  const t = useTranslations('benefits');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<Audience>('businesses');

  const tabs: { id: Audience; label: string; icon: any }[] = [
    { id: 'businesses', label: t('forBusinesses'), icon: Building2 },
    { id: 'individuals', label: t('forIndividuals'), icon: Users },
    { id: 'hrCompanies', label: t('forHRCompanies'), icon: Briefcase },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">ROI &amp; Value Proposition</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                {t('title')}
              </h1>
              <p className="text-lg sm:text-xl text-primary-100 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            {/* Key Stats Bar */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { stat: t('bizMoneyStat'), label: t('bizMoneyStatLabel'), icon: DollarSign },
                { stat: t('bizTimeStat'), label: t('bizTimeStatLabel'), icon: Clock },
                { stat: t('prodMatchStat'), label: t('prodMatchStatLabel'), icon: UserCheck },
                { stat: t('hrRecruitmentStat'), label: t('hrRecruitmentStatLabel'), icon: Rocket },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                >
                  <item.icon className="w-5 h-5 mx-auto mb-2 text-primary-200" />
                  <p className="text-2xl sm:text-3xl font-extrabold">{item.stat}</p>
                  <p className="text-xs text-primary-200 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience Tabs */}
        <section className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-1 py-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-all',
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* BUSINESSES TAB */}
        {activeTab === 'businesses' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            {/* General Savings */}
            <section>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-green-100">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{t('generalSavings')}</h2>
              </div>
              <p className="text-gray-500 text-sm mb-8 ml-[52px]">
                {t('saveMoney')} &bull; {t('saveTime')}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <BenefitCard
                  icon={DollarSign}
                  title={t('bizMoneyTitle')}
                  description={t('bizMoneyDesc')}
                  stat={t('bizMoneyStat')}
                  statLabel={t('bizMoneyStatLabel')}
                  statColor="green"
                  accent="bg-green-100 text-green-600"
                />
                <BenefitCard
                  icon={Clock}
                  title={t('bizTimeTitle')}
                  description={t('bizTimeDesc')}
                  stat={t('bizTimeStat')}
                  statLabel={t('bizTimeStatLabel')}
                  statColor="blue"
                  accent="bg-blue-100 text-blue-600"
                />
              </div>
            </section>

            {/* HR Tasks */}
            <section>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-100">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{t('hrTasks')}</h2>
              </div>
              <p className="text-gray-500 text-sm mb-8 ml-[52px]">{t('hrEfficiencyDesc')}</p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <BenefitCard
                  icon={ThermometerSun}
                  title={t('hrClimateTitle')}
                  description={t('hrClimateDesc')}
                  stat={t('hrClimateStat')}
                  statLabel={t('hrClimateStatLabel')}
                  statColor="amber"
                  accent="bg-amber-100 text-amber-600"
                />
                <BenefitCard
                  icon={Star}
                  title={t('hrReviewsTitle')}
                  description={t('hrReviewsDesc')}
                  stat={t('hrReviewsStat')}
                  statLabel={t('hrReviewsStatLabel')}
                  statColor="purple"
                  accent="bg-purple-100 text-purple-600"
                />
                <BenefitCard
                  icon={Megaphone}
                  title={t('hrRecruitmentTitle')}
                  description={t('hrRecruitmentDesc')}
                  stat={t('hrRecruitmentStat')}
                  statLabel={t('hrRecruitmentStatLabel')}
                  statColor="rose"
                  accent="bg-rose-100 text-rose-600"
                />
              </div>
            </section>

            {/* Staff Productivity */}
            <section>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{t('staffProductivity')}</h2>
              </div>
              <p className="text-gray-500 text-sm mb-8 ml-[52px]">{t('gainProductivity')}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <BenefitCard
                  icon={Target}
                  title={t('prodMatchTitle')}
                  description={t('prodMatchDesc')}
                  stat={t('prodMatchStat')}
                  statLabel={t('prodMatchStatLabel')}
                  statColor="emerald"
                  accent="bg-emerald-100 text-emerald-600"
                />
                <BenefitCard
                  icon={BarChart3}
                  title={t('prodInsightsTitle')}
                  description={t('prodInsightsDesc')}
                  stat={t('prodInsightsStat')}
                  statLabel={t('prodInsightsStatLabel')}
                  statColor="teal"
                  accent="bg-teal-100 text-teal-600"
                />
              </div>
            </section>
          </div>
        )}

        {/* INDIVIDUALS TAB */}
        {activeTab === 'individuals' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Hero for Individuals */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('forIndividuals')}</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  {t('saveMoney')} &bull; {t('earnMore')} &bull; {t('gainProductivity')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Career Path Card */}
                <Card variant="bordered" className="bg-white hover:shadow-lg transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Compass className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{t('indCareerTitle')}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{t('indCareerDesc')}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                        {t('indCareerStat')}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{t('indCareerStatLabel')}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Earn More Card */}
                <Card variant="bordered" className="bg-white hover:shadow-lg transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500" />
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <BadgeDollarSign className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{t('indMatchTitle')}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{t('indMatchDesc')}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                        {t('indMatchStat')}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{t('indMatchStatLabel')}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Growth Card */}
                <Card variant="bordered" className="bg-white hover:shadow-lg transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-violet-500" />
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-7 h-7 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{t('indGrowthTitle')}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{t('indGrowthDesc')}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-600">
                        {t('indGrowthStat')}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{t('indGrowthStatLabel')}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* HR COMPANIES TAB */}
        {activeTab === 'hrCompanies' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-5xl mx-auto">
              {/* White Label Hero */}
              <div className="relative rounded-2xl bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white p-8 sm:p-12 mb-10 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-300 rounded-full blur-3xl" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-white/20">
                      <Layers className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-violet-200 uppercase tracking-wider">White-Label Solution</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">{t('whitelabelTitle')}</h2>
                  <p className="text-lg text-violet-100 leading-relaxed max-w-3xl">{t('whitelabelDesc')}</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card variant="bordered" className="bg-white hover:shadow-md transition-all">
                  <WhitelabelFeature
                    icon={Palette}
                    title={t('whitelabelFeature1')}
                    description={t('whitelabelFeature1Desc')}
                  />
                </Card>
                <Card variant="bordered" className="bg-white hover:shadow-md transition-all">
                  <WhitelabelFeature
                    icon={Zap}
                    title={t('whitelabelFeature2')}
                    description={t('whitelabelFeature2Desc')}
                  />
                </Card>
                <Card variant="bordered" className="bg-white hover:shadow-md transition-all">
                  <WhitelabelFeature
                    icon={FileText}
                    title={t('whitelabelFeature3')}
                    description={t('whitelabelFeature3Desc')}
                  />
                </Card>
                <Card variant="bordered" className="bg-white hover:shadow-md transition-all">
                  <WhitelabelFeature
                    icon={Globe}
                    title={t('whitelabelFeature4')}
                    description={t('whitelabelFeature4Desc')}
                  />
                </Card>
              </div>

              {/* What's Included */}
              <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                  {t('whitelabelFeature2')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { icon: Users, label: '43 Evaluation Profiles' },
                    { icon: BarChart3, label: '15 Sectors, 5 Levels' },
                    { icon: ThermometerSun, label: 'Climate Surveys' },
                    { icon: Star, label: '360° & 180° Reviews' },
                    { icon: Megaphone, label: 'Recruitment Campaigns' },
                    { icon: UserCheck, label: 'Candidate Management' },
                    { icon: Target, label: 'Job Fit Analysis' },
                    { icon: Zap, label: 'AI-Powered Reports' },
                    { icon: FileText, label: 'PDF Export & Sharing' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      <item.icon className="w-4 h-4 text-gray-400 shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA for White Label */}
              <div className="mt-8 text-center">
                <Link href={`mailto:info@skaills.io?subject=White-Label Partnership`}>
                  <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                    <Briefcase className="w-5 h-5 mr-2" />
                    {t('whitelabelCta')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* AI Staff Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-10 right-[15%] w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-[15%] w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-4">
                      <Bot className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">{t('title')} &mdash; AI Staff</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">{t('aiStaffTitle')}</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">{t('aiStaffDesc')}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {['aiStaffFeature1', 'aiStaffFeature2', 'aiStaffFeature3', 'aiStaffFeature4'].map((key) => (
                        <div key={key} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-300">{t(key)}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/${locale}/ai-staff`}>
                      <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 font-bold">
                        <Sparkles className="w-5 h-5 mr-2" />
                        {t('aiStaffCta')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                      <Bot className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                      <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        {t('aiStaffStat')}
                      </p>
                      <p className="text-sm text-gray-400 mt-2 max-w-[180px]">{t('aiStaffStatLabel')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">{t('ctaTitle')}</h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">{t('ctaSubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/profiles`}>
                <Button
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-primary-50 font-bold"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  {t('ctaButton')}
                </Button>
              </Link>
              <Link href={`mailto:info@skaills.io?subject=Sales Inquiry`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 font-bold"
                >
                  {t('ctaContact')}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
