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
        <h1 className="text-4xl font-bold text-primary">Empresas</h1>
        <p className="text-lg text-base-content/70 mt-2">Gestiona y visualiza información de empresas registradas</p>
      </div>

      {/* Búsqueda */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <input
            type="text"
            placeholder="Buscar por nombre o industria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered input-primary w-full"
          />
        </div>
      </div>

      {/* Listado */}
      <div>
        {loading && (
          <div className="flex justify-center items-center py-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {!loading && !error && filteredEmpresas.length === 0 && (
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <p className="text-base-content/70">
                {searchTerm ? 'No hay empresas que coincidan con tu búsqueda' : 'No hay empresas registradas'}
              </p>
            </div>
          </div>
        )}

        {!loading && !error && filteredEmpresas.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmpresas.map((empresa) => (
              <Link key={empresa.id} href={`/empresas/${empresa.id}`}>
                <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-base-200">
                  <div className="card-body">
                    <h3 className="card-title text-primary">{empresa.nombre}</h3>
                    <div className="divider my-2"></div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-semibold text-base-content/70">Industria:</span>
                        <span className="badge badge-secondary">{empresa.industria}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-base-content/70">Ubicación:</span>
                        <span>{empresa.ubicacion}</span>
                      </div>
                      {empresa.empleados && (
                        <div className="flex justify-between">
                          <span className="font-semibold text-base-content/70">Empleados:</span>
                          <span>{empresa.empleados}</span>
                        </div>
                      )}
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-primary btn-sm">
                        Ver detalles →
                      </button>
                    </div>
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
