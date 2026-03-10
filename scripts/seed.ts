/**
 * Database Seeding Script
 *
 * Seeds Firestore with initial data: profiles, competency categories,
 * archetype profiles, resources, and evaluation questions.
 *
 * Usage:
 *   npx tsx scripts/seed.ts                    # Seeds real Firestore (needs credentials)
 *   FIRESTORE_EMULATOR_HOST=localhost:8080 npx tsx scripts/seed.ts  # Seeds emulator
 *   npm run seed:emulator                      # Shortcut for emulator seeding
 *
 * Requires:
 *   - GOOGLE_APPLICATION_CREDENTIALS env var pointing to a service account key file
 *   - OR NEXT_PUBLIC_FIREBASE_PROJECT_ID set and authenticated via `firebase login`
 *   - OR FIRESTORE_EMULATOR_HOST set for emulator mode
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, WriteBatch } from 'firebase-admin/firestore';
import { profiles, competencyCategories } from '../src/lib/seed-data/profiles';
import { archetypeProfiles } from '../src/lib/seed-data/archetypes';
import { resources } from '../src/lib/seed-data/resources';
import { questions } from '../src/lib/seed-data/questions';

const isEmulator = !!process.env.FIRESTORE_EMULATOR_HOST;

// Initialize Firebase Admin
function initFirebase() {
  if (getApps().length > 0) return;

  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'demo-competencia';
  const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  if (isEmulator) {
    // Emulator mode - no credentials needed
    initializeApp({ projectId });
    console.log(`Using Firestore Emulator at ${process.env.FIRESTORE_EMULATOR_HOST}`);
  } else if (credPath) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const serviceAccount = require(credPath);
    initializeApp({ credential: cert(serviceAccount) });
  } else if (projectId) {
    // Use default credentials (works with `firebase login` + ADC)
    initializeApp({ projectId });
  } else {
    console.error(
      'Error: Set GOOGLE_APPLICATION_CREDENTIALS, NEXT_PUBLIC_FIREBASE_PROJECT_ID, or FIRESTORE_EMULATOR_HOST'
    );
    process.exit(1);
  }
}

// Firestore has a 500-operation batch limit
const BATCH_LIMIT = 450;

async function seedCollection(
  db: FirebaseFirestore.Firestore,
  collectionName: string,
  items: Array<{ id: string } & Record<string, any>>,
  label: string
) {
  console.log(`\nSeeding ${label}...`);

  let batch: WriteBatch = db.batch();
  let count = 0;
  let batchCount = 0;

  for (const item of items) {
    const docRef = db.collection(collectionName).doc(item.id);
    batch.set(docRef, item, { merge: true });
    count++;
    batchCount++;

    if (batchCount >= BATCH_LIMIT) {
      await batch.commit();
      console.log(`  Committed batch (${count}/${items.length})`);
      batch = db.batch();
      batchCount = 0;
    }
  }

  if (batchCount > 0) {
    await batch.commit();
  }

  console.log(`  Done: ${count} ${label} seeded.`);
}

async function main() {
  initFirebase();
  const db = getFirestore();

  console.log('=== Competencia Database Seeding ===\n');
  console.log(`Project: ${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '(from credentials)'}`);

  // Seed profiles
  await seedCollection(db, 'profiles', profiles, 'profiles');

  // Seed competency categories
  await seedCollection(db, 'competencyCategories', competencyCategories, 'competency categories');

  // Seed archetype profiles
  await seedCollection(db, 'archetypeProfiles', archetypeProfiles, 'archetype profiles');

  // Seed resources
  await seedCollection(db, 'resources', resources, 'resources');

  // Seed questions
  await seedCollection(db, 'questions', questions, 'questions');

  // Seed default settings if they don't exist
  const settingsRef = db.collection('settings').doc('app');
  const settingsSnap = await settingsRef.get();
  if (!settingsSnap.exists) {
    console.log('\nSeeding default settings...');
    await settingsRef.set({
      aiMode: 'rule-based',
      aiProvider: 'claude',
      defaultLocale: 'es',
      evaluationTimeoutMinutes: 120,
      enableAnonymousEvaluations: false,
    });
    console.log('  Done: default settings created.');
  } else {
    console.log('\nSettings already exist, skipping.');
  }

  console.log('\n=== Seeding Complete ===');
}

main().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});
