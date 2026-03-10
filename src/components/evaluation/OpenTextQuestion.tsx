'use client';

import { TextArea } from '@/components/ui';

export interface OpenTextQuestionProps {
  question: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
}

export function OpenTextQuestion({
  question,
  placeholder = 'Escribe tu respuesta aquí...',
  value = '',
  onChange,
  minLength,
  maxLength = 2000,
  disabled = false,
}: OpenTextQuestionProps) {
  const charCount = value.length;
  const isUnderMinimum = minLength ? charCount < minLength : false;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">{question}</h3>

      <TextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        showCharCount
        disabled={disabled}
        className="min-h-[150px]"
        helperText={
          minLength && isUnderMinimum
            ? `Mínimo ${minLength} caracteres (${charCount}/${minLength})`
            : undefined
        }
        error={
          isUnderMinimum && charCount > 0 && minLength
            ? `Necesitas al menos ${minLength - charCount} caracteres más`
            : undefined
        }
      />
    </div>
  );
}
