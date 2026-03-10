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

export function IndicesChart({
  data,
  labels = defaultLabels,
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <IndexCard
            label={labels.professional}
            value={data.professional}
            color="primary"
          />
          <IndexCard
            label={labels.softSkills}
            value={data.softSkills}
            color="success"
          />
          <IndexCard
            label={labels.readiness}
            value={data.readiness}
            color="warning"
          />
        </div>
      )}

      {/* Radar Chart */}
      {showRadar && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Perfil de Competencias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: '#9ca3af', fontSize: 10 }}
                  />
                  <Radar
                    name="Índice"
                    dataKey="value"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.5}
                  />
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
}

function IndexCard({ label, value, color }: IndexCardProps) {
  const getLevel = (score: number) => {
    if (score >= 80) return { label: 'Excelente', variant: 'success' as const };
    if (score >= 60) return { label: 'Bueno', variant: 'primary' as const };
    if (score >= 40) return { label: 'En Desarrollo', variant: 'warning' as const };
    return { label: 'Necesita Apoyo', variant: 'danger' as const };
  };

  const level = getLevel(value);

  return (
    <Card variant="bordered" className="text-center p-4">
      <div className="flex flex-col items-center gap-3">
        <CircularProgress value={value} color={color} size={100} />
        <div>
          <h4 className="font-medium text-gray-900">{label}</h4>
          <p
            className={cn(
              'text-sm',
              level.variant === 'success' && 'text-green-600',
              level.variant === 'primary' && 'text-blue-600',
              level.variant === 'warning' && 'text-yellow-600',
              level.variant === 'danger' && 'text-red-600'
            )}
          >
            {level.label}
          </p>
        </div>
      </div>
    </Card>
  );
}
