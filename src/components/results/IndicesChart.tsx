'use client';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CircularProgress } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface IndicesData {
  professional: number;
  softSkills: number;
  readiness: number;
}

export interface IndicesChartProps {
  data: IndicesData;
  labels?: {
    professional: string;
    softSkills: string;
    readiness: string;
  };
  locale?: 'es' | 'en';
  showRadar?: boolean;
  showBars?: boolean;
  showCircular?: boolean;
  className?: string;
}

const defaultLabels = {
  professional: 'Profesional',
  softSkills: 'Habilidades Blandas',
  readiness: 'Disposición al Cambio',
};

const colors = {
  professional: '#3b82f6',
  softSkills: '#22c55e',
  readiness: '#f59e0b',
};

const levelLabels: Record<string, Record<string, string>> = {
  excellent: { es: 'Excelente', en: 'Excellent', fr: 'Excellent' },
  good: { es: 'Bueno', en: 'Good', fr: 'Bon' },
  average: { es: 'En Desarrollo', en: 'Average', fr: 'Moyen' },
  needsImprovement: { es: 'Necesita Apoyo', en: 'Needs Improvement', fr: 'À améliorer' },
};

export function IndicesChart({
  data,
  labels = defaultLabels,
  locale = 'es',
  showRadar = true,
  showBars = false,
  showCircular = true,
  className,
}: IndicesChartProps) {
  const radarData = [
    { subject: labels.professional, value: data.professional, fullMark: 100 },
    { subject: labels.softSkills, value: data.softSkills, fullMark: 100 },
    { subject: labels.readiness, value: data.readiness, fullMark: 100 },
  ];

  const barData = [
    { name: labels.professional, value: data.professional, color: colors.professional },
    { name: labels.softSkills, value: data.softSkills, color: colors.softSkills },
    { name: labels.readiness, value: data.readiness, color: colors.readiness },
  ];

  return (
    <div className={cn('space-y-6', className)}>
      {/* Circular Progress Cards */}
      {showCircular && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <IndexCard
            label={labels.professional}
            value={data.professional}
            color="primary"
            locale={locale}
          />
          <IndexCard
            label={labels.softSkills}
            value={data.softSkills}
            color="success"
            locale={locale}
          />
          <IndexCard
            label={labels.readiness}
            value={data.readiness}
            color="warning"
            locale={locale}
          />
        </div>
      )}

      {/* Radar Chart */}
      {showRadar && (
        <Card variant="bordered" className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
            <CardTitle className="text-gray-800">
              {locale === 'en' ? 'Competency Profile' : 'Perfil de Competencias'}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                  <PolarGrid
                    gridType="polygon"
                    stroke="#e5e7eb"
                    strokeDasharray="3 3"
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#374151', fontSize: 13, fontWeight: 500 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: '#9ca3af', fontSize: 10 }}
                    tickCount={5}
                  />
                  <Radar
                    name="Index"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={2}
                    fill="url(#radarGradient)"
                    fillOpacity={0.6}
                  />
                  <defs>
                    <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bar Chart */}
      {showBars && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Índices por Categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={150}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(value: number) => [`${value}%`, 'Índice']}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

interface IndexCardProps {
  label: string;
  value: number;
  color: 'primary' | 'success' | 'warning';
  locale: string;
}

function IndexCard({ label, value, color, locale }: IndexCardProps) {
  const getLevel = (score: number) => {
    if (score >= 80) return { key: 'excellent', variant: 'success' as const };
    if (score >= 60) return { key: 'good', variant: 'primary' as const };
    if (score >= 40) return { key: 'average', variant: 'warning' as const };
    return { key: 'needsImprovement', variant: 'danger' as const };
  };

  const level = getLevel(value);
  const localizedLabel = levelLabels[level.key]?.[locale] || levelLabels[level.key]?.es || '';

  const gradients = {
    primary: 'from-blue-50 to-indigo-50 border-blue-200',
    success: 'from-green-50 to-emerald-50 border-green-200',
    warning: 'from-amber-50 to-yellow-50 border-amber-200',
  };

  const shadowColors = {
    primary: 'shadow-blue-100/50',
    success: 'shadow-green-100/50',
    warning: 'shadow-amber-100/50',
  };

  return (
    <Card
      variant="bordered"
      className={cn(
        'text-center p-6 bg-gradient-to-br shadow-lg transition-transform hover:scale-[1.02]',
        gradients[color],
        shadowColors[color]
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <CircularProgress value={value} color={color} size={120} strokeWidth={10} />
        <div>
          <h4 className="font-semibold text-gray-900 text-base">{label}</h4>
          <span
            className={cn(
              'inline-block mt-1.5 text-sm font-medium px-3 py-0.5 rounded-full',
              level.variant === 'success' && 'text-green-700 bg-green-100',
              level.variant === 'primary' && 'text-blue-700 bg-blue-100',
              level.variant === 'warning' && 'text-yellow-700 bg-yellow-100',
              level.variant === 'danger' && 'text-red-700 bg-red-100'
            )}
          >
            {localizedLabel}
          </span>
        </div>
      </div>
    </Card>
  );
}
