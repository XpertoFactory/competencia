'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import { useOrg } from '@/components/org';
import {
  createOrganization,
  acceptOrgInvite,
  updateDocument,
  COLLECTIONS,
} from '@/lib/firebase/firestore';
import { firebaseAuth } from '@/lib/firebase/config';
import { Timestamp } from 'firebase/firestore';
import {
  Building2,
  Users,
  Plus,
  Mail,
  Check,
  X,
  Loader2,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';
import type { OrgPlan } from '@/types';

function OrganizationsContent() {
  const t = useTranslations('organizations');
  const locale = useLocale();
  const { memberships, pendingInvites, loading, refreshMemberships, refreshInvites } = useOrg();

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [orgDescription, setOrgDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isAccepting, setIsAccepting] = useState<string | null>(null);
  const [isDeclining, setIsDeclining] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  async function handleCreateOrg() {
    const user = firebaseAuth.currentUser;
    if (!user || !orgName.trim()) return;

    setIsCreating(true);
    try {
      const orgId = await createOrganization({
        name: orgName.trim(),
        description: orgDescription.trim() || '',
        plan: 'free' as OrgPlan,
        createdBy: user.uid,
        isActive: true,
        maxMembers: 5,
        createdAt: Timestamp.now(),
      });

      // Update the member doc with email/name (createOrganization leaves them empty)
      const memberId = `${orgId}_${user.uid}`;
      await updateDocument(COLLECTIONS.ORG_MEMBERS, memberId, {
        userEmail: user.email || '',
        userName: user.displayName || user.email || '',
      });

      await refreshMemberships();
      setOrgName('');
      setOrgDescription('');
      setShowCreateForm(false);
      setSuccessMessage(t('orgCreated'));
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Failed to create organization:', error);
    } finally {
      setIsCreating(false);
    }
  }

  async function handleAcceptInvite(inviteId: string) {
    const user = firebaseAuth.currentUser;
    if (!user) return;

    setIsAccepting(inviteId);
    try {
      await acceptOrgInvite(inviteId, user.uid, user.displayName || user.email || '');
      await refreshMemberships();
      await refreshInvites();
      setSuccessMessage(t('inviteAccepted'));
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Failed to accept invite:', error);
    } finally {
      setIsAccepting(null);
    }
  }

  async function handleDeclineInvite(inviteId: string) {
    setIsDeclining(inviteId);
    try {
      await updateDocument(COLLECTIONS.ORG_INVITES, inviteId, {
        status: 'cancelled',
      });
      await refreshInvites();
    } catch (error) {
      console.error('Failed to decline invite:', error);
    } finally {
      setIsDeclining(null);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
          <p className="text-gray-600 mt-1">{t('subtitle')}</p>
        </div>
        {!showCreateForm && (
          <Button onClick={() => setShowCreateForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            {t('create')}
          </Button>
        )}
      </div>

      {/* Success message */}
      {successMessage && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-700 text-sm flex items-center gap-2">
          <Check className="w-4 h-4" />
          {successMessage}
        </div>
      )}

      {/* Create Organization Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>{t('create')}</CardTitle>
            <p className="text-sm text-gray-500">{t('createSubtitle')}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('name')}
                </label>
                <Input
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder={t('namePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('description')}
                </label>
                <Input
                  value={orgDescription}
                  onChange={(e) => setOrgDescription(e.target.value)}
                  placeholder={t('descriptionPlaceholder')}
                />
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={handleCreateOrg}
                  disabled={isCreating || !orgName.trim()}
                >
                  {isCreating ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <Check className="w-4 h-4 mr-2" />
                  )}
                  {t('create')}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setShowCreateForm(false);
                    setOrgName('');
                    setOrgDescription('');
                  }}
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pending Invites */}
      {pendingInvites.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-500" />
              {t('pendingInvites')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingInvites.map((invite) => (
                <div
                  key={invite.id}
                  className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{invite.orgName}</p>
                    <p className="text-sm text-gray-500">
                      {t('role')}: {t(invite.role)} &middot; {t('inviteEmail')}: {invite.invitedByName}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleAcceptInvite(invite.id)}
                      disabled={isAccepting === invite.id}
                    >
                      {isAccepting === invite.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Check className="w-4 h-4 mr-1" />
                      )}
                      {t('acceptInvite')}
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleDeclineInvite(invite.id)}
                      disabled={isDeclining === invite.id}
                    >
                      {isDeclining === invite.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <X className="w-4 h-4 mr-1" />
                      )}
                      {t('declineInvite')}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Organizations List */}
      {memberships.length === 0 && !showCreateForm ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">{t('noOrgs')}</p>
            <p className="text-gray-400 text-sm mt-1">{t('createFirst')}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {memberships.map((membership) => (
            <Card key={membership.orgId} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{membership.orgName}</h3>
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-1 ${
                        membership.role === 'owner'
                          ? 'bg-purple-100 text-purple-700'
                          : membership.role === 'admin'
                          ? 'bg-blue-100 text-blue-700'
                          : membership.role === 'member'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {t(membership.role)}
                      </span>
                    </div>
                  </div>
                </div>
                <Link href={`/${locale}/admin/organizations/${membership.orgId}`}>
                  <Button variant="secondary" className="w-full mt-2">
                    <Users className="w-4 h-4 mr-2" />
                    Manage
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default function OrganizationsPage() {
  const locale = useLocale();

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <div className="flex-1">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="mb-6">
              <Link
                href={`/${locale}/admin`}
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Admin
              </Link>
            </div>
            <OrganizationsContent />
          </div>
        </div>
        <Footer />
      </div>
    </AuthGuard>
  );
}
