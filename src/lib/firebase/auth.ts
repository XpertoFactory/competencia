import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { firebaseAuth, firestore } from './config';

export interface AdminUser {
  uid: string;
  email: string;
  role: 'admin' | 'viewer';
}

// Admin sign-in: checks admin status after authentication
export async function signInAdmin(email: string, password: string): Promise<AdminUser> {
  const credential = await signInWithEmailAndPassword(firebaseAuth, email, password);
  const user = credential.user;

  // Check if user is an admin
  const adminDoc = await getDoc(doc(firestore, 'admins', user.uid));
  if (!adminDoc.exists()) {
    await firebaseSignOut(firebaseAuth);
    throw new Error('unauthorized');
  }

  const adminData = adminDoc.data();
  return {
    uid: user.uid,
    email: user.email || email,
    role: adminData.role || 'viewer',
  };
}

// Admin sign-in with Google: checks admin status after authentication
export async function signInAdminWithGoogle(): Promise<AdminUser> {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const credential = await signInWithPopup(firebaseAuth, provider);
  const user = credential.user;

  // Check if user is an admin
  const adminDoc = await getDoc(doc(firestore, 'admins', user.uid));
  if (!adminDoc.exists()) {
    await firebaseSignOut(firebaseAuth);
    throw new Error('unauthorized');
  }

  const adminData = adminDoc.data();
  return {
    uid: user.uid,
    email: user.email || '',
    role: adminData.role || 'viewer',
  };
}

// Regular user sign-in (no admin check)
export async function signInUser(email: string, password: string): Promise<User> {
  const credential = await signInWithEmailAndPassword(firebaseAuth, email, password);
  return credential.user;
}

// Register a new user with email and password
export async function registerWithEmail(email: string, password: string, displayName?: string): Promise<User> {
  const credential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
  if (displayName) {
    await updateProfile(credential.user, { displayName });
  }
  return credential.user;
}

// Sign in with Google (regular user)
export async function signInWithGoogle(): Promise<User> {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const credential = await signInWithPopup(firebaseAuth, provider);
  return credential.user;
}

// Get the current authenticated user
export function getCurrentUser(): User | null {
  return firebaseAuth.currentUser;
}

export async function signOut(): Promise<void> {
  await firebaseSignOut(firebaseAuth);
}

export function onAuthChange(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(firebaseAuth, callback);
}

export async function checkAdminStatus(uid: string): Promise<AdminUser | null> {
  const adminDoc = await getDoc(doc(firestore, 'admins', uid));
  if (!adminDoc.exists()) return null;

  const data = adminDoc.data();
  return {
    uid,
    email: data.email || '',
    role: data.role || 'viewer',
  };
}
