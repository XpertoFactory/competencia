'use client';

import { useState, useCallback, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import type { DISCForcedChoice, DISCResult, DISCDimension, TestResponse } from '@/types';
import { scoreDISCTest } from '@/lib/scoring/disc';
import { discTestConfig } from '@/lib/seed-data/disc-test';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  Mail,
  User,
  Shield,
  Zap,
  Heart,
  Search,
} from 'lucide-react';

type Step = 'registration' | 'test' | 'results';

const dimensionColors: Record<DISCDimension, string> = {
  dominance: 'bg-red-500',
  influence: 'bg-yellow-500',
  steadiness: 'bg-green-500',
  conscientiousness: 'bg-blue-500',
};

const dimensionBgLight: Record<DISCDimension, string> = {
  dominance: 'bg-red-100',
  influence: 'bg-yellow-100',
  steadiness: 'bg-green-100',
  conscientiousness: 'bg-blue-100',
};

const dimensionIcons: Record<DISCDimension, typeof Zap> = {
  dominance: Zap,
  influence: Heart,
  steadiness: Shield,
  conscientiousness: Search,
};

export default function DISCTestPage() {
  const t = useTranslations('tests');
  const locale = useLocale() as 'es' | 'en';

  const [step, setStep] = useState<Step>('registration');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [responses, setResponses] = useState<TestResponse[]>([]);
  const [selectedOption, setSelectedOption] = useState<'a' | 'b' | null>(null);
  const [result, setResult] = useState<DISCResult | null>(null);

  const forcedChoices = discTestConfig.forcedChoices.filter((fc) => fc.isActive);
  const totalPairs = forcedChoices.length;
  const currentChoice = forcedChoices[currentPairIndex];

  const handleStartTest = useCallback(() => {
    if (!name.trim()) return;
    setStep('test');
  }, [name]);

  const handleSelectOption = useCallback(
    (option: 'a' | 'b') => {
      setSelectedOption(option);

      const newResponse: TestResponse = {
        questionId: currentChoice.id,
        selectedOptionId: option,
        answeredAt: Timestamp.now(),
      };

      setResponses((prev) => {
        const existing = prev.findIndex((r) => r.questionId === currentChoice.id);
        if (existing >= 0) {
          const updated = [...prev];
          updated[existing] = newResponse;
          return updated;
        }
        return [...prev, newResponse];
      });

      // Auto-advance after 500ms
      setTimeout(() => {
        if (currentPairIndex < totalPairs - 1) {
          setCurrentPairIndex((prev) => prev + 1);
          setSelectedOption(null);
        } else {
          // Last question - compute results
          const allResponses = [
            ...responses.filter((r) => r.questionId !== currentChoice.id),
            newResponse,
          ];
          const discResult = scoreDISCTest(allResponses, forcedChoices);
          setResult(discResult);
          setStep('results');
        }
      }, 500);
    },
    [currentChoice, currentPairIndex, totalPairs, responses, forcedChoices]
  );

  // Reset selection when pair changes
  useEffect(() => {
    setSelectedOption(null);
  }, [currentPairIndex]);

  const progressPercent = ((currentPairIndex + 1) / totalPairs) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* ====== STEP 1: Registration ====== */}
          {step === 'registration' && (
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                  <Compass className="w-8 h-8 text-orange-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {t('disc.title')}
                </h1>
                <p className="text-gray-600 mt-2">{t('disc.description')}</p>
              </div>

              <Card variant="bordered">
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t('disc.nameLabel')}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        placeholder={t('disc.namePlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {t('disc.emailLabel')}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                        placeholder={t('disc.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full mt-4 bg-orange-600 hover:bg-orange-700 focus:ring-orange-500"
                    onClick={handleStartTest}
                    disabled={!name.trim()}
                  >
                    {t('disc.startButton')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ====== STEP 2: Test ====== */}
          {step === 'test' && currentChoice && (
            <div>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {t('disc.pairProgress', {
                      current: currentPairIndex + 1,
                      total: totalPairs,
                    })}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {Math.round(progressPercent)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Instructions */}
              <p className="text-center text-gray-600 mb-8">
                {t('disc.instructions')}
              </p>

              {/* Forced-choice cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Option A */}
                <button
                  onClick={() => handleSelectOption('a')}
                  disabled={selectedOption !== null}
                  className={`group text-left transition-all duration-200 rounded-xl border-2 p-6 ${
                    selectedOption === 'a'
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : selectedOption === 'b'
                        ? 'border-gray-200 bg-white opacity-50'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                        selectedOption === 'a'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                      }`}
                    >
                      A
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed pt-1">
                      {currentChoice.optionA.text[locale]}
                    </p>
                  </div>
                  {selectedOption === 'a' && (
                    <div className="mt-4 flex items-center text-blue-600">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">
                        {t('disc.selected')}
                      </span>
                    </div>
                  )}
                </button>

                {/* Option B */}
                <button
                  onClick={() => handleSelectOption('b')}
                  disabled={selectedOption !== null}
                  className={`group text-left transition-all duration-200 rounded-xl border-2 p-6 ${
                    selectedOption === 'b'
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : selectedOption === 'a'
                        ? 'border-gray-200 bg-white opacity-50'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                        selectedOption === 'b'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                      }`}
                    >
                      B
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed pt-1">
                      {currentChoice.optionB.text[locale]}
                    </p>
                  </div>
                  {selectedOption === 'b' && (
                    <div className="mt-4 flex items-center text-blue-600">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">
                        {t('disc.selected')}
                      </span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* ====== STEP 3: Results ====== */}
          {step === 'results' && result && (
            <div>
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {t('disc.resultsTitle')}
                </h1>
                <p className="text-gray-600 mt-2">
                  {t('disc.resultsSubtitle', { name })}
                </p>
              </div>

              {/* DISC Profile Bars */}
              <Card variant="bordered" className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    {t('disc.profileTitle')}
                  </h2>
                  <div className="space-y-4">
                    {(
                      [
                        'dominance',
                        'influence',
                        'steadiness',
                        'conscientiousness',
                      ] as DISCDimension[]
                    ).map((dim) => {
                      const Icon = dimensionIcons[dim];
                      const score = result.profile[dim];
                      return (
                        <div key={dim}>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${dimensionBgLight[dim]}`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium text-gray-700">
                                {t(`disc.dimensions.${dim}`)}
                              </span>
                            </div>
                            <span className="text-sm font-bold text-gray-900">
                              {score}
                            </span>
                          </div>
                          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-700 ${dimensionColors[dim]}`}
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Primary & Secondary Style */}
              <Card variant="bordered" className="mb-6">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                      <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">
                        {t('disc.primaryStyle')}
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {t(`disc.dimensions.${result.primaryStyle}`)}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                        {t('disc.secondaryStyle')}
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        {t(`disc.dimensions.${result.secondaryStyle}`)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Style Description */}
              <Card variant="bordered" className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('disc.styleDescriptionTitle')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {result.styleDescription[locale]}
                  </p>
                </CardContent>
              </Card>

              {/* Leadership Style */}
              <Card variant="bordered" className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('disc.leadershipStyleTitle')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {result.leadershipStyle[locale]}
                  </p>
                </CardContent>
              </Card>

              {/* Communication Style */}
              <Card variant="bordered" className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('disc.communicationStyleTitle')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {result.communicationStyle[locale]}
                  </p>
                </CardContent>
              </Card>

              {/* Strengths & Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Strengths */}
                <Card variant="bordered">
                  <CardContent className="pt-6">
                    <h2 className="text-lg font-semibold text-green-700 mb-3">
                      {t('disc.strengthsTitle')}
                    </h2>
                    <ul className="space-y-2">
                      {result.strengths.map((strength, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">
                            {strength[locale]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Challenges */}
                <Card variant="bordered">
                  <CardContent className="pt-6">
                    <h2 className="text-lg font-semibold text-amber-700 mb-3">
                      {t('disc.challengesTitle')}
                    </h2>
                    <ul className="space-y-2">
                      {result.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">
                            {challenge[locale]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Back to tests link */}
              <div className="text-center">
                <Link
                  href={`/${locale}/tests`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('disc.backToTests')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
