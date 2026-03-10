'use client';

import { Progress } from '@/components/ui';
import { cn } from '@/lib/utils';
import { CheckCircle, Circle } from 'lucide-react';

export interface CategoryProgress {
  id: string;
  name: string;
  totalQuestions: number;
  answeredQuestions: number;
  isActive: boolean;
}

export interface EvaluationProgressProps {
  categories: CategoryProgress[];
  currentQuestion: number;
  totalQuestions: number;
  className?: string;
}

export function EvaluationProgress({
  categories,
  currentQuestion,
  totalQuestions,
  className,
}: EvaluationProgressProps) {
  const overallProgress = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <div className={cn('space-y-4', className)}>
      {/* Overall progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progreso general</span>
          <span className="font-medium text-gray-900">{overallProgress}%</span>
        </div>
        <Progress value={overallProgress} size="md" color="primary" />
      </div>

      {/* Category breakdown */}
      <div className="space-y-2">
        {categories.map((category) => {
          const isComplete =
            category.answeredQuestions >= category.totalQuestions;
          const categoryProgress = Math.round(
            (category.answeredQuestions / category.totalQuestions) * 100
          );

          return (
            <div
              key={category.id}
              className={cn(
                'flex items-center gap-3 p-2 rounded-lg',
                category.isActive && 'bg-primary-50'
              )}
            >
              {isComplete ? (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Circle
                  className={cn(
                    'w-5 h-5 flex-shrink-0',
                    category.isActive ? 'text-primary-500' : 'text-gray-300'
                  )}
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span
                    className={cn(
                      'text-sm truncate',
                      category.isActive
                        ? 'font-medium text-primary-900'
                        : 'text-gray-600'
                    )}
                  >
                    {category.name}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    {category.answeredQuestions}/{category.totalQuestions}
                  </span>
                </div>
                <Progress
                  value={categoryProgress}
                  size="sm"
                  color={isComplete ? 'success' : category.isActive ? 'primary' : 'secondary'}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
