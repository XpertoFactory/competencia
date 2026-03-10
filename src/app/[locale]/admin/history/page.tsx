'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Input, Select, Badge } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import { getEvaluations, getProfiles, getResult } from '@/lib/firebase/firestore';
import type { Evaluation, Profile, AnalysisResult } from '@/types';
import {
  ArrowLeft,
  Search,
  Download,
  FileSpreadsheet,
  Loader2,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Timestamp } from 'firebase/firestore';

const PAGE_SIZE = 20;

export default function HistoryPage() {
  const t = useTranslations('history');
  const locale = useLocale() as 'es' | 'en';

  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [scores, setScores] = useState<Record<string, number | null>>({});
  const [loading, setLoading] = useState(true);
  const [loadingScores, setLoadingScores] = useState(false);

  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [profileFilter, setProfileFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch evaluations and profiles on mount
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [evalsData, profilesData] = await Promise.all([
          getEvaluations(),
          getProfiles(false),
        ]);
        setEvaluations(evalsData);
        setProfiles(profilesData);

        // Fetch scores for analyzed evaluations
        const analyzedEvals = evalsData.filter((e) => e.status === 'analyzed');
        if (analyzedEvals.length > 0) {
          setLoadingScores(true);
          const scoreResults = await Promise.allSettled(
            analyzedEvals.map(async (ev) => {
              const result = await getResult(ev.id);
              return { id: ev.id, result };
            })
          );
          const scoreMap: Record<string, number | null> = {};
          scoreResults.forEach((sr) => {
            if (sr.status === 'fulfilled' && sr.value.result) {
              const indices = sr.value.result.indices;
              const avg =
                (indices.professional + indices.softSkills + indices.readiness) / 3;
              scoreMap[sr.value.id] = Math.round(avg);
            }
          });
          setScores(scoreMap);
          setLoadingScores(false);
        }
      } catch (error) {
        console.error('Error fetching history data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Helper: convert Timestamp to Date
  const toDate = (ts: Timestamp | undefined): Date | null => {
    if (!ts) return null;
    if (ts instanceof Timestamp) return ts.toDate();
    // Handle plain object with seconds (from Firestore REST)
    if (typeof ts === 'object' && 'seconds' in ts) {
      return new Date((ts as { seconds: number }).seconds * 1000);
    }
    return null;
  };

  // Filtered evaluations
  const filtered = useMemo(() => {
    let result = [...evaluations];

    // Search by name or email
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (ev) =>
          ev.candidateName?.toLowerCase().includes(q) ||
          ev.candidateEmail?.toLowerCase().includes(q)
      );
    }

    // Profile filter
    if (profileFilter) {
      result = result.filter((ev) => ev.profileId === profileFilter);
    }

    // Status filter
    if (statusFilter) {
      result = result.filter((ev) => ev.status === statusFilter);
    }

    // Date range filter
    if (dateFilter) {
      const now = new Date();
      let cutoff: Date;
      switch (dateFilter) {
        case '7':
          cutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          break;
        case '30':
          cutoff = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          break;
        case '90':
          cutoff = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
          break;
        default:
          cutoff = new Date(0);
      }
      result = result.filter((ev) => {
        const date = toDate(ev.startedAt);
        return date && date >= cutoff;
      });
    }

    // Sort by date descending
    result.sort((a, b) => {
      const dateA = toDate(a.startedAt)?.getTime() || 0;
      const dateB = toDate(b.startedAt)?.getTime() || 0;
      return dateB - dateA;
    });

    return result;
  }, [evaluations, searchQuery, profileFilter, statusFilter, dateFilter]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, profileFilter, statusFilter, dateFilter]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginatedEvaluations = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Profile lookup
  const getProfileName = (profileId: string): string => {
    const profile = profiles.find((p) => p.id === profileId);
    return profile?.name?.[locale] || profileId;
  };

  // Status badge variant
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <Badge variant="warning">{t('statuses.in-progress')}</Badge>;
      case 'completed':
        return <Badge variant="primary">{t('statuses.completed')}</Badge>;
      case 'analyzed':
        return <Badge variant="success">{t('statuses.analyzed')}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Format date
  const formatDate = (ts: Timestamp | undefined): string => {
    const date = toDate(ts);
    if (!date) return '-';
    return date.toLocaleDateString(locale);
  };

  // Export CSV
  const exportCSV = () => {
    const headers = [
      t('candidate'),
      t('email'),
      t('profile'),
      t('status'),
      t('date'),
    ];
    const rows = filtered.map((ev) => [
      ev.candidateName || '',
      ev.candidateEmail || '',
      getProfileName(ev.profileId),
      ev.status,
      formatDate(ev.startedAt),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')
      ),
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], {
      type: 'text/csv;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `evaluations-history-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Export Excel (tab-delimited with .xls extension)
  const exportExcel = () => {
    const headers = [
      t('candidate'),
      t('email'),
      t('profile'),
      t('status'),
      t('date'),
    ];
    const rows = filtered.map((ev) => [
      ev.candidateName || '',
      ev.candidateEmail || '',
      getProfileName(ev.profileId),
      ev.status,
      formatDate(ev.startedAt),
    ]);

    const tsvContent = [
      headers.join('\t'),
      ...rows.map((row) => row.map((cell) => String(cell).replace(/\t/g, ' ')).join('\t')),
    ].join('\n');

    const blob = new Blob(['\uFEFF' + tsvContent], {
      type: 'application/vnd.ms-excel;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `evaluations-history-${new Date().toISOString().split('T')[0]}.xls`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Profile filter options
  const profileOptions = [
    { value: '', label: t('allProfiles') },
    ...profiles.map((p) => ({
      value: p.id,
      label: p.name[locale],
    })),
  ];

  // Status filter options
  const statusOptions = [
    { value: '', label: t('allStatuses') },
    { value: 'in-progress', label: t('statuses.in-progress') },
    { value: 'completed', label: t('statuses.completed') },
    { value: 'analyzed', label: t('statuses.analyzed') },
  ];

  // Date range options
  const dateOptions = [
    { value: '', label: t('allDates') },
    { value: '7', label: t('last7Days') },
    { value: '30', label: t('last30Days') },
    { value: '90', label: t('last90Days') },
  ];

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Back link and title */}
          <div className="mb-6">
            <Link
              href={`/${locale}/admin`}
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === 'es' ? 'Volver al panel' : 'Back to panel'}
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
            <p className="text-gray-600 mt-1">{t('subtitle')}</p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
            </div>
          ) : (
            <>
              {/* Filters bar */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-4 items-end">
                    {/* Search */}
                    <div className="flex-1 min-w-[200px]">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          placeholder={t('search')}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-9"
                        />
                      </div>
                    </div>

                    {/* Profile filter */}
                    <div className="w-full sm:w-auto min-w-[180px]">
                      <Select
                        options={profileOptions}
                        value={profileFilter}
                        onChange={(e) => setProfileFilter(e.target.value)}
                      />
                    </div>

                    {/* Status filter */}
                    <div className="w-full sm:w-auto min-w-[160px]">
                      <Select
                        options={statusOptions}
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                      />
                    </div>

                    {/* Date range filter */}
                    <div className="w-full sm:w-auto min-w-[160px]">
                      <Select
                        options={dateOptions}
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Record count and export buttons */}
                  <div className="flex flex-wrap items-center justify-between mt-4 gap-3">
                    <span className="text-sm text-gray-600">
                      {t('totalRecords', { count: filtered.length })}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={exportCSV}
                        disabled={filtered.length === 0}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {t('exportCsv')}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={exportExcel}
                        disabled={filtered.length === 0}
                      >
                        <FileSpreadsheet className="w-4 h-4 mr-2" />
                        {t('exportExcel')}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results table */}
              {paginatedEvaluations.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">{t('noResults')}</p>
                </div>
              ) : (
                <>
                  <Card>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="text-left py-3 px-4 font-medium text-gray-700">
                              {t('candidate')}
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">
                              {t('email')}
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">
                              {t('profile')}
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">
                              {t('status')}
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">
                              {t('score')}
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">
                              {t('date')}
                            </th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">
                              {t('actions')}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedEvaluations.map((ev) => (
                            <tr
                              key={ev.id}
                              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                              <td className="py-3 px-4 font-medium text-gray-900">
                                {ev.candidateName || '-'}
                              </td>
                              <td className="py-3 px-4 text-gray-600">
                                {ev.candidateEmail || '-'}
                              </td>
                              <td className="py-3 px-4 text-gray-600">
                                {getProfileName(ev.profileId)}
                              </td>
                              <td className="py-3 px-4">
                                {getStatusBadge(ev.status)}
                              </td>
                              <td className="py-3 px-4 text-gray-600">
                                {ev.status === 'analyzed' ? (
                                  loadingScores ? (
                                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                                  ) : (
                                    scores[ev.id] !== undefined ? `${scores[ev.id]}%` : '-'
                                  )
                                ) : (
                                  '-'
                                )}
                              </td>
                              <td className="py-3 px-4 text-gray-600">
                                {formatDate(ev.startedAt)}
                              </td>
                              <td className="py-3 px-4">
                                <Link href={`/${locale}/results/${ev.id}`}>
                                  <Button variant="ghost" size="sm">
                                    <Eye className="w-4 h-4 mr-1" />
                                    {t('viewResults')}
                                  </Button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        {locale === 'es' ? 'Anterior' : 'Previous'}
                      </Button>
                      <span className="text-sm text-gray-600">
                        {currentPage} / {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                      >
                        {locale === 'es' ? 'Siguiente' : 'Next'}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  )}
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
