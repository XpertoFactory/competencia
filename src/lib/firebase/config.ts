import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator, Firestore } from 'firebase/firestore';
import { getAuth, connectAuthEmulator, Auth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';

// ─── Local Firebase (xperto-candidates-hub) — data + storage ─────────────────
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'demo-api-key',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'localhost',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'demo-competencia',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'demo-app-id',
};

// ─── xAId Firebase (xperto-aid) — centralized authentication ─────────────────
const xaidConfig = {
  apiKey: 'AIzaSyAh1J2lKZzXGXXWALhkEDr47w8Rdjcgptk',
  authDomain: 'xperto-aid.firebaseapp.com',
  projectId: 'xperto-aid',
  storageBucket: 'xperto-aid.firebasestorage.app',
  messagingSenderId: '882768498219',
  appId: '1:882768498219:web:5b3c37ff842f29a1c5e3f3',
};

const useEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true';

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;
let storage: FirebaseStorage;
let xaidFirebaseApp: FirebaseApp;
let xaidFirebaseAuth: Auth;
let emulatorsConnected = false;

function initializeFirebase() {
  // Local project
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  db = getFirestore(app);
  auth = getAuth(app);
  storage = getStorage(app);

  // xAId project
  const existingXaid = getApps().find(a => a.name === 'xaid');
  if (existingXaid) {
    xaidFirebaseApp = existingXaid;
  } else {
    xaidFirebaseApp = initializeApp(xaidConfig, 'xaid');
  }
  xaidFirebaseAuth = getAuth(xaidFirebaseApp);

  // Connect to emulators if configured (only once)
  if (useEmulator && !emulatorsConnected && typeof window !== 'undefined') {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099');
    emulatorsConnected = true;
    console.log('Connected to Firebase Emulators');
  }

  return { app, db, auth, storage, xaidFirebaseApp, xaidFirebaseAuth };
}

// Initialize on first import
const result = initializeFirebase();
const firebaseApp = result.app;
const firestore = result.db;
const firebaseAuth = result.auth;
const firebaseStorage = result.storage;
const xaidApp = result.xaidFirebaseApp;
const xaidAuth = result.xaidFirebaseAuth;

export { firebaseApp, firestore, firebaseAuth, firebaseStorage, xaidApp, xaidAuth };
export default firebaseApp;
