'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Header, Footer } from '@/components/layout';
import { Card, CardContent } from '@/components/ui';
import { BookOpen, HelpCircle, Lightbulb, ArrowRight, Clock, Compass } from 'lucide-react';

const opinionSlugs = [
  { slug: 'hr-management-ai-era', titleKey: 'opArticle1Title', excerptKey: 'opArticle1Excerpt', readTime: '8 min' },
  { slug: 'hr-ai-agents-world', titleKey: 'opArticle2Title', excerptKey: 'opArticle2Excerpt', readTime: '7 min' },
  { slug: 'employment-ai-era', titleKey: 'opArticle3Title', excerptKey: 'opArticle3Excerpt', readTime: '8 min' },
  { slug: 'ai-revolution-employment', titleKey: 'opArticle4Title', excerptKey: 'opArticle4Excerpt', readTime: '8 min' },
  { slug: 'career-path-ai-world', titleKey: 'opArticle5Title', excerptKey: 'opArticle5Excerpt', readTime: '7 min' },
  { slug: 'social-skills-ai-era', titleKey: 'opArticle6Title', excerptKey: 'opArticle6Excerpt', readTime: '7 min' },
  { slug: 'am-i-ready-for-ai', titleKey: 'opArticle7Title', excerptKey: 'opArticle7Excerpt', readTime: '7 min' },
  { slug: 'is-my-org-ready-for-ai', titleKey: 'opArticle8Title', excerptKey: 'opArticle8Excerpt', readTime: '7 min' },
];

const bestPracticesSlugs = [
  { slug: 'hr-departments', titleKey: 'bpHRTitle', excerptKey: 'bpHRExcerpt', readTime: '12 min' },
  { slug: 'organizations', titleKey: 'bpOrgsTitle', excerptKey: 'bpOrgsExcerpt', readTime: '12 min' },
  { slug: 'professionals', titleKey: 'bpProfTitle', excerptKey: 'bpProfExcerpt', readTime: '12 min' },
];

const faqSlugs = [
  { slug: 'hr-management-faqs', titleKey: 'faqHRTitle', excerptKey: 'faqHRExcerpt' },
  { slug: 'career-planning-faqs', titleKey: 'faqCareerTitle', excerptKey: 'faqCareerExcerpt' },
];

export default function ResourcesPage() {
  const locale = useLocale();
  const t = useTranslations('resources');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary-100">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                {t('pageTitle')}
              </h1>
            </div>
            <p className="text-gray-600 ml-[52px]">
              {t('pageDesc')}
            </p>
          </div>
        </section>

        {/* Opinion Articles */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold text-gray-900">{t('opinionTitle')}</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              {t('opinionDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {opinionSlugs.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${locale}/resources/opinion/${article.slug}`}
                  className="group"
                >
                  <Card
                    variant="bordered"
                    className="h-full hover:border-primary-300 hover:shadow-lg transition-all bg-white"
                  >
                    <CardContent className="p-5 flex flex-col h-full">
                      <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-3">
                        {t(article.titleKey)}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-3">
                        {t(article.excerptKey)}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-primary-600 font-medium group-hover:gap-2 transition-all">
                          {t('readMore')}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-10 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">{t('bestPracticesTitle')}</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              {t('bestPracticesDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bestPracticesSlugs.map((bp) => (
                <Link
                  key={bp.slug}
                  href={`/${locale}/resources/best-practices/${bp.slug}`}
                  className="group"
                >
                  <Card
                    variant="bordered"
                    className="h-full hover:border-primary-300 hover:shadow-lg transition-all bg-white"
                  >
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary-50 shrink-0">
                          <BookOpen className="w-5 h-5 text-primary-600" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                          {t(bp.titleKey)}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-3">
                        {t(bp.excerptKey)}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {bp.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-primary-600 font-medium group-hover:gap-2 transition-all">
                          {t('readMore')}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Career Planning */}
        <section className="py-10 bg-gradient-to-br from-emerald-50 to-cyan-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Compass className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-gray-900">{t('careerPlanningTitle')}</h2>
            </div>
            <Link href={`/${locale}/resources/career-planning`} className="group block max-w-2xl">
              <Card variant="bordered" className="hover:border-emerald-300 hover:shadow-lg transition-all bg-white">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100 shrink-0">
                    <Compass className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {t('careerPlanningCardTitle')}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {t('careerPlanningCardDesc')}
                    </p>
                    <span className="flex items-center gap-1 text-sm text-emerald-600 font-medium group-hover:gap-2 transition-all">
                      {t('startPlanning')}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-violet-500" />
              <h2 className="text-xl font-bold text-gray-900">{t('faqsTitle')}</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              {t('faqsDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {faqSlugs.map((faq) => (
                <Link
                  key={faq.slug}
                  href={`/${locale}/resources/faqs/${faq.slug}`}
                  className="group"
                >
                  <Card
                    variant="bordered"
                    className="h-full hover:border-violet-300 hover:shadow-lg transition-all bg-white"
                  >
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-violet-50 shrink-0">
                          <HelpCircle className="w-5 h-5 text-violet-500" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-violet-700 transition-colors">
                            {t(faq.titleKey)}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">
                            {t(faq.excerptKey)}
                          </p>
                          <span className="flex items-center gap-1 text-sm text-violet-600 font-medium group-hover:gap-2 transition-all">
                            {t('browseFaqs')}
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
