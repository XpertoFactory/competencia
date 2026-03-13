/**
 * Sets xaidOrgId on skaills organization documents.
 *
 * Usage:
 *   GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/sa-key.json node scripts/set-xaid-org-ids.js
 */
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({
  credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
});

const db = getFirestore();

// Mapping: skaills org name → xAId org ID
const xaidOrgMap = {
  'LFSD': '2yJrZh5vkuWFXTj5D74t',
  'Escuela Nueva': 'XRdUgtk4o0Tt5OIOKzTZ',
  'Conexus': 'n70YExic4Z55kBC85WQo',
  'Xperto Group': 'bRKO6dEcRMNVhdKfYp83',
  'Xperto Academy': 'oCRnMMXdmlhfbgRrMWh3',
  'Altice': '5fy1eBgAsFgH3AN25dN3',
  'Quantum': 'BPTtQHdxjpg2ofcTCEFv',
  'COOPMEGACONS': 'XfZxw8Os5xf8lwZbNXkM',
  'American School of Santo Domingo': 'CsT1XqpVKklAKGqkGrVV',
  'Xolusat': 'KOpqhTRxd2TDbLBEiBgM',
};

async function main() {
  const orgsSnapshot = await db.collection('organizations').get();

  console.log(`Found ${orgsSnapshot.size} organizations in skaills Firestore:\n`);

  let matched = 0;
  let unmatched = 0;

  for (const doc of orgsSnapshot.docs) {
    const data = doc.data();
    const name = data.name;
    const xaidOrgId = xaidOrgMap[name];

    if (xaidOrgId) {
      await db.doc(`organizations/${doc.id}`).update({ xaidOrgId });
      console.log(`  ✓ ${name} (${doc.id}) → xaidOrgId: ${xaidOrgId}`);
      matched++;
    } else {
      console.log(`  ✗ ${name} (${doc.id}) — no xAId match found`);
      unmatched++;
    }
  }

  console.log(`\nDone: ${matched} matched, ${unmatched} unmatched.`);
}

main().catch(console.error);
