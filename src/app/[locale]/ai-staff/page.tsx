'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import {
  Bot,
  Users,
  Building2,
  Shield,
  Brain,
  Cog,
  Sparkles,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Briefcase,
  HeadphonesIcon,
  Scale,
  BarChart3,
  TrendingUp,
  Megaphone,
  UserCog,
  Eye,
  BookOpen,
  Handshake,
  Lock,
  RefreshCw,
  Target,
  MessageSquare,
  Workflow,
} from 'lucide-react';
import { cn } from '@/lib/utils';

function RoleCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) {
  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200 hover:border-blue-300' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200 hover:border-purple-300' },
    emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200 hover:border-emerald-300' },
    amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-200 hover:border-amber-300' },
    rose: { bg: 'bg-rose-50', icon: 'text-rose-600', border: 'border-rose-200 hover:border-rose-300' },
    cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-600', border: 'border-cyan-200 hover:border-cyan-300' },
  };
  const c = colorMap[color] || colorMap.blue;

  return (
    <Card variant="bordered" className={cn('bg-white hover:shadow-lg transition-all', c.border)}>
      <CardContent className="p-6">
        <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', c.bg)}>
          <Icon className={cn('w-6 h-6', c.icon)} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function DiffCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) {
  const accents = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-violet-500',
    'from-emerald-500 to-teal-500',
    'from-amber-500 to-orange-500',
    'from-rose-500 to-pink-500',
    'from-indigo-500 to-blue-500',
  ];

  return (
    <div className="relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group overflow-hidden">
      <div className={cn('absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity', accents[index % accents.length])} />
      <div className="flex gap-4">
        <div className="p-2.5 rounded-xl bg-gray-100 group-hover:bg-gray-50 transition-colors h-fit shrink-0">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1.5">{title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function UseCaseCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    rose: 'bg-rose-100 text-rose-600',
    indigo: 'bg-indigo-100 text-indigo-600',
  };

  return (
    <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
      <div className={cn('p-2.5 rounded-xl h-fit shrink-0', colorMap[color] || colorMap.blue)}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function AIStaffPage() {
  const t = useTranslations('aiStaff');
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="max-w-4xl mx-auto text-center">
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/10">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-gray-300">{t('heroTagline')}</span>
              </div>

              {/* Main headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
                {t('heroTitle')}
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  {t('heroTitleHighlight')}
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
                {t('heroSubtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`mailto:ai-staff@skaills.io?subject=AI Staff Inquiry`}>
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 font-bold text-base px-8">
                    <Sparkles className="w-5 h-5 mr-2" />
                    {t('ctaGetStarted')}
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-bold text-base px-8">
                    {t('ctaLearnMore')}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
        </section>

        {/* AI Roles Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                {t('boostTitle')}
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                {t('boostSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <RoleCard
                icon={MessageSquare}
                title={t('boostAssistant')}
                description={t('boostAssistantDesc')}
                color="blue"
              />
              <RoleCard
                icon={Eye}
                title={t('boostSupervisor')}
                description={t('boostSupervisorDesc')}
                color="purple"
              />
              <RoleCard
                icon={Brain}
                title={t('boostConsultant')}
                description={t('boostConsultantDesc')}
                color="emerald"
              />
              <RoleCard
                icon={Handshake}
                title={t('boostAdvisor')}
                description={t('boostAdvisorDesc')}
                color="amber"
              />
              <RoleCard
                icon={BarChart3}
                title={t('boostAnalyst')}
                description={t('boostAnalystDesc')}
                color="rose"
              />
              <RoleCard
                icon={Workflow}
                title={t('boostCoordinator')}
                description={t('boostCoordinatorDesc')}
                color="cyan"
              />
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 sm:py-20 bg-white border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">{t('diffTitle')}</span>
              </div>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                {t('diffSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <DiffCard icon={Building2} title={t('diff1Title')} description={t('diff1Desc')} index={0} />
              <DiffCard icon={Target} title={t('diff2Title')} description={t('diff2Desc')} index={1} />
              <DiffCard icon={Users} title={t('diff3Title')} description={t('diff3Desc')} index={2} />
              <DiffCard icon={RefreshCw} title={t('diff4Title')} description={t('diff4Desc')} index={3} />
              <DiffCard icon={BookOpen} title={t('diff5Title')} description={t('diff5Desc')} index={4} />
              <DiffCard icon={Lock} title={t('diff6Title')} description={t('diff6Desc')} index={5} />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                {t('howTitle')}
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block" />

              <div className="space-y-8">
                {[
                  { step: 1, title: t('howStep1Title'), desc: t('howStep1Desc'), icon: Target, color: 'from-cyan-500 to-cyan-600' },
                  { step: 2, title: t('howStep2Title'), desc: t('howStep2Desc'), icon: Cog, color: 'from-blue-500 to-blue-600' },
                  { step: 3, title: t('howStep3Title'), desc: t('howStep3Desc'), icon: Sparkles, color: 'from-indigo-500 to-indigo-600' },
                  { step: 4, title: t('howStep4Title'), desc: t('howStep4Desc'), icon: RefreshCw, color: 'from-purple-500 to-purple-600' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start">
                    <div className={cn(
                      'w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-gradient-to-br text-white shadow-lg relative z-10',
                      item.color
                    )}>
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Step {item.step}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed max-w-xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                {t('useCasesTitle')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <UseCaseCard icon={UserCog} title={t('ucHR')} description={t('ucHRDesc')} color="blue" />
              <UseCaseCard icon={TrendingUp} title={t('ucFinance')} description={t('ucFinanceDesc')} color="green" />
              <UseCaseCard icon={Cog} title={t('ucOperations')} description={t('ucOperationsDesc')} color="purple" />
              <UseCaseCard icon={Megaphone} title={t('ucSales')} description={t('ucSalesDesc')} color="orange" />
              <UseCaseCard icon={HeadphonesIcon} title={t('ucSupport')} description={t('ucSupportDesc')} color="rose" />
              <UseCaseCard icon={Scale} title={t('ucLegal')} description={t('ucLegalDesc')} color="indigo" />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-[20%] w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-[20%] w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <Bot className="w-12 h-12 mx-auto mb-6 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">{t('bottomCtaTitle')}</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('bottomCtaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`mailto:ai-staff@skaills.io?subject=AI Staff Consultation Request`}>
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 font-bold text-base px-8">
                  <Sparkles className="w-5 h-5 mr-2" />
                  {t('bottomCtaButton')}
                </Button>
              </Link>
              <Link href={`mailto:info@skaills.io?subject=AI Staff Inquiry`}>
                <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-bold text-base px-8">
                  {t('bottomCtaContact')}
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
