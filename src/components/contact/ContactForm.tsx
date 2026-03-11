'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button, Input, TextArea, Select } from '@/components/ui';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { createContactSubmission } from '@/lib/firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import type { ContactInterest, ContactSubmission } from '@/types';

const INTEREST_OPTIONS: ContactInterest[] = [
  'white-label',
  'reseller',
  'corporate-license',
  'individual-license',
  'training-program',
  'speaking-engagement',
  'consulting-services',
  'suggest-content',
  'report-errors',
  'suggest-improvements',
  'general',
  'other',
];

const SECTOR_OPTIONS = [
  'insurance', 'education', 'retail-services', 'healthcare', 'transportation',
  'finance-accounting', 'compliance-legal', 'human-resources', 'commercial-business',
  'technology-it', 'banking', 'hospitality-tourism', 'general-management', 'other',
];

interface ContactFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export function ContactForm({ onSuccess, compact = false }: ContactFormProps) {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: '' as string,
    company: '',
    role: '',
    sector: '' as string,
    message: '',
  });

  const interestOptions = INTEREST_OPTIONS.map(key => ({
    value: key,
    label: t(`interests.${key}`),
  }));

  const sectorOptions = SECTOR_OPTIONS.map(key => ({
    value: key,
    label: t(`sectors.${key}`),
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.interest || !form.message) return;

    setLoading(true);
    try {
      const submission: ContactSubmission = {
        id: `contact_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        name: form.name,
        email: form.email,
        interest: form.interest as ContactInterest,
        company: form.company || undefined,
        role: form.role || undefined,
        sector: form.sector || undefined,
        message: form.message,
        locale,
        status: 'new',
        createdAt: Timestamp.now(),
      };
      await createContactSubmission(submission);
      setSubmitted(true);
      onSuccess?.();
    } catch (err) {
      console.error('Failed to submit contact form:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('successTitle')}</h3>
        <p className="text-gray-500 max-w-md mx-auto">{t('successDesc')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('nameLabel')} *</label>
          <Input
            value={form.name}
            onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
            placeholder={t('namePlaceholder')}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('emailLabel')} *</label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
            placeholder={t('emailPlaceholder')}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t('interestLabel')} *</label>
        <Select
          value={form.interest}
          onChange={(e) => setForm(prev => ({ ...prev, interest: e.target.value }))}
          options={[{ value: '', label: t('interestPlaceholder') }, ...interestOptions]}
          required
        />
      </div>

      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('companyLabel')}</label>
          <Input
            value={form.company}
            onChange={(e) => setForm(prev => ({ ...prev, company: e.target.value }))}
            placeholder={t('companyPlaceholder')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('roleLabel')}</label>
          <Input
            value={form.role}
            onChange={(e) => setForm(prev => ({ ...prev, role: e.target.value }))}
            placeholder={t('rolePlaceholder')}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t('sectorLabel')}</label>
        <Select
          value={form.sector}
          onChange={(e) => setForm(prev => ({ ...prev, sector: e.target.value }))}
          options={[{ value: '', label: t('sectorPlaceholder') }, ...sectorOptions]}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t('messageLabel')} *</label>
        <TextArea
          value={form.message}
          onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
          placeholder={t('messagePlaceholder')}
          rows={4}
          required
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={loading || !form.name || !form.email || !form.interest || !form.message}
          className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-bold"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t('sending')}
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              {t('submit')}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
