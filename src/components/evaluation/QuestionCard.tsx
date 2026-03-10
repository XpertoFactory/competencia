'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  category: string;
  categoryColor?: string;
  children: ReactNode;
  className?: string;
}

export function QuestionCard({
  questionNumber,
  totalQuestions,
  category,
  categoryColor = 'primary',
  children,
  className,
}: QuestionCardProps) {
  const colorVariants: Record<string, 'primary' | 'secondary' | 'success'> = {
    professional: 'primary',
    'soft-skills': 'secondary',
    readiness: 'success',
  };

  const badgeVariant = colorVariants[categoryColor] || 'primary';

  return (
    <Card variant="bordered" className={cn('w-full max-w-3xl mx-auto', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500">
            {questionNumber} / {totalQuestions}
          </span>
          <Badge variant={badgeVariant}>{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-2">{children}</CardContent>
    </Card>
  );
}
