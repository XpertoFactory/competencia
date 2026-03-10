'use client';

import { Card, CardContent, CardHeader, CardTitle, Badge } from '@/components/ui';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  Lightbulb,
  FileText,
  Compass,
  ExternalLink,
  Clock,
} from 'lucide-react';
import type { Resource, TrainingPathStep, LocalizedString } from '@/types';

export interface PersonalizedMessageProps {
  message: LocalizedString;
  locale?: 'es' | 'en';
  className?: string;
}

export function PersonalizedMessage({
  message,
  locale = 'es',
  className,
}: PersonalizedMessageProps) {
  return (
    <Card
      variant="bordered"
      className={cn('border-primary-200 bg-primary-50', className)}
    >
      <CardContent className="py-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary-100">
            <Lightbulb className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              Mensaje Personalizado
            </h3>
            <p className="text-primary-800 leading-relaxed">
              {locale === 'en' ? message.en : message.es}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export interface TrainingPathProps {
  steps: TrainingPathStep[];
  locale?: 'es' | 'en';
  title?: string;
  subtitle?: string;
  className?: string;
}

export function TrainingPath({
  steps,
  locale = 'es',
  title = 'Ruta de Capacitación',
  subtitle = 'Cursos y formación recomendada para tu desarrollo',
  className,
}: TrainingPathProps) {
  return (
    <Card variant="bordered" className={className}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-100">
            <BookOpen className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                {step.order}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900">
                  {locale === 'en' ? step.resource.name.en : step.resource.name.es}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {locale === 'en' ? step.rationale.en : step.rationale.es}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <Badge variant="default" size="sm">
                    {step.resource.type}
                  </Badge>
                  {step.resource.duration && (
                    <span className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.resource.duration}
                    </span>
                  )}
                  {step.resource.url && (
                    <a
                      href={step.resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-primary-600 hover:text-primary-700"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Ver recurso
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export interface ResourceListProps {
  resources: Resource[];
  locale?: 'es' | 'en';
  title?: string;
  subtitle?: string;
  icon?: 'activity' | 'resource';
  className?: string;
}

export function ResourceList({
  resources,
  locale = 'es',
  title = 'Recursos',
  subtitle = 'Materiales de apoyo para tu aprendizaje',
  icon = 'resource',
  className,
}: ResourceListProps) {
  const IconComponent = icon === 'activity' ? Lightbulb : FileText;
  const iconColor = icon === 'activity' ? 'text-amber-600' : 'text-gray-600';
  const iconBg = icon === 'activity' ? 'bg-amber-100' : 'bg-gray-100';

  return (
    <Card variant="bordered" className={className}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={cn('p-2 rounded-lg', iconBg)}>
            <IconComponent className={cn('w-5 h-5', iconColor)} />
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-900 text-sm">
                  {locale === 'en' ? resource.name.en : resource.name.es}
                </h4>
                {resource.url && (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {locale === 'en' ? resource.description.en : resource.description.es}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export interface StrategiesListProps {
  strategies: LocalizedString[];
  locale?: 'es' | 'en';
  title?: string;
  subtitle?: string;
  className?: string;
}

export function StrategiesList({
  strategies,
  locale = 'es',
  title = 'Estrategias de Gestión del Cambio',
  subtitle = 'Técnicas para facilitar tu adaptación',
  className,
}: StrategiesListProps) {
  return (
    <Card variant="bordered" className={className}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-100">
            <Compass className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {strategies.map((strategy, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-medium">
                {index + 1}
              </span>
              <span className="text-gray-700">
                {locale === 'en' ? strategy.en : strategy.es}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
