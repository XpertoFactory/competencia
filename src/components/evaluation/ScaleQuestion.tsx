'use client';

import { cn } from '@/lib/utils';

export interface ScaleQuestionProps {
  question: string;
  min?: number;
  max?: number;
  minLabel?: string;
  maxLabel?: string;
  value?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export function ScaleQuestion({
  question,
  min = 1,
  max = 5,
  minLabel,
  maxLabel,
  value,
  onChange,
  disabled = false,
}: ScaleQuestionProps) {
  const scalePoints = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">{question}</h3>

      <div className="space-y-4">
        {/* Scale buttons */}
        <div className="flex justify-between gap-2">
          {scalePoints.map((point) => {
            const isSelected = value === point;
            return (
              <button
                key={point}
                type="button"
                onClick={() => onChange(point)}
                disabled={disabled}
                className={cn(
                  'flex-1 py-3 px-2 rounded-lg border-2 font-medium transition-all',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                  isSelected
                    ? 'border-primary-500 bg-primary-500 text-white'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50',
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {point}
              </button>
            );
          })}
        </div>

        {/* Labels */}
        {(minLabel || maxLabel) && (
          <div className="flex justify-between text-sm text-gray-500">
            <span>{minLabel}</span>
            <span>{maxLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export interface LikertScaleProps {
  question: string;
  value?: number;
  onChange: (value: number) => void;
  labels?: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  disabled?: boolean;
}

const defaultLikertLabels = {
  1: 'Totalmente en desacuerdo',
  2: 'En desacuerdo',
  3: 'Neutral',
  4: 'De acuerdo',
  5: 'Totalmente de acuerdo',
};

export function LikertScale({
  question,
  value,
  onChange,
  labels = defaultLikertLabels,
  disabled = false,
}: LikertScaleProps) {
  const points = [1, 2, 3, 4, 5] as const;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">{question}</h3>

      <div className="space-y-2">
        {points.map((point) => {
          const isSelected = value === point;
          return (
            <button
              key={point}
              type="button"
              onClick={() => onChange(point)}
              disabled={disabled}
              className={cn(
                'w-full flex items-center gap-4 p-3 rounded-lg border-2 text-left transition-all',
                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                isSelected
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              <div
                className={cn(
                  'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-medium',
                  isSelected
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                )}
              >
                {point}
              </div>
              <span
                className={cn(
                  'text-gray-700',
                  isSelected && 'text-primary-900 font-medium'
                )}
              >
                {labels[point]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
