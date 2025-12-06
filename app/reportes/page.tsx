'use client'

import { useState } from 'react'

export default function ReportesPage() {
  const [filtroFecha, setFiltroFecha] = useState('todos')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Reportes</h2>
        <p className="text-gray-600 mt-2">
          Genera y visualiza reportes de huella de carbono
        </p>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtros</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Período
            </label>
            <select
              value={filtroFecha}
              onChange={(e) => setFiltroFecha(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
        {/* Reporte 1 */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporte General</h3>
          <p className="text-gray-600 text-sm mb-4">
            Resumen consolidado de todas las empresas y sus huellas de carbono
          </p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Generar Reporte
          </button>
        </div>

        {/* Reporte 2 */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Reporte Comparativo</h3>
          <p className="text-gray-600 text-sm mb-4">
            Comparación de huellas entre empresas e industrias
          </p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Generar Reporte
          </button>
        </div>

        {/* Reporte 3 */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Benchmarking</h3>
          <p className="text-gray-600 text-sm mb-4">
            Análisis de desempeño comparado con industria
          </p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Generar Reporte
          </button>
        </div>

        {/* Reporte 4 */}
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Evolución Temporal</h3>
          <p className="text-gray-600 text-sm mb-4">
            Análisis de cambios en la huella a lo largo del tiempo
          </p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Generar Reporte
          </button>
        </div>
      </div>

      {/* Historial de reportes */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Reportes Recientes</h3>
        <div className="text-center py-12">
          <p className="text-gray-600">No hay reportes generados aún</p>
        </div>
      </div>
    </div>
  )
}
