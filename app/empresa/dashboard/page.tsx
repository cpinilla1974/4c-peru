'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Link from 'next/link'

interface Ciclo {
  id: string
  año: number
  estado: string
  fecha_inicio: string
  deadline_envio: string
}

interface Envio {
  id: string
  estado: string
  fecha_envio?: string
  tipo_producto: string
}

function EmpresaDashboardContent() {
  const { user, token } = useAuth()
  const [ciclo, setCiclo] = useState<Ciclo | null>(null)
  const [envio, setEnvio] = useState<Envio | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (token) {
      fetchData(token)
    }
  }, [token])

  const fetchData = async (token: string) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_FICEM_CORE_URL || 'http://localhost:8000'

      const cicloRes = await fetch(`${baseUrl}/api/ciclos/actual?pais=PE`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (cicloRes.ok) {
        setCiclo(await cicloRes.json())
      } else {
        // Datos de ejemplo si no hay API
        setCiclo({
          id: 'ciclo_2024',
          año: 2024,
          estado: 'ABIERTO',
          fecha_inicio: '2024-01-01',
          deadline_envio: '2024-12-31',
        })
      }

      setEnvio({
        id: 'envio_dummy',
        estado: 'VALIDADO',
        tipo_producto: 'cemento',
      })

      setError(null)
    } catch (err) {
      // Datos de ejemplo en caso de error
      setCiclo({
        id: 'ciclo_2024',
        año: 2024,
        estado: 'ABIERTO',
        fecha_inicio: '2024-01-01',
        deadline_envio: '2024-12-31',
      })
      setEnvio({
        id: 'envio_dummy',
        estado: 'VALIDADO',
        tipo_producto: 'cemento',
      })
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

  const getEstadoBadge = (estado: string) => {
    const estilos: Record<string, string> = {
      BORRADOR: 'badge-warning',
      ENVIADO: 'badge-info',
      VALIDANDO: 'badge-secondary',
      VALIDADO: 'badge-success',
      APROBADO: 'badge-success',
      PUBLICADO: 'badge-accent',
      RECHAZADO: 'badge-error',
    }
    return estilos[estado] || 'badge-ghost'
  }

  const getCicloEstadoBadge = (estado: string) => {
    return estado === 'ABIERTO' ? 'text-success' : 'text-warning'
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black tracking-tight">Dashboard</h1>
        <p className="text-base-content/60 mt-1">
          Bienvenido, aquí puedes gestionar tus reportes de huella de carbono.
        </p>
      </div>

      {error && (
        <div className="alert alert-error mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Estado del ciclo */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <p className="text-base-content/60 font-medium">Estado del ciclo actual</p>
            <p className="text-2xl font-bold">
              Ciclo Anual {ciclo?.año} - <span className={getCicloEstadoBadge(ciclo?.estado || '')}>{ciclo?.estado}</span>
            </p>
          </div>
        </div>

        {/* Estado del envío */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <p className="text-base-content/60 font-medium">Estado de mi envío</p>
            <div className="flex items-center mt-1">
              <span className={`badge ${getEstadoBadge(envio?.estado || '')} badge-lg text-lg font-bold px-4 py-3`}>
                {envio?.estado}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fechas Límite del Ciclo */}
      <div className="card bg-primary/10 border border-primary/30 mb-12">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold mb-4">Fechas Límite del Ciclo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-base-content/60">Fecha de Inicio</p>
                <p className="font-bold">
                  {ciclo?.fecha_inicio
                    ? new Date(ciclo.fecha_inicio).toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' })
                    : '01 Enero, 2024'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-base-content/60">Fecha Límite de Envío</p>
                <p className="font-bold">
                  {ciclo?.deadline_envio
                    ? new Date(ciclo.deadline_envio).toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' })
                    : '31 Diciembre, 2024'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones Rápidas */}
      <h2 className="text-xl font-bold mb-4">Acciones Rápidas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Descargar Plantilla */}
        <Link href="/empresa/ciclo-actual/descargar" className="card bg-base-100 border border-base-200 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
          <div className="card-body items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </div>
            <h3 className="card-title text-lg">Descargar Plantilla</h3>
            <p className="text-sm text-base-content/60">Obtén el formato oficial para tu reporte.</p>
          </div>
        </Link>

        {/* Cargar Datos */}
        <Link href="/empresa/ciclo-actual/mi-envio" className="card bg-base-100 border border-base-200 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
          <div className="card-body items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <h3 className="card-title text-lg">Cargar Datos</h3>
            <p className="text-sm text-base-content/60">Sube tu archivo de reporte completado.</p>
          </div>
        </Link>

        {/* Ver Resultados */}
        <Link href="/empresa/resultados" className="card bg-base-100 border border-base-200 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
          <div className="card-body items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 className="card-title text-lg">Ver Resultados</h3>
            <p className="text-sm text-base-content/60">Visualiza el análisis de tus datos enviados.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default function EmpresaDashboard() {
  return (
    <ProtectedRoute allowedRoles={['empresa']}>
      <EmpresaDashboardContent />
    </ProtectedRoute>
  )
}
