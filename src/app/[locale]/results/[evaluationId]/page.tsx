'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import {
  IndicesChart,
  ProfilesSummary,
  StrengthsOpportunities,
  PersonalizedMessage,
  TrainingPath,
  ResourceList,
  StrategiesList,
} from '@/components/results';
import { Download, Share2, User, Calendar, Loader2, AlertCircle, Clock, Check } from 'lucide-react';
import { getResult, getEvaluation, COLLECTIONS, subscribeToDocument } from '@/lib/firebase/firestore';
import { generateResultsPdf } from '@/lib/pdf/generateReport';
import type { AnalysisResult, Evaluation } from '@/types';

type PageState = 'loading' | 'analyzing' | 'ready' | 'error';

export default function ResultsPage() {
  const params = useParams();
  const t = useTranslations();
  const locale = useLocale() as 'es' | 'en';
  const evaluationId = params.evaluationId as string;

  const [pageState, setPageState] = useState<PageState>('loading');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [showCopiedFeedback, setShowCopiedFeedback] = useState(false);

  useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    async function fetchResults() {
      try {
        // Try to get the analysis result
        const analysisResult = await getResult(evaluationId);

        if (analysisResult) {
          setResult(analysisResult);
          setPageState('ready');
          return;
        }

        // No result yet - check evaluation status
        const eval_ = await getEvaluation(evaluationId);
        if (!eval_) {
          setPageState('error');
          return;
        }

        setEvaluation(eval_);

        if (eval_.status === 'completed') {
          // Analysis in progress - subscribe for real-time updates
          setPageState('analyzing');
          unsubscribe = subscribeToDocument<AnalysisResult>(
            COLLECTIONS.RESULTS,
            evaluationId,
            (data) => {
              if (data) {
                setResult(data);
                setPageState('ready');
              }
            }
          );
        } else if (eval_.status === 'analyzed') {
          // Try fetching result again (race condition)
          const retryResult = await getResult(evaluationId);
          if (retryResult) {
            setResult(retryResult);
            setPageState('ready');
          } else {
            setPageState('error');
          }
        } else {
          // Still in progress
          setPageState('error');
        }
      } catch {
        setPageState('error');
      }
    }

    fetchResults();

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [evaluationId]);

  const handleDownloadPdf = async () => {
    if (!result || isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    try {
      await generateResultsPdf(result, locale);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopiedFeedback(true);
      setTimeout(() => setShowCopiedFeedback(false), 2500);
    } catch {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowCopiedFeedback(true);
      setTimeout(() => setShowCopiedFeedback(false), 2500);
    }
  };

  if (pageState === 'loading') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-10 h-10 text-primary-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">{t('common.loading')}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (pageState === 'analyzing') {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Card variant="bordered" className="max-w-md mx-4">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4 animate-pulse" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {t('results.analyzing')}
              </h2>
              <p className="text-gray-600">
                {t('results.analyzingDescription')}
              </p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  if (pageState === 'error' || !result) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Card variant="bordered" className="max-w-md mx-4">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {t('errors.resultsNotFound')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('errors.generic')}
              </p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const analyzedDate = result.analyzedAt?.toDate
    ? result.analyzedAt.toDate()
    : new Date(result.analyzedAt as any);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {t('results.title')}
                </h1>
                <p className="text-gray-600 mt-1">{t('results.subtitle')}</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleDownloadPdf} disabled={isGeneratingPdf}>
                  {isGeneratingPdf ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4 mr-2" />
                  )}
                  {t('results.downloadPdf')}
                </Button>
                <Button variant="outline" onClick={handleShare}>
                  {showCopiedFeedback ? (
                    <Check className="w-4 h-4 mr-2 text-green-600" />
                  ) : (
                    <Share2 className="w-4 h-4 mr-2" />
                  )}
                  {showCopiedFeedback ? t('results.linkCopied') : t('results.shareResults')}
                </Button>
              </div>
            </div>

            {/* Candidate Info */}
            <Card variant="bordered" className="mt-6">
              <CardContent className="py-4">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">{t('results.generatedFor')}</p>
                      <p className="font-medium text-gray-900">{result.candidateName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">{t('results.generatedOn')}</p>
                      <p className="font-medium text-gray-900">
                        {analyzedDate.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Indices */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t('results.indices.title')}
            </h2>
            <IndicesChart
              data={result.indices}
              labels={{
                professional: t('results.indices.professional'),
                softSkills: t('results.indices.softSkills'),
                readiness: t('results.indices.readiness'),
              }}
              showRadar
              showCircular
            />
          </section>

          {/* Strengths and Opportunities */}
          <section className="mb-10">
            <StrengthsOpportunities
              strengths={result.strengths}
              opportunities={result.growthOpportunities}
              locale={locale}
              strengthsTitle={t('results.strengths.title')}
              strengthsSubtitle={t('results.strengths.subtitle')}
              opportunitiesTitle={t('results.opportunities.title')}
              opportunitiesSubtitle={t('results.opportunities.subtitle')}
            />
          </section>

          {/* Assigned Profiles */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {t('results.profiles.title')}
            </h2>
            <p className="text-gray-600 mb-4">{t('results.profiles.subtitle')}</p>
            <ProfilesSummary
              profiles={result.assignedProfiles}
              labels={{
                professional: t('results.profiles.professional'),
                softSkills: t('results.profiles.softSkills'),
                readiness: t('results.profiles.readiness'),
              }}
              locale={locale}
            />
          </section>

          {/* Recommendations */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t('results.recommendations.title')}
            </h2>

            <div className="space-y-6">
              {/* Personalized Message */}
              <PersonalizedMessage
                message={result.recommendations.personalizedMessage}
                locale={locale}
              />

              {/* Training Path */}
              {result.recommendations.trainingPath.length > 0 && (
                <TrainingPath
                  steps={result.recommendations.trainingPath}
                  locale={locale}
                  title={t('results.recommendations.trainingPath.title')}
                  subtitle={t('results.recommendations.trainingPath.subtitle')}
                />
              )}

              {/* Activities and Resources Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.recommendations.activities.length > 0 && (
                  <ResourceList
                    resources={result.recommendations.activities}
                    locale={locale}
                    title={t('results.recommendations.activities.title')}
                    subtitle={t('results.recommendations.activities.subtitle')}
                    icon="activity"
                  />
                )}
                {result.recommendations.resources.length > 0 && (
                  <ResourceList
                    resources={result.recommendations.resources}
                    locale={locale}
                    title={t('results.recommendations.resources.title')}
                    subtitle={t('results.recommendations.resources.subtitle')}
                    icon="resource"
                  />
                )}
              </div>

              {/* Change Management Strategies */}
              {result.recommendations.changeManagementStrategies.length > 0 && (
                <StrategiesList
                  strategies={result.recommendations.changeManagementStrategies}
                  locale={locale}
                  title={t('results.recommendations.changeStrategies.title')}
                  subtitle={t('results.recommendations.changeStrategies.subtitle')}
                />
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
