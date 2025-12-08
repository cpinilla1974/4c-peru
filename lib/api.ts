// Cliente API para ficem-core

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public data?: any
  ) {
    super(`API Error ${status}: ${statusText}`);
    this.name = 'ApiError';
  }
}

interface RequestOptions extends RequestInit {
  token?: string;
}

async function fetchApi<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch {
      errorData = { detail: response.statusText };
    }
    throw new ApiError(response.status, response.statusText, errorData);
  }

  return response.json();
}

export const api = {
  // Auth endpoints
  auth: {
    login: (email: string, password: string) =>
      fetchApi<{ access_token: string; token_type: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),

    me: (token: string) =>
      fetchApi<{
        id: number;
        email: string;
        nombre: string;
        rol: 'operador_ficem' | 'coordinador' | 'empresa';
        grupo?: string;
        pais_code?: string;
        empresa_id?: number;
        empresa_nombre?: string;
        activo: boolean;
      }>('/auth/me', {
        method: 'GET',
        token,
      }),
  },

  // Aquí irán más endpoints según se vayan necesitando
  // ciclos, templates, envios, etc.
};

export default api;
