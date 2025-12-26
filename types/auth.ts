// Tipos de autenticación

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

// Roles actualizados según USUARIOS_Y_PERMISOS.md
export type UserRole =
  | 'ROOT'
  | 'ADMIN_PROCESO'
  | 'EJECUTIVO_FICEM'
  | 'AMIGO_FICEM'
  | 'COORDINADOR_PAIS'
  | 'SUPERVISOR_EMPRESA'
  | 'INFORMANTE_EMPRESA'
  | 'VISOR_EMPRESA'
  // Legacy (para retrocompatibilidad durante migración)
  | 'operador_ficem'
  | 'coordinador'
  | 'coordinador_pais'
  | 'empresa';

export interface User {
  id: number;
  email: string;
  nombre: string;
  rol: UserRole;
  grupo?: string;
  pais_code?: string;
  empresa_id?: number;
  empresa_nombre?: string;
  activo: boolean;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}
