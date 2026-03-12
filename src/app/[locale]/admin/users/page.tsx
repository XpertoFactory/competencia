'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, Badge, Input, Select, ConfirmModal } from '@/components/ui';
import {
  Users,
  Search,
  Loader2,
  ArrowLeft,
  Mail,
  Calendar,
  Building2,
  UserPlus,
  X,
  Eye,
  ChevronRight,
  UserX,
  Shield,
  BarChart3,
  CheckCircle,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { AuthGuard } from '@/components/auth';
import {
  getAllUserProfiles,
  getOrganizationsList,
  getUserMemberships,
  addOrgMember,
  removeOrgMember,
  getEvaluations,
  getProfiles,
  getDocuments,
  COLLECTIONS,
} from '@/lib/firebase/firestore';
import type {
  UserProfile,
  Organization,
  OrgMember,
  Evaluation,
  Profile,
  AnalysisResult,
  OrgRole,
} from '@/types';
import { serverTimestamp } from 'firebase/firestore';

type FilterMode = 'all' | 'assigned' | 'unassigned';

interface UserWithOrgs extends UserProfile {
  memberships: OrgMember[];
}

export default function AdminUsersPage() {
  const t = useTranslations('admin.users');
  const ta = useTranslations('admin');
  const locale = useLocale() as 'es' | 'en' | 'fr';
  const [users, setUsers] = useState<UserWithOrgs[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterMode>('all');
  const [selectedUser, setSelectedUser] = useState<UserWithOrgs | null>(null);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignOrgId, setAssignOrgId] = useState('');
  const [assignRole, setAssignRole] = useState<OrgRole>('member');
  const [assigning, setAssigning] = useState(false);
  const [removeTarget, setRemoveTarget] = useState<{ user: UserWithOrgs; orgId: string; orgName: string } | null>(null);
  const [userEvaluations, setUserEvaluations] = useState<(Evaluation & { profileName: string; score: number | null })[]>([]);
  const [loadingEvals, setLoadingEvals] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const [allUsers, allOrgs] = await Promise.all([
        getAllUserProfiles(),
        getOrganizationsList(),
      ]);

      // Fetch memberships for all users
      const usersWithOrgs: UserWithOrgs[] = await Promise.all(
        allUsers.map(async (user) => {
          const memberships = await getUserMemberships(user.id).catch(() => []);
          return { ...user, memberships };
        })
      );

      setUsers(usersWithOrgs);
      setOrganizations(allOrgs);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    } finally {
      setLoading(false);
    }
  }

  async function loadUserEvaluations(user: UserWithOrgs) {
    setLoadingEvals(true);
    try {
      const [evaluations, profiles, results] = await Promise.all([
        getEvaluations(undefined, 500),
        getProfiles(true),
        getDocuments<AnalysisResult>(COLLECTIONS.RESULTS).catch(() => [] as AnalysisResult[]),
      ]);

      const profileMap = new Map(profiles.map((p) => [p.id, p]));
      const resultMap = new Map(results.map((r) => [r.evaluationId, r]));

      // Match evaluations by email
      const userEvals = evaluations
        .filter((e) => e.candidateEmail === user.email || e.candidateName === user.displayName)
        .map((e) => {
          const profile = profileMap.get(e.profileId);
          const profileName = profile
            ? (profile.name[locale] || profile.name.es)
            : e.profileId;
          const result = resultMap.get(e.id);
          const score = result
            ? Math.round((result.indices.professional + result.indices.softSkills + result.indices.readiness) / 3)
            : null;
          return { ...e, profileName, score };
        });

      setUserEvaluations(userEvals);
    } catch (err) {
      console.error('Failed to load evaluations:', err);
      setUserEvaluations([]);
    } finally {
      setLoadingEvals(false);
    }
  }

  function selectUser(user: UserWithOrgs) {
    setSelectedUser(user);
    loadUserEvaluations(user);
  }

  async function handleAssign() {
    if (!selectedUser || !assignOrgId) return;
    setAssigning(true);
    try {
      const org = organizations.find((o) => o.id === assignOrgId);
      await addOrgMember({
        orgId: assignOrgId,
        userId: selectedUser.id,
        userEmail: selectedUser.email,
        userName: selectedUser.displayName || selectedUser.email,
        role: assignRole,
        joinedAt: serverTimestamp() as any,
      });

      // Refresh user data
      const memberships = await getUserMemberships(selectedUser.id).catch(() => []);
      const updated = { ...selectedUser, memberships };
      setSelectedUser(updated);
      setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
      setShowAssignModal(false);
      setAssignOrgId('');
      setAssignRole('member');
    } catch (err) {
      console.error('Failed to assign user:', err);
    } finally {
      setAssigning(false);
    }
  }

  async function handleRemoveFromOrg() {
    if (!removeTarget) return;
    try {
      await removeOrgMember(removeTarget.orgId, removeTarget.user.id);
      const memberships = await getUserMemberships(removeTarget.user.id).catch(() => []);
      const updated = { ...removeTarget.user, memberships };
      if (selectedUser?.id === updated.id) setSelectedUser(updated);
      setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
    } catch (err) {
      console.error('Failed to remove from org:', err);
    } finally {
      setRemoveTarget(null);
    }
  }

  const filteredUsers = users.filter((u) => {
    const matchSearch =
      !search ||
      u.displayName?.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === 'all' ||
      (filter === 'assigned' && u.memberships.length > 0) ||
      (filter === 'unassigned' && u.memberships.length === 0);
    return matchSearch && matchFilter;
  });

  const stats = {
    total: users.length,
    withOrg: users.filter((u) => u.memberships.length > 0).length,
    withoutOrg: users.filter((u) => u.memberships.length === 0).length,
    recent: users.filter((u) => {
      if (!u.createdAt) return false;
      const created = u.createdAt.toDate ? u.createdAt.toDate() : new Date(u.createdAt as any);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return created > thirtyDaysAgo;
    }).length,
  };

  const formatDate = (ts: any) => {
    if (!ts) return '—';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString(locale === 'es' ? 'es-ES' : locale === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const roleColors: Record<string, string> = {
    owner: 'bg-purple-100 text-purple-700',
    admin: 'bg-blue-100 text-blue-700',
    member: 'bg-green-100 text-green-700',
    viewer: 'bg-gray-100 text-gray-700',
  };

  const statusColors: Record<string, string> = {
    'in-progress': 'bg-yellow-100 text-yellow-700',
    completed: 'bg-blue-100 text-blue-700',
    analyzed: 'bg-green-100 text-green-700',
  };

  // Orgs user is NOT a member of (for assign dropdown)
  const availableOrgs = selectedUser
    ? organizations.filter((o) => !selectedUser.memberships.some((m) => m.orgId === o.id))
    : [];

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />

        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link href={`/${locale}/admin`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {ta('title')}
                </Button>
              </Link>
            </div>

            {selectedUser ? (
              /* User Detail View */
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => { setSelectedUser(null); setUserEvaluations([]); }}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t('backToList')}
                  </button>
                </div>

                {/* User Info Card */}
                <Card variant="bordered">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary-700">
                            {(selectedUser.displayName || selectedUser.email).charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-gray-900">
                            {selectedUser.displayName || t('noDisplayName')}
                          </h2>
                          <p className="text-gray-500 flex items-center gap-1.5">
                            <Mail className="w-4 h-4" />
                            {selectedUser.email}
                          </p>
                          <p className="text-sm text-gray-400 flex items-center gap-1.5 mt-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {t('memberSince')}: {formatDate(selectedUser.createdAt)}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => setShowAssignModal(true)}
                        disabled={availableOrgs.length === 0}
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        {t('assignToOrg')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Organization Memberships */}
                <Card variant="bordered">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-gray-400" />
                      {t('orgMemberships')}
                    </h3>
                    {selectedUser.memberships.length === 0 ? (
                      <p className="text-gray-500 text-sm py-4">{t('noOrgs')}</p>
                    ) : (
                      <div className="space-y-3">
                        {selectedUser.memberships.map((m) => {
                          const org = organizations.find((o) => o.id === m.orgId);
                          return (
                            <div
                              key={m.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                <Building2 className="w-5 h-5 text-gray-400" />
                                <div>
                                  <p className="font-medium text-gray-900">
                                    {org?.name || m.orgId}
                                  </p>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <Badge className={roleColors[m.role] || 'bg-gray-100 text-gray-700'}>
                                      {m.role}
                                    </Badge>
                                    <span className="text-xs text-gray-400">
                                      {t('joinedAt')}: {formatDate(m.joinedAt)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() =>
                                  setRemoveTarget({
                                    user: selectedUser,
                                    orgId: m.orgId,
                                    orgName: org?.name || m.orgId,
                                  })
                                }
                                className="text-red-500 hover:text-red-700 p-1"
                                title={t('removeFromOrg')}
                              >
                                <UserX className="w-4 h-4" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Evaluations */}
                <Card variant="bordered">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-gray-400" />
                      {t('evaluations')}
                    </h3>
                    {loadingEvals ? (
                      <div className="flex justify-center py-8">
                        <Loader2 className="w-6 h-6 text-primary-600 animate-spin" />
                      </div>
                    ) : userEvaluations.length === 0 ? (
                      <p className="text-gray-500 text-sm py-4">{t('noEvaluations')}</p>
                    ) : (
                      <div className="space-y-2">
                        {userEvaluations.map((ev) => (
                          <Link
                            key={ev.id}
                            href={`/${locale}/results/${ev.id}`}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-gray-900 text-sm">{ev.profileName}</p>
                              <div className="flex items-center gap-3 mt-1">
                                <Badge className={statusColors[ev.status] || 'bg-gray-100 text-gray-700'}>
                                  {ev.status}
                                </Badge>
                                <span className="text-xs text-gray-400">
                                  {formatDate(ev.completedAt || ev.startedAt)}
                                </span>
                              </div>
                            </div>
                            {ev.score !== null && (
                              <div className="text-right">
                                <span className="text-lg font-bold text-primary-700">{ev.score}%</span>
                              </div>
                            )}
                            <ChevronRight className="w-4 h-4 text-gray-300 ml-2" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ) : (
              /* User List View */
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Users className="w-7 h-7 text-primary-600" />
                    {t('title')}
                  </h1>
                  <p className="text-gray-500 mt-1">{t('subtitle')}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card variant="bordered">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                      <p className="text-xs text-gray-500 mt-1">{t('totalUsers')}</p>
                    </CardContent>
                  </Card>
                  <Card variant="bordered">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold text-green-600">{stats.withOrg}</p>
                      <p className="text-xs text-gray-500 mt-1">{t('withOrg')}</p>
                    </CardContent>
                  </Card>
                  <Card variant="bordered">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold text-amber-600">{stats.withoutOrg}</p>
                      <p className="text-xs text-gray-500 mt-1">{t('withoutOrg')}</p>
                    </CardContent>
                  </Card>
                  <Card variant="bordered">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold text-blue-600">{stats.recent}</p>
                      <p className="text-xs text-gray-500 mt-1">{t('recentUsers')}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder={t('searchPlaceholder')}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-1 bg-white border border-gray-200 rounded-lg p-1">
                    {(['all', 'assigned', 'unassigned'] as FilterMode[]).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                          filter === f
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {f === 'all' ? t('filterAll') : f === 'assigned' ? t('filterAssigned') : t('filterUnassigned')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* User Table */}
                {loading ? (
                  <div className="flex justify-center py-16">
                    <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                  </div>
                ) : filteredUsers.length === 0 ? (
                  <div className="text-center py-16">
                    <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">{t('noUsers')}</p>
                  </div>
                ) : (
                  <Card variant="bordered">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {t('name')}
                            </th>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {t('email')}
                            </th>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {t('organizations')}
                            </th>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {t('registeredAt')}
                            </th>
                            <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {t('actions')}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {filteredUsers.map((user) => (
                            <tr
                              key={user.id}
                              className="hover:bg-gray-50 transition-colors cursor-pointer"
                              onClick={() => selectUser(user)}
                            >
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                                    <span className="text-sm font-semibold text-primary-700">
                                      {(user.displayName || user.email).charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                  <span className="font-medium text-gray-900 text-sm">
                                    {user.displayName || <span className="text-gray-400 italic">{t('noDisplayName')}</span>}
                                  </span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-600">{user.email}</td>
                              <td className="px-4 py-3">
                                {user.memberships.length > 0 ? (
                                  <div className="flex flex-wrap gap-1">
                                    {user.memberships.map((m) => {
                                      const org = organizations.find((o) => o.id === m.orgId);
                                      return (
                                        <Badge key={m.id} className="bg-primary-50 text-primary-700 text-xs">
                                          {org?.name || m.orgId}
                                        </Badge>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  <span className="text-xs text-gray-400 italic">{t('noOrgAssigned')}</span>
                                )}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-500">
                                {formatDate(user.createdAt)}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    selectUser(user);
                                  }}
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>

        <Footer />

        {/* Assign to Org Modal */}
        {showAssignModal && selectedUser && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">{t('assignUser')}</h3>
                <button onClick={() => setShowAssignModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('selectOrg')}</label>
                  <Select
                    value={assignOrgId}
                    onChange={(e) => setAssignOrgId(e.target.value)}
                    options={[
                      { value: '', label: t('selectOrg') },
                      ...availableOrgs.map((o) => ({ value: o.id, label: o.name })),
                    ]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('selectRole')}</label>
                  <Select
                    value={assignRole}
                    onChange={(e) => setAssignRole(e.target.value as OrgRole)}
                    options={[
                      { value: 'viewer', label: t('roleViewer') },
                      { value: 'member', label: t('roleMember') },
                      { value: 'admin', label: t('roleAdmin') },
                      { value: 'owner', label: t('roleOwner') },
                    ]}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 p-4 border-t border-gray-200">
                <Button variant="outline" onClick={() => setShowAssignModal(false)}>
                  {t('cancel')}
                </Button>
                <Button onClick={handleAssign} disabled={!assignOrgId || assigning}>
                  {assigning ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <UserPlus className="w-4 h-4 mr-2" />}
                  {t('assign')}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Remove from Org Confirm */}
        {removeTarget && (
          <ConfirmModal
            isOpen={true}
            title={t('removeFromOrg')}
            message={t('confirmRemove', { org: removeTarget.orgName })}
            onClose={() => setRemoveTarget(null)}
            onConfirm={handleRemoveFromOrg}
          />
        )}
      </div>
    </AuthGuard>
  );
}
