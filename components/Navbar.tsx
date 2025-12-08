'use client'

import { usePathname } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function Navbar() {
  const pathname = usePathname()
  const { isAuthenticated, user, logout } = useAuth()
  const isAuthPage = pathname.includes('/login')

  // Links de navegación según el rol
  const isCoordinador = user?.rol === 'coordinador' || user?.rol === 'coordinador_pais'
  const navLinks = isCoordinador
    ? [
        { href: '/coordinador/dashboard', label: 'Dashboard' },
        { href: '/coordinador/pendientes', label: 'Pendientes' },
        { href: '/coordinador/reportes', label: 'Reportes' },
      ]
    : [
        { href: '/empresa/dashboard', label: 'Dashboard' },
        { href: '/empresa/ciclo-actual/mi-envio', label: 'Mi Envío' },
        { href: '/empresa/resultados', label: 'Resultados' },
      ]

  // Links públicos
  const publicLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/hoja-de-ruta', label: 'Hoja de Ruta' },
  ]

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <header className="h-14 bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          {/* Logos */}
          <a href="/" className="flex items-center gap-4">
            <img
              src="/logos/logo_ficem.png"
              alt="FICEM"
              className="h-14 w-auto"
            />
            <div className="h-7 w-px bg-gray-200" />
            <img
              src="/logos/logo_asocem.png"
              alt="ASOCEM"
              className="h-6 w-auto"
            />
            <div className="h-7 w-px bg-gray-200" />
            <span className="font-semibold text-lg">
              <span className="text-primary">4C</span>
              <span className="text-gray-400"> Perú</span>
            </span>
          </a>

          {/* Navegación principal */}
          {!isAuthPage && (
            <nav className="hidden md:flex items-center gap-1">
              {(isAuthenticated ? navLinks : publicLinks).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Acciones derecha */}
        {!isAuthPage && (
          <div className="flex items-center gap-3">
            {!isAuthenticated ? (
              <a
                href="/login"
                className="px-4 py-1.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
              >
                Iniciar Sesión
              </a>
            ) : (
              <div className="relative group">
                {/* Botón de usuario */}
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
                  {/* Avatar */}
                  <div className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-medium">
                    {user?.nombre?.charAt(0) || 'U'}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-gray-900 leading-tight">
                      {user?.nombre || 'Usuario'}
                    </p>
                    <p className="text-xs text-gray-500 leading-tight">
                      {user?.empresa_nombre || user?.rol}
                    </p>
                  </div>
                  {/* Chevron */}
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.nombre}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <div className="p-1">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
