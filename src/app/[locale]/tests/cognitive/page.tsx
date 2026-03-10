'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Badge, Progress, Input } from '@/components/ui';
import {
  CognitiveQuestion,
  CognitiveResult,
  TestResponse,
  CognitiveSubtype,
} from '@/types';
import { scoreCognitiveTest } from '@/lib/scoring/cognitive';
import { cognitiveTestConfig } from '@/lib/seed-data/cognitive-test';
import { Timestamp } from 'firebase/firestore';
import {
  Brain,
  Clock,
  ArrowLeft,
  ArrowRight,
  Check,
  AlertTriangle,
  BarChart3,
  User,
  Mail,
  Trophy,
} from 'lucide-react';

type Step = 'registration' | 'test' | 'results';

const SUBTYPE_COLORS: Record<CognitiveSubtype, string> = {
  logical: 'bg-blue-500',
  verbal: 'bg-emerald-500',
  numerical: 'bg-amber-500',
  pattern: 'bg-purple-500',
};

const SUBTYPE_BADGE_VARIANTS: Record<CognitiveSubtype, 'primary' | 'success' | 'warning' | 'secondary'> = {
  logical: 'primary',
  verbal: 'success',
  numerical: 'warning',
  pattern: 'secondary',
};

export default function CognitiveTestPage() {
  const t = useTranslations('tests');
  const locale = useLocale() as 'es' | 'en';

  // --- State ---
  const [step, setStep] = useState<Step>('registration');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const questions = cognitiveTestConfig.questions.filter((q) => q.isActive);
  const totalTimeLimitSeconds = cognitiveTestConfig.totalTimeLimitMinutes * 60;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<TestResponse[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Timers
  const [globalTimeRemaining, setGlobalTimeRemaining] = useState(totalTimeLimitSeconds);
  const [questionTimeRemaining, setQuestionTimeRemaining] = useState(0);
  const startTimeRef = useRef<number>(0);
  const advancingRef = useRef(false);

  // Results
  const [result, setResult] = useState<CognitiveResult | null>(null);

  const currentQuestion: CognitiveQuestion | undefined = questions[currentIndex];

  // --- Advance to next question ---
  const advanceQuestion = useCallback(() => {
    if (advancingRef.current) return;
    advancingRef.current = true;

    // Record response if not already recorded for this question
    setResponses((prev) => {
      const alreadyAnswered = prev.find((r) => r.questionId === currentQuestion?.id);
      if (alreadyAnswered) return prev;
      return [
        ...prev,
        {
          questionId: currentQuestion?.id ?? '',
          selectedOptionId: undefined,
          answeredAt: Timestamp.now(),
        },
      ];
    });

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      advancingRef.current = false;
    } else {
      // Test complete - will be handled by effect
      setStep('results');
      advancingRef.current = false;
    }
  }, [currentIndex, currentQuestion, questions.length]);

  // --- Handle option selection ---
  const handleSelectOption = useCallback(
    (optionId: string) => {
      if (selectedOptionId) return; // Already selected
      setSelectedOptionId(optionId);

      // Record response
      setResponses((prev) => {
        const filtered = prev.filter((r) => r.questionId !== currentQuestion?.id);
        return [
          ...filtered,
          {
            questionId: currentQuestion?.id ?? '',
            selectedOptionId: optionId,
            answeredAt: Timestamp.now(),
          },
        ];
      });

      // Auto-advance after 500ms
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setSelectedOptionId(null);
          advancingRef.current = false;
        } else {
          setStep('results');
        }
      }, 500);
    },
    [selectedOptionId, currentQuestion, currentIndex, questions.length]
  );

  // --- Initialize question timer when question changes ---
  useEffect(() => {
    if (step !== 'test' || !currentQuestion) return;
    setQuestionTimeRemaining(currentQuestion.timeLimitSeconds);
    advancingRef.current = false;
  }, [currentIndex, step, currentQuestion]);

  // --- Per-question countdown ---
  useEffect(() => {
    if (step !== 'test') return;

    const interval = setInterval(() => {
      setQuestionTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Time expired for this question - auto advance
          advanceQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [step, currentIndex, advanceQuestion]);

  // --- Global countdown ---
  useEffect(() => {
    if (step !== 'test') return;

    const interval = setInterval(() => {
      setGlobalTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setStep('results');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [step]);

  // --- Compute results when entering results step ---
  useEffect(() => {
    if (step !== 'results' || result) return;

    const timeUsed = totalTimeLimitSeconds - globalTimeRemaining;
    const scored = scoreCognitiveTest(responses, questions, timeUsed);
    setResult(scored);
  }, [step, result, responses, questions, globalTimeRemaining, totalTimeLimitSeconds]);

  // --- Start test ---
  const handleStart = () => {
    if (!name.trim()) return;
    startTimeRef.current = Date.now();
    setGlobalTimeRemaining(totalTimeLimitSeconds);
    setStep('test');
  };

  // --- Format time ---
  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // --- Subtype score percentage ---
  const subtypePercentage = (subtype: CognitiveSubtype): number => {
    if (!result) return 0;
    const s = result.subtypeScores[subtype];
    return s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
  };

  // =========================================================================
  // STEP 1: Registration
  // =========================================================================
  if (step === 'registration') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <Card variant="elevated" className="w-full max-w-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <Brain className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {t('cognitive.title')}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {cognitiveTestConfig.description[locale]}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium">
                      {questions.length} {t('cognitive.questions')} &middot;{' '}
                      {cognitiveTestConfig.totalTimeLimitMinutes} {t('cognitive.minutes')}
                    </p>
                    <p className="mt-1 text-blue-600">
                      {t('cognitive.timerWarning')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <User className="inline h-4 w-4 mr-1" />
                    {t('cognitive.name')}
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('cognitive.namePlaceholder')}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <Mail className="inline h-4 w-4 mr-1" />
                    {t('cognitive.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('cognitive.emailPlaceholder')}
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full mt-4"
                  onClick={handleStart}
                  disabled={!name.trim()}
                >
                  <ArrowRight className="h-5 w-5 mr-2" />
                  {t('cognitive.start')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // =========================================================================
  // STEP 2: Test
  // =========================================================================
  if (step === 'test' && currentQuestion) {
    const progressPercent = ((currentIndex + 1) / questions.length) * 100;
    const globalUrgent = globalTimeRemaining <= 60;
    const questionUrgent = questionTimeRemaining <= 10;

    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 px-4 py-6 max-w-3xl mx-auto w-full">
          {/* Top bar: global timer + progress */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Brain className="h-4 w-4" />
              <span>
                {t('cognitive.questionOf', {
                  current: currentIndex + 1,
                  total: questions.length,
                })}
              </span>
            </div>
            <div
              className={`flex items-center gap-1.5 text-sm font-mono font-semibold px-3 py-1 rounded-full ${
                globalUrgent
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Clock className="h-4 w-4" />
              {formatTime(globalTimeRemaining)}
            </div>
          </div>

          {/* Progress bar */}
          <Progress value={progressPercent} size="sm" className="mb-6" />

          {/* Question card */}
          <Card variant="elevated" className="mb-4">
            <CardContent className="p-6">
              {/* Subtype badge + question timer */}
              <div className="flex items-center justify-between mb-4">
                <Badge variant={SUBTYPE_BADGE_VARIANTS[currentQuestion.subtype]}>
                  {t(`cognitive.subtypes.${currentQuestion.subtype}`)}
                </Badge>
                <div
                  className={`flex items-center gap-1 text-sm font-mono px-2 py-0.5 rounded ${
                    questionUrgent
                      ? 'bg-red-100 text-red-600 animate-pulse'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <Clock className="h-3.5 w-3.5" />
                  {questionTimeRemaining}s
                </div>
              </div>

              {/* Question text */}
              <p className="text-lg font-medium text-gray-900 mb-6">
                {currentQuestion.content[locale]}
              </p>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOptionId === option.id;
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      disabled={!!selectedOptionId}
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      } ${selectedOptionId && !isSelected ? 'opacity-50' : ''}`}
                    >
                      <span
                        className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-semibold shrink-0 ${
                          isSelected
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {isSelected ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          letter
                        )}
                      </span>
                      <span className="text-gray-800">
                        {option.text[locale]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Warning when global time is low */}
          {globalUrgent && (
            <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              {t('cognitive.timeRunningOut')}
            </div>
          )}
        </main>
        <Footer />
      </div>
    );
  }

  // =========================================================================
  // STEP 3: Results
  // =========================================================================
  if (step === 'results' && result) {
    const scorePercent = Math.round(
      (result.totalCorrect / result.totalQuestions) * 100
    );
    const subtypes: CognitiveSubtype[] = ['logical', 'verbal', 'numerical', 'pattern'];

    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-primary-100 rounded-full mb-4">
              <Trophy className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('cognitive.resultsTitle')}
            </h1>
            <p className="text-gray-500">{name}</p>
          </div>

          {/* Score overview */}
          <Card variant="elevated" className="mb-6">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {/* Correct answers */}
                <div>
                  <p className="text-3xl font-bold text-primary-600">
                    {result.totalCorrect}/{result.totalQuestions}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('cognitive.correct')}
                  </p>
                </div>

                {/* Percentile */}
                <div>
                  <p className="text-3xl font-bold text-emerald-600">
                    P{result.percentile}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('cognitive.percentile')}
                  </p>
                </div>

                {/* IQ Estimate */}
                <div>
                  <p className="text-3xl font-bold text-amber-600">
                    {result.iqEstimate}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('cognitive.iqEstimate')}
                  </p>
                </div>

                {/* Time used */}
                <div>
                  <p className="text-3xl font-bold text-gray-700">
                    {formatTime(result.timeUsedSeconds)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('cognitive.timeUsed')}
                  </p>
                </div>
              </div>

              {/* Classification */}
              <div className="mt-6 text-center">
                <Badge
                  variant={scorePercent >= 75 ? 'success' : scorePercent >= 50 ? 'warning' : 'danger'}
                  size="lg"
                >
                  {result.classification[locale]}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Breakdown by subtype */}
          <Card variant="bordered" className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-gray-400" />
                {t('cognitive.breakdown')}
              </h2>

              <div className="space-y-4">
                {subtypes.map((subtype) => {
                  const pct = subtypePercentage(subtype);
                  const scores = result.subtypeScores[subtype];

                  return (
                    <div key={subtype}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {t(`cognitive.subtypes.${subtype}`)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {scores.correct}/{scores.total} ({pct}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${SUBTYPE_COLORS[subtype]}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Back link */}
          <div className="text-center">
            <a
              href={`/${locale}/tests`}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('cognitive.backToTests')}
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Fallback loading state
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-gray-500">{t('cognitive.loading')}</div>
      </main>
      <Footer />
    </div>
  );
}
