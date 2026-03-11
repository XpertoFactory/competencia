'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Header, Footer } from '@/components/layout';
import { Card, CardContent } from '@/components/ui';
import { BookOpen, HelpCircle, Lightbulb, ArrowRight, Clock, Compass } from 'lucide-react';

const opinionArticles = [
  {
    slug: 'hr-management-ai-era',
    title: 'Human Resources Management in the AI Era: Challenges and Opportunities',
    excerpt: 'How AI is reshaping HR functions — from recruitment to retention — and what leaders must do today to stay ahead.',
    readTime: '8 min read',
  },
  {
    slug: 'hr-ai-agents-world',
    title: 'The Role of Human Resources Management in an AI Agents World',
    excerpt: 'When AI becomes a colleague, HR must evolve from managing people to orchestrating human-AI collaboration.',
    readTime: '7 min read',
  },
  {
    slug: 'employment-ai-era',
    title: 'The Present and Future of Employment in the AI Era',
    excerpt: 'From degree-based to skill-based hiring, explore how AI is transforming the employment landscape globally.',
    readTime: '8 min read',
  },
  {
    slug: 'ai-revolution-employment',
    title: 'Will the AI Revolution Throw a Balance of Unemployment or an Explosion of New Careers?',
    excerpt: 'Historical parallels, emerging roles, and the evidence from early AI adoption across industries.',
    readTime: '8 min read',
  },
  {
    slug: 'career-path-ai-world',
    title: 'Building Your Career Path in an AI-Driven World',
    excerpt: 'Practical strategies for professionals navigating career development when AI is reshaping every industry.',
    readTime: '7 min read',
  },
  {
    slug: 'social-skills-ai-era',
    title: 'The Rising Value of Social Skills in the AI Era',
    excerpt: 'Why emotional intelligence, collaboration, and interpersonal skills are becoming the ultimate competitive advantage.',
    readTime: '7 min read',
  },
  {
    slug: 'am-i-ready-for-ai',
    title: 'Am I Ready for AI? A Personal Readiness Assessment',
    excerpt: 'An honest framework to evaluate your own preparedness for the AI-transformed workplace.',
    readTime: '7 min read',
  },
  {
    slug: 'is-my-org-ready-for-ai',
    title: 'Is My Organization Ready for AI? An Organizational Readiness Guide',
    excerpt: 'Key indicators and action steps to assess and improve your organization\'s AI adoption readiness.',
    readTime: '7 min read',
  },
];

const faqPages = [
  {
    slug: 'hr-management-faqs',
    title: 'HR Management FAQs',
    excerpt: 'Common questions about modern HR management practices, AI integration, and workforce planning.',
  },
  {
    slug: 'career-planning-faqs',
    title: 'Career Planning FAQs',
    excerpt: 'Frequently asked questions about career development, skill building, and navigating the AI-era job market.',
  },
];

export default function ResourcesPage() {
  const locale = useLocale();

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
                Resources
              </h1>
            </div>
            <p className="text-gray-600 ml-[52px]">
              Expert insights, best practices, and answers to help you navigate the intersection of talent management and AI.
            </p>
          </div>
        </section>

        {/* Opinion Articles */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold text-gray-900">Opinion</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              In-depth analysis and perspectives on how AI is transforming work, careers, and human resources — featuring commentary from our panel of experts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {opinionArticles.map((article) => (
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
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-primary-600 font-medium group-hover:gap-2 transition-all">
                          Read more
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

        {/* Best Practices - Coming Soon */}
        <section className="py-10 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">Best Practices</h2>
            </div>
            <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-10 text-center">
              <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium mb-1">Coming Soon</p>
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                Practical guides and frameworks for implementing AI-powered talent management, skills assessment, and organizational development.
              </p>
            </div>
          </div>
        </section>

        {/* Career Planning */}
        <section className="py-10 bg-gradient-to-br from-emerald-50 to-cyan-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Compass className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-gray-900">Career Planning</h2>
            </div>
            <Link href={`/${locale}/resources/career-planning`} className="group block max-w-2xl">
              <Card variant="bordered" className="hover:border-emerald-300 hover:shadow-lg transition-all bg-white">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100 shrink-0">
                    <Compass className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      Career Advancement & Growth Planning
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      Answer a few questions about your background and goals to receive a personalized career development plan with AI readiness assessments, learning programs, and expert resources.
                    </p>
                    <span className="flex items-center gap-1 text-sm text-emerald-600 font-medium group-hover:gap-2 transition-all">
                      Start planning
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
              <h2 className="text-xl font-bold text-gray-900">FAQs</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Answers to the most common questions about HR management, career planning, and skills evaluation in the age of AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {faqPages.map((faq) => (
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
                            {faq.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">
                            {faq.excerpt}
                          </p>
                          <span className="flex items-center gap-1 text-sm text-violet-600 font-medium group-hover:gap-2 transition-all">
                            Browse FAQs
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
