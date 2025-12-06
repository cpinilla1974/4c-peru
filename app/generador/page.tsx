'use client'

import { useState } from 'react'
import { fiemCoreClient } from '@/utils/apiClient'

export default function GeneradorPage() {
  const [empresaId, setEmpresaId] = useState('')
  const [tipo, setTipo] = useState('basico')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleGenerarExcel = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!empresaId) {
      setError('Por favor selecciona una empresa')
      return
    }

    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      const blob = await fiemCoreClient.generarExcel({
        empresaId,
        tipo,
      })

      // Crear descarga
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `plantilla-${empresaId}-${tipo}-${new Date().getTime()}.xlsx`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

      setSuccess(true)
      setEmpresaId('')
      setTipo('basico')
    } catch (err) {
      setError('Error generando Excel. Verifica que ficem-core está disponible.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Generador de Plantillas Excel</h2>
        <p className="text-gray-600 mt-2">
          Crea plantillas personalizadas para el cálculo de huella de carbono
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
        <form onSubmit={handleGenerarExcel} className="space-y-6">
          {/* Selección de empresa */}
          <div>
            <label htmlFor="empresaId" className="block text-sm font-medium text-gray-700 mb-2">
              Empresa *
            </label>
            <input
              type="text"
              id="empresaId"
              value={empresaId}
              onChange={(e) => setEmpresaId(e.target.value)}
              placeholder="Ingresa el ID de la empresa"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-1">
              Puedes obtener el ID desde la página de empresas
            </p>
          </div>

          {/* Tipo de plantilla */}
          <div>
            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Plantilla
            </label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="basico">Básico</option>
              <option value="completo">Completo</option>
              <option value="detallado">Detallado</option>
            </select>
          </div>

          {/* Información */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <span className="font-medium">Nota:</span> La plantilla será generada según el tipo
              seleccionado. Puedes descargarla inmediatamente después.
            </p>
          </div>

          {/* Mensajes */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                Plantilla generada exitosamente. Tu descarga ha comenzado.
              </p>
            </div>
          )}

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Generando...' : 'Generar Plantilla'}
          </button>
        </form>
      </div>
    </div>
  )
}
