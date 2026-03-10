'use client';

import { Card, CardContent, CardHeader, CardTitle, Badge, Progress } from '@/components/ui';
import { cn } from '@/lib/utils';
import { User, Target, Lightbulb } from 'lucide-react';
import type { ProfileAssignment, LocalizedString } from '@/types';

export interface ProfileCardProps {
  category: 'professional' | 'soft-skills' | 'readiness';
  categoryLabel: string;
  profile: ProfileAssignment;
  traits?: LocalizedString[];
  locale?: 'es' | 'en';
  className?: string;
}

const categoryIcons = {
  professional: User,
  'soft-skills': Target,
  readiness: Lightbulb,
};

const categoryColors = {
  professional: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    icon: 'text-blue-500',
    progress: 'primary' as const,
  },
  'soft-skills': {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    icon: 'text-green-500',
    progress: 'success' as const,
  },
  readiness: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    icon: 'text-amber-500',
    progress: 'warning' as const,
  },
};

export function ProfileCard({
  category,
  categoryLabel,
  profile,
  traits,
  locale = 'es',
  className,
}: ProfileCardProps) {
  const Icon = categoryIcons[category];
  const colors = categoryColors[category];
  const profileName = locale === 'en' ? profile.profileName.en : profile.profileName.es;
  const explanation = locale === 'en' ? profile.explanation.en : profile.explanation.es;

  return (
    <Card
      variant="bordered"
      className={cn('overflow-hidden', colors.border, className)}
    >
      <CardHeader className={cn(colors.bg, 'border-b', colors.border)}>
        <div className="flex items-center gap-3">
          <div className={cn('p-2 rounded-lg bg-white', colors.border)}>
            <Icon className={cn('w-5 h-5', colors.icon)} />
          </div>
          <div>
            <p className="text-sm text-gray-500">{categoryLabel}</p>
            <CardTitle className={colors.text}>{profileName}</CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-4">
        {/* Match percentage */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Coincidencia</span>
            <span className="font-medium">{profile.matchPercentage}%</span>
          </div>
          <Progress value={profile.matchPercentage} color={colors.progress} />
        </div>

        {/* Explanation */}
        <p className="text-sm text-gray-600">{explanation}</p>

        {/* Traits */}
        {traits && traits.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Características:</p>
            <div className="flex flex-wrap gap-2">
              {traits.map((trait, index) => (
                <Badge key={index} variant="default" size="sm">
                  {locale === 'en' ? trait.en : trait.es}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export interface ProfilesSummaryProps {
  profiles: {
    professional: ProfileAssignment;
    softSkills: ProfileAssignment;
    readiness: ProfileAssignment;
  };
  labels?: {
    professional: string;
    softSkills: string;
    readiness: string;
  };
  locale?: 'es' | 'en';
  className?: string;
}

const defaultLabels = {
  professional: 'Perfil Profesional',
  softSkills: 'Perfil de Habilidades Blandas',
  readiness: 'Perfil de Adaptabilidad',
};

export function ProfilesSummary({
  profiles,
  labels = defaultLabels,
  locale = 'es',
  className,
}: ProfilesSummaryProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-4', className)}>
      <ProfileCard
        category="professional"
        categoryLabel={labels.professional}
        profile={profiles.professional}
        locale={locale}
      />
      <ProfileCard
        category="soft-skills"
        categoryLabel={labels.softSkills}
        profile={profiles.softSkills}
        locale={locale}
      />
      <ProfileCard
        category="readiness"
        categoryLabel={labels.readiness}
        profile={profiles.readiness}
        locale={locale}
      />
    </div>
  );
}
