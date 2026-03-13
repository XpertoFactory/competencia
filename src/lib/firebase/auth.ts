/**
 * Auth service — xAId Token Bridge pattern.
 *
 * Login via xAId (xperto-aid) → Token Bridge → sign into local project.
 * Session data (individual role, org roles) stored in localStorage.
 */
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithCustomToken,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
  User,
} from 'firebase/auth';
import { firebaseAuth, xaidAuth } from './config';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AdminUser {
  uid: string;
  email: string;
  role: 'admin' | 'viewer';
}

export interface XaidSession {
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
  organizations?: Array<{
    organization: { id: string; name: string };
    apps?: Array<{ role?: { roleId: string } }>;
  }>;
}

export interface OrgRole {
  orgId: string;
  orgName: string;
  role: string;
}

export interface StoredSession {
  uid: string;
  email: string;
  displayName: string | null;
  method: 'xaid-email' | 'xaid-google';
  individualRole: string;
  orgRoles: OrgRole[];
  expiresAt: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SESSION_KEY = 'skaills_xaid_session';
const SESSION_DURATION_MS = 4 * 60 * 60 * 1000; // 4 hours
const TOKEN_BRIDGE_URL = process.env.NEXT_PUBLIC_TOKEN_BRIDGE_URL ||
  'https://us-central1-xperto-candidates-hub.cloudfunctions.net/tokenBridge';
const XAID_APP_ID = 'skaills';

// ─── Internal state ──────────────────────────────────────────────────────────

let currentSession: StoredSession | null = null;

// ─── Token Bridge ─────────────────────────────────────────────────────────────

async function callTokenBridge(xaidIdToken: string): Promise<{
  success: boolean;
  session?: XaidSession;
  error?: string;
}> {
  try {
    const response = await fetch(TOKEN_BRIDGE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: xaidIdToken, appId: XAID_APP_ID }),
    });

    const data = await response.json();

    if (!data.success || !data.customToken) {
      return { success: false, error: data.error || 'Token bridge failed' };
    }

    // Sign into local Firebase project with the custom token
    await signInWithCustomToken(firebaseAuth, data.customToken);

    return { success: true, session: data.session };
  } catch (error) {
    console.error('[Token Bridge] Error:', error);
    return { success: false, error: 'Error connecting to authentication service' };
  }
}

function extractOrgRoles(session: XaidSession): OrgRole[] {
  return (session.organizations || [])
    .map(o => ({
      orgId: o.organization?.id ?? '',
      orgName: o.organization?.name ?? '',
      role: o.apps?.[0]?.role?.roleId ?? '',
    }))
    .filter(o => o.orgId && o.role);
}

async function completeXaidLogin(method: 'xaid-email' | 'xaid-google'): Promise<{
  success: boolean;
  error?: string;
  noAccess?: boolean;
}> {
  const xaidUser = xaidAuth.currentUser;
  if (!xaidUser) return { success: false, error: 'No xAId user' };

  const idToken = await xaidUser.getIdToken();
  const bridgeResult = await callTokenBridge(idToken);

  if (!bridgeResult.success) {
    await xaidAuth.signOut();
    return { success: false, error: bridgeResult.error };
  }

  const session = bridgeResult.session!;
  const individualRole = session.appAccess?.individualRole || '';

  // Check if user has app access
  if (!session.appAccess) {
    await firebaseSignOut(firebaseAuth);
    await xaidAuth.signOut();
    return { success: false, noAccess: true, error: 'no-access' };
  }

  const orgRoles = extractOrgRoles(session);

  currentSession = {
    uid: xaidUser.uid,
    email: xaidUser.email || session.user.email || '',
    displayName: session.user.displayName || session.user.name || xaidUser.displayName || null,
    method,
    individualRole,
    orgRoles,
    expiresAt: Date.now() + SESSION_DURATION_MS,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(currentSession));

  return { success: true };
}

// ─── xAId Login Methods ──────────────────────────────────────────────────────

export async function xaidLoginWithEmail(email: string, password: string): Promise<{
  success: boolean;
  error?: string;
  noAccess?: boolean;
}> {
  try {
    await signInWithEmailAndPassword(xaidAuth, email, password);
    return await completeXaidLogin('xaid-email');
  } catch (err: any) {
    console.error('[xAId Auth] Email login failed:', err.code);
    return { success: false, error: err.code || 'auth-error' };
  }
}

export async function xaidLoginWithGoogle(): Promise<{
  success: boolean;
  error?: string;
  noAccess?: boolean;
}> {
  const provider = new GoogleAuthProvider();
  provider.addScope('email');
  provider.addScope('profile');
  provider.setCustomParameters({ prompt: 'select_account' });

  try {
    await signInWithPopup(xaidAuth, provider);
    return await completeXaidLogin('xaid-google');
  } catch (err: any) {
    console.error('[xAId Auth] Google login failed:', err.code);
    return { success: false, error: err.code || 'auth-error' };
  }
}

export async function xaidSignUp(email: string, password: string, displayName: string): Promise<{
  success: boolean;
  error?: string;
  noAccess?: boolean;
}> {
  try {
    const cred = await createUserWithEmailAndPassword(xaidAuth, email, password);
    await updateProfile(cred.user, { displayName });
    return await completeXaidLogin('xaid-email');
  } catch (err: any) {
    console.error('[xAId Auth] Sign up failed:', err.code);
    return { success: false, error: err.code || 'auth-error' };
  }
}

export async function xaidResetPassword(email: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    await sendPasswordResetEmail(xaidAuth, email);
    return { success: true };
  } catch (err: any) {
    console.error('[xAId Auth] Password reset failed:', err.code);
    return { success: false, error: err.code || 'auth-error' };
  }
}

// ─── Logout ──────────────────────────────────────────────────────────────────

export async function signOut(): Promise<void> {
  try { await firebaseSignOut(xaidAuth); } catch { /* ignore */ }
  try { await firebaseSignOut(firebaseAuth); } catch { /* ignore */ }
  currentSession = null;
  localStorage.removeItem(SESSION_KEY);
}

// ─── Session & Role Checks ───────────────────────────────────────────────────

export function getSession(): StoredSession | null {
  if (currentSession && Date.now() < currentSession.expiresAt) {
    return currentSession;
  }
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session: StoredSession = JSON.parse(raw);
    if (Date.now() > session.expiresAt) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    currentSession = session;
    return session;
  } catch {
    return null;
  }
}

export function hasRole(role: string): boolean {
  const session = getSession();
  if (!session) return false;
  if (session.individualRole === role) return true;
  return session.orgRoles.some(o => o.role === role);
}

export function isAdmin(): boolean {
  return hasRole('admin') || hasRole('viewer');
}

export function getIndividualRole(): string | null {
  return getSession()?.individualRole || null;
}

export function getOrgRoles(): OrgRole[] {
  return getSession()?.orgRoles || [];
}

// ─── Auth state observer ─────────────────────────────────────────────────────

export function onAuthChange(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(firebaseAuth, callback);
}

export function getCurrentUser(): User | null {
  return firebaseAuth.currentUser;
}
