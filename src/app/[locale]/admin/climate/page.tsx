'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Select, Badge, TextArea } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import {
  getClimateSurveys,
  saveClimateSurvey,
  getClimateResponses,
  generateId,
  deleteDocument,
  COLLECTIONS,
} from '@/lib/firebase/firestore';
import type {
  ClimateSurvey,
  ClimateSurveyQuestion,
  ClimateSurveyResponse,
  ClimateCategory,
} from '@/types';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  Plus,
  Loader2,
  ThermometerSun,
  BarChart3,
  Eye,
  Pencil,
  Trash2,
  X,
} from 'lucide-react';

type ViewMode = 'list' | 'form' | 'results';

const CLIMATE_CATEGORIES: ClimateCategory[] = [
  'work-environment',
  'leadership',
  'communication',
  'growth',
  'compensation',
  'work-life-balance',
];

const EMPTY_QUESTION: () => ClimateSurveyQuestion = () => ({
  id: '',
  content: { es: '', en: '', fr: '' },
  category: 'work-environment' as ClimateCategory,
  type: 'scale' as const,
  order: 0,
});

interface CategoryScore {
  category: ClimateCategory;
  score: number;
  count: number;
}

interface DepartmentBreakdown {
  department: string;
  responseCount: number;
  scores: Record<ClimateCategory, number>;
}

export default function ClimateSurveyPage() {
  const t = useTranslations('climate');
  const tc = useTranslations('common');
  const locale = useLocale() as 'es' | 'en' | 'fr';

  const [view, setView] = useState<ViewMode>('list');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [surveys, setSurveys] = useState<ClimateSurvey[]>([]);
  const [editingSurvey, setEditingSurvey] = useState<ClimateSurvey | null>(null);
  const [selectedSurveyId, setSelectedSurveyId] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState<'draft' | 'active' | 'closed'>('draft');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [departmentInput, setDepartmentInput] = useState('');
  const [departments, setDepartments] = useState<{ es: string; en: string; fr: string }[]>([]);
  const [questions, setQuestions] = useState<ClimateSurveyQuestion[]>([]);

  // Results state
  const [responses, setResponses] = useState<ClimateSurveyResponse[]>([]);
  const [loadingResults, setLoadingResults] = useState(false);

  const fetchSurveys = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getClimateSurveys();
      setSurveys(data);
    } catch (error) {
      console.error('Error fetching climate surveys:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  // --- Helpers ---

  const formatDate = (ts: Timestamp | undefined) => {
    if (!ts) return '';
    const d = ts.toDate();
    return d.toISOString().split('T')[0];
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setStatus('draft');
    setIsAnonymous(true);
    setDepartments([]);
    setDepartmentInput('');
    setQuestions([]);
    setEditingSurvey(null);
  };

  const openCreateForm = () => {
    resetForm();
    setView('form');
  };

  const openEditForm = (survey: ClimateSurvey) => {
    setEditingSurvey(survey);
    setName(survey.name[locale] || survey.name.es);
    setDescription(survey.description[locale] || survey.description.es);
    setStartDate(formatDate(survey.startDate));
    setEndDate(formatDate(survey.endDate));
    setStatus(survey.status);
    setIsAnonymous(survey.isAnonymous);
    setDepartments(survey.targetDepartments.map((d) => ({ es: d.es, en: d.en, fr: d.fr || '' })));
    setQuestions(survey.questions.map((q) => ({ ...q })));
    setView('form');
  };

  const openResults = async (surveyId: string) => {
    setSelectedSurveyId(surveyId);
    setLoadingResults(true);
    setView('results');
    try {
      const data = await getClimateResponses(surveyId);
      setResponses(data);
    } catch (error) {
      console.error('Error fetching responses:', error);
    } finally {
      setLoadingResults(false);
    }
  };

  // --- Form actions ---

  const handleAddDepartment = () => {
    const trimmed = departmentInput.trim();
    if (!trimmed) return;
    // Support comma-separated input
    const parts = trimmed.split(',').map((s) => s.trim()).filter(Boolean);
    const newDepts = parts.map((p) => ({ es: p, en: p, fr: p }));
    setDepartments((prev) => [...prev, ...newDepts]);
    setDepartmentInput('');
  };

  const handleRemoveDepartment = (index: number) => {
    setDepartments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddQuestion = () => {
    const newQ: ClimateSurveyQuestion = {
      ...EMPTY_QUESTION(),
      id: generateId(),
      order: questions.length + 1,
    };
    setQuestions((prev) => [...prev, newQ]);
  };

  const handleRemoveQuestion = (index: number) => {
    setQuestions((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      return updated.map((q, i) => ({ ...q, order: i + 1 }));
    });
  };

  const updateQuestion = (index: number, field: string, value: string) => {
    setQuestions((prev) => {
      const updated = [...prev];
      const q = { ...updated[index] };
      if (field === 'content') {
        q.content = { es: value, en: value, fr: value };
      } else if (field === 'category') {
        q.category = value as ClimateCategory;
      } else if (field === 'type') {
        q.type = value as 'scale' | 'open-text';
      }
      updated[index] = q;
      return updated;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const survey: ClimateSurvey = {
        id: editingSurvey?.id || generateId(),
        name: { es: name, en: name, fr: name },
        description: { es: description, en: description, fr: description },
        questions,
        startDate: Timestamp.fromDate(new Date(startDate)),
        endDate: Timestamp.fromDate(new Date(endDate)),
        status,
        isAnonymous,
        targetDepartments: departments,
        createdAt: editingSurvey?.createdAt || Timestamp.now(),
      };
      await saveClimateSurvey(survey);
      await fetchSurveys();
      setView('list');
      resetForm();
    } catch (error) {
      console.error('Error saving survey:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (surveyId: string) => {
    if (!confirm(tc('delete') + '?')) return;
    try {
      await deleteDocument(COLLECTIONS.CLIMATE_SURVEYS, surveyId);
      await fetchSurveys();
    } catch (error) {
      console.error('Error deleting survey:', error);
    }
  };

  // --- Results calculations ---

  const calculateCategoryScores = (): CategoryScore[] => {
    const categoryData: Record<ClimateCategory, { total: number; count: number }> = {} as Record<ClimateCategory, { total: number; count: number }>;

    CLIMATE_CATEGORIES.forEach((cat) => {
      categoryData[cat] = { total: 0, count: 0 };
    });

    const survey = surveys.find((s) => s.id === selectedSurveyId);
    if (!survey) return [];

    // Build a map of questionId -> category
    const questionCategoryMap: Record<string, ClimateCategory> = {};
    survey.questions.forEach((q) => {
      questionCategoryMap[q.id] = q.category;
    });

    responses.forEach((resp) => {
      resp.answers.forEach((ans) => {
        if (ans.scaleValue !== undefined && ans.scaleValue !== null) {
          const cat = questionCategoryMap[ans.questionId];
          if (cat && categoryData[cat]) {
            categoryData[cat].total += ans.scaleValue;
            categoryData[cat].count += 1;
          }
        }
      });
    });

    return CLIMATE_CATEGORIES.map((cat) => {
      const d = categoryData[cat];
      // Normalize: scale is 1-5, convert to 0-100
      const avgRaw = d.count > 0 ? d.total / d.count : 0;
      const score = d.count > 0 ? ((avgRaw - 1) / 4) * 100 : 0;
      return { category: cat, score: Math.round(score), count: d.count };
    });
  };

  const calculateDepartmentBreakdown = (): DepartmentBreakdown[] => {
    const survey = surveys.find((s) => s.id === selectedSurveyId);
    if (!survey) return [];

    const questionCategoryMap: Record<string, ClimateCategory> = {};
    survey.questions.forEach((q) => {
      questionCategoryMap[q.id] = q.category;
    });

    const deptData: Record<string, { responseCount: number; catData: Record<ClimateCategory, { total: number; count: number }> }> = {};

    responses.forEach((resp) => {
      const deptName = resp.department?.[locale] || resp.department?.es || 'Unknown';
      if (!deptData[deptName]) {
        deptData[deptName] = {
          responseCount: 0,
          catData: {} as Record<ClimateCategory, { total: number; count: number }>,
        };
        CLIMATE_CATEGORIES.forEach((cat) => {
          deptData[deptName].catData[cat] = { total: 0, count: 0 };
        });
      }
      deptData[deptName].responseCount += 1;

      resp.answers.forEach((ans) => {
        if (ans.scaleValue !== undefined && ans.scaleValue !== null) {
          const cat = questionCategoryMap[ans.questionId];
          if (cat && deptData[deptName].catData[cat]) {
            deptData[deptName].catData[cat].total += ans.scaleValue;
            deptData[deptName].catData[cat].count += 1;
          }
        }
      });
    });

    return Object.entries(deptData).map(([dept, data]) => {
      const scores = {} as Record<ClimateCategory, number>;
      CLIMATE_CATEGORIES.forEach((cat) => {
        const d = data.catData[cat];
        const avgRaw = d.count > 0 ? d.total / d.count : 0;
        scores[cat] = d.count > 0 ? Math.round(((avgRaw - 1) / 4) * 100) : 0;
      });
      return { department: dept, responseCount: data.responseCount, scores };
    });
  };

  const getOverallScore = (categoryScores: CategoryScore[]): number => {
    const withData = categoryScores.filter((c) => c.count > 0);
    if (withData.length === 0) return 0;
    const sum = withData.reduce((acc, c) => acc + c.score, 0);
    return Math.round(sum / withData.length);
  };

  const getStatusBadgeVariant = (s: string): 'default' | 'success' | 'primary' => {
    if (s === 'active') return 'success';
    if (s === 'closed') return 'primary';
    return 'default';
  };

  // --- Render ---

  const renderSurveyList = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <ThermometerSun className="w-7 h-7 text-primary-600" />
            {t('title')}
          </h1>
          <p className="text-gray-500 mt-1">{t('subtitle')}</p>
        </div>
        <Button onClick={openCreateForm}>
          <Plus className="w-4 h-4 mr-2" />
          {t('create')}
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
        </div>
      ) : surveys.length === 0 ? (
        <Card variant="bordered">
          <CardContent>
            <p className="text-gray-500 text-center py-8">{t('noSurveys')}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {surveys.map((survey) => (
            <Card key={survey.id} variant="bordered" className="hover:shadow-md transition-shadow">
              <CardContent className="py-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {survey.name[locale]}
                      </h3>
                      <Badge variant={getStatusBadgeVariant(survey.status)}>
                        {t(`statuses.${survey.status}`)}
                      </Badge>
                      {survey.isAnonymous && (
                        <Badge variant="secondary" size="sm">
                          {t('anonymous')}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      {survey.description[locale]}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>
                        {t('startDate')}: {formatDate(survey.startDate)}
                      </span>
                      <span>
                        {t('endDate')}: {formatDate(survey.endDate)}
                      </span>
                      <span>
                        {survey.questions.length} {survey.questions.length === 1 ? 'question' : 'questions'}
                      </span>
                      {survey.targetDepartments.length > 0 && (
                        <span>
                          {t('departments')}: {survey.targetDepartments.map((d) => d[locale]).join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {survey.status === 'closed' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openResults(survey.id)}
                      >
                        <BarChart3 className="w-4 h-4 mr-1" />
                        {t('results')}
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openEditForm(survey)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(survey.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  const renderSurveyForm = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => { setView('list'); resetForm(); }}
          className="text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">
          {editingSurvey ? t('edit') : t('create')}
        </h1>
      </div>

      <Card variant="bordered">
        <CardHeader>
          <CardTitle>{editingSurvey ? t('edit') : t('create')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Name */}
          <Input
            label={locale === 'es' ? 'Nombre' : locale === 'fr' ? 'Nom' : 'Name'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Description */}
          <TextArea
            label={locale === 'es' ? 'Descripción' : 'Description'}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Dates and Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label={t('startDate')}
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            <Input
              label={t('endDate')}
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
            <Select
              label={t('status')}
              value={status}
              onChange={(e) => setStatus(e.target.value as 'draft' | 'active' | 'closed')}
              options={[
                { value: 'draft', label: t('statuses.draft') },
                { value: 'active', label: t('statuses.active') },
                { value: 'closed', label: t('statuses.closed') },
              ]}
            />
          </div>

          {/* Anonymous */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="isAnonymous"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="isAnonymous" className="text-sm font-medium text-gray-700">
              {t('anonymous')}
            </label>
          </div>

          {/* Target Departments */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('departments')}
            </label>
            <div className="flex items-center gap-2 mb-2">
              <Input
                value={departmentInput}
                onChange={(e) => setDepartmentInput(e.target.value)}
                placeholder={t('allDepartments')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddDepartment();
                  }
                }}
              />
              <Button type="button" variant="outline" onClick={handleAddDepartment}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {departments.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {departments.map((dept, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 bg-primary-50 text-primary-700 text-sm px-3 py-1 rounded-full"
                  >
                    {dept[locale] || dept.es}
                    <button
                      type="button"
                      onClick={() => handleRemoveDepartment(idx)}
                      className="text-primary-500 hover:text-primary-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
            {departments.length === 0 && (
              <p className="text-xs text-gray-400">{t('allDepartments')}</p>
            )}
          </div>

          {/* Questions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Preguntas' : locale === 'fr' ? 'Questions' : 'Questions'} ({questions.length})
              </label>
              <Button type="button" variant="outline" size="sm" onClick={handleAddQuestion}>
                <Plus className="w-4 h-4 mr-1" />
                {locale === 'es' ? 'Agregar Pregunta' : locale === 'fr' ? 'Ajouter une Question' : 'Add Question'}
              </Button>
            </div>

            <div className="space-y-4">
              {questions.map((q, idx) => (
                <Card key={q.id} variant="bordered" className="relative">
                  <CardContent className="space-y-3 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-500">
                        #{q.order}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveQuestion(idx)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <Input
                      label={locale === 'es' ? 'Contenido de la Pregunta' : locale === 'fr' ? 'Contenu de la Question' : 'Question Content'}
                      value={q.content[locale] || q.content.es}
                      onChange={(e) => updateQuestion(idx, 'content', e.target.value)}
                      required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Select
                        label={locale === 'es' ? 'Categoría' : locale === 'fr' ? 'Catégorie' : 'Category'}
                        value={q.category}
                        onChange={(e) => updateQuestion(idx, 'category', e.target.value)}
                        options={CLIMATE_CATEGORIES.map((cat) => ({
                          value: cat,
                          label: t(`categories.${cat}`),
                        }))}
                      />
                      <Select
                        label={locale === 'es' ? 'Tipo' : 'Type'}
                        value={q.type}
                        onChange={(e) => updateQuestion(idx, 'type', e.target.value)}
                        options={[
                          { value: 'scale', label: locale === 'es' ? 'Escala (1-5)' : locale === 'fr' ? 'Échelle (1-5)' : 'Scale (1-5)' },
                          { value: 'open-text', label: locale === 'es' ? 'Texto Abierto' : locale === 'fr' ? 'Texte Libre' : 'Open Text' },
                        ]}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => { setView('list'); resetForm(); }}
            >
              {tc('cancel')}
            </Button>
            <Button onClick={handleSave} disabled={saving || !name || !startDate || !endDate}>
              {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {tc('save')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSurveyResults = () => {
    const survey = surveys.find((s) => s.id === selectedSurveyId);
    const categoryScores = calculateCategoryScores();
    const overallScore = getOverallScore(categoryScores);
    const deptBreakdown = calculateDepartmentBreakdown();
    const highlights = categoryScores.filter((c) => c.score >= 75 && c.count > 0);
    const concerns = categoryScores.filter((c) => c.score < 50 && c.count > 0);

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setView('list')}
            className="text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-primary-600" />
              {t('results')} - {survey?.name[locale]}
            </h1>
          </div>
        </div>

        {loadingResults ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
          </div>
        ) : (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card variant="bordered">
                <CardContent className="text-center py-6">
                  <p className="text-sm text-gray-500 mb-1">{t('totalResponses')}</p>
                  <p className="text-3xl font-bold text-gray-900">{responses.length}</p>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="text-center py-6">
                  <p className="text-sm text-gray-500 mb-1">{t('overallScore')}</p>
                  <p className={`text-3xl font-bold ${overallScore >= 75 ? 'text-green-600' : overallScore >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {overallScore}%
                  </p>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="text-center py-6">
                  <p className="text-sm text-gray-500 mb-1">{t('departments')}</p>
                  <p className="text-3xl font-bold text-gray-900">{deptBreakdown.length}</p>
                </CardContent>
              </Card>
            </div>

            {/* Category Score Bars */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{locale === 'es' ? 'Puntuaciones por Categoría' : locale === 'fr' ? 'Scores par Catégorie' : 'Category Scores'}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categoryScores.map((cs) => (
                  <div key={cs.category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {t(`categories.${cs.category}`)}
                      </span>
                      <span className={`text-sm font-semibold ${cs.score >= 75 ? 'text-green-600' : cs.score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {cs.count > 0 ? `${cs.score}%` : 'N/A'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${cs.score >= 75 ? 'bg-green-500' : cs.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${cs.count > 0 ? cs.score : 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Department Breakdown */}
            {deptBreakdown.length > 0 && (
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>{t('byDepartment')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-3 font-medium text-gray-700">
                            {t('departments')}
                          </th>
                          <th className="text-center py-2 px-3 font-medium text-gray-700">
                            #
                          </th>
                          {CLIMATE_CATEGORIES.map((cat) => (
                            <th key={cat} className="text-center py-2 px-2 font-medium text-gray-700 whitespace-nowrap">
                              {t(`categories.${cat}`)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {deptBreakdown.map((dept) => (
                          <tr key={dept.department} className="border-b last:border-b-0">
                            <td className="py-2 px-3 font-medium text-gray-900">
                              {dept.department}
                            </td>
                            <td className="text-center py-2 px-3 text-gray-500">
                              {dept.responseCount}
                            </td>
                            {CLIMATE_CATEGORIES.map((cat) => (
                              <td key={cat} className="text-center py-2 px-2">
                                <span className={`font-medium ${dept.scores[cat] >= 75 ? 'text-green-600' : dept.scores[cat] >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                                  {dept.scores[cat]}%
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Highlights & Concerns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.length > 0 && (
                <Card variant="bordered">
                  <CardHeader>
                    <CardTitle className="text-green-700">{t('highlights')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {highlights.map((h) => (
                        <li key={h.category} className="flex items-center gap-2 text-sm text-green-700">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          {t(`categories.${h.category}`)} — {h.score}%
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
              {concerns.length > 0 && (
                <Card variant="bordered">
                  <CardHeader>
                    <CardTitle className="text-red-700">{t('concerns')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {concerns.map((c) => (
                        <li key={c.category} className="flex items-center gap-2 text-sm text-red-700">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          {t(`categories.${c.category}`)} — {c.score}%
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
          <div className="mb-6">
            <Link
              href={`/${locale}/admin`}
              className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              {tc('back')}
            </Link>
          </div>

          {view === 'list' && renderSurveyList()}
          {view === 'form' && renderSurveyForm()}
          {view === 'results' && renderSurveyResults()}
        </main>
        <Footer />
      </div>
    </AuthGuard>
  );
}
