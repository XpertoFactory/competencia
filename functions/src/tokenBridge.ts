import { onRequest } from 'firebase-functions/v2/https';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { logger } from 'firebase-functions/v2';

const XAID_API_URL = 'https://us-central1-xperto-aid.cloudfunctions.net/api';

interface XaidOrg {
  organization: { id: string; name: string };
  apps?: Array<{ role?: { roleId: string } }>;
}

interface XaidVerifyData {
  success: boolean;
  error?: string;
  data?: {
    user: {
      id: string;
      email: string;
      name?: string;
      displayName?: string;
      globalLevel?: string;
    };
    appAccess?: {
      appId: string;
      individualRole: string;
      source: string;
    };
    organizations?: XaidOrg[];
  };
}

export const tokenBridge = onRequest(
  { cors: true, region: 'us-central1' },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { token, appId } = req.body;
    if (!token) {
      res.status(400).json({ error: 'Token is required' });
      return;
    }

    try {
      // Verify token with xAId
      const verifyRes = await fetch(`${XAID_API_URL}/auth/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, appId }),
      });
      const verifyData: XaidVerifyData = await verifyRes.json();

      if (!verifyData.success || !verifyData.data?.user) {
        res.status(401).json({ error: verifyData.error || 'Invalid xAId token' });
        return;
      }

      const { user, appAccess, organizations } = verifyData.data;
      const uid = user.id;
      const auth = getAuth();
      const db = getFirestore();

      // Mint local custom token with same UID
      const customToken = await auth.createCustomToken(uid, {
        xaidUser: true,
        email: user.email,
        globalLevel: user.globalLevel,
      });

      // Sync admins collection based on individualRole
      const individualRole = appAccess?.individualRole;
      if (individualRole === 'admin' || individualRole === 'viewer') {
        await db.doc(`admins/${uid}`).set({
          email: user.email,
          role: individualRole,
          uid,
          xaidSynced: true,
          updatedAt: new Date(),
        }, { merge: true });
      } else {
        // Remove admin doc if role changed
        const adminDoc = await db.doc(`admins/${uid}`).get();
        if (adminDoc.exists && adminDoc.data()?.xaidSynced) {
          await db.doc(`admins/${uid}`).delete();
        }
      }

      // Sync orgMembers collection
      if (organizations && organizations.length > 0) {
        for (const orgEntry of organizations) {
          const xaidOrgId = orgEntry.organization?.id;
          const orgRole = orgEntry.apps?.[0]?.role?.roleId;
          if (!xaidOrgId || !orgRole) continue;

          // Find local org by xaidOrgId
          const orgsSnapshot = await db.collection('organizations')
            .where('xaidOrgId', '==', xaidOrgId)
            .limit(1)
            .get();

          if (orgsSnapshot.empty) continue;

          const localOrgId = orgsSnapshot.docs[0].id;
          const memberId = `${localOrgId}_${uid}`;

          // Map xAId role to skaills OrgRole
          const roleMap: Record<string, string> = {
            owner: 'owner',
            admin: 'admin',
            member: 'member',
            viewer: 'viewer',
          };
          const mappedRole = roleMap[orgRole] || 'member';

          await db.doc(`orgMembers/${memberId}`).set({
            orgId: localOrgId,
            userId: uid,
            email: user.email,
            role: mappedRole,
            xaidSynced: true,
            updatedAt: new Date(),
          }, { merge: true });
        }
      }

      res.json({
        success: true,
        customToken,
        user,
        session: verifyData.data,
      });
    } catch (error) {
      logger.error('Token bridge error:', error);
      res.status(500).json({ error: 'Token bridge failed' });
    }
  }
);
