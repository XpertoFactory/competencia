'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import {
  Sparkles,
  Users,
  Brain,
  Briefcase,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Bot,
  Palette,
  BookOpen,
  Layers,
  GraduationCap,
  Building2,
  UserCog,
  ClipboardList,
  ThermometerSun,
  Star,
  Megaphone,
  TrendingUp,
  Fingerprint,
  Calculator,
} from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-[10%] w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
                <Sparkles className="w-4 h-4 text-primary-200" />
                <span className="text-sm font-medium text-primary-100">{t('heroTagline')}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                {t('title')}
              </h1>
              <p className="text-xl text-primary-100 font-medium">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center">
              {t('missionTitle')}
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">{t('missionP1')}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t('missionP2')}</p>
            </div>
          </div>
        </section>

        {/* Complete Suite */}
        <section className="py-16 bg-white border-t border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                {t('suiteTitle')}
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">{t('suiteDesc')}</p>
            </div>

            {/* Evaluations */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-100">
                  <ClipboardList className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('evalTitle')}</h3>
              </div>
              <p className="text-gray-600 mb-6 ml-[52px]">{t('evalDesc')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-[52px]">
                {[
                  { key: 'evalItem1', icon: Briefcase },
                  { key: 'evalItem2', icon: Brain },
                  { key: 'evalItem3', icon: Fingerprint },
                  { key: 'evalItem4', icon: Layers },
                  { key: 'evalItem5', icon: Calculator },
                  { key: 'evalItem6', icon: BookOpen },
                  { key: 'evalItem7', icon: Target },
                  { key: 'evalItem8', icon: BarChart3 },
                ].map(({ key, icon: Icon }) => (
                  <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <Icon className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{t(key)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 ml-[52px]">
                <Link href={`/${locale}/profiles`} className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700">
                  {t('exploreProfiles')} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* For Individuals */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-100">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('indTitle')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-[52px]">{t('indDesc')}</p>
              <div className="mt-4 ml-[52px]">
                <Link href={`/${locale}/benefits`} className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700">
                  {t('exploreBenefits')} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* For HR Departments */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-100">
                  <UserCog className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('hrTitle')}</h3>
              </div>
              <p className="text-gray-600 mb-6 ml-[52px]">{t('hrDesc')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-[52px]">
                {[
                  { key: 'hrItem1', icon: Megaphone },
                  { key: 'hrItem2', icon: Users },
                  { key: 'hrItem3', icon: ThermometerSun },
                  { key: 'hrItem4', icon: Star },
                  { key: 'hrItem5', icon: TrendingUp },
                  { key: 'hrItem6', icon: BarChart3 },
                ].map(({ key, icon: Icon }) => (
                  <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <Icon className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700">{t(key)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 ml-[52px]">
                <Link href={`/${locale}/features`} className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700">
                  {t('exploreFeatures')} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* White Label */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-100">
                  <Palette className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('whitelabelTitle')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-[52px]">{t('whitelabelDesc')}</p>
              <div className="mt-4 ml-[52px]">
                <Link href={`/${locale}/benefits`} className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700">
                  {t('exploreBenefits')} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* AI Staff */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gray-800">
                  <Bot className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t('aiStaffTitle')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-[52px]">{t('aiStaffDesc')}</p>
              <div className="mt-4 ml-[52px]">
                <Link href={`/${locale}/ai-staff`} className="inline-flex items-center gap-2 text-sm text-primary-600 font-medium hover:text-primary-700">
                  {t('exploreAIStaff')} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Links */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">{t('exploreTitle')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: `/${locale}/features`, label: t('exploreFeatures'), icon: ClipboardList, color: 'bg-blue-100 text-blue-600' },
                { href: `/${locale}/benefits`, label: t('exploreBenefits'), icon: TrendingUp, color: 'bg-green-100 text-green-600' },
                { href: `/${locale}/profiles`, label: t('exploreProfiles'), icon: Briefcase, color: 'bg-indigo-100 text-indigo-600' },
                { href: `/${locale}/ai-staff`, label: t('exploreAIStaff'), icon: Bot, color: 'bg-gray-100 text-gray-700' },
                { href: `/${locale}/resources`, label: t('exploreResources'), icon: BookOpen, color: 'bg-amber-100 text-amber-600' },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="group">
                  <Card variant="bordered" className="bg-white hover:shadow-md hover:border-primary-200 transition-all h-full">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl ${item.color} shrink-0`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {item.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-primary-400 transition-colors" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
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
                <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50 font-bold">
                  <Sparkles className="w-5 h-5 mr-2" />
                  {t('ctaButton')}
                </Button>
              </Link>
              <Link href={`mailto:info@skaills.io?subject=Inquiry`}>
                <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 font-bold">
                  {t('ctaContact')}
                  <ArrowRight className="w-4 h-4 ml-2" />
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
