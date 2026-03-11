import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { firebaseStorage } from './config';
import { Timestamp } from 'firebase/firestore';
import { generateId } from './firestore';
import type { CandidateFile } from '@/types';

export async function uploadCandidateFile(
  orgId: string,
  candidateId: string,
  file: File,
  fileType: CandidateFile['type'],
  uploadedBy: string
): Promise<CandidateFile> {
  const fileId = generateId();
  const ext = file.name.split('.').pop() || '';
  const storagePath = `organizations/${orgId}/candidates/${candidateId}/${fileType}/${fileId}.${ext}`;
  const storageRef = ref(firebaseStorage, storagePath);

  await uploadBytes(storageRef, file);
  const downloadUrl = await getDownloadURL(storageRef);

  return {
    id: fileId,
    name: file.name,
    type: fileType,
    storagePath,
    downloadUrl,
    uploadedAt: Timestamp.now(),
    uploadedBy,
    sizeBytes: file.size,
  };
}

export async function deleteCandidateFile(storagePath: string): Promise<void> {
  const storageRef = ref(firebaseStorage, storagePath);
  await deleteObject(storageRef);
}
