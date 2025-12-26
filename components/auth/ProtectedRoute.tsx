'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { UserRole } from '@/types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

// Grupos de roles según documentación USUARIOS_Y_PERMISOS.md
const ROLES_EMPRESA: UserRole[] = ['INFORMANTE_EMPRESA', 'SUPERVISOR_EMPRESA', 'VISOR_EMPRESA'];
const ROLES_COORDINADOR: UserRole[] = ['COORDINADOR_PAIS'];
const ROLES_FICEM: UserRole[] = ['ROOT', 'ADMIN_PROCESO', 'EJECUTIVO_FICEM', 'AMIGO_FICEM'];

// Función para verificar si un rol tiene acceso
function hasAccess(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  // Verificar acceso directo
  if (allowedRoles.includes(userRole)) {
    return true;
  }

  // Verificar acceso por grupo
  if (ROLES_EMPRESA.includes(userRole) && allowedRoles.some(r => ROLES_EMPRESA.includes(r))) {
    return true;
  }
  if (ROLES_COORDINADOR.includes(userRole) && allowedRoles.some(r => ROLES_COORDINADOR.includes(r))) {
    return true;
  }
  if (ROLES_FICEM.includes(userRole) && allowedRoles.some(r => ROLES_FICEM.includes(r))) {
    return true;
  }

  return false;
}

// Función para determinar el dashboard según el rol
function getDashboardPath(rol: UserRole): string {
  if (ROLES_COORDINADOR.includes(rol)) {
    return '/coordinador/dashboard';
  }
  if (ROLES_FICEM.includes(rol)) {
    return '/admin/dashboard';
  }
  // ROLES_EMPRESA por defecto
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isLoading, user, allowedRoles]);

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
