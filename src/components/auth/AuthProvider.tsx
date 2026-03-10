'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthChange, checkAdminStatus, signOut, type AdminUser } from '@/lib/firebase/auth';

interface AuthContextType {
  admin: AdminUser | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  admin: null,
  loading: true,
  logout: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange(async (user) => {
      if (user) {
        const adminUser = await checkAdminStatus(user.uid);
        setAdmin(adminUser);
      } else {
        setAdmin(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut();
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
