'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

function ReportesContent() {
  const { user } = useAuth()
  const [generando, setGenerando] = useState<string | null>(null)

  const handleGenerar = async (tipo: string) => {
    setGenerando(tipo)
    // Simular generación
    await new Promise(r => setTimeout(r, 2000))
    setGenerando(null)
    // Aquí se descargaría el archivo
    alert(`Reporte "${tipo}" generado correctamente`)
  }

  // Datos de ejemplo para estadísticas
  const stats = {
    emisionPromedio: 545,
    reduccion: -6,
    lineaBase: 580,
    meta2030: 520,
  }

  const progreso = ((stats.lineaBase - stats.emisionPromedio) / (stats.lineaBase - stats.meta2030)) * 100

  return (
    <div className="max-w-4xl mx-auto">
      {/* Generación de Reportes */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">Generación de Reportes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Reporte Ciclo Anual */}
          <div className="card bg-base-100 border border-base-200 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="card-title text-lg">Reporte Ciclo Anual</h3>
              </div>
              <p className="text-base-content/60 mt-2">
                Consolidado de todas las empresas para el ciclo anual actual.
              </p>
              <div className="card-actions mt-4">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleGenerar('ciclo-anual')}
                  disabled={generando !== null}
                >
                  {generando === 'ciclo-anual' ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    'Generar PDF'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Reporte para Ministerio */}
          <div className="card bg-base-100 border border-base-200 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <h3 className="card-title text-lg">Reporte para Ministerio</h3>
              </div>
              <p className="text-base-content/60 mt-2">
                Informe oficial con el formato requerido por entidades gubernamentales.
              </p>
              <div className="card-actions mt-4">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleGenerar('ministerio')}
                  disabled={generando !== null}
                >
                  {generando === 'ministerio' ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    'Generar PDF'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exportación de Datos */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">Exportación de Datos</h2>
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Datos Consolidados</h3>
                  <p className="text-sm text-base-content/60">Exporta todos los datos del ciclo en formato Excel o CSV.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  className="btn btn-outline btn-primary btn-sm gap-2"
                  onClick={() => handleGenerar('excel')}
                  disabled={generando !== null}
                >
                  {generando === 'excel' ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                      </svg>
                      Excel
                    </>
                  )}
                </button>
                <button
                  className="btn btn-outline btn-primary btn-sm gap-2"
                  onClick={() => handleGenerar('csv')}
                  disabled={generando !== null}
                >
                  {generando === 'csv' ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      CSV
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas del País */}
      <section>
        <h2 className="text-xl font-bold mb-6">Estadísticas del País</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Emisión Promedio */}
          <div className="card bg-base-100 border border-base-200 shadow-sm">
            <div className="card-body">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-base-content/70">Emisión Promedio</p>
                  <p className="text-4xl font-bold text-primary mt-1">{stats.emisionPromedio} kg</p>
                  <p className="text-sm text-base-content/60">CO₂ / t de cemento</p>
                </div>
                <div className="text-primary/50">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Reducción vs Línea Base */}
          <div className="card bg-base-100 border border-base-200 shadow-sm">
            <div className="card-body">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-base-content/70">Reducción vs. Línea Base</p>
                  <p className="text-4xl font-bold text-primary mt-1">{stats.reduccion}%</p>
                  <p className="text-sm text-base-content/60">Respecto a {stats.lineaBase} kg CO₂/t en 2024</p>
                </div>
                <div className="text-success">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progreso hacia la Meta 2030 */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <h3 className="font-bold mb-4">Progreso hacia la Meta 2030</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-base-content/60">
                <span>2024 ({stats.lineaBase} kg)</span>
                <span>2030 ({stats.meta2030} kg)</span>
              </div>
              <progress
                className="progress progress-primary w-full h-3"
                value={progreso}
                max="100"
              ></progress>
              <p className="text-center font-medium">
                Progreso actual: {stats.emisionPromedio} kg CO₂/t ({progreso.toFixed(1)}% de la meta)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ReportesPage() {
  return (
    <ProtectedRoute allowedRoles={['coordinador']}>
      <ReportesContent />
    </ProtectedRoute>
  )
}
