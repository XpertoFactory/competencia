'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, Progress } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { Question, Response as EvalResponse } from '@/types';

interface CategoryGroup {
  categoryId: string;
  categoryName: string;
  questions: Array<{
    question: Question;
    response?: EvalResponse;
  }>;
}

export interface DetailedResponsesProps {
  categories: CategoryGroup[];
  locale: 'es' | 'en';
}

const i18n = {
  es: {
    title: 'Respuestas Detalladas',
    subtitle: 'Desglose por categoría y pregunta',
    score: 'Puntuación',
    noAnswer: 'Sin respuesta',
    answer: 'Respuesta',
    of: 'de',
  },
  en: {
    title: 'Detailed Responses',
    subtitle: 'Breakdown by category and question',
    score: 'Score',
    noAnswer: 'No answer',
    answer: 'Answer',
    of: 'of',
  },
};

export function DetailedResponses({ categories, locale }: DetailedResponsesProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const t = i18n[locale];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  if (categories.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h2>
      <p className="text-gray-600 mb-4">{t.subtitle}</p>
      <div className="space-y-3">
        {categories.map((category) => {
          const isExpanded = expandedCategories.has(category.categoryId);
          const totalScore = category.questions.reduce(
            (sum, q) => sum + (q.response?.score ?? 0),
            0
          );
          const maxScore = category.questions.reduce(
            (sum, q) => sum + q.question.maxScore,
            0
          );
          const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

          return (
            <Card key={category.categoryId} variant="bordered" className="overflow-hidden">
              <button
                onClick={() => toggleCategory(category.categoryId)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="font-semibold text-gray-900 truncate">
                    {category.categoryName}
                  </span>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    ({category.questions.length} {locale === 'en' ? 'questions' : 'preguntas'})
                  </span>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <span
                    className={cn(
                      'text-sm font-medium px-2 py-0.5 rounded',
                      percentage >= 80 && 'bg-green-100 text-green-700',
                      percentage >= 60 && percentage < 80 && 'bg-blue-100 text-blue-700',
                      percentage >= 40 && percentage < 60 && 'bg-yellow-100 text-yellow-700',
                      percentage < 40 && 'bg-red-100 text-red-700'
                    )}
                  >
                    {percentage}%
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <CardContent className="border-t border-gray-100 pt-4 pb-4 space-y-4">
                  {category.questions.map((item, idx) => {
                    const questionText =
                      locale === 'en'
                        ? item.question.content.en
                        : item.question.content.es;
                    const score = item.response?.score ?? 0;
                    const maxQ = item.question.maxScore;
                    const scorePercent = maxQ > 0 ? Math.round((score / maxQ) * 100) : 0;

                    let answerDisplay = t.noAnswer;
                    if (item.response) {
                      const val = item.response.value;
                      if (typeof val === 'number') {
                        answerDisplay = `${val}`;
                      } else if (typeof val === 'string') {
                        // For multiple-choice, try to find the option text
                        if (item.question.type === 'multiple-choice' && item.question.options) {
                          const opt = item.question.options.find((o) => o.id === val);
                          if (opt) {
                            answerDisplay = locale === 'en' ? opt.text.en : opt.text.es;
                          } else {
                            answerDisplay = val;
                          }
                        } else {
                          answerDisplay = val;
                        }
                      } else if (Array.isArray(val)) {
                        answerDisplay = val.join(', ');
                      }
                    }

                    const scoreColor =
                      scorePercent >= 80
                        ? 'success'
                        : scorePercent >= 60
                          ? 'primary'
                          : scorePercent >= 40
                            ? 'warning'
                            : 'danger';

                    return (
                      <div
                        key={item.question.id}
                        className={cn(
                          'p-3 rounded-lg',
                          idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        )}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <p className="text-sm text-gray-800 font-medium flex-1">
                            <span className="text-gray-400 mr-1">{idx + 1}.</span>
                            {questionText}
                          </p>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {score}/{maxQ}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <Progress
                              value={score}
                              max={maxQ}
                              size="sm"
                              color={scoreColor as 'primary' | 'success' | 'warning' | 'danger'}
                            />
                          </div>
                        </div>
                        {item.response && (
                          <p className="text-xs text-gray-500 mt-1.5">
                            <span className="font-medium">{t.answer}:</span>{' '}
                            <span className="text-gray-700">
                              {answerDisplay.length > 200
                                ? answerDisplay.substring(0, 200) + '...'
                                : answerDisplay}
                            </span>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
