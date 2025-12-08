'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

interface Resultado {
  huella_carbono: number
  banda_gcca: string
  promedio_industria: number
  historico: { año: number; valor: number }[]
}

function ResultadosContent() {
  const { user, token } = useAuth()
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setResultado({
        huella_carbono: 598,
        banda_gcca: 'C',
        promedio_industria: 620,
        historico: [
          { año: 2020, valor: 650 },
          { año: 2021, valor: 630 },
          { año: 2022, valor: 615 },
          { año: 2023, valor: 605 },
          { año: 2024, valor: 598 },
        ],
      })
      setLoading(false)
    }, 500)
  }, [token])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

  if (!resultado) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>No hay resultados disponibles. Envía tu reporte primero.</span>
        </div>
      </div>
    )
  }

  // Calcular porcentajes para las barras
  const maxValor = Math.max(resultado.huella_carbono, resultado.promedio_industria) * 1.1
  const porcentajeEmpresa = (resultado.huella_carbono / maxValor) * 100
  const porcentajeIndustria = (resultado.promedio_industria / maxValor) * 100

  // Calcular puntos para el gráfico de línea
  const minHistorico = Math.min(...resultado.historico.map(h => h.valor)) - 20
  const maxHistorico = Math.max(...resultado.historico.map(h => h.valor)) + 20
  const rangoHistorico = maxHistorico - minHistorico

  const puntosLinea = resultado.historico.map((h, i) => {
    const x = (i / (resultado.historico.length - 1)) * 100
    const y = 100 - ((h.valor - minHistorico) / rangoHistorico) * 100
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight">Mi Reporte Anual</h1>
          <p className="text-primary/70 mt-1">Resultados de la huella de carbono de la empresa</p>
        </div>
        <button className="btn btn-primary gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Descargar reporte individual
        </button>
      </div>

      {/* KPIs principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="card bg-base-100/50 border border-primary/20">
          <div className="card-body">
            <p className="font-medium text-base-content/70">Mi huella de carbono (kgCO₂/t cemento)</p>
            <p className="text-4xl font-bold">{resultado.huella_carbono}</p>
          </div>
        </div>
        <div className="card bg-base-100/50 border border-primary/20">
          <div className="card-body">
            <p className="font-medium text-base-content/70">Clasificación banda GCCA (A-G)</p>
            <p className="text-4xl font-bold">{resultado.banda_gcca}</p>
          </div>
        </div>
      </div>

      {/* Análisis de Desempeño */}
      <h2 className="text-xl font-bold mb-4">Análisis de Desempeño</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico comparativo */}
        <div className="card bg-base-100/50 border border-primary/20">
          <div className="card-body">
            <p className="font-medium">Gráfico comparativo vs industria (anónimo)</p>
            <p className="text-sm text-primary/70 mb-4">Año Actual</p>

            <div className="space-y-4">
              {/* Barra Promedio Industria */}
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-primary/70 font-medium">Promedio Industria</span>
                  <span className="font-bold">{resultado.promedio_industria}</span>
                </div>
                <div className="h-8 bg-primary/10 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-base-content/30 rounded-md transition-all duration-500"
                    style={{ width: `${porcentajeIndustria}%` }}
                  ></div>
                </div>
              </div>

              {/* Barra Mi Empresa */}
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-primary/70 font-medium">Mi Empresa</span>
                  <span className="font-bold">{resultado.huella_carbono}</span>
                </div>
                <div className="h-8 bg-primary/10 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-md transition-all duration-500"
                    style={{ width: `${porcentajeEmpresa}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {resultado.huella_carbono < resultado.promedio_industria && (
              <div className="mt-4 p-3 bg-success/10 border border-success/30 rounded-lg">
                <p className="text-sm text-success font-medium">
                  Tu empresa está {resultado.promedio_industria - resultado.huella_carbono} kg CO₂/t por debajo del promedio de la industria
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Evolución histórica */}
        <div className="card bg-base-100/50 border border-primary/20">
          <div className="card-body">
            <p className="font-medium">Evolución histórica</p>
            <p className="text-sm text-primary/70 mb-4">Últimos 5 Años</p>

            {/* Gráfico SVG */}
            <div className="h-44 relative">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                {/* Área bajo la curva */}
                <defs>
                  <linearGradient id="gradiente" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--p))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--p))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points={`0,100 ${puntosLinea} 100,100`}
                  fill="url(#gradiente)"
                />
                {/* Línea */}
                <polyline
                  points={puntosLinea}
                  fill="none"
                  stroke="hsl(var(--p))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Puntos */}
                {resultado.historico.map((h, i) => {
                  const x = (i / (resultado.historico.length - 1)) * 100
                  const y = 100 - ((h.valor - minHistorico) / rangoHistorico) * 100
                  return (
                    <circle
                      key={h.año}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="hsl(var(--p))"
                      vectorEffect="non-scaling-stroke"
                    />
                  )
                })}
              </svg>
            </div>

            {/* Etiquetas de años */}
            <div className="flex justify-between mt-2">
              {resultado.historico.map((h) => (
                <span key={h.año} className="text-xs text-primary/70 font-medium">{h.año}</span>
              ))}
            </div>

            {/* Tendencia */}
            {resultado.historico.length >= 2 && (
              <div className="mt-4 text-sm text-base-content/70">
                <span className="font-medium">Tendencia:</span>{' '}
                {resultado.historico[resultado.historico.length - 1].valor < resultado.historico[0].valor ? (
                  <span className="text-success">Reducción de {resultado.historico[0].valor - resultado.historico[resultado.historico.length - 1].valor} kg CO₂/t en 5 años</span>
                ) : (
                  <span className="text-warning">Sin reducción significativa</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResultadosPage() {
  return (
    <ProtectedRoute allowedRoles={['empresa']}>
      <ResultadosContent />
    </ProtectedRoute>
  )
}
