'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { login, isAuthenticated, user } = useAuth()

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (isAuthenticated && user) {
      const redirectPath = (user.rol === 'coordinador' || user.rol === 'coordinador_pais')
        ? '/coordinador/dashboard'
        : '/empresa/dashboard';
      router.push(redirectPath);
    }
  }, [isAuthenticated, user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await login(email, password)
      // El useEffect de arriba manejará la redirección
    } catch (err: any) {
      setError(err?.data?.detail || 'Credenciales inválidas')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-100 -mx-6 -my-10">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="card bg-base-100 shadow-2xl border border-base-200">
          <form onSubmit={handleLogin} className="card-body gap-4">
            {/* Header */}
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold">
                <span className="text-primary">4C</span>
                <span className="opacity-70">Perú</span>
              </h1>
              <p className="text-sm text-base-content/60 mt-2">
                Sistema de Huella de Carbono
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="alert alert-error shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2M9 11l3 3L20 4" />
                </svg>
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="usuario@empresa.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Contraseña</span>
              </label>
              <div className="join w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="input input-bordered join-item flex-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                />
                <button
                  type="button"
                  className="btn btn-ghost join-item border border-base-300"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Iniciando sesión...
                  </>
                ) : (
                  'Iniciar Sesión'
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="divider my-2 text-xs text-base-content/40">O</div>
            <p className="text-center text-sm text-base-content/60">
              <a href="/" className="link link-primary">
                Volver a inicio
              </a>
            </p>
          </form>
        </div>

        {/* Demo info */}
        <div className="mt-8 text-center text-xs text-base-content/40 space-y-1">
          <p>Sistema en desarrollo</p>
          <p>Contacta a tu administrador para credenciales de prueba</p>
        </div>
      </div>
    </div>
  )
}
