'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge, Input, TextArea, Select, ConfirmModal } from '@/components/ui';
import {
  Users,
  FileQuestion,
  Layers,
  BookOpen,
  Settings,
  BarChart3,
  Plus,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  Pencil,
  Trash2,
  X,
  LogOut,
  Briefcase,
  Target,
  GitCompare,
  History,
  UserCheck,
  ClipboardCheck,
  Star,
  ThermometerSun,
  Building2,
  TrendingUp,
  Activity,
  ExternalLink,
} from 'lucide-react';
import { AuthGuard, useAuth } from '@/components/auth';
import { OrgSwitcher } from '@/components/org';
import {
  getEvaluations,
  getProfiles,
  saveProfile,
  deleteDocument,
  COLLECTIONS,
  getDocuments,
  saveQuestion,
  getArchetypeProfiles,
  getResources,
  getCategories,
  generateId,
  setDocument,
  getEmployees,
} from '@/lib/firebase/firestore';
import type {
  Evaluation,
  Profile,
  Question,
  QuestionType,
  QuestionOption,
  ArchetypeProfile,
  Resource,
  ResourceType,
  CompetencyCategory,
  LocalizedString,
  AnalysisResult,
  Employee,
} from '@/types';

interface DashboardStats {
  totalEvaluations: number;
  analyzedEvaluations: number;
  activeProfiles: number;
  averageScore: number;
  activeEmployees: number;
}

interface RecentEvaluation {
  id: string;
  candidateName: string;
  profileName: string;
  status: 'in-progress' | 'completed' | 'analyzed';
  completedAt: Date | null;
  startedAt: Date | null;
  score: number | null;
}

type Tab = 'dashboard' | 'profiles' | 'questions' | 'archetypes' | 'resources' | 'evaluations';

export default function AdminPage() {
  const t = useTranslations('admin');
  const ta = useTranslations('auth');
  const tc = useTranslations('common');
  const locale = useLocale();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  const navItems = [
    { id: 'dashboard' as const, icon: BarChart3, label: t('dashboard') },
    { id: 'profiles' as const, icon: Users, label: t('profiles.title') },
    { id: 'questions' as const, icon: FileQuestion, label: t('questions.title') },
    { id: 'archetypes' as const, icon: Layers, label: t('archetypes.title') },
    { id: 'resources' as const, icon: BookOpen, label: t('resources.title') },
    { id: 'evaluations' as const, icon: CheckCircle, label: t('evaluations.title') },
  ];

  return (
    <AuthGuard>
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
          <div className="p-4">
            <div className="mb-4">
              <OrgSwitcher />
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">{t('title')}</h2>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 pt-4 border-t border-gray-200 space-y-1">
              <Link href={`/${locale}/admin/employees`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <UserCheck className="w-5 h-5" />
                  {t('employees') || 'Empleados'}
                </button>
              </Link>
              <Link href={`/${locale}/admin/probation`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <ClipboardCheck className="w-5 h-5" />
                  {t('probation') || 'Probatoria'}
                </button>
              </Link>
              <Link href={`/${locale}/admin/reviews`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <Star className="w-5 h-5" />
                  {t('reviews') || 'Evaluaciones'}
                </button>
              </Link>
              <Link href={`/${locale}/admin/climate`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <ThermometerSun className="w-5 h-5" />
                  {t('climate') || 'Clima Laboral'}
                </button>
              </Link>
              <Link href={`/${locale}/admin/comparison`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <GitCompare className="w-5 h-5" />
                  {t('comparison') || 'Comparación'}
                </button>
              </Link>
              <Link href={`/${locale}/admin/history`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <History className="w-5 h-5" />
                  {t('history') || 'Historial'}
                </button>
              </Link>
              <Link href={`/${locale}/admin/job-profiles`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <Briefcase className="w-5 h-5" />
                  {t('jobProfiles') || 'Perfiles de Puesto'}
                </button>
              </Link>
              <Link href={`/${locale}/admin/job-fit`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <Target className="w-5 h-5" />
                  {t('jobFit') || 'Ajuste al Puesto'}
                </button>
              </Link>
              <Link href={`/${locale}/admin/organizations`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <Building2 className="w-5 h-5" />
                  {t('organizations') || 'Organizaciones'}
                </button>
              </Link>
              <Link href={`/${locale}/admin/settings`}>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  <Settings className="w-5 h-5" />
                  {t('settings.title')}
                </button>
              </Link>
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                {ta('logout')}
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === 'dashboard' && <DashboardContent t={t} locale={locale} />}
          {activeTab === 'profiles' && <ProfilesContent t={t} tc={tc} />}
          {activeTab === 'questions' && <QuestionsContent t={t} tc={tc} />}
          {activeTab === 'archetypes' && <ArchetypesContent t={t} tc={tc} />}
          {activeTab === 'resources' && <ResourcesContent t={t} tc={tc} />}
          {activeTab === 'evaluations' && <EvaluationsContent t={t} locale={locale} />}
        </main>
      </div>

      <Footer />
    </div>
    </AuthGuard>
  );
}

function DashboardContent({ t, locale }: { t: any; locale: string }) {
  const [stats, setStats] = useState<DashboardStats>({
    totalEvaluations: 0,
    analyzedEvaluations: 0,
    activeProfiles: 0,
    averageScore: 0,
    activeEmployees: 0,
  });
  const [recentEvaluations, setRecentEvaluations] = useState<RecentEvaluation[]>([]);
  const [loading, setLoading] = useState(true);

  const l = (es: string, en: string) => locale === 'es' ? es : en;

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const [evaluations, profiles, employees, results] = await Promise.all([
          getEvaluations(undefined, 200),
          getProfiles(true),
          getEmployees().catch(() => [] as Employee[]),
          getDocuments<AnalysisResult>(COLLECTIONS.RESULTS).catch(() => [] as AnalysisResult[]),
        ]);

        const profileMap = new Map(profiles.map((p) => [p.id, p]));

        // Calculate average score from analysis results
        let avgScore = 0;
        if (results.length > 0) {
          const totalScore = results.reduce((sum, r) => {
            const indices = r.indices;
            const avg = (indices.professional + indices.softSkills + indices.readiness) / 3;
            return sum + avg;
          }, 0);
          avgScore = Math.round(totalScore / results.length);
        }

        const analyzedCount = evaluations.filter((e) => e.status === 'analyzed').length;

        // Build a map of evaluationId -> result for score lookup
        const resultMap = new Map(results.map((r) => [r.evaluationId, r]));

        setStats({
          totalEvaluations: evaluations.length,
          analyzedEvaluations: analyzedCount,
          activeProfiles: profiles.length,
          averageScore: avgScore,
          activeEmployees: employees.length,
        });

        setRecentEvaluations(
          evaluations.slice(0, 10).map((e) => {
            const profile = profileMap.get(e.profileId);
            const profileName = profile
              ? (locale === 'en' ? profile.name.en : profile.name.es)
              : e.profileId;
            const completedAt = e.completedAt
              ? (e.completedAt.toDate ? e.completedAt.toDate() : new Date(e.completedAt as any))
              : null;
            const startedAt = e.startedAt
              ? (e.startedAt.toDate ? e.startedAt.toDate() : new Date(e.startedAt as any))
              : null;
            const result = resultMap.get(e.id);
            const score = result
              ? Math.round((result.indices.professional + result.indices.softSkills + result.indices.readiness) / 3)
              : null;
            return {
              id: e.id,
              candidateName: e.candidateName,
              profileName,
              status: e.status,
              completedAt,
              startedAt,
              score,
            };
          })
        );
      } catch {
        // Keep default empty state on error
      } finally {
        setLoading(false);
      }
    }
    fetchDashboardData();
  }, [locale]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
      </div>
    );
  }

  const quickActions = [
    { icon: Users, label: l('Perfiles Profesionales', 'Professional Profiles'), href: `/${locale}/admin`, tab: 'profiles' as const, color: 'bg-blue-100 text-blue-600' },
    { icon: Briefcase, label: l('Perfiles de Puesto', 'Job Profiles'), href: `/${locale}/admin/job-profiles`, color: 'bg-indigo-100 text-indigo-600' },
    { icon: Target, label: l('Ajuste al Puesto', 'Job Fit'), href: `/${locale}/admin/job-fit`, color: 'bg-violet-100 text-violet-600' },
    { icon: GitCompare, label: l('Comparación', 'Comparison'), href: `/${locale}/admin/comparison`, color: 'bg-cyan-100 text-cyan-600' },
    { icon: History, label: l('Historial', 'History'), href: `/${locale}/admin/history`, color: 'bg-teal-100 text-teal-600' },
    { icon: UserCheck, label: l('Empleados', 'Employees'), href: `/${locale}/admin/employees`, color: 'bg-emerald-100 text-emerald-600' },
    { icon: ClipboardCheck, label: l('Probatoria', 'Probation'), href: `/${locale}/admin/probation`, color: 'bg-amber-100 text-amber-600' },
    { icon: Star, label: l('Evaluaciones 360°', '360° Reviews'), href: `/${locale}/admin/reviews`, color: 'bg-orange-100 text-orange-600' },
    { icon: ThermometerSun, label: l('Clima Laboral', 'Climate'), href: `/${locale}/admin/climate`, color: 'bg-rose-100 text-rose-600' },
    { icon: Building2, label: l('Organizaciones', 'Organizations'), href: `/${locale}/admin/organizations`, color: 'bg-slate-100 text-slate-600' },
    { icon: Settings, label: l('Configuración', 'Settings'), href: `/${locale}/admin/settings`, color: 'bg-gray-100 text-gray-600' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{t('dashboard')}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {l('Resumen general de la plataforma', 'Platform overview')}
        </p>
      </div>

      {/* Summary Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title={l('Total Evaluaciones', 'Total Evaluations')}
          value={stats.totalEvaluations}
          icon={BarChart3}
          color="blue"
        />
        <StatCard
          title={l('Analizadas', 'Analyzed')}
          value={stats.analyzedEvaluations}
          icon={CheckCircle}
          color="green"
          subtitle={stats.totalEvaluations > 0
            ? `${Math.round((stats.analyzedEvaluations / stats.totalEvaluations) * 100)}%`
            : undefined}
        />
        <StatCard
          title={l('Perfiles Activos', 'Active Profiles')}
          value={stats.activeProfiles}
          icon={Users}
          color="indigo"
        />
        <StatCard
          title={l('Puntaje Promedio', 'Average Score')}
          value={stats.averageScore > 0 ? `${stats.averageScore}%` : '—'}
          icon={TrendingUp}
          color="purple"
        />
        <StatCard
          title={l('Empleados', 'Employees')}
          value={stats.activeEmployees}
          icon={UserCheck}
          color="emerald"
        />
      </div>

      {/* Recent Evaluations */}
      <Card variant="bordered">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-gray-400" />
              {l('Evaluaciones Recientes', 'Recent Evaluations')}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {recentEvaluations.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <BarChart3 className="w-10 h-10 mx-auto mb-2 opacity-50" />
              <p>{l('Sin evaluaciones aún', 'No evaluations yet')}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {l('Candidato', 'Candidate')}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                      {l('Perfil', 'Profile')}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {l('Estado', 'Status')}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">
                      {l('Fecha', 'Date')}
                    </th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {l('Acción', 'Action')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentEvaluations.map((evaluation) => (
                    <tr key={evaluation.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-semibold flex-shrink-0">
                            {evaluation.candidateName.charAt(0).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{evaluation.candidateName}</p>
                            <p className="text-xs text-gray-400 truncate sm:hidden">{evaluation.profileName}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600 hidden sm:table-cell">
                        <span className="truncate block max-w-[200px]">{evaluation.profileName}</span>
                      </td>
                      <td className="py-3 px-4">
                        <StatusBadge status={evaluation.status} t={t} />
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500 hidden md:table-cell">
                        {(evaluation.completedAt || evaluation.startedAt)
                          ? (evaluation.completedAt || evaluation.startedAt)!.toLocaleDateString(
                              locale === 'es' ? 'es-ES' : 'en-US',
                              { day: 'numeric', month: 'short', year: 'numeric' }
                            )
                          : '—'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {evaluation.status === 'analyzed' ? (
                          <Link href={`/${locale}/results/${evaluation.id}`}>
                            <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-800">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </Link>
                        ) : (
                          <span className="text-xs text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {l('Acceso Rápido', 'Quick Access')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.label} href={action.href}>
                <Card variant="bordered" className="hover:border-primary-300 hover:shadow-md transition-all cursor-pointer group h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                    <div className={`p-3 rounded-xl ${action.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 leading-tight">
                      {action.label}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProfilesContent({ t, tc }: { t: any; tc: any }) {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [form, setForm] = useState({
    nameEs: '', nameEn: '', descriptionEs: '', descriptionEn: '', isActive: true,
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getProfiles(false);
      setProfiles(data);
    } catch { /* empty */ } finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => {
    setForm({ nameEs: '', nameEn: '', descriptionEs: '', descriptionEn: '', isActive: true });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (p: Profile) => {
    setForm({
      nameEs: p.name.es, nameEn: p.name.en,
      descriptionEs: p.description.es, descriptionEn: p.description.en,
      isActive: p.isActive,
    });
    setEditingId(p.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const profile: Profile = {
        id: editingId || generateId(),
        name: { es: form.nameEs, en: form.nameEn, fr: form.nameEn },
        description: { es: form.descriptionEs, en: form.descriptionEn, fr: form.descriptionEn },
        competencyCategories: editingId ? (profiles.find(p => p.id === editingId)?.competencyCategories || []) : [],
        sectors: editingId ? (profiles.find(p => p.id === editingId)?.sectors || []) : [],
        level: editingId ? (profiles.find(p => p.id === editingId)?.level || 'professional-specialist') : 'professional-specialist',
        isActive: form.isActive,
      };
      await saveProfile(profile);
      resetForm();
      await fetchData();
    } catch { /* empty */ } finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteDocument(COLLECTIONS.PROFILES, deleteTarget);
      setDeleteTarget(null);
      await fetchData();
    } catch { /* empty */ }
  };

  if (loading) {
    return <div className="flex justify-center items-center py-20"><Loader2 className="w-8 h-8 text-primary-600 animate-spin" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">{t('profiles.title')}</h1>
        <Button variant="primary" onClick={() => { resetForm(); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" />
          {t('profiles.create')}
        </Button>
      </div>

      {showForm && (
        <Card variant="bordered">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{editingId ? t('profiles.edit') : t('profiles.create')}</CardTitle>
              <button onClick={resetForm}><X className="w-5 h-5 text-gray-400 hover:text-gray-600" /></button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label={t('profiles.nameEs')} value={form.nameEs} onChange={e => setForm(f => ({ ...f, nameEs: e.target.value }))} required />
              <Input label={t('profiles.nameEn')} value={form.nameEn} onChange={e => setForm(f => ({ ...f, nameEn: e.target.value }))} required />
              <TextArea label={t('profiles.descriptionEs')} value={form.descriptionEs} onChange={e => setForm(f => ({ ...f, descriptionEs: e.target.value }))} />
              <TextArea label={t('profiles.descriptionEn')} value={form.descriptionEn} onChange={e => setForm(f => ({ ...f, descriptionEn: e.target.value }))} />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} className="rounded border-gray-300" />
                {t('profiles.active')}
              </label>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={resetForm}>{tc('cancel')}</Button>
              <Button variant="primary" onClick={handleSave} isLoading={saving} disabled={!form.nameEs || !form.nameEn}>{tc('save')}</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {profiles.length === 0 ? (
        <Card variant="bordered"><CardContent className="p-6 text-center text-gray-500">{t('profiles.noProfiles')}</CardContent></Card>
      ) : (
        <div className="space-y-3">
          {profiles.map(p => (
            <Card key={p.id} variant="bordered">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{p.name.es}</h3>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600">{p.name.en}</span>
                      <Badge variant={p.isActive ? 'success' : 'default'} size="sm">
                        {p.isActive ? t('profiles.active') : t('profiles.inactive')}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">{p.description.es}</p>
                  </div>
                  <div className="flex gap-1 ml-4">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(p)}><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="sm" onClick={() => setDeleteTarget(p.id)}><Trash2 className="w-4 h-4 text-red-500" /></Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <ConfirmModal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title={t('profiles.confirmDelete')}
        message={t('profiles.deleteWarning')}
        variant="danger"
        confirmLabel={tc('delete')}
        cancelLabel={tc('cancel')}
      />
    </div>
  );
}

function QuestionsContent({ t, tc }: { t: any; tc: any }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [categories, setCategories] = useState<CompetencyCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const emptyForm = {
    profileId: '', categoryId: '', competencyId: '', type: 'multiple-choice' as QuestionType,
    contentEs: '', contentEn: '', order: 0, maxScore: 10, aiEvaluated: false, isActive: true,
    scaleMin: 1, scaleMax: 5,
    scaleLabelMinEs: '', scaleLabelMinEn: '', scaleLabelMaxEs: '', scaleLabelMaxEn: '',
    rubricEs: '', rubricEn: '',
    options: [] as { id: string; textEs: string; textEn: string; value: number }[],
  };
  const [form, setForm] = useState(emptyForm);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [q, p, c] = await Promise.all([
        getDocuments<Question>(COLLECTIONS.QUESTIONS),
        getProfiles(false),
        getCategories(),
      ]);
      setQuestions(q);
      setProfiles(p);
      setCategories(c);
    } catch { /* empty */ } finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => { setForm(emptyForm); setEditingId(null); setShowForm(false); };

  const handleEdit = (q: Question) => {
    setForm({
      profileId: q.profileId, categoryId: q.categoryId, competencyId: q.competencyId,
      type: q.type, contentEs: q.content.es, contentEn: q.content.en,
      order: q.order, maxScore: q.maxScore, aiEvaluated: q.aiEvaluated, isActive: q.isActive,
      scaleMin: q.scaleMin ?? 1, scaleMax: q.scaleMax ?? 5,
      scaleLabelMinEs: q.scaleLabels?.min.es ?? '', scaleLabelMinEn: q.scaleLabels?.min.en ?? '',
      scaleLabelMaxEs: q.scaleLabels?.max.es ?? '', scaleLabelMaxEn: q.scaleLabels?.max.en ?? '',
      rubricEs: q.rubric?.es ?? '', rubricEn: q.rubric?.en ?? '',
      options: (q.options || []).map(o => ({ id: o.id, textEs: o.text.es, textEn: o.text.en, value: o.value })),
    });
    setEditingId(q.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const question: Question = {
        id: editingId || generateId(),
        profileId: form.profileId, categoryId: form.categoryId, competencyId: form.competencyId,
        type: form.type,
        content: { es: form.contentEs, en: form.contentEn, fr: form.contentEn },
        order: form.order, maxScore: form.maxScore, aiEvaluated: form.aiEvaluated, isActive: form.isActive,
      };
      if (form.type === 'multiple-choice' || form.type === 'ranking') {
        question.options = form.options.map(o => ({ id: o.id, text: { es: o.textEs, en: o.textEn, fr: o.textEn }, value: o.value }));
      }
      if (form.type === 'scale') {
        question.scaleMin = form.scaleMin;
        question.scaleMax = form.scaleMax;
        question.scaleLabels = {
          min: { es: form.scaleLabelMinEs, en: form.scaleLabelMinEn, fr: form.scaleLabelMinEn },
          max: { es: form.scaleLabelMaxEs, en: form.scaleLabelMaxEn, fr: form.scaleLabelMaxEn },
        };
      }
      if (form.type === 'open-text' || form.type === 'scenario') {
        question.rubric = { es: form.rubricEs, en: form.rubricEn, fr: form.rubricEn };
      }
      await saveQuestion(question);
      resetForm();
      await fetchData();
    } catch { /* empty */ } finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteDocument(COLLECTIONS.QUESTIONS, deleteTarget);
      setDeleteTarget(null);
      await fetchData();
    } catch { /* empty */ }
  };

  const addOption = () => {
    setForm(f => ({
      ...f,
      options: [...f.options, { id: generateId(), textEs: '', textEn: '', value: 0 }],
    }));
  };

  const removeOption = (idx: number) => {
    setForm(f => ({ ...f, options: f.options.filter((_, i) => i !== idx) }));
  };

  const updateOption = (idx: number, field: string, val: string | number) => {
    setForm(f => ({
      ...f,
      options: f.options.map((o, i) => i === idx ? { ...o, [field]: val } : o),
    }));
  };

  // Get competencies for selected category
  const selectedCategory = categories.find(c => c.id === form.categoryId);
  const competencyOptions = (selectedCategory?.competencies || []).map(c => ({ value: c.id, label: c.name.es }));

  // Group questions by profileId
  const grouped = questions.reduce((acc, q) => {
    const key = q.profileId;
    if (!acc[key]) acc[key] = [];
    acc[key].push(q);
    return acc;
  }, {} as Record<string, Question[]>);

  const profileMap = new Map(profiles.map(p => [p.id, p]));

  const questionTypeOptions = [
    { value: 'multiple-choice', label: t('questions.types.multiple-choice') },
    { value: 'scale', label: t('questions.types.scale') },
    { value: 'open-text', label: t('questions.types.open-text') },
    { value: 'scenario', label: t('questions.types.scenario') },
    { value: 'ranking', label: t('questions.types.ranking') },
  ];

  if (loading) {
    return <div className="flex justify-center items-center py-20"><Loader2 className="w-8 h-8 text-primary-600 animate-spin" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">{t('questions.title')}</h1>
        <Button variant="primary" onClick={() => { resetForm(); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" />
          {t('questions.create')}
        </Button>
      </div>

      {showForm && (
        <Card variant="bordered">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{editingId ? t('questions.edit') : t('questions.create')}</CardTitle>
              <button onClick={resetForm}><X className="w-5 h-5 text-gray-400 hover:text-gray-600" /></button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select
                label={t('questions.profileId')}
                value={form.profileId}
                onChange={e => setForm(f => ({ ...f, profileId: e.target.value }))}
                options={profiles.map(p => ({ value: p.id, label: p.name.es }))}
                placeholder="--"
                required
              />
              <Select
                label={t('questions.categoryId')}
                value={form.categoryId}
                onChange={e => setForm(f => ({ ...f, categoryId: e.target.value, competencyId: '' }))}
                options={categories.map(c => ({ value: c.id, label: c.name.es }))}
                placeholder="--"
                required
              />
              <Select
                label={t('questions.competencyId')}
                value={form.competencyId}
                onChange={e => setForm(f => ({ ...f, competencyId: e.target.value }))}
                options={competencyOptions}
                placeholder="--"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select
                label={t('questions.type')}
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value as QuestionType }))}
                options={questionTypeOptions}
              />
              <Input label={t('questions.order')} type="number" value={form.order} onChange={e => setForm(f => ({ ...f, order: parseInt(e.target.value) || 0 }))} />
              <Input label={t('questions.maxScore')} type="number" value={form.maxScore} onChange={e => setForm(f => ({ ...f, maxScore: parseInt(e.target.value) || 0 }))} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <TextArea label={t('questions.contentEs')} value={form.contentEs} onChange={e => setForm(f => ({ ...f, contentEs: e.target.value }))} required />
              <TextArea label={t('questions.contentEn')} value={form.contentEn} onChange={e => setForm(f => ({ ...f, contentEn: e.target.value }))} required />
            </div>

            {/* Scale config */}
            {form.type === 'scale' && (
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-2">{t('questions.type')}: {t('questions.types.scale')}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Input label={t('questions.scaleMin')} type="number" value={form.scaleMin} onChange={e => setForm(f => ({ ...f, scaleMin: parseInt(e.target.value) || 0 }))} />
                  <Input label={t('questions.scaleMax')} type="number" value={form.scaleMax} onChange={e => setForm(f => ({ ...f, scaleMax: parseInt(e.target.value) || 0 }))} />
                  <Input label={t('questions.scaleLabelMinEs')} value={form.scaleLabelMinEs} onChange={e => setForm(f => ({ ...f, scaleLabelMinEs: e.target.value }))} />
                  <Input label={t('questions.scaleLabelMaxEs')} value={form.scaleLabelMaxEs} onChange={e => setForm(f => ({ ...f, scaleLabelMaxEs: e.target.value }))} />
                  <Input label={t('questions.scaleLabelMinEn')} value={form.scaleLabelMinEn} onChange={e => setForm(f => ({ ...f, scaleLabelMinEn: e.target.value }))} />
                  <Input label={t('questions.scaleLabelMaxEn')} value={form.scaleLabelMaxEn} onChange={e => setForm(f => ({ ...f, scaleLabelMaxEn: e.target.value }))} />
                </div>
              </div>
            )}

            {/* Rubric for open-text/scenario */}
            {(form.type === 'open-text' || form.type === 'scenario') && (
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-2">{t('questions.type')}: {questionTypeOptions.find(o => o.value === form.type)?.label}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextArea label={t('questions.rubricEs')} value={form.rubricEs} onChange={e => setForm(f => ({ ...f, rubricEs: e.target.value }))} />
                  <TextArea label={t('questions.rubricEn')} value={form.rubricEn} onChange={e => setForm(f => ({ ...f, rubricEn: e.target.value }))} />
                </div>
              </div>
            )}

            {/* Options for multiple-choice/ranking */}
            {(form.type === 'multiple-choice' || form.type === 'ranking') && (
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-medium text-gray-700">{t('questions.options')}</h4>
                  <Button variant="outline" size="sm" onClick={addOption}>
                    <Plus className="w-3 h-3 mr-1" /> {t('questions.addOption')}
                  </Button>
                </div>
                {form.options.map((opt, idx) => (
                  <div key={opt.id} className="flex gap-2 items-end mb-2">
                    <Input label={idx === 0 ? t('questions.optionTextEs') : undefined} value={opt.textEs} onChange={e => updateOption(idx, 'textEs', e.target.value)} className="flex-1" />
                    <Input label={idx === 0 ? t('questions.optionTextEn') : undefined} value={opt.textEn} onChange={e => updateOption(idx, 'textEn', e.target.value)} className="flex-1" />
                    <Input label={idx === 0 ? t('questions.optionValue') : undefined} type="number" value={opt.value} onChange={e => updateOption(idx, 'value', parseInt(e.target.value) || 0)} className="w-20" />
                    <Button variant="ghost" size="sm" onClick={() => removeOption(idx)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 mb-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={form.aiEvaluated} onChange={e => setForm(f => ({ ...f, aiEvaluated: e.target.checked }))} className="rounded border-gray-300" />
                {t('questions.aiEvaluated')}
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} className="rounded border-gray-300" />
                {t('profiles.active')}
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={resetForm}>{tc('cancel')}</Button>
              <Button variant="primary" onClick={handleSave} isLoading={saving} disabled={!form.profileId || !form.contentEs}>{tc('save')}</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {questions.length === 0 ? (
        <Card variant="bordered"><CardContent className="p-6 text-center text-gray-500">{t('questions.noQuestions')}</CardContent></Card>
      ) : (
        Object.entries(grouped).map(([profileId, qs]) => {
          const profile = profileMap.get(profileId);
          const sortedQs = [...qs].sort((a, b) => a.order - b.order);
          return (
            <div key={profileId} className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {profile ? profile.name.es : profileId}
              </h2>
              {sortedQs.map(q => (
                <Card key={q.id} variant="bordered">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className="text-xs text-gray-400 font-mono w-8 shrink-0">#{q.order}</span>
                        <Badge variant="primary" size="sm">{t(`questions.types.${q.type}`)}</Badge>
                        <span className="text-sm text-gray-700 truncate">{q.content.es.substring(0, 80)}{q.content.es.length > 80 ? '...' : ''}</span>
                        {q.competencyId && <span className="text-xs text-gray-400 shrink-0">{q.competencyId}</span>}
                        {q.aiEvaluated && <Badge variant="warning" size="sm">AI</Badge>}
                      </div>
                      <div className="flex gap-1 ml-2 shrink-0">
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(q)}><Pencil className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm" onClick={() => setDeleteTarget(q.id)}><Trash2 className="w-4 h-4 text-red-500" /></Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          );
        })
      )}

      <ConfirmModal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title={t('questions.confirmDelete')}
        message={t('questions.deleteWarning')}
        variant="danger"
        confirmLabel={tc('delete')}
        cancelLabel={tc('cancel')}
      />
    </div>
  );
}

function ArchetypesContent({ t, tc }: { t: any; tc: any }) {
  const [archetypes, setArchetypes] = useState<ArchetypeProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const emptyForm = {
    category: 'professional' as ArchetypeProfile['category'],
    nameEs: '', nameEn: '', descriptionEs: '', descriptionEn: '',
    indexMin: 0, indexMax: 100, order: 0,
    traits: [] as { es: string; en: string }[],
  };
  const [form, setForm] = useState(emptyForm);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getArchetypeProfiles();
      setArchetypes(data);
    } catch { /* empty */ } finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => { setForm(emptyForm); setEditingId(null); setShowForm(false); };

  const handleEdit = (a: ArchetypeProfile) => {
    setForm({
      category: a.category,
      nameEs: a.name.es, nameEn: a.name.en,
      descriptionEs: a.description.es, descriptionEn: a.description.en,
      indexMin: a.indexRange.min, indexMax: a.indexRange.max, order: a.order,
      traits: a.traits.map(tr => ({ es: tr.es, en: tr.en, fr: tr.fr || tr.en })),
    });
    setEditingId(a.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const archetype: ArchetypeProfile = {
        id: editingId || generateId(),
        category: form.category,
        name: { es: form.nameEs, en: form.nameEn, fr: form.nameEn },
        description: { es: form.descriptionEs, en: form.descriptionEn, fr: form.descriptionEn },
        traits: form.traits.map(tr => ({ es: tr.es, en: tr.en, fr: tr.en })),
        indexRange: { min: form.indexMin, max: form.indexMax },
        recommendedResources: editingId ? (archetypes.find(a => a.id === editingId)?.recommendedResources || []) : [],
        order: form.order,
      };
      await setDocument(COLLECTIONS.ARCHETYPES, archetype.id, archetype);
      resetForm();
      await fetchData();
    } catch { /* empty */ } finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteDocument(COLLECTIONS.ARCHETYPES, deleteTarget);
      setDeleteTarget(null);
      await fetchData();
    } catch { /* empty */ }
  };

  const addTrait = () => setForm(f => ({ ...f, traits: [...f.traits, { es: '', en: '', fr: '' }] }));
  const removeTrait = (idx: number) => setForm(f => ({ ...f, traits: f.traits.filter((_, i) => i !== idx) }));
  const updateTrait = (idx: number, lang: 'es' | 'en', val: string) => {
    setForm(f => ({ ...f, traits: f.traits.map((tr, i) => i === idx ? { ...tr, [lang]: val } : tr) }));
  };

  const categoryOptions = [
    { value: 'professional', label: t('archetypes.categories.professional') },
    { value: 'soft-skills', label: t('archetypes.categories.soft-skills') },
    { value: 'readiness', label: t('archetypes.categories.readiness') },
  ];

  // Group by category
  const grouped = archetypes.reduce((acc, a) => {
    if (!acc[a.category]) acc[a.category] = [];
    acc[a.category].push(a);
    return acc;
  }, {} as Record<string, ArchetypeProfile[]>);

  if (loading) {
    return <div className="flex justify-center items-center py-20"><Loader2 className="w-8 h-8 text-primary-600 animate-spin" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">{t('archetypes.title')}</h1>
        <Button variant="primary" onClick={() => { resetForm(); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" />
          {t('archetypes.create')}
        </Button>
      </div>

      {showForm && (
        <Card variant="bordered">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{editingId ? t('archetypes.edit') : t('archetypes.create')}</CardTitle>
              <button onClick={resetForm}><X className="w-5 h-5 text-gray-400 hover:text-gray-600" /></button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select label={t('archetypes.category')} value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as ArchetypeProfile['category'] }))} options={categoryOptions} />
              <Input label={t('archetypes.order')} type="number" value={form.order} onChange={e => setForm(f => ({ ...f, order: parseInt(e.target.value) || 0 }))} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input label={t('archetypes.nameEs')} value={form.nameEs} onChange={e => setForm(f => ({ ...f, nameEs: e.target.value }))} required />
              <Input label={t('archetypes.nameEn')} value={form.nameEn} onChange={e => setForm(f => ({ ...f, nameEn: e.target.value }))} required />
              <TextArea label={t('archetypes.descriptionEs')} value={form.descriptionEs} onChange={e => setForm(f => ({ ...f, descriptionEs: e.target.value }))} />
              <TextArea label={t('archetypes.descriptionEn')} value={form.descriptionEn} onChange={e => setForm(f => ({ ...f, descriptionEn: e.target.value }))} />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input label={t('archetypes.indexRangeMin')} type="number" value={form.indexMin} onChange={e => setForm(f => ({ ...f, indexMin: parseInt(e.target.value) || 0 }))} />
              <Input label={t('archetypes.indexRangeMax')} type="number" value={form.indexMax} onChange={e => setForm(f => ({ ...f, indexMax: parseInt(e.target.value) || 0 }))} />
            </div>

            {/* Traits */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-sm font-medium text-gray-700">{t('archetypes.traits')}</h4>
                <Button variant="outline" size="sm" onClick={addTrait}>
                  <Plus className="w-3 h-3 mr-1" /> {t('archetypes.addTrait')}
                </Button>
              </div>
              {form.traits.map((tr, idx) => (
                <div key={idx} className="flex gap-2 items-end mb-2">
                  <Input label={idx === 0 ? t('archetypes.traitEs') : undefined} value={tr.es} onChange={e => updateTrait(idx, 'es', e.target.value)} className="flex-1" />
                  <Input label={idx === 0 ? t('archetypes.traitEn') : undefined} value={tr.en} onChange={e => updateTrait(idx, 'en', e.target.value)} className="flex-1" />
                  <Button variant="ghost" size="sm" onClick={() => removeTrait(idx)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={resetForm}>{tc('cancel')}</Button>
              <Button variant="primary" onClick={handleSave} isLoading={saving} disabled={!form.nameEs || !form.nameEn}>{tc('save')}</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {archetypes.length === 0 ? (
        <Card variant="bordered"><CardContent className="p-6 text-center text-gray-500">{t('archetypes.noArchetypes')}</CardContent></Card>
      ) : (
        Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {categoryOptions.find(c => c.value === category)?.label || category}
            </h2>
            {items.sort((a, b) => a.order - b.order).map(a => (
              <Card key={a.id} variant="bordered">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{a.name.es}</h3>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600 text-sm">{a.name.en}</span>
                        <Badge variant="default" size="sm">{a.indexRange.min}-{a.indexRange.max}</Badge>
                      </div>
                      <p className="text-sm text-gray-500 mb-2 line-clamp-2">{a.description.es}</p>
                      {a.traits.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {a.traits.map((tr, i) => (
                            <Badge key={i} variant="primary" size="sm">{tr.es}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-1 ml-4">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(a)}><Pencil className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="sm" onClick={() => setDeleteTarget(a.id)}><Trash2 className="w-4 h-4 text-red-500" /></Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))
      )}

      <ConfirmModal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title={t('archetypes.confirmDelete')}
        message={t('archetypes.deleteWarning')}
        variant="danger"
        confirmLabel={tc('delete')}
        cancelLabel={tc('cancel')}
      />
    </div>
  );
}

function ResourcesContent({ t, tc }: { t: any; tc: any }) {
  const [resources, setResources] = useState<Resource[]>([]);
  const [categories, setCategories] = useState<CompetencyCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const emptyForm = {
    type: 'course' as ResourceType,
    nameEs: '', nameEn: '', descriptionEs: '', descriptionEn: '',
    url: '', duration: '', priority: 0, isActive: true,
    targetCategories: [] as string[],
  };
  const [form, setForm] = useState(emptyForm);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [r, c] = await Promise.all([
        getResources(undefined, false),
        getCategories(),
      ]);
      setResources(r);
      setCategories(c);
    } catch { /* empty */ } finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => { setForm(emptyForm); setEditingId(null); setShowForm(false); };

  const handleEdit = (r: Resource) => {
    setForm({
      type: r.type,
      nameEs: r.name.es, nameEn: r.name.en,
      descriptionEs: r.description.es, descriptionEn: r.description.en,
      url: r.url || '', duration: r.duration || '', priority: r.priority, isActive: r.isActive,
      targetCategories: r.targetCategories || [],
    });
    setEditingId(r.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const resource: Resource = {
        id: editingId || generateId(),
        type: form.type,
        name: { es: form.nameEs, en: form.nameEn, fr: form.nameEn },
        description: { es: form.descriptionEs, en: form.descriptionEn, fr: form.descriptionEn },
        targetCategories: form.targetCategories,
        targetProfiles: editingId ? (resources.find(r => r.id === editingId)?.targetProfiles || []) : [],
        targetCompetencies: editingId ? (resources.find(r => r.id === editingId)?.targetCompetencies || []) : [],
        url: form.url || undefined,
        duration: form.duration || undefined,
        priority: form.priority,
        isActive: form.isActive,
      };
      await setDocument(COLLECTIONS.RESOURCES, resource.id, resource);
      resetForm();
      await fetchData();
    } catch { /* empty */ } finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteDocument(COLLECTIONS.RESOURCES, deleteTarget);
      setDeleteTarget(null);
      await fetchData();
    } catch { /* empty */ }
  };

  const toggleCategory = (catId: string) => {
    setForm(f => ({
      ...f,
      targetCategories: f.targetCategories.includes(catId)
        ? f.targetCategories.filter(c => c !== catId)
        : [...f.targetCategories, catId],
    }));
  };

  const typeOptions = [
    { value: 'course', label: t('resources.types.course') },
    { value: 'activity', label: t('resources.types.activity') },
    { value: 'resource', label: t('resources.types.resource') },
    { value: 'strategy', label: t('resources.types.strategy') },
  ];

  const typeVariants: Record<string, 'primary' | 'success' | 'warning' | 'secondary'> = {
    course: 'primary', activity: 'success', resource: 'secondary', strategy: 'warning',
  };

  // Group by type
  const grouped = resources.reduce((acc, r) => {
    if (!acc[r.type]) acc[r.type] = [];
    acc[r.type].push(r);
    return acc;
  }, {} as Record<string, Resource[]>);

  if (loading) {
    return <div className="flex justify-center items-center py-20"><Loader2 className="w-8 h-8 text-primary-600 animate-spin" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">{t('resources.title')}</h1>
        <Button variant="primary" onClick={() => { resetForm(); setShowForm(true); }}>
          <Plus className="w-4 h-4 mr-2" />
          {t('resources.create')}
        </Button>
      </div>

      {showForm && (
        <Card variant="bordered">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{editingId ? t('resources.edit') : t('resources.create')}</CardTitle>
              <button onClick={resetForm}><X className="w-5 h-5 text-gray-400 hover:text-gray-600" /></button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select label={t('resources.type')} value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value as ResourceType }))} options={typeOptions} />
              <Input label={t('resources.priority')} type="number" value={form.priority} onChange={e => setForm(f => ({ ...f, priority: parseInt(e.target.value) || 0 }))} />
              <Input label={t('resources.duration')} value={form.duration} onChange={e => setForm(f => ({ ...f, duration: e.target.value }))} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input label={t('resources.nameEs')} value={form.nameEs} onChange={e => setForm(f => ({ ...f, nameEs: e.target.value }))} required />
              <Input label={t('resources.nameEn')} value={form.nameEn} onChange={e => setForm(f => ({ ...f, nameEn: e.target.value }))} required />
              <TextArea label={t('resources.descriptionEs')} value={form.descriptionEs} onChange={e => setForm(f => ({ ...f, descriptionEs: e.target.value }))} />
              <TextArea label={t('resources.descriptionEn')} value={form.descriptionEn} onChange={e => setForm(f => ({ ...f, descriptionEn: e.target.value }))} />
            </div>
            <div className="mb-4">
              <Input label={t('resources.url')} value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} placeholder="https://" />
            </div>

            {/* Target categories multi-select */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('resources.targetCategories')}</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                      form.targetCategories.includes(cat.id)
                        ? 'bg-primary-100 border-primary-300 text-primary-800'
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat.name.es}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} className="rounded border-gray-300" />
                {t('resources.active')}
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={resetForm}>{tc('cancel')}</Button>
              <Button variant="primary" onClick={handleSave} isLoading={saving} disabled={!form.nameEs || !form.nameEn}>{tc('save')}</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {resources.length === 0 ? (
        <Card variant="bordered"><CardContent className="p-6 text-center text-gray-500">{t('resources.noResources')}</CardContent></Card>
      ) : (
        Object.entries(grouped).map(([type, items]) => (
          <div key={type} className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {typeOptions.find(o => o.value === type)?.label || type}
            </h2>
            {items.sort((a, b) => a.priority - b.priority).map(r => (
              <Card key={r.id} variant="bordered">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{r.name.es}</h3>
                        <Badge variant={typeVariants[r.type] || 'default'} size="sm">{typeOptions.find(o => o.value === r.type)?.label}</Badge>
                        <Badge variant={r.isActive ? 'success' : 'default'} size="sm">
                          {r.isActive ? t('resources.active') : t('resources.inactive')}
                        </Badge>
                        {r.priority > 0 && <span className="text-xs text-gray-400">P{r.priority}</span>}
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2">{r.description.es}</p>
                      {r.url && <p className="text-xs text-primary-600 mt-1 truncate">{r.url}</p>}
                    </div>
                    <div className="flex gap-1 ml-4">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(r)}><Pencil className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="sm" onClick={() => setDeleteTarget(r.id)}><Trash2 className="w-4 h-4 text-red-500" /></Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))
      )}

      <ConfirmModal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        title={t('resources.confirmDelete')}
        message={t('resources.deleteWarning')}
        variant="danger"
        confirmLabel={tc('delete')}
        cancelLabel={tc('cancel')}
      />
    </div>
  );
}

function EvaluationsContent({ t, locale }: { t: any; locale: string }) {
  const [evaluations, setEvaluations] = useState<RecentEvaluation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvaluations() {
      try {
        const [evals, profiles] = await Promise.all([
          getEvaluations(undefined, 50),
          getProfiles(false),
        ]);
        const profileMap = new Map(profiles.map((p) => [p.id, p]));

        setEvaluations(
          evals.map((e) => {
            const profile = profileMap.get(e.profileId);
            const profileName = profile
              ? (locale === 'en' ? profile.name.en : profile.name.es)
              : e.profileId;
            const completedAt = e.completedAt
              ? (e.completedAt.toDate ? e.completedAt.toDate() : new Date(e.completedAt as any))
              : null;
            const startedAt = e.startedAt
              ? (e.startedAt.toDate ? e.startedAt.toDate() : new Date(e.startedAt as any))
              : null;
            return {
              id: e.id,
              candidateName: e.candidateName,
              profileName,
              status: e.status,
              completedAt,
              startedAt,
              score: null,
            };
          })
        );
      } catch {
        // Keep empty on error
      } finally {
        setLoading(false);
      }
    }
    fetchEvaluations();
  }, [locale]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">{t('evaluations.title')}</h1>

      <Card variant="bordered">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    {t('table.candidate')}
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    {t('table.profile')}
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    {t('table.status')}
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    {t('table.score')}
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    {t('table.date')}
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    {t('table.actions')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {evaluations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-gray-500">
                      {t('evaluations.noEvaluations')}
                    </td>
                  </tr>
                ) : (
                  evaluations.map((evaluation) => (
                    <tr key={evaluation.id} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {evaluation.candidateName}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {evaluation.profileName}
                      </td>
                      <td className="py-3 px-4">
                        <StatusBadge status={evaluation.status} t={t} />
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {evaluation.score ? `${evaluation.score}%` : '-'}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {evaluation.completedAt
                          ? evaluation.completedAt.toLocaleDateString(
                              locale === 'es' ? 'es-ES' : 'en-US'
                            )
                          : '-'}
                      </td>
                      <td className="py-3 px-4">
                        <Link href={`/${locale}/results/${evaluation.id}`}>
                          <Button variant="ghost" size="sm">
                            {t('table.view')}
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: 'blue' | 'green' | 'amber' | 'purple' | 'indigo' | 'emerald';
  subtitle?: string;
}

function StatCard({ title, value, icon: Icon, color, subtitle }: StatCardProps) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600 ring-blue-100',
    green: 'bg-green-50 text-green-600 ring-green-100',
    amber: 'bg-amber-50 text-amber-600 ring-amber-100',
    purple: 'bg-purple-50 text-purple-600 ring-purple-100',
    indigo: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
    emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
  };

  return (
    <Card variant="bordered" className="hover:shadow-sm transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-gray-900">{value}</p>
              {subtitle && (
                <span className="text-xs font-medium text-gray-400">{subtitle}</span>
              )}
            </div>
          </div>
          <div className={`p-2.5 rounded-xl ring-1 ${colors[color] || colors.blue}`}>
            <Icon className="w-5 h-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ status, t }: { status: 'in-progress' | 'completed' | 'analyzed'; t: any }) {
  const variants = {
    'in-progress': { variant: 'warning' as const, label: t('evaluations.statuses.inProgress') },
    completed: { variant: 'primary' as const, label: t('evaluations.statuses.completed') },
    analyzed: { variant: 'success' as const, label: t('evaluations.statuses.analyzed') },
  };

  const config = variants[status];

  return <Badge variant={config.variant}>{config.label}</Badge>;
}
