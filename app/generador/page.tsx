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
        <h1 className="text-4xl font-bold text-primary">Generador de Plantillas Excel</h1>
        <p className="text-lg text-base-content/70 mt-2">
          Crea plantillas personalizadas para el cálculo de huella de carbono
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-primary">Crear Plantilla</h2>
            <form onSubmit={handleGenerarExcel} className="space-y-6">
              {/* Selección de empresa */}
              <div>
                <label htmlFor="empresaId" className="label">
                  <span className="label-text font-semibold">Empresa *</span>
                </label>
                <input
                  type="text"
                  id="empresaId"
                  value={empresaId}
                  onChange={(e) => setEmpresaId(e.target.value)}
                  placeholder="Ingresa el ID de la empresa"
                  className="input input-bordered input-primary w-full"
                />
                <label className="label">
                  <span className="label-text-alt">Puedes obtener el ID desde la página de empresas</span>
                </label>
              </div>

              {/* Tipo de plantilla */}
              <div>
                <label htmlFor="tipo" className="label">
                  <span className="label-text font-semibold">Tipo de Plantilla</span>
                </label>
                <select
                  id="tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="select select-bordered select-primary w-full"
                >
                  <option value="basico">Básico</option>
                  <option value="completo">Completo</option>
                  <option value="detallado">Detallado</option>
                </select>
              </div>

              {/* Mensajes */}
              {error && (
                <div className="alert alert-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Plantilla generada. Tu descarga ha comenzado.</span>
                </div>
              )}

              {/* Botón */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Generando...
                  </>
                ) : (
                  '📊 Generar Plantilla'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Información */}
        <div className="space-y-4">
          <div className="card bg-info text-info-content shadow-lg">
            <div className="card-body">
              <h3 className="card-title">¿Cómo funciona?</h3>
              <p>
                La plantilla será generada según el tipo seleccionado. Puedes descargarla inmediatamente después y completar los datos de tu empresa.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-primary">Tipos de Plantilla</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-secondary">Básico</h4>
                  <p className="text-sm text-base-content/70">Información esencial para el cálculo</p>
                </div>
                <div className="divider my-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">Completo</h4>
                  <p className="text-sm text-base-content/70">Incluye secciones adicionales</p>
                </div>
                <div className="divider my-2"></div>
                <div>
                  <h4 className="font-semibold text-secondary">Detallado</h4>
                  <p className="text-sm text-base-content/70">Análisis completo con detalles granulares</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
