'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useAuth } from './AuthProvider';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'viewer';
}

export function AuthGuard({ children, requiredRole }: AuthGuardProps) {
  const { admin, loading } = useAuth();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (!loading && !admin) {
      router.push(`/${locale}/admin/login`);
    }
  }, [loading, admin, router, locale]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="w-10 h-10 text-primary-600 animate-spin" />
      </div>
    );
  }

  if (!admin) {
    return null;
  }

  if (requiredRole === 'admin' && admin.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-red-600 font-medium">Unauthorized</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
