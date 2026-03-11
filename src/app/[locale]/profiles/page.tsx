'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import {
  Briefcase,
  ArrowRight,
  Loader2,
  Search,
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

function getLocalizedText(obj: { es: string; en: string; fr?: string }, locale: string): string {
  if (locale === 'fr' && obj.fr) return obj.fr;
  if (locale === 'en') return obj.en;
  return obj.es;
}

export default function ProfilesPage() {
  const t = useTranslations('profilesPage');
  const tp = useTranslations('profiles');
  const tl = useTranslations('landing');
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
          setProfiles(seedProfiles);
        }
      } catch {
        setProfiles(seedProfiles);
      } finally {
        setLoading(false);
      }
    }
    fetchProfiles();
  }, []);

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSector =
      !selectedSector ||
      (profile.sectors && profile.sectors.includes(selectedSector as ProfileSector));
    const matchesLevel =
      !selectedLevel ||
      profile.level === selectedLevel;
    return matchesSector && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary-100">
                <Briefcase className="w-6 h-6 text-primary-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                {t('title')}
              </h1>
            </div>
            <p className="text-gray-600 ml-[52px]">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
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
          </div>
        </section>

        {/* Profile Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
              </div>
            ) : filteredProfiles.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">{t('noResults')}</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-6">
                  {t('showingCount', { count: filteredProfiles.length })}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProfiles.map((profile) => (
                    <Card
                      key={profile.id}
                      variant="bordered"
                      className="hover:border-primary-300 hover:shadow-lg transition-all bg-white"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary-100 shrink-0">
                            <Briefcase className="w-5 h-5 text-primary-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">
                              {getLocalizedText(profile.name, locale)}
                            </h3>
                            {profile.level && (
                              <span className="inline-block text-xs font-medium text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full mb-2">
                                {tp(`levels.${profile.level}`)}
                              </span>
                            )}
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {getLocalizedText(profile.description, locale)}
                            </p>
                            <Link href={`/${locale}/evaluation/${profile.id}`}>
                              <Button variant="primary" size="sm" className="w-full">
                                {tl('startEvaluation')}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
