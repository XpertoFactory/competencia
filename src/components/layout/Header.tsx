'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import { Menu, X, Globe, LogIn, LogOut, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { onAuthChange, signOut } from '@/lib/firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';

export function Header() {
  const t = useTranslations('navigation');
  const tc = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
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

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/instructions`, label: t('instructions') },
    { href: `/${locale}/tests`, label: t('tests') },
    { href: `/${locale}/admin`, label: t('admin') },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center"
          >
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* User Auth Section */}
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-sm text-gray-700">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="max-w-[150px] truncate">
                    {user.displayName || user.email}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden lg:inline">{t('logout')}</span>
                </Button>
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
            <div className="relative">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile User Auth */}
            {user ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="truncate">{user.displayName || user.email}</span>
                </div>
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
