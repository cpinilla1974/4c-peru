'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Link from 'next/link'

interface Stats {
  totalEmpresas: number
  enviosPendientes: number
  enviosValidados: number
  progresoCiclo: number
}

interface Pendiente {
  id: string
  empresa: string
  tipo: string
  estado: 'pendiente' | 'vencido'
}

function DashboardCoordinadorContent() {
  const { user } = useAuth()
  const [stats, setStats] = useState<Stats | null>(null)
  const [pendientes, setPendientes] = useState<Pendiente[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setStats({
        totalEmpresas: 12,
        enviosPendientes: 4,
        enviosValidados: 8,
        progresoCiclo: 67,
      })
      setPendientes([
        { id: '1', empresa: 'Empresa Cemento Sol', tipo: 'Reporte Anual', estado: 'pendiente' },
        { id: '2', empresa: 'Concretos Andinos', tipo: 'Datos Trimestrales', estado: 'pendiente' },
        { id: '3', empresa: 'Cementos Lima', tipo: 'Reporte Vencido - 2 días', estado: 'vencido' },
        { id: '4', empresa: 'Perú Concreto S.A.', tipo: 'Validación de datos', estado: 'pendiente' },
      ])
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Dashboard Coordinador</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Total empresas */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h3 className="text-base-content/70 font-medium">Total empresas</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary/70">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <p className="text-4xl font-bold text-primary">{stats?.totalEmpresas}</p>
          </div>
        </div>

        {/* Envíos pendientes */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h3 className="text-base-content/70 font-medium">Envíos pendientes</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-warning">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-4xl font-bold text-warning">{stats?.enviosPendientes}</p>
          </div>
        </div>

        {/* Envíos validados */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h3 className="text-base-content/70 font-medium">Envíos validados</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-success">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-4xl font-bold text-success">{stats?.enviosValidados}</p>
          </div>
        </div>

        {/* Progreso del ciclo */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h3 className="text-base-content/70 font-medium">Progreso del ciclo</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="radial-progress text-primary" style={{ "--value": stats?.progresoCiclo, "--size": "4rem" } as React.CSSProperties} role="progressbar">
                {stats?.progresoCiclo}%
              </div>
              <div>
                <p className="font-medium">Ciclo 2024</p>
                <p className="text-sm text-base-content/50">Completado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Gráfico Hoja de Ruta (placeholder) */}
        <div className="lg:col-span-2 card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Gráfico Hoja de Ruta: Actual vs Meta 2030</h3>
            <div className="w-full h-72 bg-base-200/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-base-content/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mx-auto mb-2 opacity-50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <p>Gráfico de barras comparativo</p>
                <p className="text-sm">Se mostrará cuando haya datos disponibles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de pendientes */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Lista rápida de pendientes</h3>
            <div className="space-y-3">
              {pendientes.map((p) => (
                <div
                  key={p.id}
                  className={`flex justify-between items-center p-3 rounded-r-lg border-l-4 ${
                    p.estado === 'vencido'
                      ? 'border-error bg-error/5'
                      : 'border-warning bg-warning/5'
                  }`}
                >
                  <div>
                    <p className="font-medium text-sm">{p.empresa}</p>
                    <p className="text-xs text-base-content/60">{p.tipo}</p>
                  </div>
                  <Link href="/coordinador/pendientes" className="link link-primary text-sm font-medium">
                    Revisar
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/coordinador/pendientes" className="link link-primary text-sm font-bold">
                Ver todas las tareas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardCoordinador() {
  return (
    <ProtectedRoute allowedRoles={['coordinador']}>
      <DashboardCoordinadorContent />
    </ProtectedRoute>
  )
}
