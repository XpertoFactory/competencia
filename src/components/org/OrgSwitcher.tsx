'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Building2, ChevronDown, User, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useOrg } from './OrgProvider';

export function OrgSwitcher() {
  const t = useTranslations('organizations');
  const { currentOrg, memberships, isIndividualMode, switchOrg } = useOrg();
  const [isOpen, setIsOpen] = useState(false);

  if (memberships.length === 0) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
      >
        {isIndividualMode ? (
          <User className="w-4 h-4 text-gray-500 shrink-0" />
        ) : (
          <Building2 className="w-4 h-4 text-primary-600 shrink-0" />
        )}
        <span className="flex-1 text-left truncate text-gray-700">
          {isIndividualMode ? t('individualMode') : currentOrg?.name}
        </span>
        <ChevronDown className={cn('w-4 h-4 text-gray-400 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
            {/* Individual mode */}
            <button
              onClick={() => {
                switchOrg(null);
                setIsOpen(false);
              }}
              className={cn(
                'flex items-center gap-2 w-full px-3 py-2 text-sm transition-colors',
                isIndividualMode ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <User className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left">{t('individualMode')}</span>
              {isIndividualMode && <Check className="w-4 h-4 text-primary-600" />}
            </button>

            {memberships.length > 0 && (
              <div className="border-t border-gray-100 my-1" />
            )}

            {/* Organization list */}
            {memberships.map((membership) => (
              <button
                key={membership.orgId}
                onClick={() => {
                  switchOrg(membership.orgId);
                  setIsOpen(false);
                }}
                className={cn(
                  'flex items-center gap-2 w-full px-3 py-2 text-sm transition-colors',
                  currentOrg?.id === membership.orgId ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                <Building2 className="w-4 h-4 shrink-0" />
                <div className="flex-1 text-left">
                  <span className="block truncate">{membership.orgName}</span>
                  <span className="text-xs text-gray-500">{t(membership.role)}</span>
                </div>
                {currentOrg?.id === membership.orgId && <Check className="w-4 h-4 text-primary-600" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
