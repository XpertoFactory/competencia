'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/lib/utils';
import { TrendingUp, Target, CheckCircle, ArrowUpCircle } from 'lucide-react';
import type { LocalizedString } from '@/types';

export interface StrengthsOpportunitiesProps {
  strengths: LocalizedString[];
  opportunities: LocalizedString[];
  locale?: 'es' | 'en';
  strengthsTitle?: string;
  strengthsSubtitle?: string;
  opportunitiesTitle?: string;
  opportunitiesSubtitle?: string;
  className?: string;
}

export function StrengthsOpportunities({
  strengths,
  opportunities,
  locale = 'es',
  strengthsTitle = 'Tus Fortalezas',
  strengthsSubtitle = 'Áreas donde demuestras alto desempeño',
  opportunitiesTitle = 'Oportunidades de Crecimiento',
  opportunitiesSubtitle = 'Áreas con potencial de desarrollo',
  className,
}: StrengthsOpportunitiesProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      {/* Strengths */}
      <Card variant="bordered" className="border-green-200">
        <CardHeader className="bg-green-50 border-b border-green-200">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white border border-green-200">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <CardTitle className="text-green-800">{strengthsTitle}</CardTitle>
              <p className="text-sm text-green-600 mt-0.5">{strengthsSubtitle}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          {strengths.length > 0 ? (
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {locale === 'en' ? strength.en : strength.es}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm italic">
              No se identificaron fortalezas específicas en esta evaluación.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Opportunities */}
      <Card variant="bordered" className="border-amber-200">
        <CardHeader className="bg-amber-50 border-b border-amber-200">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white border border-amber-200">
              <Target className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <CardTitle className="text-amber-800">{opportunitiesTitle}</CardTitle>
              <p className="text-sm text-amber-600 mt-0.5">{opportunitiesSubtitle}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          {opportunities.length > 0 ? (
            <ul className="space-y-3">
              {opportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowUpCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    {locale === 'en' ? opportunity.en : opportunity.es}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm italic">
              No se identificaron áreas de mejora específicas en esta evaluación.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
