'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import { Menu, X, Globe, LogIn, LogOut, User, Shield, ChevronDown, Compass } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { onAuthChange, signOut, checkAdminStatus } from '@/lib/firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';

export function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isEvalOpen, setIsEvalOpen] = useState(false);
  const [isValueOpen, setIsValueOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const evalMenuRef = useRef<HTMLDivElement>(null);
  const valueMenuRef = useRef<HTMLDivElement>(null);
  const resourcesMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (evalMenuRef.current && !evalMenuRef.current.contains(event.target as Node)) {
        setIsEvalOpen(false);
      }
      if (valueMenuRef.current && !valueMenuRef.current.contains(event.target as Node)) {
        setIsValueOpen(false);
      }
      if (resourcesMenuRef.current && !resourcesMenuRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          const adminUser = await checkAdminStatus(firebaseUser.uid);
          setIsAdmin(!!adminUser);
        } catch (err) {
          console.error('Admin status check failed:', err);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    router.push(`/${locale}`);
  };

  const switchToLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsLangOpen(false);
  };

  const localeLabels: Record<string, string> = {
    es: 'ES',
    en: 'EN',
    fr: 'FR',
  };

  const localeNames: Record<string, string> = {
    es: 'Español',
    en: 'English',
    fr: 'Français',
  };

  const isValueActive = pathname === `/${locale}/about` || pathname === `/${locale}/features` || pathname === `/${locale}/benefits`;
  const isResourcesActive = pathname.startsWith(`/${locale}/resources`);
  const isEvalActive = pathname.startsWith(`/${locale}/profiles`) || pathname.startsWith(`/${locale}/tests`);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/logo.png"
              alt="skaills"
              width={120}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href={`/${locale}`}
              className={cn(
                'text-sm font-medium transition-colors',
                pathname === `/${locale}`
                  ? 'text-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              {t('home')}
            </Link>

            {/* Value Dropdown */}
            <div className="relative" ref={valueMenuRef}>
              <button
                onClick={() => setIsValueOpen(!isValueOpen)}
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors',
                  isValueActive
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {t('value')}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {isValueOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link
                    href={`/${locale}/about`}
                    onClick={() => setIsValueOpen(false)}
                    className={cn(
                      'block px-4 py-2 text-sm rounded-t-lg transition-colors',
                      pathname === `/${locale}/about`
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    {t('about')}
                  </Link>
                  <Link
                    href={`/${locale}/features`}
                    onClick={() => setIsValueOpen(false)}
                    className={cn(
                      'block px-4 py-2 text-sm transition-colors',
                      pathname === `/${locale}/features`
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    {t('features')}
                  </Link>
                  <Link
                    href={`/${locale}/benefits`}
                    onClick={() => setIsValueOpen(false)}
                    className={cn(
                      'block px-4 py-2 text-sm rounded-b-lg transition-colors',
                      pathname === `/${locale}/benefits`
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    {t('benefits')}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/ai-staff`}
              className={cn(
                'text-sm font-medium transition-colors',
                pathname === `/${locale}/ai-staff`
                  ? 'text-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              {t('aiStaff')}
            </Link>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesMenuRef}>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors',
                  isResourcesActive
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {t('resources')}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {isResourcesOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link
                    href={`/${locale}/resources`}
                    onClick={() => setIsResourcesOpen(false)}
                    className={cn(
                      'block px-4 py-2 text-sm rounded-t-lg transition-colors',
                      pathname === `/${locale}/resources`
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    {t('opinion')}
                  </Link>
                  <Link
                    href={`/${locale}/resources/career-planning`}
                    onClick={() => setIsResourcesOpen(false)}
                    className={cn(
                      'block px-4 py-2 text-sm transition-colors',
                      pathname === `/${locale}/resources/career-planning`
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    {t('careerPlanning')}
                  </Link>
                  <Link
                    href={`/${locale}/resources#best-practices`}
                    onClick={() => setIsResourcesOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {t('bestPractices')}
                  </Link>
                  <Link
                    href={`/${locale}/resources#faqs`}
                    onClick={() => setIsResourcesOpen(false)}
                    className={cn(
                      'block px-4 py-2 text-sm rounded-b-lg transition-colors',
                      pathname.includes('/resources/faqs')
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    {t('faqs')}
                  </Link>
                </div>
              )}
            </div>

            {/* Evaluations Dropdown */}
            <div className="relative" ref={evalMenuRef}>
              <button
                onClick={() => setIsEvalOpen(!isEvalOpen)}
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors',
                  isEvalActive
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {t('evaluations')}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {isEvalOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link
                    href={`/${locale}/profiles`}
                    onClick={() => setIsEvalOpen(false)}
                    className={cn(
                      'block px-4 py-2 text-sm rounded-t-lg transition-colors',
                      pathname === `/${locale}/profiles`
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    {t('profiles')}
                  </Link>
                  <Link
                    href={`/${locale}/tests`}
                    onClick={() => setIsEvalOpen(false)}
                    className={cn(
                      'block px-4 py-2 text-sm rounded-b-lg transition-colors',
                      pathname.startsWith(`/${locale}/tests`)
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    {t('specialized')}
                  </Link>
                </div>
              )}
            </div>

            {/* User Auth Section */}
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="max-w-[150px] truncate">
                    {user.displayName || user.email}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {isAdmin && (
                      <Link
                        href={`/${locale}/admin`}
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                      >
                        <Shield className="w-4 h-4 text-primary-600" />
                        {t('admin')}
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsUserMenuOpen(false);
                      }}
                      className={cn(
                        'flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50',
                        isAdmin ? 'rounded-b-lg' : 'rounded-lg'
                      )}
                    >
                      <LogOut className="w-4 h-4" />
                      {t('logout')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={`/${locale}/auth/login`}
                className={cn(
                  'flex items-center gap-1.5 text-sm font-medium transition-colors',
                  pathname === `/${locale}/auth/login`
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                <LogIn className="w-4 h-4" />
                {t('login')}
              </Link>
            )}

            {/* Language Switcher */}
            <div className="relative" ref={langMenuRef}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>{localeLabels[locale] || locale.toUpperCase()}</span>
              </Button>
              {isLangOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {Object.entries(localeNames).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => switchToLocale(code)}
                      className={cn(
                        'block w-full text-left px-4 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg',
                        code === locale
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      )}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            <Link
              href={`/${locale}`}
              className={cn(
                'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === `/${locale}`
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>

            {/* Mobile Value Section */}
            <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {t('value')}
            </div>
            <Link
              href={`/${locale}/about`}
              className={cn(
                'block px-3 py-2 pl-6 rounded-lg text-sm font-medium transition-colors',
                pathname === `/${locale}/about`
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              href={`/${locale}/features`}
              className={cn(
                'block px-3 py-2 pl-6 rounded-lg text-sm font-medium transition-colors',
                pathname === `/${locale}/features`
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('features')}
            </Link>
            <Link
              href={`/${locale}/benefits`}
              className={cn(
                'block px-3 py-2 pl-6 rounded-lg text-sm font-medium transition-colors',
                pathname === `/${locale}/benefits`
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('benefits')}
            </Link>

            <Link
              href={`/${locale}/ai-staff`}
              className={cn(
                'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === `/${locale}/ai-staff`
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('aiStaff')}
            </Link>

            {/* Mobile Resources Section */}
            <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {t('resources')}
            </div>
            <Link
              href={`/${locale}/resources`}
              className={cn(
                'block px-3 py-2 pl-6 rounded-lg text-sm font-medium transition-colors',
                pathname === `/${locale}/resources`
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('opinion')}
            </Link>
            <Link
              href={`/${locale}/resources/career-planning`}
              className={cn(
                'block px-3 py-2 pl-6 rounded-lg text-sm font-medium transition-colors',
                pathname === `/${locale}/resources/career-planning`
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('careerPlanning')}
            </Link>
            <Link
              href={`/${locale}/resources#best-practices`}
              className="block px-3 py-2 pl-6 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('bestPractices')}
            </Link>
            <Link
              href={`/${locale}/resources#faqs`}
              className={cn(
                'block px-3 py-2 pl-6 rounded-lg text-sm font-medium transition-colors',
                pathname.includes('/resources/faqs')
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('faqs')}
            </Link>

            {/* Mobile Evaluations Section */}
            <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {t('evaluations')}
            </div>
            <Link
              href={`/${locale}/profiles`}
              className={cn(
                'block px-3 py-2 pl-6 rounded-lg text-sm font-medium transition-colors',
                pathname === `/${locale}/profiles`
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('profiles')}
            </Link>
            <Link
              href={`/${locale}/tests`}
              className={cn(
                'block px-3 py-2 pl-6 rounded-lg text-sm font-medium transition-colors',
                pathname.startsWith(`/${locale}/tests`)
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('specialized')}
            </Link>

            {/* Mobile User Auth */}
            {user ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="truncate">{user.displayName || user.email}</span>
                </div>
                {isAdmin && (
                  <Link
                    href={`/${locale}/admin`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Shield className="w-4 h-4 text-primary-600" />
                    {t('admin')}
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  <LogOut className="w-4 h-4" />
                  {t('logout')}
                </button>
              </>
            ) : (
              <Link
                href={`/${locale}/auth/login`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-4 h-4" />
                {t('login')}
              </Link>
            )}

            {Object.entries(localeNames)
              .filter(([code]) => code !== locale)
              .map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => {
                    switchToLocale(code);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  <Globe className="w-4 h-4" />
                  <span>{name}</span>
                </button>
              ))}
          </div>
        </nav>
      )}
    </header>
  );
}
