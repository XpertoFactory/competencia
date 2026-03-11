'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@/components/ui';
import {
  getCandidateByUserAndOrg,
  updateCandidate,
  getJobProfiles,
} from '@/lib/firebase/firestore';
import { uploadCandidateFile, deleteCandidateFile } from '@/lib/firebase/storage';
import { firebaseAuth } from '@/lib/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import type { Candidate, CandidateFile, JobProfile } from '@/types';
import {
  ArrowLeft,
  Loader2,
  Save,
  Upload,
  Download,
  Trash2,
  FileText,
  Briefcase,
  User,
  LogIn,
} from 'lucide-react';

export default function CandidateOrgPage() {
  const t = useTranslations('candidates');
  const locale = useLocale();
  const params = useParams();
  const orgId = params.orgId as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [jobProfiles, setJobProfiles] = useState<JobProfile[]>([]);

  // Editable fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }
      setAuthenticated(true);
      try {
        const [cand, jp] = await Promise.all([
          getCandidateByUserAndOrg(user.uid, orgId),
          getJobProfiles(false),
        ]);
        if (cand) {
          setCandidate(cand);
          setName(cand.name);
          setEmail(cand.email);
          setPhone(cand.phone || '');
          setLinkedinUrl(cand.linkedinUrl || '');
          setLocation(cand.location || '');
        }
        setJobProfiles(jp);
      } catch (error) {
        console.error('Error loading candidate data:', error);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [orgId]);

  async function handleSave() {
    if (!candidate) return;
    setSaving(true);
    try {
      await updateCandidate(candidate.id, { name, email, phone, linkedinUrl, location });
      setCandidate({ ...candidate, name, email, phone, linkedinUrl, location });
    } catch (error) {
      console.error('Error saving:', error);
    } finally {
      setSaving(false);
    }
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>, fileType: CandidateFile['type']) {
    if (!candidate || !e.target.files?.[0]) return;
    const file = e.target.files[0];
    if (file.size > 10 * 1024 * 1024) {
      alert(t('files.maxSize'));
      return;
    }
    setSaving(true);
    try {
      const userId = firebaseAuth.currentUser?.uid || '';
      const fileData = await uploadCandidateFile(candidate.orgId, candidate.id, file, fileType, userId);
      const updatedFiles = [...candidate.files, fileData];
      await updateCandidate(candidate.id, { files: updatedFiles });
      setCandidate({ ...candidate, files: updatedFiles });
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setSaving(false);
      e.target.value = '';
    }
  }

  async function handleFileDelete(fileId: string) {
    if (!candidate) return;
    const file = candidate.files.find(f => f.id === fileId);
    if (!file || !confirm(t('files.deleteConfirm'))) return;
    try {
      await deleteCandidateFile(file.storagePath);
      const updatedFiles = candidate.files.filter(f => f.id !== fileId);
      await updateCandidate(candidate.id, { files: updatedFiles });
      setCandidate({ ...candidate, files: updatedFiles });
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  }

  function getJobProfileName(jpId: string): string {
    const jp = jobProfiles.find(j => j.id === jpId);
    return jp ? (jp.title[locale as 'es' | 'en'] || jp.title.es) : jpId;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Card variant="bordered">
            <CardContent className="text-center py-12 px-8">
              <LogIn className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <Link href={`/${locale}/auth/login?returnUrl=/${locale}/candidate/${orgId}`}>
                <Button variant="primary">
                  <LogIn className="w-4 h-4 mr-2" />
                  {locale === 'es' ? 'Iniciar Sesión' : 'Sign In'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  if (!candidate) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">{t('portal.noApplications')}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <Link
            href={`/${locale}/candidate`}
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {t('portal.title')}
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <User className="w-6 h-6 text-primary-600" />
          {t('portal.myInfo')}
        </h1>

        {/* Status */}
        <Card variant="bordered" className="mb-6">
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{t('portal.status')}</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                {t(`status.${candidate.processStatus}`)}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Personal Info */}
        <Card variant="bordered" className="mb-6">
          <CardHeader>
            <CardTitle>{t('portal.editProfile')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label={t('form.name')} value={name} onChange={e => setName(e.target.value)} required />
            <Input label={t('form.email')} type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label={t('form.phone')} value={phone} onChange={e => setPhone(e.target.value)} />
              <Input label={t('form.location')} value={location} onChange={e => setLocation(e.target.value)} />
            </div>
            <Input label={t('form.linkedin')} value={linkedinUrl} onChange={e => setLinkedinUrl(e.target.value)} />
            <div className="flex justify-end pt-2">
              <Button onClick={handleSave} isLoading={saving}>
                <Save className="w-4 h-4 mr-2" />
                {t('form.save')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Files */}
        <Card variant="bordered" className="mb-6">
          <CardHeader>
            <CardTitle>{t('portal.myFiles')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {(['cv', 'picture'] as const).map(fType => (
                <label key={fType} className="cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    accept={fType === 'picture' ? 'image/*' : undefined}
                    onChange={e => handleFileUpload(e, fType)}
                  />
                  <span className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                    <Upload className="w-4 h-4" />
                    {t(`files.${fType}`)}
                  </span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-400">{t('files.maxSize')}</p>

            {candidate.files.length === 0 ? (
              <p className="text-gray-500 text-center py-4">{t('files.noFiles')}</p>
            ) : (
              <div className="divide-y">
                {candidate.files.map(file => (
                  <div key={file.id} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="text-xs text-gray-500">{t(`files.${file.type}`)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={file.downloadUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-primary-600">
                        <Download className="w-4 h-4" />
                      </a>
                      <button onClick={() => handleFileDelete(file.id)} className="p-2 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Linked Positions (read-only) */}
        {candidate.jobProfileIds.length > 0 && (
          <Card variant="bordered" className="mb-6">
            <CardHeader>
              <CardTitle>{t('portal.positions')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {candidate.jobProfileIds.map(jpId => (
                  <div key={jpId} className="flex items-center gap-3 py-2">
                    <Briefcase className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-900">{getJobProfileName(jpId)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Evaluation Results Links */}
        {candidate.evaluationIds.length > 0 && (
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>{t('portal.viewResults')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {candidate.evaluationIds.map(evalId => (
                  <Link key={evalId} href={`/${locale}/results/${evalId}`}>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      {t('evaluations.viewResults')} — {evalId.slice(0, 8)}...
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
}
