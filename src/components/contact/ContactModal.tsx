'use client';

import { useTranslations } from 'next-intl';
import { Modal } from '@/components/ui';
import { ContactForm } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations('contact');

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('modalTitle')}>
      <div className="max-h-[70vh] overflow-y-auto px-1">
        <p className="text-sm text-gray-500 mb-6">{t('modalDesc')}</p>
        <ContactForm onSuccess={() => setTimeout(onClose, 2000)} compact />
      </div>
    </Modal>
  );
}
