'use client'

import { useEffect, useState } from 'react'
import { fiemCoreClient, Empresa } from '@/utils/apiClient'

export default function Dashboard() {
  const [empresas, setEmpresas] = useState<Empresa[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        setLoading(true)
        const data = await fiemCoreClient.getEmpresas()
        setEmpresas(data)
        setError(null)
      } catch (err) {
        setError('Error cargando empresas. Verifica que ficem-core está disponible.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchEmpresas()
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Perú</h2>
        <p className="text-gray-600 mt-2">Resumen de empresas y métricas de huella de carbono</p>
      </div>

      {/* Tarjetas de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Empresas</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{empresas.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Huella Promedio</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">-</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Industrias</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">-</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Benchmarking</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">-</p>
        </div>
      </div>

      {/* Listado de empresas */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Empresas Registradas</h3>
        </div>

        {loading && (
          <div className="px-6 py-12 text-center">
            <p className="text-gray-600">Cargando...</p>
          </div>
        )}

        {error && (
          <div className="px-6 py-4 bg-red-50 border-l-4 border-red-400">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {!loading && !error && empresas.length === 0 && (
          <div className="px-6 py-12 text-center">
            <p className="text-gray-600">No hay empresas registradas</p>
          </div>
        )}

        {!loading && !error && empresas.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                    Industria
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                    Ubicación
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {empresas.map((empresa) => (
                  <tr key={empresa.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{empresa.nombre}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{empresa.industria}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{empresa.ubicacion}</td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        href={`/empresas/${empresa.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Ver detalles
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
