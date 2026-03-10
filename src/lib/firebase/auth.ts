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
import { doc, getDoc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { firebaseAuth, firestore } from './config';

export interface AdminUser {
  uid: string;
  email: string;
  role: 'admin' | 'viewer';
}

/**
 * Check if user is admin. If no admin doc exists with this UID but one exists
 * with matching email, auto-fix by creating a doc with the correct UID.
 * If no admins exist at all, make this user the first admin.
 */
async function resolveAdminStatus(user: User): Promise<AdminUser | null> {
  const adminDocRef = doc(firestore, 'admins', user.uid);
  const adminDoc = await getDoc(adminDocRef);

  if (adminDoc.exists()) {
    const data = adminDoc.data();
    return {
      uid: user.uid,
      email: user.email || data.email || '',
      role: data.role || 'viewer',
    };
  }

  // No doc with this UID — check if any admin doc has this email
  const userEmail = user.email?.toLowerCase();
  if (userEmail) {
    const adminsQuery = query(
      collection(firestore, 'admins'),
      where('email', '==', userEmail)
    );
    const snapshot = await getDocs(adminsQuery);
    if (!snapshot.empty) {
      // Found an admin doc with matching email but wrong doc ID — auto-fix
      const existingData = snapshot.docs[0].data();
      await setDoc(adminDocRef, {
        email: userEmail,
        role: existingData.role || 'admin',
        uid: user.uid,
        createdAt: existingData.createdAt || new Date(),
      });
      return {
        uid: user.uid,
        email: userEmail,
        role: existingData.role || 'admin',
      };
    }
  }

  // Check if admins collection is completely empty — first user becomes admin
  const allAdmins = await getDocs(collection(firestore, 'admins'));
  if (allAdmins.empty) {
    await setDoc(adminDocRef, {
      email: user.email || '',
      role: 'admin',
      uid: user.uid,
      createdAt: new Date(),
    });
    return {
      uid: user.uid,
      email: user.email || '',
      role: 'admin',
    };
  }

  return null;
}

// Admin sign-in: checks admin status after authentication
export async function signInAdmin(email: string, password: string): Promise<AdminUser> {
  const credential = await signInWithEmailAndPassword(firebaseAuth, email, password);
  const adminUser = await resolveAdminStatus(credential.user);

  if (!adminUser) {
    await firebaseSignOut(firebaseAuth);
    throw new Error('unauthorized');
  }

  return adminUser;
}

// Admin sign-in with Google: checks admin status after authentication
export async function signInAdminWithGoogle(): Promise<AdminUser> {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const credential = await signInWithPopup(firebaseAuth, provider);
  const adminUser = await resolveAdminStatus(credential.user);

  if (!adminUser) {
    await firebaseSignOut(firebaseAuth);
    throw new Error('unauthorized');
  }

  return adminUser;
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
  // For AuthProvider context — also uses resolveAdminStatus for auto-fix
  const user = firebaseAuth.currentUser;
  if (user && user.uid === uid) {
    return resolveAdminStatus(user);
  }

  // Fallback to simple doc lookup
  const adminDoc = await getDoc(doc(firestore, 'admins', uid));
  if (!adminDoc.exists()) return null;

  const data = adminDoc.data();
  return {
    uid,
    email: data.email || '',
    role: data.role || 'viewer',
  };
}
