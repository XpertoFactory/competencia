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
  getPositions,
  savePosition,
  updatePosition,
  deletePosition,
  getCandidates,
  getCampaigns,
  getJobProfiles,
  generateId,
} from '@/lib/firebase/firestore';
import type { Position, PositionStatus, Candidate, JobProfile, RecruitmentCampaign } from '@/types';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  X,
  Loader2,
  Briefcase,
  Users,
  Search,
  Eye,
  PlayCircle,
  PauseCircle,
  CheckCircle,
  FileText,
  UserPlus,
  Megaphone,
} from 'lucide-react';

const POSITION_STATUSES: PositionStatus[] = ['draft', 'open', 'closed', 'on-hold'];

interface PositionFormData {
  title: string;
  department: string;
  description: string;
  jobProfileId: string;
  maxCandidates: string;
}

const emptyForm: PositionFormData = {
  title: '',
  department: '',
  description: '',
  jobProfileId: '',
  maxCandidates: '',
};

export default function RecruitmentPage() {
  const t = useTranslations('recruitment');
  const tc = useTranslations('common');
  const locale = useLocale() as 'es' | 'en' | 'fr';
  const { currentOrg } = useOrg();

  const [positions, setPositions] = useState<Position[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [campaigns, setCampaigns] = useState<RecruitmentCampaign[]>([]);
  const [jobProfiles, setJobProfiles] = useState<JobProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<PositionFormData>(emptyForm);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<Position | null>(null);

  const loadData = async () => {
    if (!currentOrg) return;
    setLoading(true);
    try {
      const [posData, candData, campData, jpData] = await Promise.all([
        getPositions(currentOrg.id),
        getCandidates(currentOrg.id),
        getCampaigns(currentOrg.id),
        getJobProfiles(false),
      ]);
      setPositions(posData);
      setCandidates(candData);
      setCampaigns(campData);
      setJobProfiles(jpData);
    } catch (err) {
      console.error('Error loading recruitment data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentOrg) loadData();
  }, [currentOrg?.id]);

  const candidateCountByPosition = useMemo(() => {
    const counts: Record<string, number> = {};
    candidates.forEach(c => {
      (c.positionIds || []).forEach(pid => {
        counts[pid] = (counts[pid] || 0) + 1;
      });
      // Also count legacy jobProfileId links
      (c.jobProfileIds || []).forEach(jpId => {
        positions.forEach(p => {
          if (p.jobProfileId === jpId && !counts[p.id]) {
            counts[p.id] = (counts[p.id] || 0) + 1;
          }
        });
      });
    });
    return counts;
  }, [candidates, positions]);

  const candidatesByStatus = useMemo(() => {
    const map: Record<string, Record<string, number>> = {};
    positions.forEach(p => { map[p.id] = {}; });
    candidates.forEach(c => {
      (c.positionIds || []).forEach(pid => {
        if (map[pid]) {
          map[pid][c.processStatus] = (map[pid][c.processStatus] || 0) + 1;
        }
      });
    });
    return map;
  }, [candidates, positions]);

  const filteredPositions = useMemo(() => {
    return positions.filter(p => {
      const title = p.title[locale] || p.title.es;
      const dept = p.department[locale] || p.department.es;
      const matchSearch = !search ||
        title.toLowerCase().includes(search.toLowerCase()) ||
        dept.toLowerCase().includes(search.toLowerCase());
      const matchStatus = !statusFilter || p.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [positions, search, statusFilter, locale]);

  const handleSubmit = async () => {
    if (!currentOrg || !form.title.trim()) return;
    const localizedTitle = { es: form.title, en: form.title, fr: form.title };
    const localizedDept = { es: form.department, en: form.department, fr: form.department };
    const localizedDesc = { es: form.description, en: form.description, fr: form.description };

    if (editingId) {
      await updatePosition(editingId, {
        title: localizedTitle,
        department: localizedDept,
        description: localizedDesc,
        jobProfileId: form.jobProfileId || undefined,
        maxCandidates: form.maxCandidates ? parseInt(form.maxCandidates) : undefined,
      });
    } else {
      const id = generateId();
      const position: Position = {
        id,
        orgId: currentOrg.id,
        title: localizedTitle,
        department: localizedDept,
        description: localizedDesc,
        status: 'draft',
        jobProfileId: form.jobProfileId || undefined,
        maxCandidates: form.maxCandidates ? parseInt(form.maxCandidates) : undefined,
        createdBy: currentOrg.id,
        createdAt: Timestamp.now(),
      };
      await savePosition(position);
    }

    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
    loadData();
  };

  const startEdit = (p: Position) => {
    setForm({
      title: p.title[locale] || p.title.es,
      department: p.department[locale] || p.department.es,
      description: p.description[locale] || p.description.es,
      jobProfileId: p.jobProfileId || '',
      maxCandidates: p.maxCandidates?.toString() || '',
    });
    setEditingId(p.id);
    setShowForm(true);
  };

  const handleDelete = async () => {
    if (deleteTarget) {
      await deletePosition(deleteTarget.id);
      setDeleteTarget(null);
      loadData();
    }
  };

  const toggleStatus = async (p: Position, newStatus: PositionStatus) => {
    const updates: Partial<Position> = { status: newStatus };
    if (newStatus === 'open' && !p.openedAt) {
      updates.openedAt = Timestamp.now();
    }
    if (newStatus === 'closed') {
      updates.closedAt = Timestamp.now();
    }
    await updatePosition(p.id, updates);
    loadData();
  };

  const statusBadgeVariant = (status: PositionStatus) => {
    switch (status) {
      case 'open': return 'success';
      case 'closed': return 'default';
      case 'on-hold': return 'warning';
      case 'draft': return 'primary';
      default: return 'default';
    }
  };

  const statusIcon = (status: PositionStatus) => {
    switch (status) {
      case 'open': return <PlayCircle className="w-4 h-4" />;
      case 'closed': return <CheckCircle className="w-4 h-4" />;
      case 'on-hold': return <PauseCircle className="w-4 h-4" />;
      case 'draft': return <FileText className="w-4 h-4" />;
    }
  };

  // Stats
  const openCount = positions.filter(p => p.status === 'open').length;
  const totalCandidates = candidates.length;
  const activeCandidates = candidates.filter(c => c.outcome === 'pending').length;
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length;

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link href={`/${locale}/admin`}>
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
            <div className="flex flex-wrap gap-2">
              <Link href={`/${locale}/admin/recruitment/campaigns`}>
                <Button variant="outline" size="sm">
                  <Megaphone className="w-4 h-4 mr-2" />
                  {t('campaigns.title')}
                </Button>
              </Link>
              <Link href={`/${locale}/admin/candidates`}>
                <Button variant="outline" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  {t('viewCandidates')}
                </Button>
              </Link>
              <Link href={`/${locale}/admin/candidates/invite`}>
                <Button variant="outline" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  {t('inviteCandidates')}
                </Button>
              </Link>
              <Button onClick={() => { setForm(emptyForm); setEditingId(null); setShowForm(true); }}>
                <Plus className="w-4 h-4 mr-2" />
                {t('addPosition')}
              </Button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-100">
                  <Briefcase className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{openCount}</p>
                  <p className="text-xs text-gray-500">{t('openPositions')}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{totalCandidates}</p>
                  <p className="text-xs text-gray-500">{t('totalCandidates')}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-100">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{activeCandidates}</p>
                  <p className="text-xs text-gray-500">{t('activeCandidates')}</p>
                </div>
              </CardContent>
            </Card>
            <Link href={`/${locale}/admin/recruitment/campaigns`}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <Megaphone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{activeCampaigns}</p>
                    <p className="text-xs text-gray-500">{t('campaigns.title')}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Form */}
          {showForm && (
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">
                    {editingId ? t('editPosition') : t('addPosition')}
                  </h3>
                  <button onClick={() => { setShowForm(false); setEditingId(null); }}>
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('positionTitle')}</label>
                    <Input
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      placeholder={t('positionTitlePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('department')}</label>
                    <Input
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      placeholder={t('departmentPlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('linkedJobProfile')}</label>
                    <Select
                      value={form.jobProfileId}
                      onChange={(e) => setForm({ ...form, jobProfileId: e.target.value })}
                      options={[
                        { value: '', label: t('noJobProfile') },
                        ...jobProfiles.map(jp => ({ value: jp.id, label: jp.title[locale] || jp.title.es })),
                      ]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('maxCandidates')}</label>
                    <Input
                      type="number"
                      value={form.maxCandidates}
                      onChange={(e) => setForm({ ...form, maxCandidates: e.target.value })}
                      placeholder={t('maxCandidatesPlaceholder')}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('positionDescription')}</label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder={t('positionDescriptionPlaceholder')}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" onClick={() => { setShowForm(false); setEditingId(null); }}>
                    {tc('cancel')}
                  </Button>
                  <Button onClick={handleSubmit} disabled={!form.title.trim()}>
                    {editingId ? tc('save') : t('createPosition')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t('searchPositions')}
                className="pl-9"
              />
            </div>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-40"
              options={[
                { value: '', label: t('allStatuses') },
                ...POSITION_STATUSES.map(s => ({ value: s, label: t(`status.${s}`) })),
              ]}
            />
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
            </div>
          ) : filteredPositions.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">{t('noPositions')}</p>
                <Button className="mt-4" onClick={() => { setForm(emptyForm); setShowForm(true); }}>
                  <Plus className="w-4 h-4 mr-2" />
                  {t('addPosition')}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredPositions.map(position => {
                const title = position.title[locale] || position.title.es;
                const dept = position.department[locale] || position.department.es;
                const desc = position.description[locale] || position.description.es;
                const count = candidateCountByPosition[position.id] || 0;
                const statusBreakdown = candidatesByStatus[position.id] || {};
                const linkedJP = jobProfiles.find(jp => jp.id === position.jobProfileId);

                return (
                  <Card key={position.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
                          {dept && <p className="text-sm text-gray-500">{dept}</p>}
                        </div>
                        <Badge variant={statusBadgeVariant(position.status)}>
                          <span className="flex items-center gap-1">
                            {statusIcon(position.status)}
                            {t(`status.${position.status}`)}
                          </span>
                        </Badge>
                      </div>

                      {/* Description */}
                      {desc && (
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{desc}</p>
                      )}

                      {/* Linked Job Profile */}
                      {linkedJP && (
                        <p className="text-xs text-gray-400 mb-3">
                          {t('linkedProfile')}: {linkedJP.title[locale] || linkedJP.title.es}
                        </p>
                      )}

                      {/* Candidate Stats */}
                      <div className="flex items-center gap-4 mb-3 p-3 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-900">{count}</p>
                          <p className="text-xs text-gray-500">{t('candidates')}</p>
                        </div>
                        {position.maxCandidates && (
                          <div className="text-center border-l border-gray-200 pl-4">
                            <p className="text-xl font-bold text-gray-400">{position.maxCandidates}</p>
                            <p className="text-xs text-gray-500">{t('max')}</p>
                          </div>
                        )}
                        {Object.keys(statusBreakdown).length > 0 && (
                          <div className="flex-1 flex flex-wrap gap-1 border-l border-gray-200 pl-4">
                            {Object.entries(statusBreakdown).map(([status, cnt]) => (
                              <span key={status} className="text-xs bg-white border border-gray-200 rounded px-1.5 py-0.5">
                                {t(`candidateStatus.${status}`)}: {cnt}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                        {position.status === 'draft' && (
                          <Button size="sm" variant="outline" onClick={() => toggleStatus(position, 'open')}>
                            <PlayCircle className="w-3.5 h-3.5 mr-1" />
                            {t('open')}
                          </Button>
                        )}
                        {position.status === 'open' && (
                          <>
                            <Button size="sm" variant="outline" onClick={() => toggleStatus(position, 'on-hold')}>
                              <PauseCircle className="w-3.5 h-3.5 mr-1" />
                              {t('hold')}
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => toggleStatus(position, 'closed')}>
                              <CheckCircle className="w-3.5 h-3.5 mr-1" />
                              {t('close')}
                            </Button>
                          </>
                        )}
                        {position.status === 'on-hold' && (
                          <Button size="sm" variant="outline" onClick={() => toggleStatus(position, 'open')}>
                            <PlayCircle className="w-3.5 h-3.5 mr-1" />
                            {t('reopen')}
                          </Button>
                        )}
                        {position.status === 'closed' && (
                          <Button size="sm" variant="outline" onClick={() => toggleStatus(position, 'open')}>
                            <PlayCircle className="w-3.5 h-3.5 mr-1" />
                            {t('reopen')}
                          </Button>
                        )}
                        <Link href={`/${locale}/admin/candidates?position=${position.id}`}>
                          <Button size="sm" variant="ghost">
                            <Eye className="w-3.5 h-3.5 mr-1" />
                            {t('viewCandidates')}
                          </Button>
                        </Link>
                        <div className="flex-1" />
                        <button onClick={() => startEdit(position)} className="p-1.5 text-gray-400 hover:text-gray-600">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => setDeleteTarget(position)} className="p-1.5 text-gray-400 hover:text-red-500">
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

        {/* Delete Confirm */}
        <ConfirmModal
          isOpen={!!deleteTarget}
          title={t('deletePosition')}
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
