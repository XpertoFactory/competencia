'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthChange, signOut, getSession, isPlatformAdmin, isOrgAdmin, type AdminUser, type StoredSession } from '@/lib/firebase/auth';

interface AuthContextType {
  admin: AdminUser | null;
  session: StoredSession | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  admin: null,
  session: null,
  loading: true,
  logout: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [session, setSession] = useState<StoredSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (user) {
        const storedSession = getSession();
        setSession(storedSession);

        if (storedSession) {
          const indRole = storedSession.individualRole;
          if (indRole === 'admin' || indRole === 'viewer') {
            // Platform-level admin
            setAdmin({
              uid: user.uid,
              email: storedSession.email || user.email || '',
              role: indRole as 'admin' | 'viewer',
            });
          } else if (isOrgAdmin()) {
            // Org-level admin (owner or admin of at least one org)
            setAdmin({
              uid: user.uid,
              email: storedSession.email || user.email || '',
              role: 'org-admin',
            });
          } else {
            setAdmin(null);
          }
        } else {
          setAdmin(null);
        }
      } else {
        setAdmin(null);
        setSession(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut();
    setAdmin(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ admin, session, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
