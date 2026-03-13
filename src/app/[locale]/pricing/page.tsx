'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import {
  Check,
  X,
  Sparkles,
  Building2,
  User,
  Crown,
  Zap,
  ArrowRight,
  Brain,
  FileText,
  Users,
  BarChart3,
  Shield,
  Rocket,
  Bot,
  UserCog,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type PlanType = 'individual' | 'corporate';

export default function PricingPage() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const [planType, setPlanType] = useState<PlanType>('individual');

  const individualPlans = [
    {
      id: 'free',
      name: t('free.name'),
      price: '$0',
      period: '',
      description: t('individual.freeDesc'),
      icon: User,
      color: 'bg-gray-100 text-gray-600',
      borderColor: '',
      features: [
        { text: t('individual.free.f1'), included: true },
        { text: t('individual.free.f2'), included: true },
        { text: t('individual.free.f3'), included: true },
        { text: t('individual.free.f4'), included: false },
        { text: t('individual.free.f5'), included: false },
        { text: t('individual.free.f6'), included: false },
      ],
      cta: t('ctaFree'),
      href: `/${locale}/auth/register`,
      popular: false,
    },
    {
      id: 'pro',
      name: t('pro.name'),
      price: '$29',
      period: t('perMonth'),
      description: t('individual.proDesc'),
      icon: Zap,
      color: 'bg-primary-100 text-primary-600',
      borderColor: 'ring-2 ring-primary-500',
      features: [
        { text: t('individual.pro.f1'), included: true },
        { text: t('individual.pro.f2'), included: true },
        { text: t('individual.pro.f3'), included: true },
        { text: t('individual.pro.f4'), included: true },
        { text: t('individual.pro.f5'), included: false },
        { text: t('individual.pro.f6'), included: false },
      ],
      cta: t('ctaStart'),
      href: `/${locale}/auth/register`,
      popular: true,
    },
    {
      id: 'premium',
      name: t('premium.name'),
      price: '$79',
      period: t('perMonth'),
      description: t('individual.premiumDesc'),
      icon: Crown,
      color: 'bg-amber-100 text-amber-600',
      borderColor: '',
      features: [
        { text: t('individual.premium.f1'), included: true },
        { text: t('individual.premium.f2'), included: true },
        { text: t('individual.premium.f3'), included: true },
        { text: t('individual.premium.f4'), included: true },
        { text: t('individual.premium.f5'), included: true },
        { text: t('individual.premium.f6'), included: true },
      ],
      cta: t('ctaContact'),
      href: `/${locale}/contact`,
      popular: false,
    },
  ];

  const corporatePlans = [
    {
      id: 'starter',
      name: t('starter.name'),
      price: '$199',
      period: t('perMonth'),
      description: t('corporate.starterDesc'),
      icon: Building2,
      color: 'bg-gray-100 text-gray-600',
      borderColor: '',
      features: [
        { text: t('corporate.starter.f1'), included: true },
        { text: t('corporate.starter.f2'), included: true },
        { text: t('corporate.starter.f3'), included: true },
        { text: t('corporate.starter.f4'), included: true },
        { text: t('corporate.starter.f5'), included: false },
        { text: t('corporate.starter.f6'), included: false },
        { text: t('corporate.starter.f7'), included: false },
      ],
      cta: t('ctaStart'),
      href: `/${locale}/contact`,
      popular: false,
    },
    {
      id: 'business',
      name: t('business.name'),
      price: '$499',
      period: t('perMonth'),
      description: t('corporate.businessDesc'),
      icon: Users,
      color: 'bg-primary-100 text-primary-600',
      borderColor: 'ring-2 ring-primary-500',
      features: [
        { text: t('corporate.business.f1'), included: true },
        { text: t('corporate.business.f2'), included: true },
        { text: t('corporate.business.f3'), included: true },
        { text: t('corporate.business.f4'), included: true },
        { text: t('corporate.business.f5'), included: true },
        { text: t('corporate.business.f6'), included: false },
        { text: t('corporate.business.f7'), included: false },
      ],
      cta: t('ctaStart'),
      href: `/${locale}/contact`,
      popular: true,
    },
    {
      id: 'enterprise',
      name: t('enterprise.name'),
      price: t('custom'),
      period: '',
      description: t('corporate.enterpriseDesc'),
      icon: Rocket,
      color: 'bg-amber-100 text-amber-600',
      borderColor: '',
      features: [
        { text: t('corporate.enterprise.f1'), included: true },
        { text: t('corporate.enterprise.f2'), included: true },
        { text: t('corporate.enterprise.f3'), included: true },
        { text: t('corporate.enterprise.f4'), included: true },
        { text: t('corporate.enterprise.f5'), included: true },
        { text: t('corporate.enterprise.f6'), included: true },
        { text: t('corporate.enterprise.f7'), included: true },
      ],
      cta: t('ctaContact'),
      href: `/${locale}/contact`,
      popular: false,
    },
  ];

  const plans = planType === 'individual' ? individualPlans : corporatePlans;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/90 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            {t('heroTagline')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            {t('subtitle')}
          </p>

          {/* Plan type toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-1.5">
            <button
              onClick={() => setPlanType('individual')}
              className={cn(
                'flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all',
                planType === 'individual'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'text-white/70 hover:text-white'
              )}
            >
              <User className="w-4 h-4" />
              {t('individualTab')}
            </button>
            <button
              onClick={() => setPlanType('corporate')}
              className={cn(
                'flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all',
                planType === 'corporate'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'text-white/70 hover:text-white'
              )}
            >
              <Building2 className="w-4 h-4" />
              {t('corporateTab')}
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.id}
                variant="bordered"
                className={cn(
                  'relative hover:shadow-xl transition-all duration-300',
                  plan.borderColor
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                      {t('mostPopular')}
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn('p-2.5 rounded-xl', plan.color)}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

                  <Link href={plan.href}>
                    <Button
                      variant={plan.popular ? 'primary' : 'outline'}
                      className="w-full mb-6"
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                        )}
                        <span className={cn(
                          'text-sm',
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        )}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* AI Agents & AI Employees */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full text-sm text-purple-700 font-medium mb-4">
              <Brain className="w-4 h-4" />
              {t('ai.badge')}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('ai.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('ai.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* AI Agents */}
            <Card variant="bordered" className="hover:shadow-xl transition-all bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                    <Bot className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t('ai.agents.title')}</h3>
                    <span className="text-sm text-purple-600 font-medium">{t('ai.agents.tag')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">{t('ai.agents.desc')}</p>
                <ul className="space-y-3 mb-6">
                  {[t('ai.agents.f1'), t('ai.agents.f2'), t('ai.agents.f3'), t('ai.agents.f4')].map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500">{t('ai.includedIn')}</p>
              </CardContent>
            </Card>

            {/* AI Employees */}
            <Card variant="bordered" className="hover:shadow-xl transition-all bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
                    <UserCog className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{t('ai.employees.title')}</h3>
                    <span className="text-sm text-indigo-600 font-medium">{t('ai.employees.tag')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">{t('ai.employees.desc')}</p>
                <ul className="space-y-3 mb-6">
                  {[t('ai.employees.f1'), t('ai.employees.f2'), t('ai.employees.f3'), t('ai.employees.f4')].map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500">{t('ai.includedIn')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t('whyTitle')}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            {t('whySubtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: t('highlights.ai.title'), desc: t('highlights.ai.desc'), color: 'bg-purple-100 text-purple-600' },
              { icon: FileText, title: t('highlights.profiles.title'), desc: t('highlights.profiles.desc'), color: 'bg-blue-100 text-blue-600' },
              { icon: BarChart3, title: t('highlights.analytics.title'), desc: t('highlights.analytics.desc'), color: 'bg-emerald-100 text-emerald-600' },
              { icon: Shield, title: t('highlights.security.title'), desc: t('highlights.security.desc'), color: 'bg-amber-100 text-amber-600' },
            ].map((item, i) => {
              const HIcon = item.icon;
              return (
                <Card key={i} variant="bordered" className="hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className={cn('inline-flex p-3 rounded-xl mb-4', item.color)}>
                      <HIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t('ctaSubtitle')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/auth/register`}>
              <Button variant="primary" size="lg">
                {t('ctaFree')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                {t('ctaContact')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
