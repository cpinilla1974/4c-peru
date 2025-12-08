'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { UserRole } from '@/types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

// Función para verificar si un rol tiene acceso
function hasAccess(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  // coordinador_pais tiene acceso a rutas de coordinador
  if (userRole === 'coordinador_pais' && allowedRoles.includes('coordinador')) {
    return true;
  }
  return allowedRoles.includes(userRole);
}

// Función para determinar el dashboard según el rol
function getDashboardPath(rol: UserRole): string {
  if (rol === 'coordinador' || rol === 'coordinador_pais') {
    return '/coordinador/dashboard';
  }
  if (rol === 'operador_ficem') {
    return '/admin/dashboard';
  }
  return '/empresa/dashboard';
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push('/login');
        return;
      }

      if (allowedRoles && user && !hasAccess(user.rol, allowedRoles)) {
        router.push(getDashboardPath(user.rol));
      }
    }
  }, [isAuthenticated, isLoading, user, allowedRoles, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (allowedRoles && user && !hasAccess(user.rol, allowedRoles)) {
    return null;
  }

  return <>{children}</>;
}
