'use client'

import { useState } from 'react'

export default function ReportesPage() {
  const [filtroFecha, setFiltroFecha] = useState('todos')

  const reportes = [
    {
      id: 1,
      titulo: 'Reporte General',
      descripcion: 'Resumen consolidado de todas las empresas y sus huellas de carbono',
      icono: '📋',
    },
    {
      id: 2,
      titulo: 'Reporte Comparativo',
      descripcion: 'Comparación de huellas entre empresas e industrias',
      icono: '📊',
    },
    {
      id: 3,
      titulo: 'Benchmarking',
      descripcion: 'Análisis de desempeño comparado con industria',
      icono: '🏆',
    },
    {
      id: 4,
      titulo: 'Evolución Temporal',
      descripcion: 'Análisis de cambios en la huella a lo largo del tiempo',
      icono: '📈',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-primary">Reportes</h1>
        <p className="text-lg text-base-content/70 mt-2">
          Genera y visualiza reportes de huella de carbono
        </p>
      </div>

      {/* Filtros */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-primary mb-4">Filtros</h2>
          <div>
            <label className="label">
              <span className="label-text font-semibold">Período</span>
            </label>
            <select
              value={filtroFecha}
              onChange={(e) => setFiltroFecha(e.target.value)}
              className="select select-bordered select-primary w-full"
            >
              <option value="todos">Todos</option>
              <option value="ultima-semana">Última semana</option>
              <option value="ultimo-mes">Último mes</option>
              <option value="ultimo-trimestre">Último trimestre</option>
              <option value="ultimo-ano">Último año</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sección de reportes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportes.map((reporte) => (
          <div key={reporte.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <div className="text-4xl mb-4">{reporte.icono}</div>
              <h3 className="card-title text-primary">{reporte.titulo}</h3>
              <p className="text-base-content/70 text-sm">{reporte.descripcion}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">
                  Generar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Historial de reportes */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-primary mb-4">Reportes Recientes</h2>
          <div className="text-center py-12">
            <div className="text-5xl mb-4">📁</div>
            <p className="text-base-content/70">No hay reportes generados aún</p>
            <p className="text-sm text-base-content/50 mt-2">Los reportes que generes aparecerán aquí</p>
          </div>
        </div>
      </div>
    </div>
  )
}
