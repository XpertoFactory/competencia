'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Select, Badge, TextArea } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import {
  getReviewCampaigns,
  saveReviewCampaign,
  getEmployees,
  getReviewAssignments,
  saveReviewAssignment,
  generateId,
  deleteDocument,
  COLLECTIONS,
} from '@/lib/firebase/firestore';
import type {
  ReviewCampaign,
  ReviewAssignment,
  ReviewScores,
  ReviewType,
  RaterRole,
  Employee,
} from '@/types';
import { Timestamp } from 'firebase/firestore';
import {
  ArrowLeft,
  Plus,
  Loader2,
  Star,
  Users,
  Eye,
  Pencil,
  Trash2,
  X,
} from 'lucide-react';

type View = 'list' | 'form' | 'detail';

const EMPTY_SCORES: ReviewScores = {
  leadership: 0,
  communication: 0,
  teamwork: 0,
  problemSolving: 0,
  adaptability: 0,
  accountability: 0,
  customerFocus: 0,
  innovation: 0,
  overall: 0,
};

const EMPTY_CAMPAIGN: Omit<ReviewCampaign, 'id' | 'createdAt'> = {
  name: { es: '', en: '', fr: '' },
  description: { es: '', en: '', fr: '' },
  type: '360',
  year: new Date().getFullYear(),
  startDate: Timestamp.now(),
  endDate: Timestamp.now(),
  status: 'draft',
  employeeIds: [],
};

export default function ReviewsPage() {
  const t = useTranslations('reviews');
  const tc = useTranslations('common');
  const locale = useLocale() as 'es' | 'en' | 'fr';

  // State
  const [view, setView] = useState<View>('list');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [campaigns, setCampaigns] = useState<ReviewCampaign[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<ReviewCampaign | null>(null);
  const [assignments, setAssignments] = useState<ReviewAssignment[]>([]);

  // Form state
  const [formData, setFormData] = useState(EMPTY_CAMPAIGN);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [startDateStr, setStartDateStr] = useState('');
  const [endDateStr, setEndDateStr] = useState('');

  // Assignment form state
  const [showAssignmentForm, setShowAssignmentForm] = useState(false);
  const [assignmentForm, setAssignmentForm] = useState({
    employeeId: '',
    raterEmail: '',
    raterName: '',
    raterRole: 'peer' as RaterRole,
  });

  // Load data on mount
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      const [campaignsData, employeesData] = await Promise.all([
        getReviewCampaigns(),
        getEmployees(),
      ]);
      setCampaigns(campaignsData);
      setEmployees(employeesData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }

  // Campaign form helpers
  function openCreateForm() {
    setFormData(EMPTY_CAMPAIGN);
    setEditingId(null);
    setStartDateStr('');
    setEndDateStr('');
    setView('form');
  }

  function openEditForm(campaign: ReviewCampaign) {
    setFormData({
      name: campaign.name,
      description: campaign.description,
      type: campaign.type,
      year: campaign.year,
      startDate: campaign.startDate,
      endDate: campaign.endDate,
      status: campaign.status,
      employeeIds: campaign.employeeIds,
    });
    setEditingId(campaign.id);
    setStartDateStr(timestampToDateStr(campaign.startDate));
    setEndDateStr(timestampToDateStr(campaign.endDate));
    setView('form');
  }

  function timestampToDateStr(ts: Timestamp): string {
    const d = ts.toDate();
    return d.toISOString().split('T')[0];
  }

  function dateStrToTimestamp(dateStr: string): Timestamp {
    return Timestamp.fromDate(new Date(dateStr + 'T00:00:00'));
  }

  async function handleSaveCampaign() {
    setSaving(true);
    try {
      const campaign: ReviewCampaign = {
        id: editingId || generateId(),
        name: formData.name,
        description: formData.description,
        type: formData.type,
        year: formData.year,
        startDate: startDateStr ? dateStrToTimestamp(startDateStr) : Timestamp.now(),
        endDate: endDateStr ? dateStrToTimestamp(endDateStr) : Timestamp.now(),
        status: formData.status,
        employeeIds: formData.employeeIds,
        createdAt: editingId
          ? campaigns.find((c) => c.id === editingId)?.createdAt || Timestamp.now()
          : Timestamp.now(),
      };
      await saveReviewCampaign(campaign);
      await loadData();
      setView('list');
    } catch (error) {
      console.error('Error saving campaign:', error);
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteCampaign(id: string) {
    if (!confirm(tc('confirmDelete'))) return;
    try {
      await deleteDocument(COLLECTIONS.REVIEW_CAMPAIGNS, id);
      await loadData();
    } catch (error) {
      console.error('Error deleting campaign:', error);
    }
  }

  // Campaign detail
  async function openCampaignDetail(campaign: ReviewCampaign) {
    setSelectedCampaign(campaign);
    setView('detail');
    try {
      const data = await getReviewAssignments(campaign.id);
      setAssignments(data);
    } catch (error) {
      console.error('Error loading assignments:', error);
    }
  }

  async function handleSaveAssignment() {
    if (!selectedCampaign) return;
    const employee = employees.find((e) => e.id === assignmentForm.employeeId);
    if (!employee) return;

    setSaving(true);
    try {
      const assignment: ReviewAssignment = {
        id: generateId(),
        campaignId: selectedCampaign.id,
        employeeId: assignmentForm.employeeId,
        employeeName: employee.name,
        raterId: '',
        raterEmail: assignmentForm.raterEmail,
        raterName: assignmentForm.raterName,
        raterRole: assignmentForm.raterRole,
        status: 'pending',
        scores: { ...EMPTY_SCORES },
        comments: {},
        createdAt: Timestamp.now(),
      };
      await saveReviewAssignment(assignment);
      const data = await getReviewAssignments(selectedCampaign.id);
      setAssignments(data);
      setShowAssignmentForm(false);
      setAssignmentForm({ employeeId: '', raterEmail: '', raterName: '', raterRole: 'peer' });
    } catch (error) {
      console.error('Error saving assignment:', error);
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteAssignment(id: string) {
    if (!confirm(tc('confirmDelete'))) return;
    if (!selectedCampaign) return;
    try {
      await deleteDocument(COLLECTIONS.REVIEW_ASSIGNMENTS, id);
      const data = await getReviewAssignments(selectedCampaign.id);
      setAssignments(data);
    } catch (error) {
      console.error('Error deleting assignment:', error);
    }
  }

  function toggleEmployeeSelection(employeeId: string) {
    setFormData((prev) => ({
      ...prev,
      employeeIds: prev.employeeIds.includes(employeeId)
        ? prev.employeeIds.filter((id) => id !== employeeId)
        : [...prev.employeeIds, employeeId],
    }));
  }

  // Status badge helpers
  function getStatusVariant(status: string): 'default' | 'success' | 'primary' {
    switch (status) {
      case 'active':
        return 'success';
      case 'closed':
        return 'primary';
      default:
        return 'default';
    }
  }

  function getStatusLabel(status: string): string {
    switch (status) {
      case 'draft':
        return t('statusDraft');
      case 'active':
        return t('statusActive');
      case 'closed':
        return t('statusClosed');
      case 'pending':
        return t('statusPending');
      case 'completed':
        return t('statusCompleted');
      default:
        return status;
    }
  }

  function getRoleLabel(role: RaterRole): string {
    switch (role) {
      case 'self':
        return t('roleSelf');
      case 'supervisor':
        return t('roleSupervisor');
      case 'peer':
        return t('rolePeer');
      case 'subordinate':
        return t('roleSubordinate');
      default:
        return role;
    }
  }

  function getRoleVariant(role: RaterRole): 'primary' | 'success' | 'warning' | 'secondary' {
    switch (role) {
      case 'self':
        return 'secondary';
      case 'supervisor':
        return 'primary';
      case 'peer':
        return 'success';
      case 'subordinate':
        return 'warning';
      default:
        return 'secondary';
    }
  }

  // Score keys for display
  const scoreKeys: (keyof ReviewScores)[] = [
    'leadership',
    'communication',
    'teamwork',
    'problemSolving',
    'adaptability',
    'accountability',
    'customerFocus',
    'innovation',
    'overall',
  ];

  // ==========================================
  // RENDER
  // ==========================================

  function renderCampaignList() {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
            <p className="text-gray-500 mt-1">{t('subtitle')}</p>
          </div>
          <Button onClick={openCreateForm}>
            <Plus className="w-4 h-4 mr-2" />
            {t('createCampaign')}
          </Button>
        </div>

        {campaigns.length === 0 ? (
          <Card variant="bordered">
            <CardContent>
              <div className="text-center py-12">
                <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">{t('noCampaigns')}</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} variant="bordered" className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{campaign.name[locale]}</CardTitle>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditForm(campaign);
                        }}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCampaign(campaign.id);
                        }}
                        className="p-1 text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant={campaign.type === '360' ? 'primary' : 'secondary'} size="sm">
                        {campaign.type === '360' ? '360°' : '180°'}
                      </Badge>
                      <Badge variant={getStatusVariant(campaign.status)} size="sm">
                        {getStatusLabel(campaign.status)}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>{t('year')}: {campaign.year}</p>
                      <p>
                        {campaign.startDate?.toDate?.()
                          ? campaign.startDate.toDate().toLocaleDateString()
                          : ''}{' '}
                        -{' '}
                        {campaign.endDate?.toDate?.()
                          ? campaign.endDate.toDate().toLocaleDateString()
                          : ''}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>
                        {campaign.employeeIds.length} {t('employees')}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => openCampaignDetail(campaign)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {t('viewDetails')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  function renderCampaignForm() {
    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          <button onClick={() => setView('list')} className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {editingId ? t('editCampaign') : t('createCampaign')}
          </h1>
        </div>

        <Card variant="bordered">
          <CardContent>
            <div className="space-y-5 py-2">
              {/* Name */}
              <Input
                label={t('campaignName')}
                value={formData.name[locale] || formData.name.es}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: { es: e.target.value, en: e.target.value, fr: e.target.value },
                  }))
                }
                required
              />
              {/* Description */}
              <TextArea
                label={t('description')}
                value={formData.description[locale] || formData.description.es}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: { es: e.target.value, en: e.target.value, fr: e.target.value },
                  }))
                }
              />
              {/* Type */}
              <Select
                label={t('reviewType')}
                value={formData.type}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, type: e.target.value as ReviewType }))
                }
                options={[
                  { value: '360', label: '360°' },
                  { value: '180', label: '180°' },
                ]}
              />
              {/* Year */}
              <Input
                label={t('year')}
                type="number"
                value={formData.year}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, year: parseInt(e.target.value) || 0 }))
                }
                required
              />
              {/* Start Date */}
              <Input
                label={t('startDate')}
                type="date"
                value={startDateStr}
                onChange={(e) => setStartDateStr(e.target.value)}
                required
              />
              {/* End Date */}
              <Input
                label={t('endDate')}
                type="date"
                value={endDateStr}
                onChange={(e) => setEndDateStr(e.target.value)}
                required
              />
              {/* Status */}
              <Select
                label={t('status')}
                value={formData.status}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    status: e.target.value as 'draft' | 'active' | 'closed',
                  }))
                }
                options={[
                  { value: 'draft', label: t('statusDraft') },
                  { value: 'active', label: t('statusActive') },
                  { value: 'closed', label: t('statusClosed') },
                ]}
              />
              {/* Employee Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('selectEmployees')}
                </label>
                {employees.length === 0 ? (
                  <p className="text-sm text-gray-500">{t('noEmployeesAvailable')}</p>
                ) : (
                  <div className="border border-gray-300 rounded-lg max-h-60 overflow-y-auto">
                    {employees.map((emp) => (
                      <label
                        key={emp.id}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <input
                          type="checkbox"
                          checked={formData.employeeIds.includes(emp.id)}
                          onChange={() => toggleEmployeeSelection(emp.id)}
                          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{emp.name}</p>
                          <p className="text-xs text-gray-500">
                            {emp.position[locale]} &middot; {emp.department[locale]}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
                {formData.employeeIds.length > 0 && (
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.employeeIds.length} {t('selected')}
                  </p>
                )}
              </div>
              {/* Actions */}
              <div className="flex items-center gap-3 pt-4">
                <Button onClick={handleSaveCampaign} isLoading={saving}>
                  {tc('save')}
                </Button>
                <Button variant="outline" onClick={() => setView('list')}>
                  {tc('cancel')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  function renderCampaignDetail() {
    if (!selectedCampaign) return null;

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button onClick={() => setView('list')} className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">
              {selectedCampaign.name[locale]}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant={selectedCampaign.type === '360' ? 'primary' : 'secondary'} size="sm">
                {selectedCampaign.type === '360' ? '360°' : '180°'}
              </Badge>
              <Badge variant={getStatusVariant(selectedCampaign.status)} size="sm">
                {getStatusLabel(selectedCampaign.status)}
              </Badge>
              <span className="text-sm text-gray-500">
                {selectedCampaign.year} &middot;{' '}
                {selectedCampaign.startDate?.toDate?.()
                  ? selectedCampaign.startDate.toDate().toLocaleDateString()
                  : ''}{' '}
                -{' '}
                {selectedCampaign.endDate?.toDate?.()
                  ? selectedCampaign.endDate.toDate().toLocaleDateString()
                  : ''}
              </span>
            </div>
          </div>
        </div>

        {selectedCampaign.description[locale] && (
          <Card variant="bordered">
            <CardContent>
              <p className="text-gray-600">{selectedCampaign.description[locale]}</p>
            </CardContent>
          </Card>
        )}

        {/* Assignments */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{t('assignments')}</h2>
          <Button size="sm" onClick={() => setShowAssignmentForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            {t('addAssignment')}
          </Button>
        </div>

        {/* Assignment Form */}
        {showAssignmentForm && (
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t('newAssignment')}</CardTitle>
                <button
                  onClick={() => setShowAssignmentForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <Select
                  label={t('employee')}
                  value={assignmentForm.employeeId}
                  onChange={(e) =>
                    setAssignmentForm((prev) => ({ ...prev, employeeId: e.target.value }))
                  }
                  placeholder={t('selectEmployee')}
                  options={employees
                    .filter((emp) => selectedCampaign.employeeIds.includes(emp.id))
                    .map((emp) => ({
                      value: emp.id,
                      label: emp.name,
                    }))}
                />
                <Select
                  label={t('raterRole')}
                  value={assignmentForm.raterRole}
                  onChange={(e) =>
                    setAssignmentForm((prev) => ({
                      ...prev,
                      raterRole: e.target.value as RaterRole,
                    }))
                  }
                  options={[
                    { value: 'self', label: t('roleSelf') },
                    { value: 'supervisor', label: t('roleSupervisor') },
                    { value: 'peer', label: t('rolePeer') },
                    { value: 'subordinate', label: t('roleSubordinate') },
                  ]}
                />
                <Input
                  label={t('raterName')}
                  value={assignmentForm.raterName}
                  onChange={(e) =>
                    setAssignmentForm((prev) => ({ ...prev, raterName: e.target.value }))
                  }
                  required
                />
                <Input
                  label={t('raterEmail')}
                  type="email"
                  value={assignmentForm.raterEmail}
                  onChange={(e) =>
                    setAssignmentForm((prev) => ({ ...prev, raterEmail: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="flex items-center gap-3 mt-4">
                <Button
                  size="sm"
                  onClick={handleSaveAssignment}
                  isLoading={saving}
                  disabled={!assignmentForm.employeeId || !assignmentForm.raterEmail || !assignmentForm.raterName}
                >
                  {tc('save')}
                </Button>
                <Button size="sm" variant="outline" onClick={() => setShowAssignmentForm(false)}>
                  {tc('cancel')}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Assignments List */}
        {assignments.length === 0 ? (
          <Card variant="bordered">
            <CardContent>
              <div className="text-center py-8">
                <Users className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">{t('noAssignments')}</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {assignments.map((assignment) => (
              <Card key={assignment.id} variant="bordered">
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium text-gray-900">{assignment.employeeName}</p>
                        <p className="text-sm text-gray-500">
                          {t('ratedBy')}: {assignment.raterName} ({assignment.raterEmail})
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getRoleVariant(assignment.raterRole)} size="sm">
                          {getRoleLabel(assignment.raterRole)}
                        </Badge>
                        <Badge
                          variant={assignment.status === 'completed' ? 'success' : 'default'}
                          size="sm"
                        >
                          {getStatusLabel(assignment.status)}
                        </Badge>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteAssignment(assignment.id)}
                      className="p-1 text-gray-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Scores grid for completed assignments */}
                  {assignment.status === 'completed' && assignment.scores && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-700 mb-2">{t('scores')}</p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                        {scoreKeys.map((key) => (
                          <div key={key} className="text-center">
                            <p className="text-xs text-gray-500">{t(`score_${key}`)}</p>
                            <p
                              className={`text-lg font-semibold ${
                                key === 'overall' ? 'text-primary-600' : 'text-gray-900'
                              }`}
                            >
                              {assignment.scores[key]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
          {/* Back to admin */}
          <div className="mb-6">
            <Link
              href={`/${locale}/admin`}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4" />
              {tc('backToAdmin')}
            </Link>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
            </div>
          ) : (
            <>
              {view === 'list' && renderCampaignList()}
              {view === 'form' && renderCampaignForm()}
              {view === 'detail' && renderCampaignDetail()}
            </>
          )}
        </main>
        <Footer />
      </div>
    </AuthGuard>
  );
}
