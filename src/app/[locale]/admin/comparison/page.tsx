'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge, Select } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import { getEvaluations, getResult, getProfiles } from '@/lib/firebase/firestore';
import type { Evaluation, AnalysisResult, Profile } from '@/types';
import { ArrowLeft, Plus, X, Loader2, BarChart3, Table } from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

const CANDIDATE_COLORS = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B'];
const MAX_CANDIDATES = 4;

type ViewMode = 'radar' | 'table';

interface CandidateData {
  evaluation: Evaluation;
  result: AnalysisResult;
  profile?: Profile;
}

export default function ComparisonPage() {
  const t = useTranslations('comparison');
  const locale = useLocale() as 'es' | 'en';

  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedEvaluationIds, setSelectedEvaluationIds] = useState<string[]>([]);
  const [candidateData, setCandidateData] = useState<CandidateData[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('radar');
  const [loading, setLoading] = useState(true);
  const [comparing, setComparing] = useState(false);
  const [hasCompared, setHasCompared] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  // Fetch evaluations and profiles on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const [allEvaluations, allProfiles] = await Promise.all([
          getEvaluations(),
          getProfiles(false),
        ]);
        const analyzed = allEvaluations.filter((e) => e.status === 'analyzed');
        setEvaluations(analyzed);
        setProfiles(allProfiles);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const addCandidate = useCallback(
    (evaluationId: string) => {
      if (
        evaluationId &&
        !selectedEvaluationIds.includes(evaluationId) &&
        selectedEvaluationIds.length < MAX_CANDIDATES
      ) {
        setSelectedEvaluationIds((prev) => [...prev, evaluationId]);
        setSelectValue('');
      }
    },
    [selectedEvaluationIds]
  );

  const removeCandidate = useCallback((evaluationId: string) => {
    setSelectedEvaluationIds((prev) => prev.filter((id) => id !== evaluationId));
    setCandidateData((prev) => prev.filter((c) => c.evaluation.id !== evaluationId));
  }, []);

  const handleCompare = useCallback(async () => {
    if (selectedEvaluationIds.length < 2) return;

    setComparing(true);
    setHasCompared(false);
    try {
      const results = await Promise.all(
        selectedEvaluationIds.map(async (evalId) => {
          const evaluation = evaluations.find((e) => e.id === evalId)!;
          const result = await getResult(evalId);
          const profile = profiles.find((p) => p.id === evaluation.profileId);
          return result ? { evaluation, result, profile } : null;
        })
      );
      const validResults = results.filter(Boolean) as CandidateData[];
      setCandidateData(validResults);
      setHasCompared(true);
    } catch (error) {
      console.error('Error fetching results:', error);
    } finally {
      setComparing(false);
    }
  }, [selectedEvaluationIds, evaluations, profiles]);

  // Build radar chart data
  const radarData = candidateData.length > 0
    ? [
        {
          dimension: t('professional'),
          ...Object.fromEntries(
            candidateData.map((c, i) => [`candidate${i}`, c.result.indices.professional])
          ),
        },
        {
          dimension: t('softSkills'),
          ...Object.fromEntries(
            candidateData.map((c, i) => [`candidate${i}`, c.result.indices.softSkills])
          ),
        },
        {
          dimension: t('readiness'),
          ...Object.fromEntries(
            candidateData.map((c, i) => [`candidate${i}`, c.result.indices.readiness])
          ),
        },
      ]
    : [];

  // Calculate overall score
  const getOverall = (data: CandidateData) => {
    const { professional, softSkills, readiness } = data.result.indices;
    return Math.round((professional + softSkills + readiness) / 3);
  };

  // Find best candidate per dimension
  const getBestCandidate = (dimension: 'professional' | 'softSkills' | 'readiness' | 'overall') => {
    if (candidateData.length === 0) return null;
    let best = candidateData[0];
    let bestScore = dimension === 'overall'
      ? getOverall(candidateData[0])
      : candidateData[0].result.indices[dimension];

    for (let i = 1; i < candidateData.length; i++) {
      const score = dimension === 'overall'
        ? getOverall(candidateData[i])
        : candidateData[i].result.indices[dimension];
      if (score > bestScore) {
        best = candidateData[i];
        bestScore = score;
      }
    }
    return { candidate: best, score: bestScore };
  };

  // Available evaluations for the dropdown (exclude already selected)
  const availableOptions = evaluations
    .filter((e) => !selectedEvaluationIds.includes(e.id))
    .map((e) => ({
      value: e.id,
      label: e.candidateName,
    }));

  const dimensions: { key: 'professional' | 'softSkills' | 'readiness' | 'overall'; label: string }[] = [
    { key: 'professional', label: t('professional') },
    { key: 'softSkills', label: t('softSkills') },
    { key: 'readiness', label: t('readiness') },
    { key: 'overall', label: t('overall') },
  ];

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Back link */}
          <Link
            href={`/${locale}/admin`}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('selectCandidates')}
          </Link>

          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
            <p className="mt-1 text-gray-600">{t('subtitle')}</p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
            </div>
          ) : (
            <>
              {/* Candidate Selection Card */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>{t('selectCandidates')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Dropdown + Add */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1">
                        <Select
                          options={availableOptions}
                          placeholder={t('addCandidate')}
                          value={selectValue}
                          onChange={(e) => setSelectValue(e.target.value)}
                          disabled={selectedEvaluationIds.length >= MAX_CANDIDATES}
                        />
                      </div>
                      <Button
                        onClick={() => {
                          if (selectValue) addCandidate(selectValue);
                        }}
                        disabled={
                          !selectValue ||
                          selectedEvaluationIds.length >= MAX_CANDIDATES
                        }
                        className="flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        {t('addCandidate')}
                      </Button>
                    </div>

                    {/* Selected candidates as badges */}
                    {selectedEvaluationIds.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {selectedEvaluationIds.map((evalId, index) => {
                          const evaluation = evaluations.find((e) => e.id === evalId);
                          if (!evaluation) return null;
                          return (
                            <Badge
                              key={evalId}
                              variant="primary"
                              className="flex items-center gap-2 py-1.5 px-3"
                              style={{
                                backgroundColor: `${CANDIDATE_COLORS[index]}20`,
                                color: CANDIDATE_COLORS[index],
                                borderColor: CANDIDATE_COLORS[index],
                                border: `1px solid ${CANDIDATE_COLORS[index]}`,
                              }}
                            >
                              <span className="font-medium">{evaluation.candidateName}</span>
                              <button
                                onClick={() => removeCandidate(evalId)}
                                className="ml-1 hover:opacity-70 transition-opacity"
                                aria-label={t('removeCandidate')}
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </Badge>
                          );
                        })}
                      </div>
                    )}

                    <p className="text-sm text-gray-500">
                      {t('maxCandidates', { max: MAX_CANDIDATES })}
                    </p>

                    {/* Compare button */}
                    <Button
                      onClick={handleCompare}
                      disabled={selectedEvaluationIds.length < 2 || comparing}
                      className="flex items-center gap-2"
                    >
                      {comparing ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <BarChart3 className="w-4 h-4" />
                      )}
                      {t('compare')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Results Section */}
              {!hasCompared && !comparing && (
                <div className="text-center py-16 text-gray-500">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>{t('noData')}</p>
                </div>
              )}

              {comparing && (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                </div>
              )}

              {hasCompared && candidateData.length >= 2 && (
                <>
                  {/* View mode toggle */}
                  <div className="flex items-center gap-2 mb-6">
                    <Button
                      variant={viewMode === 'radar' ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('radar')}
                      className="flex items-center gap-2"
                    >
                      <BarChart3 className="w-4 h-4" />
                      {t('radarChart')}
                    </Button>
                    <Button
                      variant={viewMode === 'table' ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('table')}
                      className="flex items-center gap-2"
                    >
                      <Table className="w-4 h-4" />
                      {t('tableView')}
                    </Button>
                  </div>

                  {/* Radar Chart View */}
                  {viewMode === 'radar' && (
                    <Card className="mb-8">
                      <CardContent className="pt-6">
                        <div className="w-full h-[450px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                              <PolarGrid />
                              <PolarAngleAxis dataKey="dimension" />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} />
                              <Tooltip />
                              {candidateData.map((c, i) => (
                                <Radar
                                  key={c.evaluation.id}
                                  name={c.evaluation.candidateName}
                                  dataKey={`candidate${i}`}
                                  stroke={CANDIDATE_COLORS[i]}
                                  fill={CANDIDATE_COLORS[i]}
                                  fillOpacity={0.15}
                                />
                              ))}
                              <Legend />
                            </RadarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Table View */}
                  {viewMode === 'table' && (
                    <Card className="mb-8">
                      <CardContent className="pt-6">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                                  {t('dimension')}
                                </th>
                                {candidateData.map((c, i) => (
                                  <th
                                    key={c.evaluation.id}
                                    className="text-center py-3 px-4 font-semibold"
                                    style={{ color: CANDIDATE_COLORS[i] }}
                                  >
                                    {c.evaluation.candidateName}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {dimensions.map((dim) => {
                                const best = getBestCandidate(dim.key);
                                return (
                                  <tr key={dim.key} className="border-b border-gray-100">
                                    <td className="py-3 px-4 font-medium text-gray-700">
                                      {dim.label}
                                    </td>
                                    {candidateData.map((c, i) => {
                                      const score =
                                        dim.key === 'overall'
                                          ? getOverall(c)
                                          : c.result.indices[dim.key];
                                      const isBest = best && best.candidate.evaluation.id === c.evaluation.id;
                                      return (
                                        <td key={c.evaluation.id} className="py-3 px-4 text-center">
                                          <div className="flex items-center justify-center gap-2">
                                            <div className="relative w-full max-w-[120px]">
                                              <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                  className="h-full rounded-full transition-all"
                                                  style={{
                                                    width: `${score}%`,
                                                    backgroundColor: `${CANDIDATE_COLORS[i]}40`,
                                                  }}
                                                />
                                              </div>
                                              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-800">
                                                {score}
                                              </span>
                                            </div>
                                            {isBest && (
                                              <Badge variant="success" size="sm">
                                                {'\u2605'}
                                              </Badge>
                                            )}
                                          </div>
                                        </td>
                                      );
                                    })}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Best Candidate Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle>{t('bestCandidate')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {dimensions.map((dim) => {
                          const best = getBestCandidate(dim.key);
                          if (!best) return null;
                          const colorIndex = candidateData.findIndex(
                            (c) => c.evaluation.id === best.candidate.evaluation.id
                          );
                          return (
                            <div
                              key={dim.key}
                              className="p-4 rounded-lg border border-gray-200 bg-white"
                            >
                              <p className="text-sm text-gray-500 mb-1">{dim.label}</p>
                              <p
                                className="text-lg font-bold"
                                style={{ color: CANDIDATE_COLORS[colorIndex] ?? '#333' }}
                              >
                                {best.candidate.evaluation.candidateName}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {t('score')}: {best.score}
                              </p>
                              {best.candidate.profile && (
                                <p className="text-xs text-gray-400 mt-0.5">
                                  {t('profile')}: {best.candidate.profile.name[locale]}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </>
          )}
        </main>

        <Footer />
      </div>
    </AuthGuard>
  );
}
