'use client';

import { AuthProvider } from '@/components/auth';
import { OrgProvider } from '@/components/org';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <OrgProvider>
        {children}
      </OrgProvider>
    </AuthProvider>
  );
}
