'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { fiemCoreClient, Empresa } from '@/utils/apiClient'

export default function EmpresasPage() {
  const [empresas, setEmpresas] = useState<Empresa[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

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

  const filteredEmpresas = empresas.filter(
    (empresa) =>
      empresa.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      empresa.industria.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Empresas</h2>
        <p className="text-gray-600 mt-2">Gestiona y visualiza información de empresas registradas</p>
      </div>

      {/* Búsqueda */}
      <div className="bg-white rounded-lg shadow p-6">
        <input
          type="text"
          placeholder="Buscar por nombre o industria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Listado */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
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

        {!loading && !error && filteredEmpresas.length === 0 && (
          <div className="px-6 py-12 text-center">
            <p className="text-gray-600">
              {searchTerm ? 'No hay empresas que coincidan con tu búsqueda' : 'No hay empresas registradas'}
            </p>
          </div>
        )}

        {!loading && !error && filteredEmpresas.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredEmpresas.map((empresa) => (
              <Link key={empresa.id} href={`/empresas/${empresa.id}`}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{empresa.nombre}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Industria:</span> {empresa.industria}
                    </p>
                    <p>
                      <span className="font-medium">Ubicación:</span> {empresa.ubicacion}
                    </p>
                    {empresa.empleados && (
                      <p>
                        <span className="font-medium">Empleados:</span> {empresa.empleados}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Ver detalles →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
