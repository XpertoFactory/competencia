'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Select,
  Badge,
  TextArea,
} from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import {
  getEmployees,
  getProbationEvaluations,
  saveProbationEvaluation,
  generateId,
} from '@/lib/firebase/firestore';
import type {
  Employee,
  ProbationEvaluation,
  ProbationScores,
  ProbationPeriod,
} from '@/types';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  Plus,
  Loader2,
  ClipboardCheck,
  Bell,
  Check,
} from 'lucide-react';

type ViewMode = 'list' | 'form';
type ProbationStatus = 'pending' | 'in-progress' | 'completed';

const SCORE_KEYS: (keyof Omit<ProbationScores, 'overall'>)[] = [
  'jobKnowledge',
  'workQuality',
  'productivity',
  'initiative',
  'teamwork',
  'attendance',
  'communication',
];

const DEFAULT_SCORES: ProbationScores = {
  jobKnowledge: 0,
  workQuality: 0,
  productivity: 0,
  initiative: 0,
  teamwork: 0,
  attendance: 0,
  communication: 0,
  overall: 0,
};

function createEmptyEvaluation(): ProbationEvaluation {
  return {
    id: '',
    employeeId: '',
    employeeName: '',
    supervisorEmail: '',
    supervisorName: '',
    period: '3-month',
    dueDate: Timestamp.now(),
    status: 'pending',
    alertSent: false,
    scores: { ...DEFAULT_SCORES },
    comments: '',
    recommendation: 'continue',
    createdAt: Timestamp.now(),
  };
}

function calculateOverall(scores: ProbationScores): number {
  const sum = SCORE_KEYS.reduce((acc, key) => acc + scores[key], 0);
  return Math.round(sum / SCORE_KEYS.length);
}

function addMonthsToTimestamp(ts: Timestamp, months: number): Timestamp {
  const date = ts.toDate();
  date.setMonth(date.getMonth() + months);
  return Timestamp.fromDate(date);
}

function formatDate(ts: Timestamp): string {
  return ts.toDate().toLocaleDateString();
}

function timestampToInputValue(ts: Timestamp): string {
  const d = ts.toDate();
  return d.toISOString().split('T')[0];
}

function inputValueToTimestamp(value: string): Timestamp {
  return Timestamp.fromDate(new Date(value + 'T00:00:00'));
}

export default function ProbationPage() {
  const t = useTranslations('probation');
  const tc = useTranslations('common');
  const locale = useLocale();

  const [view, setView] = useState<ViewMode>('list');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [evaluations, setEvaluations] = useState<ProbationEvaluation[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [form, setForm] = useState<ProbationEvaluation>(createEmptyEvaluation());

  // Filters
  const [filterPeriod, setFilterPeriod] = useState<ProbationPeriod | ''>('');
  const [filterStatus, setFilterStatus] = useState<ProbationStatus | ''>('');

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [evalsData, empsData] = await Promise.all([
        getProbationEvaluations(),
        getEmployees(),
      ]);
      setEvaluations(evalsData);
      setEmployees(empsData);
    } catch (error) {
      console.error('Error loading probation data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const employeeMap = new Map(employees.map((e) => [e.id, e]));

  const filteredEvaluations = evaluations.filter((ev) => {
    if (filterPeriod && ev.period !== filterPeriod) return false;
    if (filterStatus && ev.status !== filterStatus) return false;
    return true;
  });

  const handleCreate = () => {
    setForm(createEmptyEvaluation());
    setView('form');
  };

  const handleEdit = (evaluation: ProbationEvaluation) => {
    setForm({ ...evaluation, scores: { ...evaluation.scores } });
    setView('form');
  };

  const handleEmployeeChange = (employeeId: string) => {
    const employee = employeeMap.get(employeeId);
    if (!employee) return;

    const months = form.period === '3-month' ? 3 : 6;
    const dueDate = addMonthsToTimestamp(employee.hireDate, months);

    setForm((prev) => ({
      ...prev,
      employeeId,
      employeeName: employee.name,
      supervisorEmail: employee.supervisorEmail,
      supervisorName: employee.supervisorName,
      dueDate,
    }));
  };

  const handlePeriodChange = (period: ProbationPeriod) => {
    const employee = employeeMap.get(form.employeeId);
    const months = period === '3-month' ? 3 : 6;
    const dueDate = employee
      ? addMonthsToTimestamp(employee.hireDate, months)
      : form.dueDate;

    setForm((prev) => ({
      ...prev,
      period,
      dueDate,
    }));
  };

  const handleScoreChange = (key: keyof Omit<ProbationScores, 'overall'>, value: number) => {
    const clamped = Math.min(100, Math.max(0, value));
    setForm((prev) => {
      const newScores = { ...prev.scores, [key]: clamped };
      newScores.overall = calculateOverall(newScores);
      return { ...prev, scores: newScores };
    });
  };

  const handleSendAlert = async () => {
    setForm((prev) => ({
      ...prev,
      alertSent: true,
      alertSentAt: Timestamp.now(),
    }));
    // In a real app, this would trigger a Cloud Function to send notifications
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const evalToSave: ProbationEvaluation = {
        ...form,
        id: form.id || generateId(),
        createdAt: form.id ? form.createdAt : Timestamp.now(),
      };
      await saveProbationEvaluation(evalToSave);
      await loadData();
      setView('list');
    } catch (error) {
      console.error('Error saving probation evaluation:', error);
    } finally {
      setSaving(false);
    }
  };

  const statusBadgeVariant = (status: ProbationStatus) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'in-progress':
        return 'primary';
      case 'completed':
        return 'success';
      default:
        return 'default';
    }
  };

  const periodFilterOptions = [
    { value: '', label: tc('all') },
    { value: '3-month', label: t('period.3month') },
    { value: '6-month', label: t('period.6month') },
  ];

  const statusFilterOptions = [
    { value: '', label: tc('all') },
    { value: 'pending', label: t('status.pending') },
    { value: 'in-progress', label: t('status.inProgress') },
    { value: 'completed', label: t('status.completed') },
  ];

  const periodOptions = [
    { value: '3-month', label: t('period.3month') },
    { value: '6-month', label: t('period.6month') },
  ];

  const recommendationOptions = [
    { value: 'continue', label: t('recommendation.continue') },
    { value: 'extend-probation', label: t('recommendation.extendProbation') },
    { value: 'terminate', label: t('recommendation.terminate') },
  ];

  const employeeOptions = employees.map((e) => ({
    value: e.id,
    label: e.name,
  }));

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
          {/* Back link */}
          <Link
            href={`/${locale}/admin`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {tc('backToAdmin')}
          </Link>

          {view === 'list' ? (
            <>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-7 h-7 text-primary-600" />
                  <h1 className="text-2xl font-bold text-gray-900">
                    {t('title')}
                  </h1>
                </div>
                <Button onClick={handleCreate}>
                  <Plus className="w-4 h-4 mr-2" />
                  {t('createEvaluation')}
                </Button>
              </div>

              {/* Filters */}
              <Card variant="bordered" className="mb-6">
                <CardContent>
                  <div className="flex flex-wrap gap-4 items-end pt-2">
                    <div className="w-48">
                      <Select
                        label={t('filterByPeriod')}
                        options={periodFilterOptions}
                        value={filterPeriod}
                        onChange={(e) =>
                          setFilterPeriod(e.target.value as ProbationPeriod | '')
                        }
                      />
                    </div>
                    <div className="w-48">
                      <Select
                        label={t('filterByStatus')}
                        options={statusFilterOptions}
                        value={filterStatus}
                        onChange={(e) =>
                          setFilterStatus(e.target.value as ProbationStatus | '')
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* List */}
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                </div>
              ) : filteredEvaluations.length === 0 ? (
                <Card variant="bordered">
                  <CardContent>
                    <p className="text-center text-gray-500 py-10">
                      {t('noEvaluations')}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {filteredEvaluations.map((ev) => (
                    <Card
                      key={ev.id}
                      variant="bordered"
                      className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => handleEdit(ev)}
                    >
                      <CardContent>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">
                              {ev.employeeName}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              {t('dueDate')}: {formatDate(ev.dueDate)}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            {ev.alertSent && (
                              <span title={t('alertSent')}>
                                <Bell className="w-4 h-4 text-blue-500" />
                              </span>
                            )}
                            <Badge
                              variant={
                                ev.period === '3-month' ? 'secondary' : 'primary'
                              }
                              size="sm"
                            >
                              {t(`period.${ev.period === '3-month' ? '3month' : '6month'}`)}
                            </Badge>
                            <Badge
                              variant={statusBadgeVariant(ev.status)}
                              size="sm"
                            >
                              {t(`status.${ev.status === 'in-progress' ? 'inProgress' : ev.status}`)}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {/* Form Header */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  {form.id ? t('editEvaluation') : t('createEvaluation')}
                </h1>
                <Button variant="ghost" onClick={() => setView('list')}>
                  {tc('cancel')}
                </Button>
              </div>

              <div className="space-y-6">
                {/* Employee & Period */}
                <Card variant="bordered">
                  <CardHeader>
                    <CardTitle>{t('evaluationDetails')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select
                        label={t('selectEmployee')}
                        options={employeeOptions}
                        value={form.employeeId}
                        onChange={(e) => handleEmployeeChange(e.target.value)}
                        placeholder={t('selectEmployeePlaceholder')}
                        required
                      />
                      <Select
                        label={t('period.label')}
                        options={periodOptions}
                        value={form.period}
                        onChange={(e) =>
                          handlePeriodChange(e.target.value as ProbationPeriod)
                        }
                        required
                      />
                      <Input
                        label={t('dueDate')}
                        type="date"
                        value={timestampToInputValue(form.dueDate)}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            dueDate: inputValueToTimestamp(e.target.value),
                          }))
                        }
                      />
                      <Select
                        label={t('status.label')}
                        options={[
                          { value: 'pending', label: t('status.pending') },
                          { value: 'in-progress', label: t('status.inProgress') },
                          { value: 'completed', label: t('status.completed') },
                        ]}
                        value={form.status}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            status: e.target.value as ProbationStatus,
                          }))
                        }
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Scores */}
                <Card variant="bordered">
                  <CardHeader>
                    <CardTitle>{t('scores.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {SCORE_KEYS.map((key) => (
                        <div key={key}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t(`scores.${key}`)}
                          </label>
                          <div className="flex items-center gap-3">
                            <input
                              type="range"
                              min={0}
                              max={100}
                              value={form.scores[key]}
                              onChange={(e) =>
                                handleScoreChange(key, parseInt(e.target.value, 10))
                              }
                              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                            />
                            <Input
                              type="number"
                              min={0}
                              max={100}
                              value={form.scores[key]}
                              onChange={(e) =>
                                handleScoreChange(key, parseInt(e.target.value, 10) || 0)
                              }
                              className="w-20 text-center"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Overall (auto-calculated) */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-700">
                          {t('scores.overall')}
                        </span>
                        <span className="text-2xl font-bold text-primary-600">
                          {form.scores.overall}
                        </span>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-primary-600 h-3 rounded-full transition-all"
                          style={{ width: `${form.scores.overall}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Comments & Recommendation */}
                <Card variant="bordered">
                  <CardHeader>
                    <CardTitle>{t('commentsAndRecommendation')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <TextArea
                        label={t('comments')}
                        value={form.comments}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            comments: e.target.value,
                          }))
                        }
                        rows={4}
                      />
                      <Select
                        label={t('recommendation.label')}
                        options={recommendationOptions}
                        value={form.recommendation}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            recommendation: e.target.value as ProbationEvaluation['recommendation'],
                          }))
                        }
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Alert & Save */}
                <Card variant="bordered">
                  <CardContent>
                    <div className="flex flex-wrap items-center justify-between gap-4 py-2">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          onClick={handleSendAlert}
                          disabled={form.alertSent}
                        >
                          {form.alertSent ? (
                            <>
                              <Check className="w-4 h-4 mr-2 text-green-500" />
                              {t('alertSent')}
                            </>
                          ) : (
                            <>
                              <Bell className="w-4 h-4 mr-2" />
                              {t('sendAlert')}
                            </>
                          )}
                        </Button>
                        {form.alertSentAt && (
                          <span className="text-xs text-gray-500">
                            {formatDate(form.alertSentAt)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="ghost"
                          onClick={() => setView('list')}
                        >
                          {tc('cancel')}
                        </Button>
                        <Button
                          onClick={handleSave}
                          isLoading={saving}
                          disabled={!form.employeeId || saving}
                        >
                          {tc('save')}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </main>
        <Footer />
      </div>
    </AuthGuard>
  );
}
