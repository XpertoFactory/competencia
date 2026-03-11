'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import {
  Briefcase,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ClipboardList,
  BarChart3,
  Lightbulb,
  GraduationCap,
  Loader2,
} from 'lucide-react';
import { getProfiles } from '@/lib/firebase/firestore';
import { profiles as seedProfiles } from '@/lib/seed-data';
import type { Profile, ProfileSector, ProfileLevel } from '@/types';

const ALL_SECTORS: ProfileSector[] = [
  'insurance',
  'education',
  'retail-services',
  'healthcare',
  'transportation',
  'finance-accounting',
  'compliance-legal',
  'human-resources',
  'commercial-business',
  'collections-credit',
  'customer-service',
  'general-management',
  'technology-it',
  'banking',
  'hospitality-tourism',
];

const ALL_LEVELS: ProfileLevel[] = [
  'executive',
  'managerial',
  'professional-specialist',
  'administrative',
  'operative',
];

export default function LandingPage() {
  const t = useTranslations('landing');
  const tp = useTranslations('profiles');
  const locale = useLocale();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const firestoreProfiles = await getProfiles();
        if (firestoreProfiles.length > 0) {
          setProfiles(firestoreProfiles);
        } else {
          // Fall back to seed data if Firestore is empty
          setProfiles(seedProfiles);
        }
      } catch {
        // Fall back to seed data on error
        setProfiles(seedProfiles);
      } finally {
        setLoading(false);
      }
    }
    fetchProfiles();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('title')}
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                {t('subtitle')}
              </p>
              <p className="text-primary-200 mb-10">
                {t('description')}
              </p>
              <Link href={`/${locale}#profiles`}>
                <Button size="lg" variant="secondary" className="text-primary-900">
                  {t('startEvaluation')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('features.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Briefcase}
                title={t('features.professional.title')}
                description={t('features.professional.description')}
                color="blue"
              />
              <FeatureCard
                icon={Users}
                title={t('features.softSkills.title')}
                description={t('features.softSkills.description')}
                color="green"
              />
              <FeatureCard
                icon={TrendingUp}
                title={t('features.readiness.title')}
                description={t('features.readiness.description')}
                color="amber"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('howItWorks.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StepCard
                step={1}
                icon={ClipboardList}
                title={t('howItWorks.step1.title')}
                description={t('howItWorks.step1.description')}
              />
              <StepCard
                step={2}
                icon={CheckCircle}
                title={t('howItWorks.step2.title')}
                description={t('howItWorks.step2.description')}
              />
              <StepCard
                step={3}
                icon={BarChart3}
                title={t('howItWorks.step3.title')}
                description={t('howItWorks.step3.description')}
              />
              <StepCard
                step={4}
                icon={GraduationCap}
                title={t('howItWorks.step4.title')}
                description={t('howItWorks.step4.description')}
              />
            </div>
          </div>
        </section>

        {/* Profiles Section */}
        <section id="profiles" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {t('selectProfile')}
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              {t('profilesTitle')}
            </p>

            {/* Sector and Level Filters */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 max-w-2xl mx-auto">
              <div className="flex-1">
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  aria-label={tp('filterBySector')}
                >
                  <option value="">{tp('allSectors')}</option>
                  {ALL_SECTORS.map((sector) => (
                    <option key={sector} value={sector}>
                      {tp(`sectors.${sector}`)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  aria-label={tp('filterByLevel')}
                >
                  <option value="">{tp('allLevels')}</option>
                  {ALL_LEVELS.map((level) => (
                    <option key={level} value={level}>
                      {tp(`levels.${level}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {loading ? (
                <div className="col-span-full flex justify-center py-12">
                  <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                </div>
              ) : (
                profiles
                  .filter((profile) => {
                    const matchesSector =
                      !selectedSector ||
                      (profile.sectors && profile.sectors.includes(selectedSector as ProfileSector));
                    const matchesLevel =
                      !selectedLevel ||
                      profile.level === selectedLevel;
                    return matchesSector && matchesLevel;
                  })
                  .map((profile) => (
                  <Card
                    key={profile.id}
                    variant="bordered"
                    className="hover:border-primary-300 hover:shadow-lg transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary-100">
                          <Briefcase className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {locale === 'en' ? profile.name.en : profile.name.es}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {locale === 'en'
                              ? profile.description.en
                              : profile.description.es}
                          </p>
                          <Link href={`/${locale}/evaluation/${profile.id}`}>
                            <Button variant="primary" className="w-full">
                              {t('startEvaluation')}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'amber';
}

function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  const colors = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    amber: 'bg-amber-100 text-amber-600',
  };

  return (
    <Card variant="bordered" className="text-center p-6">
      <div className={`inline-flex p-4 rounded-full ${colors[color]} mb-4`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

interface StepCardProps {
  step: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

function StepCard({ step, icon: Icon, title, description }: StepCardProps) {
  return (
    <div className="text-center">
      <div className="relative inline-flex mb-4">
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary-600" />
        </div>
        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
          {step}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
