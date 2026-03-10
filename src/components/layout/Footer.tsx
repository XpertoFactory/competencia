'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

const sisterSites = [
  { name: 'iBIZai', url: 'https://ibizai.io' },
  { name: 'Lawra', url: 'https://lawra.org' },
  { name: 'mAImusic', url: 'https://maimusic.org' },
  { name: 'aiVideo', url: 'https://aivideo.rocks' },
  { name: 'aiLearning', url: 'https://ailearning.global' },
  { name: 'Insureversia', url: 'https://insureversia.com' },
];

const services = [
  { name: 'Compliance', url: 'https://compliance.xperto.solutions' },
  { name: 'Rutas', url: 'https://rutas.xperto.solutions' },
  { name: 'Xperto Media', url: 'https://xperto.media' },
];

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('navigation');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="skaills"
              width={120}
              height={60}
              className="h-8 w-auto mb-3"
            />
            <p className="text-sm text-gray-500 mb-2">
              {locale === 'fr'
                ? 'Compétences Intelligentes'
                : locale === 'en'
                ? 'Intelligent Skills'
                : 'Competencias Inteligentes'}
            </p>
            <p className="text-xs text-gray-600">
              Part of{' '}
              <a href="https://ibizai.io" className="text-gray-400 hover:text-white transition-colors">
                ibizai.io
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              {locale === 'fr' ? 'Navigation' : locale === 'en' ? 'Navigation' : 'Navegación'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/instructions`} className="hover:text-white transition-colors">
                  {t('instructions')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/tests`} className="hover:text-white transition-colors">
                  {t('tests')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/admin`} className="hover:text-white transition-colors">
                  {t('admin')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sister Sites */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              {locale === 'fr' ? 'Sites associés' : locale === 'en' ? 'Sister Sites' : 'Sitios Hermanos'}
            </h3>
            <ul className="space-y-2 text-sm">
              {sisterSites.map((site) => (
                <li key={site.name}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              {locale === 'fr' ? 'Services' : locale === 'en' ? 'Services' : 'Servicios'}
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((svc) => (
                <li key={svc.name}>
                  <a
                    href={svc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
          <p>
            &copy; {currentYear}{' '}
            <a href="https://xperto.solutions" className="text-gray-500 hover:text-white transition-colors">
              Xperto Solutions
            </a>
            {' & '}
            <a href="https://thesocialentrepreneur.com" className="text-gray-500 hover:text-white transition-colors">
              Carlos Miranda Levy
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
