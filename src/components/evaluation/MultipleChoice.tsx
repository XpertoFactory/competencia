'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface MultipleChoiceOption {
  id: string;
  text: string;
  value: number;
}

export interface MultipleChoiceProps {
  question: string;
  options: MultipleChoiceOption[];
  selectedId?: string;
  onChange: (optionId: string) => void;
  disabled?: boolean;
}

export function MultipleChoice({
  question,
  options,
  selectedId,
  onChange,
  disabled = false,
}: MultipleChoiceProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">{question}</h3>
      <div className="space-y-2">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              disabled={disabled}
              className={cn(
                'w-full flex items-center gap-3 p-4 rounded-lg border-2 text-left transition-all',
                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                isSelected
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              <div
                className={cn(
                  'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center',
                  isSelected
                    ? 'border-primary-500 bg-primary-500'
                    : 'border-gray-300'
                )}
              >
                {isSelected && <Check className="w-4 h-4 text-white" />}
              </div>
              <span
                className={cn(
                  'text-gray-700',
                  isSelected && 'text-primary-900 font-medium'
                )}
              >
                {option.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
