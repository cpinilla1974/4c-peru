'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '@/types/auth';
import api from '@/lib/api';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = '4c-token';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar token del localStorage al iniciar
  useEffect(() => {
    const loadToken = async () => {
      try {
        const savedToken = localStorage.getItem(TOKEN_KEY);
        if (savedToken) {
          setToken(savedToken);
          // Obtener datos del usuario
          const userData = await api.auth.me(savedToken);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error loading token:', error);
        // Token inválido o expirado
        localStorage.removeItem(TOKEN_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.auth.login(email, password);
      const { access_token } = response;

      // Guardar token
      localStorage.setItem(TOKEN_KEY, access_token);
      setToken(access_token);

      // Obtener datos del usuario
      const userData = await api.auth.me(access_token);
      setUser(userData);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  };

  const refreshUser = async () => {
    if (!token) return;
    try {
      const userData = await api.auth.me(token);
      setUser(userData);
    } catch (error) {
      console.error('Error refreshing user:', error);
      logout();
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated: !!user && !!token,
    login,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}
