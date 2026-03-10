'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Select } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import {
  getOrganization,
  getOrgMembers,
  getOrgInvites,
  createOrgInvite,
  updateOrgMemberRole,
  removeOrgMember,
  updateDocument,
  COLLECTIONS,
} from '@/lib/firebase/firestore';
import { firebaseAuth } from '@/lib/firebase/config';
import { Timestamp } from 'firebase/firestore';
import {
  Building2,
  Users,
  Mail,
  Plus,
  Check,
  X,
  Loader2,
  ArrowLeft,
  Shield,
  UserMinus,
  Crown,
} from 'lucide-react';
import type { Organization, OrgMember, OrgInvite, OrgRole } from '@/types';

const ROLE_COLORS: Record<OrgRole, string> = {
  owner: 'bg-purple-100 text-purple-700',
  admin: 'bg-blue-100 text-blue-700',
  member: 'bg-green-100 text-green-700',
  viewer: 'bg-gray-100 text-gray-700',
};

const ROLE_OPTIONS: OrgRole[] = ['admin', 'member', 'viewer'];

export default function OrgDetailPage() {
  const t = useTranslations('organizations');
  const locale = useLocale();
  const params = useParams();
  const orgId = params.orgId as string;

  const [org, setOrg] = useState<Organization | null>(null);
  const [members, setMembers] = useState<OrgMember[]>([]);
  const [invites, setInvites] = useState<OrgInvite[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [currentUserRole, setCurrentUserRole] = useState<OrgRole | null>(null);

  // Invite form
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<OrgRole>('member');
  const [isSendingInvite, setIsSendingInvite] = useState(false);

  // Action states
  const [removingMemberId, setRemovingMemberId] = useState<string | null>(null);
  const [changingRoleId, setChangingRoleId] = useState<string | null>(null);
  const [cancellingInviteId, setCancellingInviteId] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const user = firebaseAuth.currentUser;
    if (user) {
      setCurrentUserId(user.uid);
    }
    loadData();
  }, [orgId]);

  async function loadData() {
    setIsLoading(true);
    try {
      const [orgData, membersData, invitesData] = await Promise.all([
        getOrganization(orgId),
        getOrgMembers(orgId),
        getOrgInvites(orgId),
      ]);
      setOrg(orgData);
      setMembers(membersData);
      setInvites(invitesData);

      // Determine current user's role in this org
      const user = firebaseAuth.currentUser;
      if (user) {
        const myMembership = membersData.find((m) => m.userId === user.uid);
        setCurrentUserRole(myMembership?.role || null);
      }
    } catch (error) {
      console.error('Failed to load org data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  function showSuccess(msg: string) {
    setSuccessMessage(msg);
    setErrorMessage('');
    setTimeout(() => setSuccessMessage(''), 3000);
  }

  function showError(msg: string) {
    setErrorMessage(msg);
    setSuccessMessage('');
    setTimeout(() => setErrorMessage(''), 5000);
  }

  const canManage = currentUserRole === 'owner' || currentUserRole === 'admin';

  async function handleSendInvite() {
    const user = firebaseAuth.currentUser;
    if (!user || !inviteEmail.trim() || !org) return;

    // Check if already a member
    const existingMember = members.find(
      (m) => m.userEmail.toLowerCase() === inviteEmail.trim().toLowerCase()
    );
    if (existingMember) {
      showError('This user is already a member of this organization.');
      return;
    }

    // Check if already invited
    const existingInvite = invites.find(
      (inv) => inv.email.toLowerCase() === inviteEmail.trim().toLowerCase()
    );
    if (existingInvite) {
      showError('An invitation has already been sent to this email.');
      return;
    }

    setIsSendingInvite(true);
    try {
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7);

      await createOrgInvite({
        orgId,
        orgName: org.name,
        email: inviteEmail.trim().toLowerCase(),
        role: inviteRole,
        invitedBy: user.uid,
        invitedByName: user.displayName || user.email || '',
        status: 'pending',
        expiresAt: Timestamp.fromDate(expiresAt),
        createdAt: Timestamp.now(),
      });

      setInviteEmail('');
      setInviteRole('member');
      showSuccess(t('inviteSent'));

      // Reload invites
      const updatedInvites = await getOrgInvites(orgId);
      setInvites(updatedInvites);
    } catch (error) {
      console.error('Failed to send invite:', error);
      showError('Failed to send invite.');
    } finally {
      setIsSendingInvite(false);
    }
  }

  async function handleChangeRole(userId: string, newRole: OrgRole) {
    setChangingRoleId(userId);
    try {
      await updateOrgMemberRole(orgId, userId, newRole);
      showSuccess(t('roleUpdated'));
      const updatedMembers = await getOrgMembers(orgId);
      setMembers(updatedMembers);
    } catch (error) {
      console.error('Failed to change role:', error);
      showError('Failed to change role.');
    } finally {
      setChangingRoleId(null);
    }
  }

  async function handleRemoveMember(userId: string) {
    if (!confirm(t('confirmRemove'))) return;

    setRemovingMemberId(userId);
    try {
      await removeOrgMember(orgId, userId);
      showSuccess(t('memberRemoved'));
      const updatedMembers = await getOrgMembers(orgId);
      setMembers(updatedMembers);
    } catch (error) {
      console.error('Failed to remove member:', error);
      showError('Failed to remove member.');
    } finally {
      setRemovingMemberId(null);
    }
  }

  async function handleCancelInvite(inviteId: string) {
    setCancellingInviteId(inviteId);
    try {
      await updateDocument(COLLECTIONS.ORG_INVITES, inviteId, {
        status: 'cancelled',
      });
      const updatedInvites = await getOrgInvites(orgId);
      setInvites(updatedInvites);
    } catch (error) {
      console.error('Failed to cancel invite:', error);
    } finally {
      setCancellingInviteId(null);
    }
  }

  if (isLoading) {
    return (
      <AuthGuard>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <Header />
          <div className="flex-1 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
          </div>
          <Footer />
        </div>
      </AuthGuard>
    );
  }

  if (!org) {
    return (
      <AuthGuard>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <Header />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Organization not found.</p>
              <Link
                href={`/${locale}/admin/organizations`}
                className="text-primary-600 hover:underline text-sm mt-2 inline-block"
              >
                {t('title')}
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </AuthGuard>
    );
  }

  // Sort members: owner first, then admin, member, viewer
  const roleOrder: Record<OrgRole, number> = { owner: 0, admin: 1, member: 2, viewer: 3 };
  const sortedMembers = [...members].sort(
    (a, b) => (roleOrder[a.role] ?? 9) - (roleOrder[b.role] ?? 9)
  );

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <div className="flex-1">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Back link */}
            <div className="mb-6">
              <Link
                href={`/${locale}/admin/organizations`}
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t('title')}
              </Link>
            </div>

            {/* Success/Error messages */}
            {successMessage && (
              <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3 text-green-700 text-sm flex items-center gap-2">
                <Check className="w-4 h-4" />
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm flex items-center gap-2">
                <X className="w-4 h-4" />
                {errorMessage}
              </div>
            )}

            {/* Organization Info */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900">{org.name}</h1>
                    {org.description && (
                      <p className="text-gray-500 mt-1">{org.description}</p>
                    )}
                    <div className="flex items-center gap-3 mt-2">
                      <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                        {t('plan')}: {org.plan}
                      </span>
                      <span className="inline-flex items-center text-xs text-gray-500">
                        <Users className="w-3.5 h-3.5 mr-1" />
                        {members.length} {t('members').toLowerCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Invite Member Form */}
            {canManage && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary-600" />
                    {t('invite')}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{t('inviteSubtitle')}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <Input
                        type="email"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                        placeholder={t('inviteEmail')}
                      />
                    </div>
                    <div className="w-full sm:w-40">
                      <Select
                        value={inviteRole}
                        onChange={(e) => setInviteRole(e.target.value as OrgRole)}
                        options={ROLE_OPTIONS.map((role) => ({
                          value: role,
                          label: t(role),
                        }))}
                      />
                    </div>
                    <Button
                      onClick={handleSendInvite}
                      disabled={isSendingInvite || !inviteEmail.trim()}
                    >
                      {isSendingInvite ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : (
                        <Plus className="w-4 h-4 mr-2" />
                      )}
                      {t('invite')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Members List */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  {t('members')} ({members.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {sortedMembers.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">{t('noMembers')}</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {sortedMembers.map((member) => {
                      const isOwner = member.role === 'owner';
                      const isCurrentUser = member.userId === currentUserId;

                      return (
                        <div
                          key={member.id}
                          className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                              {isOwner ? (
                                <Crown className="w-4 h-4 text-purple-600" />
                              ) : (
                                <Shield className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium text-gray-900 truncate">
                                {member.userName || member.userEmail}
                                {isCurrentUser && (
                                  <span className="text-xs text-gray-400 ml-2">(you)</span>
                                )}
                              </p>
                              <p className="text-sm text-gray-500 truncate">{member.userEmail}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 ml-4">
                            {canManage && !isOwner && !isCurrentUser ? (
                              <>
                                <select
                                  value={member.role}
                                  onChange={(e) =>
                                    handleChangeRole(member.userId, e.target.value as OrgRole)
                                  }
                                  disabled={changingRoleId === member.userId}
                                  className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                  {ROLE_OPTIONS.map((role) => (
                                    <option key={role} value={role}>
                                      {t(role)}
                                    </option>
                                  ))}
                                </select>
                                <button
                                  onClick={() => handleRemoveMember(member.userId)}
                                  disabled={removingMemberId === member.userId}
                                  className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                  title={t('removeMember')}
                                >
                                  {removingMemberId === member.userId ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                  ) : (
                                    <UserMinus className="w-4 h-4" />
                                  )}
                                </button>
                              </>
                            ) : (
                              <span
                                className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${ROLE_COLORS[member.role]}`}
                              >
                                {t(member.role)}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Pending Invites */}
            {canManage && invites.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-amber-500" />
                    {t('pendingInvites')} ({invites.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="divide-y divide-gray-100">
                    {invites.map((invite) => (
                      <div
                        key={invite.id}
                        className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                      >
                        <div>
                          <p className="font-medium text-gray-900">{invite.email}</p>
                          <p className="text-sm text-gray-500">
                            {t('role')}: {t(invite.role)}
                          </p>
                        </div>
                        <button
                          onClick={() => handleCancelInvite(invite.id)}
                          disabled={cancellingInviteId === invite.id}
                          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Cancel invite"
                        >
                          {cancellingInviteId === invite.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <X className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </AuthGuard>
  );
}
