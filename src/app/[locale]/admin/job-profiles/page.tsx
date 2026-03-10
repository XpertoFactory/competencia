'use client';

import { useState, useEffect } from 'react';
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
  TextArea,
  Select,
  Badge,
  ConfirmModal,
} from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import {
  getJobProfiles,
  saveJobProfile,
  deleteDocument,
  COLLECTIONS,
  generateId,
  getProfiles,
} from '@/lib/firebase/firestore';
import type {
  JobProfile,
  JobRequirements,
  JobFitWeights,
  Profile,
  DISCDimension,
} from '@/types';
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  X,
  Loader2,
  Briefcase,
} from 'lucide-react';

const DISC_DIMENSIONS: DISCDimension[] = [
  'dominance',
  'influence',
  'steadiness',
  'conscientiousness',
];

const DEFAULT_WEIGHTS: JobFitWeights = {
  competency: 0.30,
  cognitive: 0.15,
  personality: 0.15,
  aptitude: 0.15,
  disc: 0.10,
  technical: 0.15,
};

const DEFAULT_REQUIREMENTS: JobRequirements = {
  minProfessionalScore: 60,
  minSoftSkillsScore: 60,
  minReadinessScore: 50,
  preferredDISCStyles: [],
  weights: { ...DEFAULT_WEIGHTS },
};

function createEmptyJobProfile(): JobProfile {
  return {
    id: '',
    title: { es: '', en: '' },
    department: { es: '', en: '' },
    description: { es: '', en: '' },
    profileId: '',
    requirements: { ...DEFAULT_REQUIREMENTS, weights: { ...DEFAULT_WEIGHTS }, preferredDISCStyles: [] },
    isActive: true,
  };
}

export default function JobProfilesPage() {
  const t = useTranslations('jobProfiles');
  const tc = useTranslations('common');
  const te = useTranslations('errors');
  const ts = useTranslations('success');
  const locale = useLocale() as 'es' | 'en';

  const [jobProfiles, setJobProfiles] = useState<JobProfile[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [editingProfile, setEditingProfile] = useState<JobProfile>(createEmptyJobProfile());
  const [isEditing, setIsEditing] = useState(false);

  // Delete modal
  const [deleteTarget, setDeleteTarget] = useState<JobProfile | null>(null);

  // Messages
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (successMsg || errorMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg('');
        setErrorMsg('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg, errorMsg]);

  async function loadData() {
    try {
      setLoading(true);
      const [jp, p] = await Promise.all([
        getJobProfiles(false),
        getProfiles(false),
      ]);
      setJobProfiles(jp);
      setProfiles(p);
    } catch {
      setErrorMsg(te('loadingFailed'));
    } finally {
      setLoading(false);
    }
  }

  function openCreateForm() {
    const newProfile = createEmptyJobProfile();
    newProfile.id = generateId();
    setEditingProfile(newProfile);
    setIsEditing(false);
    setShowForm(true);
  }

  function openEditForm(jp: JobProfile) {
    setEditingProfile({
      ...jp,
      requirements: {
        ...DEFAULT_REQUIREMENTS,
        ...jp.requirements,
        weights: { ...DEFAULT_WEIGHTS, ...jp.requirements.weights },
        preferredDISCStyles: jp.requirements.preferredDISCStyles ? [...jp.requirements.preferredDISCStyles] : [],
      },
    });
    setIsEditing(true);
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingProfile(createEmptyJobProfile());
    setIsEditing(false);
  }

  async function handleSave() {
    try {
      setSaving(true);
      await saveJobProfile(editingProfile);
      await loadData();
      closeForm();
      setSuccessMsg(isEditing ? ts('updated') : ts('created'));
    } catch {
      setErrorMsg(te('saveFailed'));
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    try {
      setDeleting(true);
      await deleteDocument(COLLECTIONS.JOB_PROFILES, deleteTarget.id);
      await loadData();
      setDeleteTarget(null);
      setSuccessMsg(ts('deleted'));
    } catch {
      setErrorMsg(te('saveFailed'));
    } finally {
      setDeleting(false);
    }
  }

  function updateField<K extends keyof JobProfile>(key: K, value: JobProfile[K]) {
    setEditingProfile((prev) => ({ ...prev, [key]: value }));
  }

  function updateLocalizedField(field: 'title' | 'department' | 'description', lang: 'es' | 'en', value: string) {
    setEditingProfile((prev) => ({
      ...prev,
      [field]: { ...prev[field], [lang]: value },
    }));
  }

  function updateRequirement<K extends keyof JobRequirements>(key: K, value: JobRequirements[K]) {
    setEditingProfile((prev) => ({
      ...prev,
      requirements: { ...prev.requirements, [key]: value },
    }));
  }

  function updateWeight<K extends keyof JobFitWeights>(key: K, value: number) {
    setEditingProfile((prev) => ({
      ...prev,
      requirements: {
        ...prev.requirements,
        weights: { ...prev.requirements.weights, [key]: value },
      },
    }));
  }

  function toggleDISCStyle(dimension: DISCDimension) {
    setEditingProfile((prev) => {
      const current = prev.requirements.preferredDISCStyles || [];
      const updated = current.includes(dimension)
        ? current.filter((d) => d !== dimension)
        : [...current, dimension];
      return {
        ...prev,
        requirements: { ...prev.requirements, preferredDISCStyles: updated },
      };
    });
  }

  function getProfileName(profileId: string): string {
    const profile = profiles.find((p) => p.id === profileId);
    return profile ? profile.name[locale] : profileId;
  }

  const weightsSum = editingProfile.requirements.weights
    ? Object.values(editingProfile.requirements.weights).reduce((sum, v) => sum + v, 0)
    : 0;

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />

        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
          {/* Back link */}
          <Link
            href={`/${locale}/admin`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            {tc('back')}
          </Link>

          {/* Page header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
            </div>
            {!showForm && (
              <Button onClick={openCreateForm}>
                <Plus className="h-4 w-4 mr-2" />
                {t('create')}
              </Button>
            )}
          </div>

          {/* Messages */}
          {successMsg && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm">
              {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
              {errorMsg}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
              <span className="ml-2 text-gray-600">{tc('loading')}</span>
            </div>
          )}

          {/* Form */}
          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{isEditing ? t('edit') : t('create')}</CardTitle>
                  <button
                    type="button"
                    onClick={closeForm}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">{t('titleField')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Español"
                        value={editingProfile.title.es}
                        onChange={(e) => updateLocalizedField('title', 'es', e.target.value)}
                        required
                      />
                      <Input
                        label="English"
                        value={editingProfile.title.en}
                        onChange={(e) => updateLocalizedField('title', 'en', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Department */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">{t('department')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Español"
                        value={editingProfile.department.es}
                        onChange={(e) => updateLocalizedField('department', 'es', e.target.value)}
                        required
                      />
                      <Input
                        label="English"
                        value={editingProfile.department.en}
                        onChange={(e) => updateLocalizedField('department', 'en', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">{t('description')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <TextArea
                        label="Español"
                        value={editingProfile.description.es}
                        onChange={(e) => updateLocalizedField('description', 'es', e.target.value)}
                      />
                      <TextArea
                        label="English"
                        value={editingProfile.description.en}
                        onChange={(e) => updateLocalizedField('description', 'en', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Linked Profile */}
                  <Select
                    label={t('linkedProfile')}
                    value={editingProfile.profileId}
                    onChange={(e) => updateField('profileId', e.target.value)}
                    options={profiles.map((p) => ({
                      value: p.id,
                      label: p.name[locale],
                    }))}
                    placeholder={`-- ${tc('optional')} --`}
                  />

                  {/* Active toggle */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editingProfile.isActive}
                      onChange={(e) => updateField('isActive', e.target.checked)}
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {editingProfile.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </label>

                  {/* Requirements Section */}
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('requirements')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Input
                        label={t('minProfessional')}
                        type="number"
                        min={0}
                        max={100}
                        value={editingProfile.requirements.minProfessionalScore}
                        onChange={(e) =>
                          updateRequirement('minProfessionalScore', Number(e.target.value))
                        }
                      />
                      <Input
                        label={t('minSoftSkills')}
                        type="number"
                        min={0}
                        max={100}
                        value={editingProfile.requirements.minSoftSkillsScore}
                        onChange={(e) =>
                          updateRequirement('minSoftSkillsScore', Number(e.target.value))
                        }
                      />
                      <Input
                        label={t('minReadiness')}
                        type="number"
                        min={0}
                        max={100}
                        value={editingProfile.requirements.minReadinessScore}
                        onChange={(e) =>
                          updateRequirement('minReadinessScore', Number(e.target.value))
                        }
                      />
                      <Input
                        label={t('minCognitive')}
                        type="number"
                        min={0}
                        max={100}
                        value={editingProfile.requirements.minCognitivePercentile ?? ''}
                        onChange={(e) =>
                          updateRequirement(
                            'minCognitivePercentile',
                            e.target.value === '' ? undefined : Number(e.target.value)
                          )
                        }
                        helperText={tc('optional')}
                      />
                      <Input
                        label={t('minTechnical')}
                        type="number"
                        min={0}
                        max={100}
                        value={editingProfile.requirements.minTechnicalScore ?? ''}
                        onChange={(e) =>
                          updateRequirement(
                            'minTechnicalScore',
                            e.target.value === '' ? undefined : Number(e.target.value)
                          )
                        }
                        helperText={tc('optional')}
                      />
                    </div>

                    {/* Preferred DISC Styles */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">{t('preferredDISC')}</h4>
                      <div className="flex flex-wrap gap-3">
                        {DISC_DIMENSIONS.map((dim) => {
                          const isSelected = (editingProfile.requirements.preferredDISCStyles || []).includes(dim);
                          return (
                            <label key={dim} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleDISCStyle(dim)}
                                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                              />
                              <span className="text-sm text-gray-700 capitalize">{dim}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Weights Section */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{t('weights')}</h3>
                      <Badge
                        variant={Math.abs(weightsSum - 1.0) < 0.01 ? 'success' : 'warning'}
                        size="sm"
                      >
                        {locale === 'es' ? 'Suma' : 'Sum'}: {weightsSum.toFixed(2)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                      {(
                        Object.keys(DEFAULT_WEIGHTS) as Array<keyof JobFitWeights>
                      ).map((key) => (
                        <Input
                          key={key}
                          label={key.charAt(0).toUpperCase() + key.slice(1)}
                          type="number"
                          min={0}
                          max={1}
                          step={0.05}
                          value={editingProfile.requirements.weights[key]}
                          onChange={(e) => updateWeight(key, Number(e.target.value))}
                        />
                      ))}
                    </div>
                    {Math.abs(weightsSum - 1.0) >= 0.01 && (
                      <p className="mt-2 text-sm text-yellow-600">
                        {locale === 'es'
                          ? 'Los pesos deben sumar 1.0'
                          : 'Weights should sum to 1.0'}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-3 border-t pt-4">
                    <Button variant="outline" onClick={closeForm} disabled={saving}>
                      {tc('cancel')}
                    </Button>
                    <Button onClick={handleSave} isLoading={saving}>
                      {tc('save')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Job Profiles List */}
          {!loading && !showForm && jobProfiles.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Briefcase className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p>{t('noProfiles')}</p>
            </div>
          )}

          {!loading && !showForm && jobProfiles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobProfiles.map((jp) => (
                <Card key={jp.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900 truncate">
                            {jp.title[locale]}
                          </h3>
                          <Badge
                            variant={jp.isActive ? 'success' : 'default'}
                            size="sm"
                          >
                            {jp.isActive
                              ? locale === 'es' ? 'Activo' : 'Active'
                              : locale === 'es' ? 'Inactivo' : 'Inactive'}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-1">
                          {jp.department[locale]}
                        </p>
                        {jp.profileId && (
                          <p className="text-xs text-gray-400">
                            {t('linkedProfile')}: {getProfileName(jp.profileId)}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 ml-2">
                        <button
                          type="button"
                          onClick={() => openEditForm(jp)}
                          className="p-2 text-gray-400 hover:text-primary-600 rounded-lg hover:bg-gray-100"
                          title={tc('edit')}
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(jp)}
                          className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-100"
                          title={tc('delete')}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>

        <Footer />

        {/* Delete Confirmation Modal */}
        <ConfirmModal
          isOpen={!!deleteTarget}
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleDelete}
          title={tc('delete')}
          message={`${t('confirmDelete')} ${t('deleteWarning')}`}
          confirmLabel={tc('delete')}
          cancelLabel={tc('cancel')}
          variant="danger"
          isLoading={deleting}
        />
      </div>
    </AuthGuard>
  );
}
