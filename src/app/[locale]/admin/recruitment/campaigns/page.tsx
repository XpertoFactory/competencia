'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import {
  Button,
  Card,
  CardContent,
  Input,
  Select,
  Badge,
  ConfirmModal,
} from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import { useOrg } from '@/components/org';
import {
  getCampaigns,
  saveCampaign,
  updateCampaign,
  deleteCampaign,
  getPositions,
  generateId,
} from '@/lib/firebase/firestore';
import type {
  RecruitmentCampaign,
  CampaignStatus,
  CampaignStep,
  CampaignStepKey,
  CampaignStepItem,
  Position,
} from '@/types';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  X,
  Loader2,
  Megaphone,
  Search,
  Copy,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Circle,
  Lightbulb,
  Sparkles,
  PlayCircle,
  Flag,
} from 'lucide-react';

const CAMPAIGN_STATUSES: CampaignStatus[] = ['draft', 'active', 'completed', 'cancelled'];

const STEP_KEYS: CampaignStepKey[] = ['planning', 'preparation', 'execution', 'postReview', 'followUp'];

function createDefaultSteps(): CampaignStep[] {
  return STEP_KEYS.map(key => ({
    key,
    title: { es: '', en: '', fr: '' },
    description: { es: '', en: '', fr: '' },
    items: [],
    notes: '',
    completed: false,
  }));
}

function createStandardTemplate(): Partial<RecruitmentCampaign> {
  return {
    title: { es: 'Campaña de Reclutamiento Estándar', en: 'Standard Recruitment Campaign', fr: 'Campagne de Recrutement Standard' },
    description: {
      es: 'Campaña integral de reclutamiento con todas las etapas del proceso.',
      en: 'Comprehensive recruitment campaign with all stages of the process.',
      fr: 'Campagne de recrutement complète avec toutes les étapes du processus.',
    },
    goal: {
      es: 'Cubrir las posiciones abiertas con candidatos calificados dentro del plazo establecido.',
      en: 'Fill open positions with qualified candidates within the established timeline.',
      fr: 'Pourvoir les postes ouverts avec des candidats qualifiés dans les délais établis.',
    },
    templateId: 'standard',
    steps: STEP_KEYS.map(key => {
      const items: Record<CampaignStepKey, CampaignStepItem[]> = {
        planning: [
          { id: '1', text: 'Define target roles and headcount', completed: false },
          { id: '2', text: 'Set timeline and milestones', completed: false },
          { id: '3', text: 'Define candidate requirements', completed: false },
          { id: '4', text: 'Allocate budget', completed: false },
          { id: '5', text: 'Identify sourcing channels', completed: false },
        ],
        preparation: [
          { id: '1', text: 'Write job descriptions', completed: false },
          { id: '2', text: 'Set up job postings on portals', completed: false },
          { id: '3', text: 'Prepare interview guides', completed: false },
          { id: '4', text: 'Brief hiring managers', completed: false },
          { id: '5', text: 'Set up evaluation criteria', completed: false },
        ],
        execution: [
          { id: '1', text: 'Screen incoming applications', completed: false },
          { id: '2', text: 'Conduct initial phone screenings', completed: false },
          { id: '3', text: 'Schedule and conduct interviews', completed: false },
          { id: '4', text: 'Administer skills assessments', completed: false },
          { id: '5', text: 'Check references', completed: false },
        ],
        postReview: [
          { id: '1', text: 'Evaluate all candidates against criteria', completed: false },
          { id: '2', text: 'Gather interviewer feedback', completed: false },
          { id: '3', text: 'Make hiring decisions', completed: false },
          { id: '4', text: 'Prepare and send offers', completed: false },
        ],
        followUp: [
          { id: '1', text: 'Onboard accepted candidates', completed: false },
          { id: '2', text: 'Send rejection notifications', completed: false },
          { id: '3', text: 'Document learnings for future', completed: false },
          { id: '4', text: 'Update talent pipeline', completed: false },
        ],
      };
      return {
        key,
        title: { es: '', en: '', fr: '' },
        description: { es: '', en: '', fr: '' },
        items: items[key],
        notes: '',
        completed: false,
      };
    }),
  };
}

function createCareerDayTemplate(): Partial<RecruitmentCampaign> {
  return {
    title: { es: 'Día de Carreras', en: 'Career Day', fr: 'Journée Carrières' },
    description: {
      es: 'Evento de reclutamiento masivo para atraer talento en un solo día.',
      en: 'Mass recruitment event to attract talent in a single day.',
      fr: 'Événement de recrutement massif pour attirer des talents en une journée.',
    },
    goal: {
      es: 'Generar una base amplia de candidatos potenciales y crear marca empleadora.',
      en: 'Generate a broad pool of potential candidates and build employer brand.',
      fr: 'Générer un large vivier de candidats potentiels et développer la marque employeur.',
    },
    templateId: 'career-day',
    steps: STEP_KEYS.map(key => {
      const items: Record<CampaignStepKey, CampaignStepItem[]> = {
        planning: [
          { id: '1', text: 'Select venue and date', completed: false },
          { id: '2', text: 'Define target audience and sectors', completed: false },
          { id: '3', text: 'Partner with universities and institutions', completed: false },
          { id: '4', text: 'Set goals for attendees and applications', completed: false },
          { id: '5', text: 'Plan logistics (booths, materials, swag)', completed: false },
        ],
        preparation: [
          { id: '1', text: 'Create promotional materials', completed: false },
          { id: '2', text: 'Launch social media campaign', completed: false },
          { id: '3', text: 'Send invitations to target audience', completed: false },
          { id: '4', text: 'Set up registration system', completed: false },
          { id: '5', text: 'Prepare presentations and demos', completed: false },
        ],
        execution: [
          { id: '1', text: 'Set up venue and booths', completed: false },
          { id: '2', text: 'Register attendees', completed: false },
          { id: '3', text: 'Conduct speed interviews', completed: false },
          { id: '4', text: 'Give company presentations', completed: false },
          { id: '5', text: 'Collect resumes and contact info', completed: false },
        ],
        postReview: [
          { id: '1', text: 'Compile attendee data', completed: false },
          { id: '2', text: 'Evaluate event metrics (attendees, applications)', completed: false },
          { id: '3', text: 'Shortlist promising candidates', completed: false },
          { id: '4', text: 'Calculate ROI', completed: false },
        ],
        followUp: [
          { id: '1', text: 'Send thank-you emails to attendees', completed: false },
          { id: '2', text: 'Schedule follow-up interviews', completed: false },
          { id: '3', text: 'Add candidates to pipeline', completed: false },
          { id: '4', text: 'Plan next career day', completed: false },
        ],
      };
      return {
        key,
        title: { es: '', en: '', fr: '' },
        description: { es: '', en: '', fr: '' },
        items: items[key],
        notes: '',
        completed: false,
      };
    }),
  };
}

const STEP_INSIGHTS: Record<CampaignStepKey, { es: string; en: string; fr: string }[]> = {
  planning: [
    { es: 'Define criterios claros y medibles para cada posición.', en: 'Define clear and measurable criteria for each position.', fr: 'Définissez des critères clairs et mesurables pour chaque poste.' },
    { es: 'Establece un cronograma realista con hitos específicos.', en: 'Set a realistic timeline with specific milestones.', fr: 'Établissez un calendrier réaliste avec des jalons spécifiques.' },
    { es: 'Considera diversidad e inclusión en tu estrategia de sourcing.', en: 'Consider diversity and inclusion in your sourcing strategy.', fr: 'Considérez la diversité et l\'inclusion dans votre stratégie de sourcing.' },
  ],
  preparation: [
    { es: 'Las descripciones de puesto claras atraen mejores candidatos.', en: 'Clear job descriptions attract better candidates.', fr: 'Des descriptions de poste claires attirent de meilleurs candidats.' },
    { es: 'Usa múltiples canales para maximizar el alcance.', en: 'Use multiple channels to maximize reach.', fr: 'Utilisez plusieurs canaux pour maximiser la portée.' },
    { es: 'Prepara guías de entrevista estructuradas para consistencia.', en: 'Prepare structured interview guides for consistency.', fr: 'Préparez des guides d\'entretien structurés pour la cohérence.' },
  ],
  execution: [
    { es: 'Responde rápido a los candidatos para mantener su interés.', en: 'Respond quickly to candidates to maintain their interest.', fr: 'Répondez rapidement aux candidats pour maintenir leur intérêt.' },
    { es: 'Usa evaluaciones estandarizadas para comparar objetivamente.', en: 'Use standardized assessments for objective comparison.', fr: 'Utilisez des évaluations standardisées pour une comparaison objective.' },
  ],
  postReview: [
    { es: 'Documenta las razones de cada decisión para futuras referencias.', en: 'Document the reasons for each decision for future reference.', fr: 'Documentez les raisons de chaque décision pour référence future.' },
    { es: 'Recopila feedback de todos los entrevistadores antes de decidir.', en: 'Gather feedback from all interviewers before deciding.', fr: 'Recueillez les retours de tous les intervieweurs avant de décider.' },
  ],
  followUp: [
    { es: 'Preserva buenos candidatos no seleccionados para futuras posiciones.', en: 'Keep good non-selected candidates for future positions.', fr: 'Conservez les bons candidats non sélectionnés pour de futurs postes.' },
    { es: 'Analiza métricas de la campaña para mejorar futuras contrataciones.', en: 'Analyze campaign metrics to improve future hiring.', fr: 'Analysez les métriques de la campagne pour améliorer les recrutements futurs.' },
  ],
};

export default function CampaignsPage() {
  const t = useTranslations('recruitment.campaigns');
  const tr = useTranslations('recruitment');
  const tc = useTranslations('common');
  const locale = useLocale() as 'es' | 'en' | 'fr';
  const { currentOrg } = useOrg();

  const [campaigns, setCampaigns] = useState<RecruitmentCampaign[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<RecruitmentCampaign | null>(null);

  // Wizard state
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardStep, setWizardStep] = useState(0); // 0=template, 1=basics, 2-6=steps
  const [wizardCampaign, setWizardCampaign] = useState<Partial<RecruitmentCampaign>>({});
  const [editingCampaignId, setEditingCampaignId] = useState<string | null>(null);
  // Detail view
  const [viewingCampaign, setViewingCampaign] = useState<RecruitmentCampaign | null>(null);

  const loadData = async () => {
    if (!currentOrg) return;
    setLoading(true);
    try {
      const [campData, posData] = await Promise.all([
        getCampaigns(currentOrg.id),
        getPositions(currentOrg.id),
      ]);
      setCampaigns(campData);
      setPositions(posData);
    } catch (err) {
      console.error('Error loading campaigns:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentOrg) loadData();
  }, [currentOrg?.id]);

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter(c => {
      const title = c.title[locale] || c.title.es;
      const matchSearch = !search || title.toLowerCase().includes(search.toLowerCase());
      const matchStatus = !statusFilter || c.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [campaigns, search, statusFilter, locale]);

  // Wizard functions
  const startWizardFromTemplate = (template: 'standard' | 'career-day' | 'blank') => {
    let base: Partial<RecruitmentCampaign>;
    if (template === 'standard') {
      base = createStandardTemplate();
    } else if (template === 'career-day') {
      base = createCareerDayTemplate();
    } else {
      base = {
        title: { es: '', en: '', fr: '' },
        description: { es: '', en: '', fr: '' },
        goal: { es: '', en: '', fr: '' },
        steps: createDefaultSteps(),
      };
    }
    setWizardCampaign(base);
    setWizardStep(1);
  };

  const startEditWizard = (c: RecruitmentCampaign) => {
    setWizardCampaign(c);
    setEditingCampaignId(c.id);
    setWizardStep(1);
    setWizardOpen(true);
  };

  const duplicateCampaign = async (c: RecruitmentCampaign) => {
    if (!currentOrg) return;
    const dup: RecruitmentCampaign = {
      ...c,
      id: generateId(),
      title: { es: `${c.title.es} (copia)`, en: `${c.title.en} (copy)`, fr: `${c.title.fr || c.title.en} (copie)` },
      status: 'draft',
      createdAt: Timestamp.now(),
      updatedAt: undefined,
      steps: c.steps.map(s => ({
        ...s,
        completed: false,
        items: s.items.map(i => ({ ...i, completed: false })),
      })),
    };
    await saveCampaign(dup);
    loadData();
  };

  const saveWizardCampaign = async () => {
    if (!currentOrg) return;
    if (editingCampaignId) {
      await updateCampaign(editingCampaignId, {
        title: wizardCampaign.title,
        description: wizardCampaign.description,
        goal: wizardCampaign.goal,
        steps: wizardCampaign.steps,
        positionIds: wizardCampaign.positionIds,
      });
    } else {
      const id = generateId();
      const campaign: RecruitmentCampaign = {
        id,
        orgId: currentOrg.id,
        title: wizardCampaign.title || { es: '', en: '', fr: '' },
        description: wizardCampaign.description || { es: '', en: '', fr: '' },
        goal: wizardCampaign.goal || { es: '', en: '', fr: '' },
        status: 'draft',
        steps: wizardCampaign.steps || createDefaultSteps(),
        positionIds: wizardCampaign.positionIds || [],
        candidateIds: [],
        templateId: wizardCampaign.templateId,
        createdBy: currentOrg.id,
        createdAt: Timestamp.now(),
      };
      await saveCampaign(campaign);
    }
    setWizardOpen(false);
    setWizardStep(0);
    setEditingCampaignId(null);
    setWizardCampaign({});
    loadData();
  };

  const handleDelete = async () => {
    if (deleteTarget) {
      await deleteCampaign(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    }
  };

  const toggleCampaignStatus = async (c: RecruitmentCampaign, newStatus: CampaignStatus) => {
    await updateCampaign(c.id, { status: newStatus });
    loadData();
  };

  const statusBadgeVariant = (status: CampaignStatus) => {
    switch (status) {
      case 'active': return 'success';
      case 'completed': return 'primary';
      case 'cancelled': return 'default';
      case 'draft': return 'warning';
      default: return 'default';
    }
  };

  const totalWizardSteps = 7; // template + basics + 5 process steps

  // Wizard UI
  if (wizardOpen) {
    const currentStepKey = wizardStep >= 2 ? STEP_KEYS[wizardStep - 2] : null;
    const currentStepData = currentStepKey
      ? wizardCampaign.steps?.find(s => s.key === currentStepKey)
      : null;

    const updateStepField = (field: 'notes', value: string) => {
      if (!currentStepKey) return;
      const steps = (wizardCampaign.steps || []).map(s =>
        s.key === currentStepKey ? { ...s, [field]: value } : s
      );
      setWizardCampaign({ ...wizardCampaign, steps });
    };

    const addStepItem = () => {
      if (!currentStepKey) return;
      const steps = (wizardCampaign.steps || []).map(s =>
        s.key === currentStepKey
          ? { ...s, items: [...s.items, { id: generateId(), text: '', completed: false }] }
          : s
      );
      setWizardCampaign({ ...wizardCampaign, steps });
    };

    const updateStepItem = (itemId: string, text: string) => {
      if (!currentStepKey) return;
      const steps = (wizardCampaign.steps || []).map(s =>
        s.key === currentStepKey
          ? { ...s, items: s.items.map(i => i.id === itemId ? { ...i, text } : i) }
          : s
      );
      setWizardCampaign({ ...wizardCampaign, steps });
    };

    const toggleStepItem = (itemId: string) => {
      if (!currentStepKey) return;
      const steps = (wizardCampaign.steps || []).map(s =>
        s.key === currentStepKey
          ? { ...s, items: s.items.map(i => i.id === itemId ? { ...i, completed: !i.completed } : i) }
          : s
      );
      setWizardCampaign({ ...wizardCampaign, steps });
    };

    const removeStepItem = (itemId: string) => {
      if (!currentStepKey) return;
      const steps = (wizardCampaign.steps || []).map(s =>
        s.key === currentStepKey
          ? { ...s, items: s.items.filter(i => i.id !== itemId) }
          : s
      );
      setWizardCampaign({ ...wizardCampaign, steps });
    };

    const insights = currentStepKey ? STEP_INSIGHTS[currentStepKey] : [];

    return (
      <AuthGuard>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Wizard Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t('wizard.title')}</h1>
                <p className="text-sm text-gray-500">
                  {t('wizard.step', { current: wizardStep, total: totalWizardSteps - 1 })}
                </p>
              </div>
              <button onClick={() => { setWizardOpen(false); setEditingCampaignId(null); }}>
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex gap-1 mb-8">
              {Array.from({ length: totalWizardSteps - 1 }, (_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full ${i + 1 <= wizardStep ? 'bg-primary-500' : 'bg-gray-200'}`}
                />
              ))}
            </div>

            {/* Step 0: Template Selection */}
            {wizardStep === 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('wizard.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary-300" onClick={() => startWizardFromTemplate('standard')}>
                    <CardContent className="p-6 text-center">
                      <Flag className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900">{t('templates.standard')}</h3>
                      <p className="text-sm text-gray-500 mt-1">{t('templates.standardDesc')}</p>
                      <Button size="sm" className="mt-4">{t('templates.useTemplate')}</Button>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary-300" onClick={() => startWizardFromTemplate('career-day')}>
                    <CardContent className="p-6 text-center">
                      <Megaphone className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900">{t('templates.careerDay')}</h3>
                      <p className="text-sm text-gray-500 mt-1">{t('templates.careerDayDesc')}</p>
                      <Button size="sm" className="mt-4">{t('templates.useTemplate')}</Button>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary-300" onClick={() => startWizardFromTemplate('blank')}>
                    <CardContent className="p-6 text-center">
                      <Plus className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900">{t('templates.customize')}</h3>
                      <p className="text-sm text-gray-500 mt-1">{locale === 'es' ? 'Empieza desde cero' : locale === 'fr' ? 'Commencez de zéro' : 'Start from scratch'}</p>
                      <Button size="sm" variant="outline" className="mt-4">{t('templates.customize')}</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Step 1: Basic Info */}
            {wizardStep === 1 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">{t('campaignTitle')}</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('campaignTitle')}</label>
                  <Input
                    value={wizardCampaign.title?.[locale] || wizardCampaign.title?.es || ''}
                    onChange={(e) => {
                      const v = e.target.value;
                      setWizardCampaign({ ...wizardCampaign, title: { es: v, en: v, fr: v } });
                    }}
                    placeholder={t('campaignTitlePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('campaignDescription')}</label>
                  <textarea
                    value={wizardCampaign.description?.[locale] || wizardCampaign.description?.es || ''}
                    onChange={(e) => {
                      const v = e.target.value;
                      setWizardCampaign({ ...wizardCampaign, description: { es: v, en: v, fr: v } });
                    }}
                    placeholder={t('campaignDescriptionPlaceholder')}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('goal')}</label>
                  <textarea
                    value={wizardCampaign.goal?.[locale] || wizardCampaign.goal?.es || ''}
                    onChange={(e) => {
                      const v = e.target.value;
                      setWizardCampaign({ ...wizardCampaign, goal: { es: v, en: v, fr: v } });
                    }}
                    placeholder={t('goalPlaceholder')}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('linkedPositions')}</label>
                  <div className="space-y-1">
                    {positions.filter(p => p.status === 'open' || p.status === 'draft').map(p => (
                      <label key={p.id} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={(wizardCampaign.positionIds || []).includes(p.id)}
                          onChange={(e) => {
                            const ids = wizardCampaign.positionIds || [];
                            setWizardCampaign({
                              ...wizardCampaign,
                              positionIds: e.target.checked ? [...ids, p.id] : ids.filter(id => id !== p.id),
                            });
                          }}
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{p.title[locale] || p.title.es}</span>
                      </label>
                    ))}
                    {positions.filter(p => p.status === 'open' || p.status === 'draft').length === 0 && (
                      <p className="text-sm text-gray-400">{tr('noPositions')}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Steps 2-6: Process Steps */}
            {wizardStep >= 2 && currentStepKey && currentStepData && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {t(`steps.${currentStepKey}`)}
                </h2>

                {/* Insights */}
                {insights.length > 0 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-amber-800">{t('insights')}</span>
                    </div>
                    <ul className="space-y-1">
                      {insights.map((tip, i) => (
                        <li key={i} className="text-sm text-amber-700 flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                          {tip[locale] || tip.es}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Checklist Items */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      {locale === 'es' ? 'Elementos del paso' : locale === 'fr' ? 'Éléments de l\'étape' : 'Step items'}
                    </label>
                    <Button size="sm" variant="ghost" onClick={addStepItem}>
                      <Plus className="w-3.5 h-3.5 mr-1" />
                      {locale === 'es' ? 'Agregar' : locale === 'fr' ? 'Ajouter' : 'Add'}
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {currentStepData.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <button onClick={() => toggleStepItem(item.id)} className="flex-shrink-0">
                          {item.completed
                            ? <CheckCircle className="w-5 h-5 text-green-500" />
                            : <Circle className="w-5 h-5 text-gray-300" />}
                        </button>
                        <Input
                          value={item.text}
                          onChange={(e) => updateStepItem(item.id, e.target.value)}
                          className={item.completed ? 'line-through text-gray-400' : ''}
                        />
                        <button onClick={() => removeStepItem(item.id)} className="flex-shrink-0 text-gray-400 hover:text-red-500">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {locale === 'es' ? 'Notas' : locale === 'fr' ? 'Notes' : 'Notes'}
                  </label>
                  <textarea
                    value={currentStepData.notes}
                    onChange={(e) => updateStepField('notes', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={locale === 'es' ? 'Notas adicionales para este paso...' : locale === 'fr' ? 'Notes supplémentaires pour cette étape...' : 'Additional notes for this step...'}
                  />
                </div>
              </div>
            )}

            {/* Wizard Navigation */}
            {wizardStep >= 1 && (
              <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={() => setWizardStep(Math.max(0, wizardStep - 1))}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {t('wizard.prev')}
                </Button>
                {wizardStep < totalWizardSteps - 1 ? (
                  <Button onClick={() => setWizardStep(wizardStep + 1)}>
                    {t('wizard.next')}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                ) : (
                  <Button onClick={saveWizardCampaign}>
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {t('wizard.finish')}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </AuthGuard>
    );
  }

  // Detail view
  if (viewingCampaign) {
    const c = viewingCampaign;
    const title = c.title[locale] || c.title.es;
    const desc = c.description[locale] || c.description.es;
    const goal = c.goal[locale] || c.goal.es;

    return (
      <AuthGuard>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-4 mb-6">
              <button onClick={() => setViewingCampaign(null)}>
                <ArrowLeft className="w-5 h-5 text-gray-400" />
              </button>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
              <Badge variant={statusBadgeVariant(c.status)}>{t(`status.${c.status}`)}</Badge>
            </div>

            {goal && (
              <Card className="mb-6">
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">{t('goal')}</h3>
                  <p className="text-sm text-gray-600">{goal}</p>
                </CardContent>
              </Card>
            )}

            {/* Steps Progress */}
            <div className="space-y-4">
              {c.steps.map((step, idx) => {
                const completedItems = step.items.filter(i => i.completed).length;
                const totalItems = step.items.length;
                const progress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

                return (
                  <Card key={step.key}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {idx + 1}. {t(`steps.${step.key}`)}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {completedItems}/{totalItems}
                        </span>
                      </div>
                      {totalItems > 0 && (
                        <div className="w-full h-2 bg-gray-100 rounded-full mb-3">
                          <div
                            className="h-2 bg-primary-500 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                      <div className="space-y-1">
                        {step.items.map(item => (
                          <div key={item.id} className="flex items-center gap-2 text-sm">
                            {item.completed
                              ? <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              : <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />}
                            <span className={item.completed ? 'text-gray-400 line-through' : 'text-gray-700'}>
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                      {step.notes && (
                        <p className="text-xs text-gray-400 mt-2 italic">{step.notes}</p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-6">
              <Button variant="outline" onClick={() => startEditWizard(c)}>
                <Pencil className="w-4 h-4 mr-1" />
                {t('editCampaign')}
              </Button>
              <Button variant="outline" onClick={() => duplicateCampaign(c)}>
                <Copy className="w-4 h-4 mr-1" />
                {locale === 'es' ? 'Duplicar' : locale === 'fr' ? 'Dupliquer' : 'Duplicate'}
              </Button>
              {c.status === 'draft' && (
                <Button onClick={() => { toggleCampaignStatus(c, 'active'); setViewingCampaign(null); }}>
                  <PlayCircle className="w-4 h-4 mr-1" />
                  {locale === 'es' ? 'Activar' : locale === 'fr' ? 'Activer' : 'Activate'}
                </Button>
              )}
              {c.status === 'active' && (
                <Button onClick={() => { toggleCampaignStatus(c, 'completed'); setViewingCampaign(null); }}>
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {locale === 'es' ? 'Completar' : locale === 'fr' ? 'Terminer' : 'Complete'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </AuthGuard>
    );
  }

  // List view
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link href={`/${locale}/admin/recruitment`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {tc('back')}
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                <p className="text-sm text-gray-500">{t('subtitle')}</p>
              </div>
            </div>
            <Button onClick={() => { setWizardOpen(true); setWizardStep(0); setEditingCampaignId(null); }}>
              <Plus className="w-4 h-4 mr-2" />
              {t('addCampaign')}
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t('searchCampaigns')}
                className="pl-9"
              />
            </div>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-40"
              options={[
                { value: '', label: tr('allStatuses') },
                ...CAMPAIGN_STATUSES.map(s => ({ value: s, label: t(`status.${s}`) })),
              ]}
            />
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
            </div>
          ) : filteredCampaigns.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Megaphone className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">{t('noCampaigns')}</p>
                <Button className="mt-4" onClick={() => { setWizardOpen(true); setWizardStep(0); }}>
                  <Plus className="w-4 h-4 mr-2" />
                  {t('addCampaign')}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredCampaigns.map(campaign => {
                const title = campaign.title[locale] || campaign.title.es;
                const desc = campaign.description[locale] || campaign.description.es;
                const completedSteps = campaign.steps.filter(s =>
                  s.items.length > 0 && s.items.every(i => i.completed)
                ).length;

                return (
                  <Card key={campaign.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setViewingCampaign(campaign)}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate flex-1">{title}</h3>
                        <Badge variant={statusBadgeVariant(campaign.status)}>
                          {t(`status.${campaign.status}`)}
                        </Badge>
                      </div>
                      {desc && <p className="text-sm text-gray-500 mb-3 line-clamp-2">{desc}</p>}
                      {/* Progress */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full">
                          <div
                            className="h-2 bg-primary-500 rounded-full transition-all"
                            style={{ width: `${campaign.steps.length > 0 ? (completedSteps / campaign.steps.length) * 100 : 0}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{completedSteps}/{campaign.steps.length}</span>
                      </div>
                      {/* Actions */}
                      <div className="flex items-center gap-2 pt-2 border-t border-gray-100" onClick={(e) => e.stopPropagation()}>
                        <Button size="sm" variant="ghost" onClick={() => startEditWizard(campaign)}>
                          <Pencil className="w-3.5 h-3.5 mr-1" />
                          {t('editCampaign')}
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => duplicateCampaign(campaign)}>
                          <Copy className="w-3.5 h-3.5 mr-1" />
                          {locale === 'es' ? 'Duplicar' : locale === 'fr' ? 'Dupliquer' : 'Duplicate'}
                        </Button>
                        <div className="flex-1" />
                        <button onClick={() => setDeleteTarget(campaign)} className="p-1.5 text-gray-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        <ConfirmModal
          isOpen={!!deleteTarget}
          title={t('deleteCampaign')}
          message={t('deleteConfirm', { name: deleteTarget?.title[locale] || deleteTarget?.title.es || '' })}
          confirmLabel={tc('delete')}
          variant="danger"
          onConfirm={handleDelete}
          onClose={() => setDeleteTarget(null)}
        />
      </div>
    </AuthGuard>
  );
}
