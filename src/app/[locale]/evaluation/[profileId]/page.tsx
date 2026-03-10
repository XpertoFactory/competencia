'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Input, Progress } from '@/components/ui';
import {
  QuestionCard,
  MultipleChoice,
  ScaleQuestion,
  LikertScale,
  OpenTextQuestion,
  ScenarioQuestion,
  RankingQuestion,
  EvaluationProgress,
} from '@/components/evaluation';
import { ArrowLeft, ArrowRight, Save, Send, Loader2, AlertCircle } from 'lucide-react';
import type { Question, CompetencyCategory, CandidateInfo } from '@/types';
import {
  getQuestions,
  getCategories,
  createEvaluation,
  updateEvaluation,
  completeEvaluation,
  generateId,
} from '@/lib/firebase/firestore';
import { Timestamp } from 'firebase/firestore';

// Fallback seed data for development (when Firestore has no data yet)
import { questions as seedQuestions, competencyCategories as seedCategories } from '@/lib/seed-data';

type EvaluationStep = 'loading' | 'error' | 'registration' | 'evaluation' | 'submitting' | 'complete';

export default function EvaluationPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const profileId = params.profileId as string;

  const [step, setStep] = useState<EvaluationStep>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [candidateInfo, setCandidateInfo] = useState<CandidateInfo>({ name: '' });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, string | number | string[]>>({});
  const [isSaving, setIsSaving] = useState(false);

  // Data from Firestore
  const [questions, setQuestions] = useState<Question[]>([]);
  const [categories, setCategories] = useState<CompetencyCategory[]>([]);
  const [evaluationId, setEvaluationId] = useState<string | null>(null);

  // Build categoryInfo lookup from fetched categories
  const categoryInfo: Record<string, { name: { es: string; en: string } }> = {};
  for (const cat of categories) {
    categoryInfo[cat.id] = { name: cat.name };
  }

  // Fetch questions and categories on mount
  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        // Fetch questions and categories in parallel
        const [firestoreQuestions, firestoreCategories] = await Promise.all([
          getQuestions(profileId),
          getCategories(),
        ]);

        if (cancelled) return;

        let finalQuestions = firestoreQuestions;
        let finalCategories = firestoreCategories;

        // Fall back to seed data if Firestore is empty (development)
        if (finalQuestions.length === 0) {
          console.warn('No questions found in Firestore for profile:', profileId, '— using seed data');
          finalQuestions = seedQuestions.filter(
            (q) => q.profileId === profileId || q.profileId === '__shared__'
          );
        }

        if (finalCategories.length === 0) {
          console.warn('No categories found in Firestore — using seed data');
          finalCategories = seedCategories;
        }

        if (finalQuestions.length === 0) {
          setErrorMessage(
            locale === 'en'
              ? 'No questions found for this evaluation profile.'
              : 'No se encontraron preguntas para este perfil de evaluación.'
          );
          setStep('error');
          return;
        }

        setQuestions(finalQuestions);
        setCategories(finalCategories);
        setStep('registration');
      } catch (error) {
        if (cancelled) return;
        console.error('Error fetching evaluation data:', error);
        // Try falling back to seed data on error
        const fallbackQuestions = seedQuestions.filter(
          (q) => q.profileId === profileId || q.profileId === '__shared__'
        );
        const fallbackCategories = seedCategories;

        if (fallbackQuestions.length > 0) {
          console.warn('Firestore fetch failed, using seed data as fallback');
          setQuestions(fallbackQuestions);
          setCategories(fallbackCategories);
          setStep('registration');
        } else {
          setErrorMessage(
            locale === 'en'
              ? 'Failed to load evaluation data. Please try again later.'
              : 'Error al cargar los datos de la evaluación. Por favor intente más tarde.'
          );
          setStep('error');
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [profileId, locale]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateInfo.name.trim()) return;

    try {
      const candidateId = generateId();
      const newEvaluationId = await createEvaluation({
        candidateId,
        candidateName: candidateInfo.name,
        candidateEmail: candidateInfo.email,
        profileId,
        status: 'in-progress',
        responses: [],
        currentQuestionIndex: 0,
        locale: locale as 'es' | 'en',
        startedAt: Timestamp.now(),
        lastActivityAt: Timestamp.now(),
      });
      setEvaluationId(newEvaluationId);
      setStep('evaluation');
    } catch (error) {
      console.error('Error creating evaluation:', error);
      // Still allow proceeding even if Firestore write fails (offline/dev mode)
      setEvaluationId(`local-${Date.now()}`);
      setStep('evaluation');
    }
  };

  const handleResponseChange = (value: string | number | string[]) => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSaveProgress = async () => {
    setIsSaving(true);
    try {
      if (evaluationId && !evaluationId.startsWith('local-')) {
        // Build response objects from current answers
        const responseObjects = Object.entries(responses).map(([questionId, value]) => {
          const question = questions.find((q) => q.id === questionId);
          return {
            questionId,
            questionType: question?.type || 'open-text',
            value,
            answeredAt: Timestamp.now(),
          };
        });

        await updateEvaluation(evaluationId, {
          responses: responseObjects,
          currentQuestionIndex,
        });
      }
    } catch (error) {
      console.error('Error saving progress:', error);
    }
    setIsSaving(false);
  };

  const handleSubmit = async () => {
    setStep('submitting');
    try {
      // Build final response objects
      const responseObjects = Object.entries(responses).map(([questionId, value]) => {
        const question = questions.find((q) => q.id === questionId);
        return {
          questionId,
          questionType: question?.type || 'open-text',
          value,
          answeredAt: Timestamp.now(),
        };
      });

      if (evaluationId && !evaluationId.startsWith('local-')) {
        // Save all responses and mark as completed
        await updateEvaluation(evaluationId, {
          responses: responseObjects,
          currentQuestionIndex: questions.length - 1,
        });
        await completeEvaluation(evaluationId);
      }

      // Redirect to results page with the real evaluation ID
      router.push(`/${locale}/results/${evaluationId}`);
    } catch (error) {
      console.error('Error submitting evaluation:', error);
      // Still redirect even if save fails
      router.push(`/${locale}/results/${evaluationId || 'error'}`);
    }
  };

  const isCurrentQuestionAnswered = () => {
    const response = responses[currentQuestion?.id];
    if (!response) return false;
    if (typeof response === 'string') return response.trim().length > 0;
    if (Array.isArray(response)) return response.length > 0;
    return true;
  };

  const getCategoryProgress = () => {
    const uniqueCategoryIds = Array.from(new Set(questions.map((q) => q.categoryId)));
    return uniqueCategoryIds.map((catId) => {
      const categoryQuestions = questions.filter((q) => q.categoryId === catId);
      const answeredCount = categoryQuestions.filter((q) => responses[q.id]).length;
      const catInfo = categoryInfo[catId];
      const name = catInfo
        ? locale === 'en' ? catInfo.name.en : catInfo.name.es
        : catId;
      return {
        id: catId,
        name,
        totalQuestions: categoryQuestions.length,
        answeredQuestions: answeredCount,
        isActive: currentQuestion?.categoryId === catId,
      };
    });
  };

  // Loading state
  if (step === 'loading') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'en' ? 'Loading evaluation...' : 'Cargando evaluación...'}
            </h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Error state
  if (step === 'error') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {locale === 'en' ? 'Error' : 'Error'}
            </h2>
            <p className="text-gray-600 mb-6">{errorMessage}</p>
            <Button variant="primary" onClick={() => router.back()}>
              {locale === 'en' ? 'Go Back' : 'Volver'}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (step === 'registration') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-md mx-auto px-4">
            <Card variant="elevated">
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('registration.title')}
                </h1>
                <p className="text-gray-600 mb-6">
                  {t('registration.subtitle')}
                </p>

                <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                  <Input
                    label={t('registration.name')}
                    placeholder={t('registration.namePlaceholder')}
                    value={candidateInfo.name}
                    onChange={(e) =>
                      setCandidateInfo((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                  <Input
                    label={t('registration.email')}
                    type="email"
                    placeholder={t('registration.emailPlaceholder')}
                    value={candidateInfo.email || ''}
                    onChange={(e) =>
                      setCandidateInfo((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <Input
                    label={t('registration.position')}
                    placeholder={t('registration.positionPlaceholder')}
                    value={candidateInfo.position || ''}
                    onChange={(e) =>
                      setCandidateInfo((prev) => ({ ...prev, position: e.target.value }))
                    }
                  />

                  <p className="text-xs text-gray-500">
                    {t('registration.privacyNote')}
                  </p>

                  <Button type="submit" className="w-full" size="lg">
                    {t('registration.startEvaluation')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (step === 'submitting') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {t('evaluation.submitting')}
            </h2>
            <p className="text-gray-600">{t('evaluation.analyzing')}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const currentCategoryInfo = categoryInfo[currentQuestion.categoryId];
  const categoryName = currentCategoryInfo
    ? locale === 'en' ? currentCategoryInfo.name.en : currentCategoryInfo.name.es
    : currentQuestion.categoryId;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                {t('evaluation.question')} {currentQuestionIndex + 1} {t('evaluation.of')}{' '}
                {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} size="md" color="primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Progress */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <Card variant="bordered" className="sticky top-24">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {t('evaluation.progress')}
                  </h3>
                  <EvaluationProgress
                    categories={getCategoryProgress()}
                    currentQuestion={currentQuestionIndex + 1}
                    totalQuestions={questions.length}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Question Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <QuestionCard
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
                category={categoryName}
                categoryColor={currentQuestion.categoryId}
              >
                {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
                  <MultipleChoice
                    question={locale === 'en' ? currentQuestion.content.en : currentQuestion.content.es}
                    options={currentQuestion.options.map((opt) => ({
                      id: opt.id,
                      text: locale === 'en' ? opt.text.en : opt.text.es,
                      value: opt.value,
                    }))}
                    selectedId={responses[currentQuestion.id] as string}
                    onChange={handleResponseChange}
                  />
                )}

                {currentQuestion.type === 'scale' && currentQuestion.scaleLabels && (
                  <ScaleQuestion
                    question={locale === 'en' ? currentQuestion.content.en : currentQuestion.content.es}
                    min={currentQuestion.scaleMin || 1}
                    max={currentQuestion.scaleMax || 5}
                    minLabel={locale === 'en' ? currentQuestion.scaleLabels.min.en : locale === 'fr' ? (currentQuestion.scaleLabels.min.fr || currentQuestion.scaleLabels.min.es) : currentQuestion.scaleLabels.min.es}
                    maxLabel={locale === 'en' ? currentQuestion.scaleLabels.max.en : locale === 'fr' ? (currentQuestion.scaleLabels.max.fr || currentQuestion.scaleLabels.max.es) : currentQuestion.scaleLabels.max.es}
                    value={responses[currentQuestion.id] as number}
                    onChange={handleResponseChange}
                  />
                )}

                {currentQuestion.type === 'scale' && !currentQuestion.scaleLabels && (
                  <LikertScale
                    question={locale === 'en' ? currentQuestion.content.en : currentQuestion.content.es}
                    value={responses[currentQuestion.id] as number}
                    onChange={handleResponseChange}
                  />
                )}

                {currentQuestion.type === 'open-text' && (
                  <OpenTextQuestion
                    question={locale === 'en' ? currentQuestion.content.en : currentQuestion.content.es}
                    value={responses[currentQuestion.id] as string}
                    onChange={handleResponseChange}
                    minLength={50}
                  />
                )}

                {currentQuestion.type === 'scenario' && currentQuestion.rubric && (
                  <ScenarioQuestion
                    scenario={locale === 'en' ? currentQuestion.rubric.en : currentQuestion.rubric.es}
                    question={locale === 'en' ? currentQuestion.content.en : currentQuestion.content.es}
                    value={responses[currentQuestion.id] as string}
                    onChange={handleResponseChange}
                  />
                )}

                {currentQuestion.type === 'ranking' && currentQuestion.options && (
                  <RankingQuestion
                    question={locale === 'en' ? currentQuestion.content.en : currentQuestion.content.es}
                    options={currentQuestion.options.map((opt) => ({
                      id: opt.id,
                      text: locale === 'en' ? opt.text.en : opt.text.es,
                    }))}
                    value={responses[currentQuestion.id] as string[]}
                    onChange={handleResponseChange}
                  />
                )}
              </QuestionCard>

              {/* Navigation */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('common.previous')}
                </Button>

                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    onClick={handleSaveProgress}
                    isLoading={isSaving}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {t('evaluation.saveProgress')}
                  </Button>

                  {currentQuestionIndex < questions.length - 1 ? (
                    <Button
                      variant="primary"
                      onClick={handleNext}
                      disabled={!isCurrentQuestionAnswered()}
                    >
                      {t('common.next')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={handleSubmit}
                      disabled={!isCurrentQuestionAnswered()}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {t('common.submit')}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
