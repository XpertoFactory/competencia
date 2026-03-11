'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { AuthGuard } from '@/components/auth';
import { Card, CardContent, Badge, Button, Input, TextArea, ConfirmModal } from '@/components/ui';
import { getContactSubmissions, updateContactSubmission, deleteContactSubmission } from '@/lib/firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import type { ContactSubmission, ContactStatus } from '@/types';
import {
  Mail,
  Search,
  Eye,
  Archive,
  Trash2,
  ArrowLeft,
  MessageSquare,
  Building2,
  Briefcase,
  Clock,
  CheckCircle,
  MailOpen,
  Reply,
  Filter,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const STATUS_COLORS: Record<ContactStatus, string> = {
  new: 'bg-blue-100 text-blue-700',
  read: 'bg-yellow-100 text-yellow-700',
  replied: 'bg-green-100 text-green-700',
  archived: 'bg-gray-100 text-gray-500',
};

const STATUS_ICONS: Record<ContactStatus, typeof Mail> = {
  new: Mail,
  read: MailOpen,
  replied: Reply,
  archived: Archive,
};

export default function AdminContactPage() {
  const t = useTranslations('admin.contact');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selected, setSelected] = useState<ContactSubmission | null>(null);
  const [notes, setNotes] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const data = await getContactSubmissions();
      setSubmissions(data);
    } catch (err) {
      console.error('Failed to load submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const filtered = submissions.filter(s => {
    const matchesSearch = !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.message.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelect = async (submission: ContactSubmission) => {
    setSelected(submission);
    setNotes(submission.notes || '');
    if (submission.status === 'new') {
      await updateContactSubmission(submission.id, {
        status: 'read',
        readAt: Timestamp.now(),
      });
      setSubmissions(prev => prev.map(s =>
        s.id === submission.id ? { ...s, status: 'read' as ContactStatus, readAt: Timestamp.now() } : s
      ));
    }
  };

  const handleStatusChange = async (id: string, status: ContactStatus) => {
    await updateContactSubmission(id, { status });
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status } : s));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null);
  };

  const handleSaveNotes = async () => {
    if (!selected) return;
    await updateContactSubmission(selected.id, { notes });
    setSubmissions(prev => prev.map(s => s.id === selected.id ? { ...s, notes } : s));
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await deleteContactSubmission(deleteId);
    setSubmissions(prev => prev.filter(s => s.id !== deleteId));
    if (selected?.id === deleteId) setSelected(null);
    setDeleteId(null);
  };

  const formatDate = (ts: Timestamp) => {
    try {
      return ts.toDate().toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
      });
    } catch { return '-'; }
  };

  const newCount = submissions.filter(s => s.status === 'new').length;

  if (selected) {
    return (
      <AuthGuard>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => setSelected(null)} className="text-gray-500">
              <ArrowLeft className="w-4 h-4 mr-1" />
              {t('back')}
            </Button>
          </div>

          <Card variant="bordered" className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selected.name}</h2>
                  <a href={`mailto:${selected.email}`} className="text-sm text-primary-600 hover:underline">{selected.email}</a>
                </div>
                <Badge className={STATUS_COLORS[selected.status]}>{t(`status.${selected.status}`)}</Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-gray-500 flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> {t('interest')}</span>
                  <span className="font-medium text-gray-900">{t(`interests.${selected.interest}`)}</span>
                </div>
                {selected.company && (
                  <div>
                    <span className="text-gray-500 flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> {t('company')}</span>
                    <span className="font-medium text-gray-900">{selected.company}</span>
                  </div>
                )}
                {selected.role && (
                  <div>
                    <span className="text-gray-500 flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {t('role')}</span>
                    <span className="font-medium text-gray-900">{selected.role}</span>
                  </div>
                )}
                <div>
                  <span className="text-gray-500 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {t('date')}</span>
                  <span className="font-medium text-gray-900">{formatDate(selected.createdAt)}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">{t('message')}</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{selected.message}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">{t('internalNotes')}</h3>
                <TextArea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t('notesPlaceholder')}
                  rows={3}
                />
                <Button size="sm" onClick={handleSaveNotes} className="mt-2">
                  {t('saveNotes')}
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 border-t pt-4">
                {selected.status !== 'replied' && (
                  <Button size="sm" onClick={() => handleStatusChange(selected.id, 'replied')} className="bg-green-600 hover:bg-green-700 text-white">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" />
                    {t('markReplied')}
                  </Button>
                )}
                {selected.status !== 'archived' && (
                  <Button size="sm" variant="outline" onClick={() => handleStatusChange(selected.id, 'archived')}>
                    <Archive className="w-3.5 h-3.5 mr-1" />
                    {t('archive')}
                  </Button>
                )}
                <Button size="sm" variant="ghost" onClick={() => setDeleteId(selected.id)} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  <Trash2 className="w-3.5 h-3.5 mr-1" />
                  {t('delete')}
                </Button>
                <a href={`mailto:${selected.email}?subject=Re: skaills Inquiry`} className="ml-auto">
                  <Button size="sm">
                    <Reply className="w-3.5 h-3.5 mr-1" />
                    {t('reply')}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <ConfirmModal
            isOpen={deleteId !== null}
            title={t('deleteTitle')}
            message={t('deleteMessage')}
            onClose={() => setDeleteId(null)}
            onConfirm={handleDelete}
          />
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary-600" />
              {t('title')}
            </h1>
            <p className="text-sm text-gray-500 mt-1">{t('subtitle')}</p>
          </div>
          {newCount > 0 && (
            <Badge className="bg-blue-100 text-blue-700 text-sm px-3 py-1">
              {newCount} {t('newBadge')}
            </Badge>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'new', 'read', 'replied', 'archived'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  statusFilter === status
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {t(`status.${status}`)}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        {loading ? (
          <div className="text-center py-10 text-gray-400">{t('loading')}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-400">{t('noSubmissions')}</div>
        ) : (
          <div className="space-y-2">
            {filtered.map((submission) => {
              const StatusIcon = STATUS_ICONS[submission.status];
              return (
                <Card
                  key={submission.id}
                  variant="bordered"
                  className={cn(
                    'bg-white hover:shadow-md transition-all cursor-pointer',
                    submission.status === 'new' && 'border-blue-200 bg-blue-50/30'
                  )}
                  onClick={() => handleSelect(submission)}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <StatusIcon className={cn('w-5 h-5 shrink-0', submission.status === 'new' ? 'text-blue-500' : 'text-gray-400')} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={cn('font-medium text-sm', submission.status === 'new' ? 'text-gray-900 font-semibold' : 'text-gray-700')}>
                          {submission.name}
                        </span>
                        <span className="text-xs text-gray-400">&lt;{submission.email}&gt;</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={cn('text-xs', STATUS_COLORS[submission.status])}>
                          {t(`interests.${submission.interest}`)}
                        </Badge>
                        <p className="text-xs text-gray-500 truncate">{submission.message}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">{formatDate(submission.createdAt)}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <ConfirmModal
          isOpen={deleteId !== null}
          title={t('deleteTitle')}
          message={t('deleteMessage')}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />
      </div>
    </AuthGuard>
  );
}
