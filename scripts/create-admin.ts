import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp({ projectId: 'xperto-candidates-hub' });
const db = getFirestore();

async function main() {
  await db.collection('admins').doc('0v6V72hQohe8IvtkLlsfgK6kq8q1').set({
    uid: '0v6V72hQohe8IvtkLlsfgK6kq8q1',
    email: 'admin@xperto.com',
    role: 'admin',
    createdAt: new Date(),
  });
  console.log('Admin document created for UID: 0v6V72hQohe8IvtkLlsfgK6kq8q1');
}

main().catch(console.error);
