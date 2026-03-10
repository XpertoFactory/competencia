'use client';

import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { GripVertical, ArrowUp, ArrowDown } from 'lucide-react';

export interface RankingOption {
  id: string;
  text: string;
}

export interface RankingQuestionProps {
  question: string;
  options: RankingOption[];
  value?: string[];
  onChange: (orderedIds: string[]) => void;
  disabled?: boolean;
  mostImportantLabel?: string;
  leastImportantLabel?: string;
}

export function RankingQuestion({
  question,
  options,
  value,
  onChange,
  disabled = false,
  mostImportantLabel = 'Más importante',
  leastImportantLabel = 'Menos importante',
}: RankingQuestionProps) {
  // If no value, use original order
  const orderedIds = value || options.map((o) => o.id);

  // Get ordered options
  const orderedOptions = orderedIds
    .map((id) => options.find((o) => o.id === id))
    .filter((o): o is RankingOption => o !== undefined);

  const moveItem = useCallback(
    (index: number, direction: 'up' | 'down') => {
      const newOrder = [...orderedIds];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex >= newOrder.length) return;

      [newOrder[index], newOrder[targetIndex]] = [newOrder[targetIndex], newOrder[index]];
      onChange(newOrder);
    },
    [orderedIds, onChange]
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">{question}</h3>

      <p className="text-sm text-gray-500">
        Ordena las opciones usando los botones de flecha. La primera opción es la más importante.
      </p>

      <div className="space-y-2">
        {/* Most important label */}
        <div className="flex items-center gap-2 text-xs text-gray-500 pb-1">
          <ArrowUp className="w-3 h-3" />
          <span>{mostImportantLabel}</span>
        </div>

        {orderedOptions.map((option, index) => (
          <div
            key={option.id}
            className={cn(
              'flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 bg-white',
              'transition-all',
              disabled && 'opacity-50'
            )}
          >
            {/* Position indicator */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>

            {/* Drag handle icon (decorative) */}
            <GripVertical className="w-5 h-5 text-gray-400 flex-shrink-0" />

            {/* Option text */}
            <span className="flex-1 text-gray-700">{option.text}</span>

            {/* Move buttons */}
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => moveItem(index, 'up')}
                disabled={disabled || index === 0}
                className={cn(
                  'p-1 rounded hover:bg-gray-100 transition-colors',
                  'disabled:opacity-30 disabled:cursor-not-allowed'
                )}
                aria-label="Move up"
              >
                <ArrowUp className="w-4 h-4 text-gray-600" />
              </button>
              <button
                type="button"
                onClick={() => moveItem(index, 'down')}
                disabled={disabled || index === orderedOptions.length - 1}
                className={cn(
                  'p-1 rounded hover:bg-gray-100 transition-colors',
                  'disabled:opacity-30 disabled:cursor-not-allowed'
                )}
                aria-label="Move down"
              >
                <ArrowDown className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}

        {/* Least important label */}
        <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
          <ArrowDown className="w-3 h-3" />
          <span>{leastImportantLabel}</span>
        </div>
      </div>
    </div>
  );
}
