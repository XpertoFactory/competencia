'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge, Select } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import { getJobProfiles, getEvaluations, getCombinedResult } from '@/lib/firebase/firestore';
import { calculateJobFit } from '@/lib/scoring/job-fit';
import type { JobProfile, JobFitResult, Evaluation, CombinedAssessmentResult } from '@/types';
import { ArrowLeft, BarChart3, Target, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';

const FIT_LEVEL_COLORS: Record<string, string> = {
  excellent: 'text-green-600',
  good: 'text-blue-600',
  partial: 'text-yellow-600',
  poor: 'text-red-600',
};

const FIT_LEVEL_BG: Record<string, string> = {
  excellent: 'bg-green-100 border-green-400',
  good: 'bg-blue-100 border-blue-400',
  partial: 'bg-yellow-100 border-yellow-400',
  poor: 'bg-red-100 border-red-400',
};

const FIT_LEVEL_RING: Record<string, string> = {
  excellent: 'ring-green-500',
  good: 'ring-blue-500',
  partial: 'ring-yellow-500',
  poor: 'ring-red-500',
};

const PRIORITY_VARIANT: Record<string, 'danger' | 'warning' | 'default'> = {
  critical: 'danger',
  important: 'warning',
  minor: 'default',
};

function getFitBarColor(percentage: number): string {
  if (percentage >= 90) return 'bg-green-500';
  if (percentage >= 70) return 'bg-blue-500';
  if (percentage >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
}

export default function JobFitPage() {
  const t = useTranslations('jobFit');
  const locale = useLocale() as 'es' | 'en';

  const [jobProfiles, setJobProfiles] = useState<JobProfile[]>([]);
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [selectedJobProfileId, setSelectedJobProfileId] = useState('');
  const [selectedEvaluationId, setSelectedEvaluationId] = useState('');
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);
  const [fitResult, setFitResult] = useState<JobFitResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [profiles, evals] = await Promise.all([
          getJobProfiles(),
          getEvaluations('analyzed'),
        ]);
        setJobProfiles(profiles);
        setEvaluations(evals);
      } catch (err) {
        console.error('Failed to load data:', err);
        setError(t('loadError'));
      } finally {
        setIsLoadingData(false);
      }
    }
    loadData();
  }, [t]);

  const handleCalculate = async () => {
    if (!selectedJobProfileId || !selectedEvaluationId) return;

    setIsCalculating(true);
    setError(null);
    setFitResult(null);

    try {
      const combinedResult = await getCombinedResult(selectedEvaluationId);

      if (!combinedResult) {
        setError(t('noCombinedResult'));
        setIsCalculating(false);
        return;
      }

      const selectedJobProfile = jobProfiles.find((jp) => jp.id === selectedJobProfileId);
      if (!selectedJobProfile) {
        setError(t('jobProfileNotFound'));
        setIsCalculating(false);
        return;
      }

      const result = calculateJobFit(combinedResult, selectedJobProfile);
      setFitResult(result);
    } catch (err) {
      console.error('Failed to calculate job fit:', err);
      setError(t('calculateError'));
    } finally {
      setIsCalculating(false);
    }
  };

  const jobProfileOptions = jobProfiles.map((jp) => ({
    value: jp.id,
    label: jp.title[locale],
  }));

  const evaluationOptions = evaluations.map((ev) => ({
    value: ev.id,
    label: `${ev.candidateName} (${ev.id.slice(0, 8)})`,
  }));

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />

        <main className="flex-1 py-8">
          <div className="max-w-5xl mx-auto px-4">
            {/* Back Link */}
            <Link
              href={`/${locale}/admin`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToAdmin')}
            </Link>

            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              <BarChart3 className="w-7 h-7 inline-block mr-2 -mt-1" />
              {t('title')}
            </h1>

            {isLoadingData ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
                <span className="ml-3 text-gray-600">{t('loading')}</span>
              </div>
            ) : jobProfiles.length === 0 ? (
              /* No job profiles fallback */
              <Card variant="bordered">
                <CardContent className="py-12 text-center">
                  <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    {t('noJobProfiles')}
                  </h2>
                  <p className="text-gray-500">{t('noJobProfilesHint')}</p>
                </CardContent>
              </Card>
            ) : evaluations.length === 0 ? (
              /* No analyzed evaluations fallback */
              <Card variant="bordered">
                <CardContent className="py-12 text-center">
                  <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    {t('noEvaluations')}
                  </h2>
                  <p className="text-gray-500">{t('noEvaluationsHint')}</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Selection Controls */}
                <Card variant="bordered">
                  <CardHeader>
                    <CardTitle>{t('selectParameters')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Select
                      label={t('selectJobProfile')}
                      options={jobProfileOptions}
                      placeholder={t('selectJobProfilePlaceholder')}
                      value={selectedJobProfileId}
                      onChange={(e) => {
                        setSelectedJobProfileId(e.target.value);
                        setFitResult(null);
                      }}
                    />

                    <Select
                      label={t('selectCandidate')}
                      options={evaluationOptions}
                      placeholder={t('selectCandidatePlaceholder')}
                      value={selectedEvaluationId}
                      onChange={(e) => {
                        setSelectedEvaluationId(e.target.value);
                        setFitResult(null);
                      }}
                    />

                    <div className="flex justify-end pt-2">
                      <Button
                        variant="primary"
                        onClick={handleCalculate}
                        disabled={!selectedJobProfileId || !selectedEvaluationId || isCalculating}
                        isLoading={isCalculating}
                      >
                        <Target className="w-4 h-4 mr-2" />
                        {t('calculateFit')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Error State */}
                {error && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 text-red-700">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Results */}
                {fitResult && (
                  <div className="space-y-6">
                    {/* Overall Fit Score */}
                    <Card variant="bordered">
                      <CardHeader>
                        <CardTitle>{t('overallFitScore')}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center py-8">
                        <div
                          className={`w-36 h-36 rounded-full border-4 flex flex-col items-center justify-center ${FIT_LEVEL_BG[fitResult.fitLevel]} ring-4 ${FIT_LEVEL_RING[fitResult.fitLevel]}`}
                        >
                          <span className={`text-4xl font-bold ${FIT_LEVEL_COLORS[fitResult.fitLevel]}`}>
                            {Math.round(fitResult.overallFitScore)}%
                          </span>
                        </div>
                        <p className={`mt-4 text-lg font-semibold ${FIT_LEVEL_COLORS[fitResult.fitLevel]}`}>
                          {t(`fitLevels.${fitResult.fitLevel}`)}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {fitResult.jobTitle[locale]}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Dimension Scores */}
                    <Card variant="bordered">
                      <CardHeader>
                        <CardTitle>{t('dimensionScores')}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-2 font-medium text-gray-700">
                                  {t('dimension')}
                                </th>
                                <th className="text-left py-3 px-2 font-medium text-gray-700">
                                  {t('candidateScore')}
                                </th>
                                <th className="text-left py-3 px-2 font-medium text-gray-700">
                                  {t('requiredScore')}
                                </th>
                                <th className="text-right py-3 px-2 font-medium text-gray-700">
                                  {t('fitPercentage')}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {fitResult.dimensionScores.map((dim) => (
                                <tr key={dim.dimension} className="border-b border-gray-100">
                                  <td className="py-3 px-2 font-medium text-gray-800">
                                    {dim.dimension}
                                  </td>
                                  <td className="py-3 px-2">
                                    <div className="flex items-center gap-2">
                                      <div className="flex-1 h-2 bg-gray-200 rounded-full max-w-[120px]">
                                        <div
                                          className="h-2 bg-primary-500 rounded-full"
                                          style={{ width: `${Math.min(dim.candidateScore, 100)}%` }}
                                        />
                                      </div>
                                      <span className="text-gray-600 w-10 text-right">
                                        {Math.round(dim.candidateScore)}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-3 px-2">
                                    <div className="flex items-center gap-2">
                                      <div className="flex-1 h-2 bg-gray-200 rounded-full max-w-[120px]">
                                        <div
                                          className="h-2 bg-gray-500 rounded-full"
                                          style={{ width: `${Math.min(dim.requiredScore, 100)}%` }}
                                        />
                                      </div>
                                      <span className="text-gray-600 w-10 text-right">
                                        {Math.round(dim.requiredScore)}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-3 px-2 text-right">
                                    <Badge
                                      variant={
                                        dim.fitPercentage >= 90
                                          ? 'success'
                                          : dim.fitPercentage >= 70
                                            ? 'primary'
                                            : dim.fitPercentage >= 50
                                              ? 'warning'
                                              : 'danger'
                                      }
                                    >
                                      {Math.round(dim.fitPercentage)}%
                                    </Badge>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Gap Analysis */}
                    {fitResult.gapAnalysis.length > 0 && (
                      <Card variant="bordered">
                        <CardHeader>
                          <CardTitle>
                            <AlertTriangle className="w-5 h-5 inline-block mr-2 -mt-0.5 text-yellow-500" />
                            {t('gapAnalysis')}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {fitResult.gapAnalysis.map((gap, index) => (
                              <div
                                key={index}
                                className="p-4 border border-gray-200 rounded-lg"
                              >
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="font-medium text-gray-900">
                                    {gap.area[locale]}
                                  </h4>
                                  <Badge variant={PRIORITY_VARIANT[gap.priority]} size="sm">
                                    {t(`priorities.${gap.priority}`)}
                                  </Badge>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-3">
                                  <div>
                                    <p className="text-xs text-gray-500 mb-1">{t('currentLevel')}</p>
                                    <div className="flex items-center gap-2">
                                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                        <div
                                          className="h-2 bg-primary-500 rounded-full"
                                          style={{ width: `${Math.min(gap.currentLevel, 100)}%` }}
                                        />
                                      </div>
                                      <span className="text-sm font-medium text-gray-700 w-8 text-right">
                                        {Math.round(gap.currentLevel)}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500 mb-1">{t('requiredLevel')}</p>
                                    <div className="flex items-center gap-2">
                                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                        <div
                                          className="h-2 bg-gray-500 rounded-full"
                                          style={{ width: `${Math.min(gap.requiredLevel, 100)}%` }}
                                        />
                                      </div>
                                      <span className="text-sm font-medium text-gray-700 w-8 text-right">
                                        {Math.round(gap.requiredLevel)}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xs text-gray-500">{t('gapValue')}:</span>
                                  <span className="text-sm font-semibold text-red-600">
                                    {gap.gap}
                                  </span>
                                </div>

                                <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                  {gap.developmentSuggestion[locale]}
                                </p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Recommendations */}
                    {fitResult.recommendations.length > 0 && (
                      <Card variant="bordered">
                        <CardHeader>
                          <CardTitle>
                            <CheckCircle className="w-5 h-5 inline-block mr-2 -mt-0.5 text-green-500" />
                            {t('recommendations')}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {fitResult.recommendations.map((rec, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary-600 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-600" />
                                <span className="text-gray-700">{rec[locale]}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </AuthGuard>
  );
}
