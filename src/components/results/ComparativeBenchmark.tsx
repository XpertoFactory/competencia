'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface BenchmarkDimension {
  key: string;
  label: string;
  candidateScore: number;
  averageScore: number;
}

export interface ComparativeBenchmarkProps {
  dimensions: BenchmarkDimension[];
  locale: 'es' | 'en';
  totalSamples: number;
}

const i18n = {
  es: {
    title: 'Tu Comparativa',
    subtitle: 'Cómo te comparas con otros candidatos del mismo perfil',
    yourScore: 'Tu puntuación',
    average: 'Promedio',
    aboveAverage: 'Por encima del promedio',
    belowAverage: 'Por debajo del promedio',
    atAverage: 'En el promedio',
    basedOn: 'Basado en',
    evaluations: 'evaluaciones',
  },
  en: {
    title: 'How You Compare',
    subtitle: 'How you compare with other candidates in the same profile',
    yourScore: 'Your score',
    average: 'Average',
    aboveAverage: 'Above average',
    belowAverage: 'Below average',
    atAverage: 'At average',
    basedOn: 'Based on',
    evaluations: 'evaluations',
  },
};

export function ComparativeBenchmark({ dimensions, locale, totalSamples }: ComparativeBenchmarkProps) {
  const t = i18n[locale];

  if (totalSamples < 2) return null;

  const barColors: Record<string, string> = {
    professional: 'bg-blue-500',
    softSkills: 'bg-green-500',
    readiness: 'bg-amber-500',
  };

  return (
    <Card variant="bordered" className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-fuchsia-50 border-b border-purple-100">
        <div>
          <CardTitle className="text-gray-800">{t.title}</CardTitle>
          <p className="text-sm text-gray-500 mt-1">{t.subtitle}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-4 space-y-6">
        {dimensions.map((dim) => {
          const diff = dim.candidateScore - dim.averageScore;
          const comparison =
            diff > 2 ? t.aboveAverage : diff < -2 ? t.belowAverage : t.atAverage;
          const comparisonColor =
            diff > 2
              ? 'text-green-600'
              : diff < -2
                ? 'text-red-600'
                : 'text-gray-600';

          return (
            <div key={dim.key}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900 text-sm">{dim.label}</span>
                <span className={cn('text-xs font-medium', comparisonColor)}>
                  {comparison}
                </span>
              </div>

              {/* Bar container */}
              <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                {/* Candidate bar */}
                <div
                  className={cn(
                    'absolute top-0 left-0 h-full rounded-lg transition-all duration-500',
                    barColors[dim.key] || 'bg-indigo-500'
                  )}
                  style={{ width: `${Math.min(dim.candidateScore, 100)}%`, opacity: 0.85 }}
                />

                {/* Average marker line */}
                <div
                  className="absolute top-0 h-full w-0.5 bg-gray-800 z-10"
                  style={{ left: `${Math.min(dim.averageScore, 100)}%` }}
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[10px] text-gray-600 bg-white px-1 rounded shadow-sm border border-gray-200">
                      {t.average}: {Math.round(dim.averageScore)}
                    </span>
                  </div>
                </div>

                {/* Score text inside bar */}
                <div className="absolute inset-0 flex items-center px-3">
                  <span className="text-xs font-bold text-white drop-shadow-sm">
                    {Math.round(dim.candidateScore)}
                  </span>
                </div>
              </div>

              {/* Score summary text */}
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs text-gray-500">
                  {t.yourScore}: <span className="font-semibold text-gray-700">{Math.round(dim.candidateScore)}</span>
                </span>
                <span className="text-xs text-gray-300">|</span>
                <span className="text-xs text-gray-500">
                  {t.average}: <span className="font-semibold text-gray-700">{Math.round(dim.averageScore)}</span>
                </span>
                {diff !== 0 && (
                  <>
                    <span className="text-xs text-gray-300">|</span>
                    <span className={cn('text-xs font-medium', comparisonColor)}>
                      {diff > 0 ? '+' : ''}{Math.round(diff)}
                    </span>
                  </>
                )}
              </div>
            </div>
          );
        })}

        <p className="text-xs text-gray-400 text-center pt-2 border-t border-gray-100">
          {t.basedOn} {totalSamples} {t.evaluations}
        </p>
      </CardContent>
    </Card>
  );
}
