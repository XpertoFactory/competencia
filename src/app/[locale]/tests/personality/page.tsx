'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Input } from '@/components/ui';
import {
  PersonalityStatement,
  PersonalityResult,
  TestResponse,
  BigFiveTrait,
} from '@/types';
import { scorePersonalityTest } from '@/lib/scoring/personality';
import { personalityTestConfig } from '@/lib/seed-data/personality-test';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  User,
  Mail,
  ChevronLeft,
} from 'lucide-react';

type Step = 'registration' | 'test' | 'results';

const traitColors: Record<BigFiveTrait, string> = {
  openness: 'bg-blue-500',
  conscientiousness: 'bg-green-500',
  extraversion: 'bg-purple-500',
  agreeableness: 'bg-orange-500',
  neuroticism: 'bg-red-500',
};

const traitBgColors: Record<BigFiveTrait, string> = {
  openness: 'bg-blue-100',
  conscientiousness: 'bg-green-100',
  extraversion: 'bg-purple-100',
  agreeableness: 'bg-orange-100',
  neuroticism: 'bg-red-100',
};

export default function PersonalityTestPage() {
  const t = useTranslations('tests');
  const locale = useLocale() as 'es' | 'en';

  const config = personalityTestConfig;
  const statements = config.statements.filter((s) => s.isActive).sort((a, b) => a.order - b.order);

  const [step, setStep] = useState<Step>('registration');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<TestResponse[]>([]);
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [isAdvancing, setIsAdvancing] = useState(false);

  const currentStatement: PersonalityStatement | undefined = statements[currentIndex];
  const totalStatements = statements.length;

  const handleStart = () => {
    if (!name.trim()) return;
    setStep('test');
  };

  const handleSelectValue = useCallback(
    (value: number) => {
      if (isAdvancing) return;

      const statement = statements[currentIndex];
      const existingIndex = responses.findIndex((r) => r.questionId === statement.id);
      const newResponse: TestResponse = {
        questionId: statement.id,
        scaleValue: value,
        answeredAt: Timestamp.now(),
      };

      const updatedResponses = [...responses];
      if (existingIndex >= 0) {
        updatedResponses[existingIndex] = newResponse;
      } else {
        updatedResponses.push(newResponse);
      }
      setResponses(updatedResponses);

      // Auto-advance after 500ms
      if (currentIndex < totalStatements - 1) {
        setIsAdvancing(true);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setIsAdvancing(false);
        }, 500);
      } else {
        // Last statement -- compute results
        setIsAdvancing(true);
        setTimeout(() => {
          const scored = scorePersonalityTest(
            updatedResponses,
            statements,
            config.scaleMin,
            config.scaleMax
          );
          setResult(scored);
          setStep('results');
          setIsAdvancing(false);
        }, 500);
      }
    },
    [currentIndex, responses, statements, totalStatements, config, isAdvancing]
  );

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const getCurrentResponse = (): number | undefined => {
    const resp = responses.find((r) => r.questionId === currentStatement?.id);
    return resp?.scaleValue;
  };

  const scaleValues = Array.from(
    { length: config.scaleMax - config.scaleMin + 1 },
    (_, i) => config.scaleMin + i
  );

  const traits: BigFiveTrait[] = [
    'openness',
    'conscientiousness',
    'extraversion',
    'agreeableness',
    'neuroticism',
  ];

  // ─── Registration Step ───
  if (step === 'registration') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-lg mx-auto px-4">
            <Link
              href={`/${locale}/tests`}
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t('backToTests')}
            </Link>

            <Card variant="elevated">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-purple-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {config.name[locale]}
                  </h1>
                  <p className="text-gray-600 mt-2 text-sm">
                    {config.description[locale]}
                  </p>
                </div>

                <div className="space-y-4">
                  <Input
                    label={t('personality.nameLabel')}
                    placeholder={t('personality.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    label={t('personality.emailLabel')}
                    placeholder={t('personality.emailPlaceholder')}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <Button
                  className="w-full mt-6"
                  size="lg"
                  onClick={handleStart}
                  disabled={!name.trim()}
                >
                  {t('personality.startButton')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ─── Test Step ───
  if (step === 'test' && currentStatement) {
    const selectedValue = getCurrentResponse();
    const progressPercent = ((currentIndex + 1) / totalStatements) * 100;

    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-2xl mx-auto px-4">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {t('personality.statementProgress', {
                    current: currentIndex + 1,
                    total: totalStatements,
                  })}
                </span>
                <span className="text-sm text-gray-500">
                  {Math.round(progressPercent)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Statement Card */}
            <Card variant="elevated">
              <CardContent className="p-8">
                <p className="text-lg text-gray-800 text-center font-medium mb-8">
                  {currentStatement.content[locale]}
                </p>

                {/* Likert Scale */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-2">
                    {scaleValues.map((value) => (
                      <button
                        key={value}
                        onClick={() => handleSelectValue(value)}
                        disabled={isAdvancing}
                        className={`
                          flex-1 py-3 rounded-lg text-lg font-semibold transition-all duration-200
                          ${
                            selectedValue === value
                              ? 'bg-purple-600 text-white shadow-md scale-105'
                              : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                          }
                          ${isAdvancing ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
                        `}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 px-1">
                    <span>{config.scaleLabels.min[locale]}</span>
                    <span>{config.scaleLabels.max[locale]}</span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-8 flex justify-between">
                  <Button
                    variant="ghost"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('personality.previous')}
                  </Button>
                  <div />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ─── Results Step ───
  if (step === 'results' && result) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-3xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                {t('personality.resultsTitle')}
              </h1>
              <p className="text-gray-600 mt-1">{name}</p>
            </div>

            {/* Trait Bars */}
            <Card variant="elevated" className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  {t('personality.traitScores')}
                </h2>
                <div className="space-y-5">
                  {traits.map((trait) => {
                    const score = result.scores[trait];
                    return (
                      <div key={trait}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium text-gray-700">
                            {t(`personality.traits.${trait}`)}
                          </span>
                          <span className="text-sm font-semibold text-gray-900">
                            {score}
                          </span>
                        </div>
                        <div className={`w-full ${traitBgColors[trait]} rounded-full h-3`}>
                          <div
                            className={`${traitColors[trait]} h-3 rounded-full transition-all duration-500`}
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Dominant Traits */}
            {result.dominantTraits.length > 0 && (
              <Card variant="elevated" className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('personality.dominantTraits')}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {result.dominantTraits.map((trait) => (
                      <span
                        key={trait}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${traitBgColors[trait]} ${traitColors[trait].replace('bg-', 'text-').replace('-500', '-700')}`}
                      >
                        {t(`personality.traits.${trait}`)}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Trait Descriptions */}
            <Card variant="elevated" className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('personality.traitDescriptions')}
                </h2>
                <div className="space-y-4">
                  {traits.map((trait) => (
                    <div key={trait} className="flex gap-3">
                      <div
                        className={`w-1 rounded-full flex-shrink-0 ${traitColors[trait]}`}
                      />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                          {t(`personality.traits.${trait}`)}
                        </h3>
                        <p className="text-sm text-gray-600 mt-0.5">
                          {result.traitDescriptions[trait][locale]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work Style Summary */}
            <Card variant="elevated" className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('personality.workStyleTitle')}
                </h2>
                <p className="text-gray-700">
                  {result.workStyleSummary[locale]}
                </p>
              </CardContent>
            </Card>

            {/* Back Link */}
            <div className="text-center">
              <Link href={`/${locale}/tests`}>
                <Button variant="outline" size="lg">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('personality.backToTests')}
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return null;
}
