'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { firebaseAuth as auth } from '@/lib/firebase/config';
import {
  getUserMemberships,
  getOrganization,
  getUserProfile,
  createOrUpdateUserProfile,
  getPendingInvitesForEmail,
} from '@/lib/firebase/firestore';
import type { Organization, OrgMember, OrgRole, OrgInvite } from '@/types';

interface OrgMembership {
  orgId: string;
  orgName: string;
  role: OrgRole;
}

interface OrgContextType {
  currentOrg: Organization | null;
  currentOrgRole: OrgRole | null;
  memberships: OrgMembership[];
  pendingInvites: OrgInvite[];
  isIndividualMode: boolean;
  loading: boolean;
  switchOrg: (orgId: string | null) => Promise<void>;
  refreshMemberships: () => Promise<void>;
  refreshInvites: () => Promise<void>;
}

const OrgContext = createContext<OrgContextType>({
  currentOrg: null,
  currentOrgRole: null,
  memberships: [],
  pendingInvites: [],
  isIndividualMode: true,
  loading: true,
  switchOrg: async () => {},
  refreshMemberships: async () => {},
  refreshInvites: async () => {},
});

export function useOrg() {
  return useContext(OrgContext);
}

export function OrgProvider({ children }: { children: React.ReactNode }) {
  const [currentOrg, setCurrentOrg] = useState<Organization | null>(null);
  const [currentOrgRole, setCurrentOrgRole] = useState<OrgRole | null>(null);
  const [memberships, setMemberships] = useState<OrgMembership[]>([]);
  const [pendingInvites, setPendingInvites] = useState<OrgInvite[]>([]);
  const [loading, setLoading] = useState(true);

  const loadMemberships = useCallback(async (userId: string) => {
    try {
      const members = await getUserMemberships(userId);
      const membershipList: OrgMembership[] = [];

      for (const member of members) {
        const org = await getOrganization(member.orgId);
        if (org && org.isActive) {
          membershipList.push({
            orgId: member.orgId,
            orgName: org.name,
            role: member.role,
          });
        }
      }

      setMemberships(membershipList);
      return membershipList;
    } catch (error) {
      console.error('Failed to load memberships:', error);
      return [];
    }
  }, []);

  const loadInvites = useCallback(async (email: string) => {
    try {
      const invites = await getPendingInvitesForEmail(email);
      setPendingInvites(invites);
    } catch (error) {
      console.error('Failed to load invites:', error);
    }
  }, []);

  const loadCurrentOrg = useCallback(async (orgId: string, membershipList: OrgMembership[]) => {
    try {
      const org = await getOrganization(orgId);
      if (org && org.isActive) {
        setCurrentOrg(org);
        const membership = membershipList.find(m => m.orgId === orgId);
        setCurrentOrgRole(membership?.role || null);
      } else {
        setCurrentOrg(null);
        setCurrentOrgRole(null);
      }
    } catch (error) {
      console.error('Failed to load current org:', error);
      setCurrentOrg(null);
      setCurrentOrgRole(null);
    }
  }, []);

  // Initialize on auth state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setCurrentOrg(null);
        setCurrentOrgRole(null);
        setMemberships([]);
        setPendingInvites([]);
        setLoading(false);
        return;
      }

      try {
        // Load memberships
        const membershipList = await loadMemberships(user.uid);

        // Load pending invites
        if (user.email) {
          await loadInvites(user.email);
        }

        // Check for saved org preference
        const profile = await getUserProfile(user.uid);
        if (profile?.currentOrgId) {
          const isMember = membershipList.some(m => m.orgId === profile.currentOrgId);
          if (isMember) {
            await loadCurrentOrg(profile.currentOrgId, membershipList);
          }
        }
      } catch (error) {
        console.error('Failed to initialize org context:', error);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, [loadMemberships, loadInvites, loadCurrentOrg]);

  const switchOrg = useCallback(async (orgId: string | null) => {
    const user = auth.currentUser;
    if (!user) return;

    if (!orgId) {
      // Switch to individual mode
      setCurrentOrg(null);
      setCurrentOrgRole(null);
      await createOrUpdateUserProfile(user.uid, {
        email: user.email || '',
        displayName: user.displayName || '',
        currentOrgId: undefined,
      });
      return;
    }

    // Switch to org
    const membership = memberships.find(m => m.orgId === orgId);
    if (!membership) return;

    const org = await getOrganization(orgId);
    if (!org) return;

    setCurrentOrg(org);
    setCurrentOrgRole(membership.role);
    await createOrUpdateUserProfile(user.uid, {
      email: user.email || '',
      displayName: user.displayName || '',
      currentOrgId: orgId,
    });
  }, [memberships]);

  const refreshMemberships = useCallback(async () => {
    const user = auth.currentUser;
    if (user) {
      await loadMemberships(user.uid);
    }
  }, [loadMemberships]);

  const refreshInvites = useCallback(async () => {
    const user = auth.currentUser;
    if (user?.email) {
      await loadInvites(user.email);
    }
  }, [loadInvites]);

  return (
    <OrgContext.Provider
      value={{
        currentOrg,
        currentOrgRole,
        memberships,
        pendingInvites,
        isIndividualMode: !currentOrg,
        loading,
        switchOrg,
        refreshMemberships,
        refreshInvites,
      }}
    >
      {children}
    </OrgContext.Provider>
  );
}
