import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { firebaseAuth, firestore } from './config';

export interface AdminUser {
  uid: string;
  email: string;
  role: 'admin' | 'viewer';
}

export async function signIn(email: string, password: string): Promise<AdminUser> {
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
