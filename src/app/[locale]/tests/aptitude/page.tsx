'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import { CircularProgress, Progress } from '@/components/ui';
import { Input } from '@/components/ui';
import { Badge } from '@/components/ui';
import {
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  User,
  Mail,
  Brain,
  Target,
  TrendingUp,
  TrendingDown,
  Briefcase,
} from 'lucide-react';
import type {
  AptitudeQuestion,
  AptitudeResult,
  TestResponse,
  AptitudeSubtype,
} from '@/types';
import { scoreAptitudeTest } from '@/lib/scoring/aptitude';
import { aptitudeTestConfig } from '@/lib/seed-data/aptitude-test';
import { Timestamp } from 'firebase/firestore';

type Step = 'registration' | 'test' | 'results';

const SUBTYPE_COLORS: Record<AptitudeSubtype, string> = {
  numerical: 'primary',
  verbal: 'secondary',
  analytical: 'warning',
  technical: 'success',
};

export default function AptitudeTestPage() {
  const t = useTranslations('tests');
  const locale = useLocale() as 'es' | 'en';

  // ---- State ----
  const [step, setStep] = useState<Step>('registration');
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<TestResponse[]>([]);
  const [result, setResult] = useState<AptitudeResult | null>(null);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(
    aptitudeTestConfig.totalTimeLimitMinutes * 60
  );
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const questions: AptitudeQuestion[] = aptitudeTestConfig.questions.filter(
    (q) => q.isActive
  );
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex] ?? null;

  // ---- Timer ----
  const handleSubmit = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    const scored = scoreAptitudeTest(responses, questions);
    setResult(scored);
    setStep('results');
  }, [responses, questions]);

  useEffect(() => {
    if (step !== 'test') return;

    timerRef.current = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [step, handleSubmit]);

  // ---- Helpers ----
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const selectedOptionId = (questionId: string) =>
    responses.find((r) => r.questionId === questionId)?.selectedOptionId ?? null;

  const handleSelectOption = (questionId: string, optionId: string) => {
    setResponses((prev) => {
      const existing = prev.findIndex((r) => r.questionId === questionId);
      const entry: TestResponse = {
        questionId,
        selectedOptionId: optionId,
        answeredAt: Timestamp.now(),
      };
      if (existing >= 0) {
        const copy = [...prev];
        copy[existing] = entry;
        return copy;
      }
      return [...prev, entry];
    });
  };

  const handleStart = () => {
    if (!candidateName.trim()) return;
    setTimeLeftSeconds(aptitudeTestConfig.totalTimeLimitMinutes * 60);
    setStep('test');
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const isLastQuestion = currentIndex === totalQuestions - 1;
  const answeredCount = responses.length;
  const progressPercent =
    totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const subtypeLabel = (subtype: AptitudeSubtype) =>
    t(`aptitude.subtypes.${subtype}` as Parameters<typeof t>[0]);

  const getScoreColor = (score: number): 'success' | 'warning' | 'danger' | 'primary' => {
    if (score >= 70) return 'success';
    if (score >= 50) return 'warning';
    if (score >= 30) return 'danger';
    return 'danger';
  };

  // ==================================================================
  // STEP 1 — Registration
  // ==================================================================
  if (step === 'registration') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <Card variant="elevated" className="w-full max-w-lg">
            <CardContent className="py-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                  <Brain className="w-8 h-8 text-primary-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {aptitudeTestConfig.name[locale]}
                </h1>
                <p className="text-gray-600">
                  {aptitudeTestConfig.description[locale]}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-100 rounded-lg p-3">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>
                    {t('aptitude.timeLimit', {
                      minutes: aptitudeTestConfig.totalTimeLimitMinutes,
                    } as Record<string, string | number>)}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-100 rounded-lg p-3">
                  <Target className="w-4 h-4 flex-shrink-0" />
                  <span>
                    {t('aptitude.questionCount', {
                      count: totalQuestions,
                    } as Record<string, string | number>)}
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Input
                  label={t('aptitude.nameLabel')}
                  placeholder={t('aptitude.namePlaceholder')}
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  required
                  name="candidateName"
                />
                <Input
                  label={t('aptitude.emailLabel')}
                  placeholder={t('aptitude.emailPlaceholder')}
                  type="email"
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  name="candidateEmail"
                />

                <Button
                  size="lg"
                  className="w-full mt-4"
                  onClick={handleStart}
                  disabled={!candidateName.trim()}
                >
                  {t('aptitude.start')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // ==================================================================
  // STEP 2 — Test (one question at a time)
  // ==================================================================
  if (step === 'test' && currentQuestion) {
    const selected = selectedOptionId(currentQuestion.id);
    const isTimeLow = timeLeftSeconds <= 60;

    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">
          {/* Timer + progress header */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-gray-700">
              {t('aptitude.questionOf', {
                current: currentIndex + 1,
                total: totalQuestions,
              } as Record<string, string | number>)}
            </span>
            <div
              className={`flex items-center gap-2 font-mono text-sm font-semibold px-3 py-1.5 rounded-lg ${
                isTimeLow
                  ? 'bg-red-100 text-red-700 animate-pulse'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Clock className="w-4 h-4" />
              {formatTime(timeLeftSeconds)}
            </div>
          </div>

          {/* Progress bar */}
          <Progress
            value={progressPercent}
            max={100}
            size="sm"
            color="primary"
            className="mb-6"
          />

          {/* Question card */}
          <Card variant="elevated" className="mb-6">
            <CardContent className="py-6">
              {/* Subtype badge */}
              <Badge
                variant={SUBTYPE_COLORS[currentQuestion.subtype] as 'primary' | 'secondary' | 'warning' | 'success'}
                size="sm"
                className="mb-4"
              >
                {subtypeLabel(currentQuestion.subtype)}
              </Badge>

              {/* Context block */}
              {currentQuestion.context && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 text-sm text-blue-900 whitespace-pre-line">
                  {currentQuestion.context[locale]}
                </div>
              )}

              {/* Question content */}
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                {currentQuestion.content[locale]}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = selected === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        handleSelectOption(currentQuestion.id, option.id)
                      }
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          isSelected
                            ? 'font-semibold text-primary-800'
                            : 'text-gray-700'
                        }`}
                      >
                        {option.text[locale]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('aptitude.previous')}
            </Button>

            {isLastQuestion ? (
              <Button onClick={handleSubmit}>
                {t('aptitude.submit')}
                <CheckCircle2 className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button onClick={handleNext}>
                {t('aptitude.next')}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ==================================================================
  // STEP 3 — Results
  // ==================================================================
  if (step === 'results' && result) {
    const subtypes: AptitudeSubtype[] = ['numerical', 'verbal', 'analytical'];
    if (result.scores.technical !== undefined) {
      subtypes.push('technical');
    }

    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 px-4 py-10 max-w-3xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {t('aptitude.resultsTitle')}
            </h1>
            <p className="text-gray-500">{candidateName}</p>
          </div>

          {/* Overall score */}
          <Card variant="elevated" className="mb-8">
            <CardContent className="flex flex-col items-center py-8">
              <CircularProgress
                value={result.overallScore}
                max={100}
                size={160}
                strokeWidth={12}
                color={getScoreColor(result.overallScore)}
                showValue={false}
              />
              <span className="text-4xl font-bold text-gray-900 -mt-24 mb-16">
                {result.overallScore}
              </span>
              <p className="text-sm text-gray-500 mt-2">
                {t('aptitude.overallScore')}
              </p>
            </CardContent>
          </Card>

          {/* Subtype breakdown */}
          <Card variant="bordered" className="mb-6">
            <CardContent className="py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('aptitude.breakdown')}
              </h3>
              <div className="space-y-4">
                {subtypes.map((subtype) => {
                  const score = result.scores[subtype] ?? 0;
                  return (
                    <div key={subtype}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {subtypeLabel(subtype)}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {score}%
                        </span>
                      </div>
                      <Progress
                        value={score}
                        max={100}
                        size="md"
                        color={getScoreColor(score)}
                      />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Strengths */}
          {result.strengths.length > 0 && (
            <Card variant="bordered" className="mb-6">
              <CardContent className="py-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('aptitude.strengths')}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.strengths.map((s) => (
                    <Badge key={s} variant="success" size="md">
                      {subtypeLabel(s)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Weaknesses */}
          {result.weaknesses.length > 0 && (
            <Card variant="bordered" className="mb-6">
              <CardContent className="py-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingDown className="w-5 h-5 text-yellow-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('aptitude.weaknesses')}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.weaknesses.map((w) => (
                    <Badge key={w} variant="warning" size="md">
                      {subtypeLabel(w)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Suitable roles */}
          {result.suitableRoles.length > 0 && (
            <Card variant="bordered" className="mb-8">
              <CardContent className="py-6">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('aptitude.suitableRoles')}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {result.suitableRoles.map((role, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{role[locale]}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Back link */}
          <div className="text-center">
            <a
              href={`/${locale}/tests`}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              {t('aptitude.backToTests')}
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Fallback (should not reach)
  return null;
}
