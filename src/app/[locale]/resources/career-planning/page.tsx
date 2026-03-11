'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Progress } from '@/components/ui';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Target,
  Sparkles,
  CheckCircle,
  ExternalLink,
  BookOpen,
  Brain,
  TrendingUp,
  Lightbulb,
  Star,
  BarChart3,
  Users,
  Rocket,
  RefreshCw,
} from 'lucide-react';

// --- Types ---
interface WizardAnswers {
  sector: string;
  experience: string;
  currentRole: string;
  skills: string[];
  aspirations: string[];
  aiReadiness: string;
  learningStyle: string;
}

// --- Sector to external platform mapping ---
const SECTOR_PLATFORMS: Record<string, { name: string; readiness: string; learn: string; color: string }> = {
  'business': {
    name: 'ibizai.io',
    readiness: 'https://ibizai.io/practice/ai-readiness/',
    learn: 'https://ibizai.io/learn/program/',
    color: 'text-blue-600',
  },
  'legal': {
    name: 'lawra.org',
    readiness: 'https://lawra.org/practice/ai-readiness/',
    learn: 'https://lawra.org/learn/program/',
    color: 'text-indigo-600',
  },
  'insurance': {
    name: 'insureversia.com',
    readiness: 'https://insureversia.com/practice/ai-readiness/',
    learn: 'https://insureversia.com/learn/program/',
    color: 'text-emerald-600',
  },
  'education': {
    name: 'ailearning.global',
    readiness: 'https://ailearning.global/practice/ai-readiness/',
    learn: 'https://ailearning.global/learn/program/',
    color: 'text-amber-600',
  },
  'music': {
    name: 'maimusic.org',
    readiness: '',
    learn: 'https://maimusic.org/learn/program/',
    color: 'text-pink-600',
  },
  'general': {
    name: '100.cemi.ai',
    readiness: 'https://100.cemi.ai/ai-readiness.html',
    learn: 'https://100.cemi.ai/program.html',
    color: 'text-gray-700',
  },
};

// Map evaluation sectors to external platform keys
function getSectorPlatforms(sector: string): string[] {
  const mapping: Record<string, string[]> = {
    'insurance': ['insurance', 'general'],
    'education': ['education', 'general'],
    'retail-services': ['business', 'general'],
    'healthcare': ['general'],
    'transportation': ['general'],
    'finance-accounting': ['business', 'general'],
    'compliance-legal': ['legal', 'general'],
    'human-resources': ['business', 'general'],
    'commercial-business': ['business', 'general'],
    'collections-credit': ['business', 'general'],
    'customer-service': ['business', 'general'],
    'general-management': ['business', 'general'],
    'technology-it': ['business', 'general'],
    'banking': ['business', 'general'],
    'hospitality-tourism': ['business', 'general'],
    'music-arts': ['music', 'general'],
    'legal': ['legal', 'general'],
  };
  return mapping[sector] || ['general'];
}

// Internal article recommendations based on answers
function getRecommendedArticles(answers: WizardAnswers): { slug: string; type: 'opinion' | 'faq' }[] {
  const articles: { slug: string; type: 'opinion' | 'faq' }[] = [];

  // Always recommend career path article
  articles.push({ slug: 'career-path-ai-world', type: 'opinion' });

  // Based on AI readiness
  if (answers.aiReadiness === 'beginner' || answers.aiReadiness === 'curious') {
    articles.push({ slug: 'am-i-ready-for-ai', type: 'opinion' });
  }

  // For managers/leaders
  if (answers.experience === 'senior' || answers.experience === 'executive') {
    articles.push({ slug: 'is-my-org-ready-for-ai', type: 'opinion' });
    articles.push({ slug: 'hr-management-ai-era', type: 'opinion' });
  }

  // Social skills aspiration
  if (answers.aspirations.includes('leadership') || answers.aspirations.includes('communication')) {
    articles.push({ slug: 'social-skills-ai-era', type: 'opinion' });
  }

  // Career transition
  if (answers.aspirations.includes('career-change') || answers.aspirations.includes('growth')) {
    articles.push({ slug: 'employment-ai-era', type: 'opinion' });
    articles.push({ slug: 'ai-revolution-employment', type: 'opinion' });
  }

  // Always recommend relevant FAQ
  articles.push({ slug: 'career-planning-faqs', type: 'faq' });

  if (answers.experience === 'senior' || answers.experience === 'executive') {
    articles.push({ slug: 'hr-management-faqs', type: 'faq' });
  }

  // Deduplicate
  const seen = new Set<string>();
  return articles.filter(a => {
    const key = `${a.type}/${a.slug}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Generate plan recommendations based on answers
function generatePlan(answers: WizardAnswers, t: (key: string) => string) {
  const sections: { title: string; icon: typeof TrendingUp; items: string[] }[] = [];

  // Skills Assessment
  const skillItems: string[] = [];
  if (answers.skills.includes('technical')) skillItems.push(t('plan.strengthTechnical'));
  if (answers.skills.includes('analytical')) skillItems.push(t('plan.strengthAnalytical'));
  if (answers.skills.includes('communication')) skillItems.push(t('plan.strengthCommunication'));
  if (answers.skills.includes('leadership')) skillItems.push(t('plan.strengthLeadership'));
  if (answers.skills.includes('creativity')) skillItems.push(t('plan.strengthCreativity'));
  if (answers.skills.includes('adaptability')) skillItems.push(t('plan.strengthAdaptability'));
  if (skillItems.length > 0) {
    sections.push({ title: t('plan.strengthsTitle'), icon: Star, items: skillItems });
  }

  // Growth areas based on what they DON'T have
  const growthItems: string[] = [];
  if (!answers.skills.includes('technical')) growthItems.push(t('plan.growTechnical'));
  if (!answers.skills.includes('analytical')) growthItems.push(t('plan.growAnalytical'));
  if (!answers.skills.includes('leadership') && (answers.aspirations.includes('leadership') || answers.experience === 'senior')) {
    growthItems.push(t('plan.growLeadership'));
  }
  if (answers.aiReadiness === 'beginner' || answers.aiReadiness === 'curious') {
    growthItems.push(t('plan.growAI'));
  }
  if (growthItems.length > 0) {
    sections.push({ title: t('plan.growthTitle'), icon: TrendingUp, items: growthItems.slice(0, 4) });
  }

  // Action plan
  const actionItems: string[] = [];
  actionItems.push(t('plan.actionAssess'));
  if (answers.aiReadiness !== 'advanced') actionItems.push(t('plan.actionAIReadiness'));
  actionItems.push(t('plan.actionLearn'));
  if (answers.aspirations.includes('career-change')) actionItems.push(t('plan.actionTransition'));
  if (answers.aspirations.includes('leadership')) actionItems.push(t('plan.actionLeadership'));
  actionItems.push(t('plan.actionNetwork'));
  sections.push({ title: t('plan.actionsTitle'), icon: Rocket, items: actionItems.slice(0, 5) });

  return sections;
}

// --- Constants ---
const STEPS = ['sector', 'experience', 'skills', 'aspirations', 'results'] as const;

const SECTORS = [
  'insurance', 'education', 'retail-services', 'healthcare', 'transportation',
  'finance-accounting', 'compliance-legal', 'human-resources', 'commercial-business',
  'technology-it', 'banking', 'hospitality-tourism', 'general-management',
  'music-arts', 'legal',
];

const EXPERIENCE_LEVELS = ['entry', 'junior', 'mid', 'senior', 'executive'];

const SKILL_OPTIONS = [
  'technical', 'analytical', 'communication', 'leadership', 'creativity',
  'adaptability', 'project-management', 'problem-solving',
];

const ASPIRATION_OPTIONS = [
  'growth', 'leadership', 'career-change', 'specialization',
  'communication', 'ai-skills', 'entrepreneurship', 'work-life-balance',
];

const AI_READINESS_LEVELS = ['beginner', 'curious', 'intermediate', 'advanced'];

export default function CareerPlanningPage() {
  const t = useTranslations('careerPlanning');
  const locale = useLocale();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<WizardAnswers>({
    sector: '',
    experience: '',
    currentRole: '',
    skills: [],
    aspirations: [],
    aiReadiness: '',
    learningStyle: '',
  });

  const currentStep = STEPS[step];
  const progress = ((step) / (STEPS.length - 1)) * 100;

  const canAdvance = () => {
    switch (currentStep) {
      case 'sector': return answers.sector !== '';
      case 'experience': return answers.experience !== '' && answers.aiReadiness !== '';
      case 'skills': return answers.skills.length >= 2;
      case 'aspirations': return answers.aspirations.length >= 1;
      case 'results': return true;
    }
  };

  const toggleArrayItem = (field: 'skills' | 'aspirations', item: string) => {
    setAnswers(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item],
    }));
  };

  const resetWizard = () => {
    setStep(0);
    setAnswers({ sector: '', experience: '', currentRole: '', skills: [], aspirations: [], aiReadiness: '', learningStyle: '' });
  };

  const platforms = getSectorPlatforms(answers.sector);
  const recommendedArticles = getRecommendedArticles(answers);
  const plan = generatePlan(answers, t);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-[10%] w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-emerald-300 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
                <Compass className="w-4 h-4 text-emerald-200" />
                <span className="text-sm font-medium text-emerald-100">{t('tagline')}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
                {t('title')}
              </h1>
              <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Wizard */}
        <section className="py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress */}
            {currentStep !== 'results' && (
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{t('step')} {step + 1} / {STEPS.length - 1}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {/* Step 1: Sector */}
            {currentStep === 'sector' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t('sectorTitle')}</h2>
                <p className="text-gray-500 mb-6">{t('sectorDesc')}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SECTORS.map((sector) => (
                    <button
                      key={sector}
                      onClick={() => setAnswers(prev => ({ ...prev, sector }))}
                      className={`p-3 rounded-xl border-2 text-sm font-medium text-left transition-all ${
                        answers.sector === sector
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {t(`sectors.${sector}`)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Experience + AI Readiness */}
            {currentStep === 'experience' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{t('experienceTitle')}</h2>
                  <p className="text-gray-500 mb-6">{t('experienceDesc')}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {EXPERIENCE_LEVELS.map((level) => (
                      <button
                        key={level}
                        onClick={() => setAnswers(prev => ({ ...prev, experience: level }))}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          answers.experience === level
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <span className="text-sm font-semibold text-gray-900">{t(`levels.${level}`)}</span>
                        <p className="text-xs text-gray-500 mt-1">{t(`levelDesc.${level}`)}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('aiReadinessTitle')}</h3>
                  <p className="text-gray-500 mb-4">{t('aiReadinessDesc')}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {AI_READINESS_LEVELS.map((level) => (
                      <button
                        key={level}
                        onClick={() => setAnswers(prev => ({ ...prev, aiReadiness: level }))}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${
                          answers.aiReadiness === level
                            ? 'border-cyan-500 bg-cyan-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <span className="text-sm font-semibold text-gray-900">{t(`aiLevels.${level}`)}</span>
                        <p className="text-xs text-gray-500 mt-1">{t(`aiLevelDesc.${level}`)}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Skills */}
            {currentStep === 'skills' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t('skillsTitle')}</h2>
                <p className="text-gray-500 mb-6">{t('skillsDesc')}</p>
                <div className="grid grid-cols-2 gap-3">
                  {SKILL_OPTIONS.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleArrayItem('skills', skill)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        answers.skills.includes(skill)
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        answers.skills.includes(skill) ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'
                      }`}>
                        {answers.skills.includes(skill) && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{t(`skillOptions.${skill}`)}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">{t('skillsHint')}</p>
              </div>
            )}

            {/* Step 4: Aspirations */}
            {currentStep === 'aspirations' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t('aspirationsTitle')}</h2>
                <p className="text-gray-500 mb-6">{t('aspirationsDesc')}</p>
                <div className="grid grid-cols-2 gap-3">
                  {ASPIRATION_OPTIONS.map((aspiration) => (
                    <button
                      key={aspiration}
                      onClick={() => toggleArrayItem('aspirations', aspiration)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        answers.aspirations.includes(aspiration)
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        answers.aspirations.includes(aspiration) ? 'border-teal-500 bg-teal-500' : 'border-gray-300'
                      }`}>
                        {answers.aspirations.includes(aspiration) && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{t(`aspirationOptions.${aspiration}`)}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">{t('aspirationsHint')}</p>
              </div>
            )}

            {/* Step 5: Results / Plan */}
            {currentStep === 'results' && (
              <div>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 mb-4">
                    <Sparkles className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2">{t('resultsTitle')}</h2>
                  <p className="text-gray-500">{t('resultsDesc')}</p>
                </div>

                {/* Profile Summary */}
                <Card variant="bordered" className="mb-6 bg-white">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      {t('profileSummary')}
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">{t('sectorLabel')}:</span>
                        <span className="ml-2 font-medium text-gray-900">{t(`sectors.${answers.sector}`)}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{t('experienceLabel')}:</span>
                        <span className="ml-2 font-medium text-gray-900">{t(`levels.${answers.experience}`)}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{t('aiReadinessLabel')}:</span>
                        <span className="ml-2 font-medium text-gray-900">{t(`aiLevels.${answers.aiReadiness}`)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Plan Sections */}
                {plan.map((section, idx) => (
                  <Card key={idx} variant="bordered" className="mb-4 bg-white">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <section.icon className="w-4 h-4 text-emerald-600" />
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}

                {/* External Platforms */}
                <Card variant="bordered" className="mb-4 bg-gradient-to-br from-gray-50 to-cyan-50">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-cyan-600" />
                      {t('externalTitle')}
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">{t('externalDesc')}</p>
                    <div className="space-y-3">
                      {platforms.map((platformKey) => {
                        const platform = SECTOR_PLATFORMS[platformKey];
                        if (!platform) return null;
                        return (
                          <div key={platformKey} className="rounded-lg border border-gray-200 bg-white p-4">
                            <p className={`text-sm font-bold ${platform.color} mb-2`}>{platform.name}</p>
                            <div className="flex flex-col sm:flex-row gap-2">
                              {platform.readiness && (
                                <a
                                  href={platform.readiness}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-700 bg-cyan-50 rounded-lg px-3 py-2 hover:bg-cyan-100 transition-colors"
                                >
                                  <BarChart3 className="w-3.5 h-3.5" />
                                  {t('aiReadinessAssessment')}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                              <a
                                href={platform.learn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2 hover:bg-emerald-100 transition-colors"
                              >
                                <GraduationCap className="w-3.5 h-3.5" />
                                {t('learningProgram')}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Internal Resources */}
                <Card variant="bordered" className="mb-6 bg-white">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      {t('recommendedReading')}
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">{t('recommendedReadingDesc')}</p>
                    <div className="space-y-2">
                      {recommendedArticles.map((article) => (
                        <Link
                          key={`${article.type}/${article.slug}`}
                          href={`/${locale}/resources/${article.type === 'opinion' ? 'opinion' : 'faqs'}/${article.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          {article.type === 'opinion' ? (
                            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                          ) : (
                            <BookOpen className="w-4 h-4 text-violet-500 shrink-0" />
                          )}
                          <span className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors">
                            {t(`articles.${article.slug}`)}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-primary-400" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Evaluation CTA */}
                <div className="rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">{t('ctaTitle')}</h3>
                  <p className="text-sm text-emerald-100 mb-4 max-w-lg mx-auto">{t('ctaDesc')}</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href={`/${locale}/profiles`}>
                      <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold">
                        <Target className="w-4 h-4 mr-2" />
                        {t('ctaEvaluate')}
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 font-bold"
                      onClick={resetWizard}
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      {t('ctaRestart')}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep !== 'results' && (
              <div className="flex justify-between mt-8">
                <Button
                  variant="ghost"
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="text-gray-500"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('back')}
                </Button>
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canAdvance()}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  {step === STEPS.length - 2 ? t('generatePlan') : t('next')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
