'use client';

import { Card, CardContent, TextArea } from '@/components/ui';
import { BookOpen } from 'lucide-react';

export interface ScenarioQuestionProps {
  scenario: string;
  question: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
}

export function ScenarioQuestion({
  scenario,
  question,
  placeholder = 'Escribe tu análisis y respuesta aquí...',
  value = '',
  onChange,
  minLength = 100,
  maxLength = 3000,
  disabled = false,
}: ScenarioQuestionProps) {
  const charCount = value.length;
  const isUnderMinimum = charCount < minLength;

  return (
    <div className="space-y-6">
      {/* Scenario Card */}
      <Card variant="bordered" className="bg-blue-50 border-blue-200">
        <CardContent className="py-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-900 mb-2">
                Caso de Estudio
              </h4>
              <p className="text-blue-800 whitespace-pre-wrap">{scenario}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Question and Response */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>

        <TextArea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          showCharCount
          disabled={disabled}
          className="min-h-[200px]"
          helperText={
            isUnderMinimum
              ? `Mínimo ${minLength} caracteres para una respuesta completa`
              : undefined
          }
          error={
            isUnderMinimum && charCount > 0
              ? `Necesitas al menos ${minLength - charCount} caracteres más`
              : undefined
          }
        />
      </div>
    </div>
  );
}
