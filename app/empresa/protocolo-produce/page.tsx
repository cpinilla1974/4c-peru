'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import { procesosService, submissionsService } from '@/lib/api/procesos'
import type { Proceso, Submission } from '@/types/proceso'

function ProtocoloPRODUCEEmpresaContent() {
  const { user } = useAuth()
  const [proceso, setProceso] = useState<Proceso | null>(null)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [uploadingFile, setUploadingFile] = useState(false)
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)

  useEffect(() => {
    loadData()
  }, [user])

  const loadData = async () => {
    if (!user?.empresa_id) return

    try {
      setLoading(true)
      const [procesoData, submissionsData] = await Promise.all([
        procesosService.getProceso('produce-peru-2024'),
        submissionsService.getSubmissions('produce-peru-2024', user.empresa_id),
      ])
      setProceso(procesoData)
      setSubmissions(submissionsData)
    } catch (error) {
      console.error('Error cargando datos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateSubmission = async () => {
    if (!user?.empresa_id || !proceso) return

    try {
      const newSubmission = await submissionsService.createSubmission({
        proceso_id: proceso.id,
        empresa_id: user.empresa_id,
      })
      setSubmissions([...submissions, newSubmission])
      setSelectedSubmission(newSubmission)
    } catch (error) {
      console.error('Error creando envío:', error)
    }
  }

  const handleDownloadTemplate = async () => {
    if (!proceso) return

    try {
      const blob = await procesosService.downloadTemplate(proceso.id)
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'PRODUCE_2024_Template.xlsx'
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error descargando plantilla:', error)
    }
  }

  const handleFileUpload = async (submissionId: string, file: File) => {
    try {
      setUploadingFile(true)
      const updated = await submissionsService.uploadFile(submissionId, file)
      setSubmissions(submissions.map(s => s.id === submissionId ? updated : s))
      setSelectedSubmission(updated)
    } catch (error) {
      console.error('Error cargando archivo:', error)
    } finally {
      setUploadingFile(false)
    }
  }

  const handleValidate = async (submissionId: string) => {
    try {
      const validated = await submissionsService.validateSubmission(submissionId)
      setSubmissions(submissions.map(s => s.id === submissionId ? validated : s))
      setSelectedSubmission(validated)
    } catch (error) {
      console.error('Error validando:', error)
    }
  }

  const handleSubmit = async (submissionId: string) => {
    try {
      const submitted = await submissionsService.submitSubmission(submissionId)
      setSubmissions(submissions.map(s => s.id === submissionId ? submitted : s))
      setSelectedSubmission(submitted)
    } catch (error) {
      console.error('Error enviando:', error)
    }
  }

  const getEstadoBadge = (estado: string) => {
    const badges = {
      borrador: 'badge-neutral',
      enviado: 'badge-info',
      en_revision: 'badge-warning',
      rechazado: 'badge-error',
      validado: 'badge-success',
      publicado: 'badge-primary',
    }
    return badges[estado as keyof typeof badges] || 'badge-neutral'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

  if (!proceso) {
    return (
      <div className="p-6">
        <div className="alert alert-error">
          <span>No se pudo cargar el proceso PRODUCE 2024-2025</span>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{proceso.nombre}</h1>
            <p className="text-gray-600 mt-1">{proceso.descripcion}</p>
          </div>
          <span className={`badge ${proceso.estado === 'activo' ? 'badge-success' : 'badge-neutral'}`}>
            {proceso.estado}
          </span>
        </div>

        {/* Info del ciclo */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-base-100 border border-gray-200">
            <div className="card-body p-4">
              <p className="text-sm text-gray-600">Fecha Inicio</p>
              <p className="text-lg font-semibold">{new Date(proceso.fecha_inicio).toLocaleDateString('es-PE')}</p>
            </div>
          </div>
          <div className="card bg-base-100 border border-gray-200">
            <div className="card-body p-4">
              <p className="text-sm text-gray-600">Fecha Cierre</p>
              <p className="text-lg font-semibold">{new Date(proceso.fecha_cierre).toLocaleDateString('es-PE')}</p>
            </div>
          </div>
          <div className="card bg-base-100 border border-gray-200">
            <div className="card-body p-4">
              <p className="text-sm text-gray-600">Ciclo</p>
              <p className="text-lg font-semibold">{proceso.metadata.ciclo}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="mb-6 flex gap-3">
        <button
          onClick={handleDownloadTemplate}
          className="btn btn-outline btn-primary"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar Plantilla
        </button>
        <button
          onClick={handleCreateSubmission}
          className="btn btn-primary"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nuevo Envío
        </button>
      </div>

      {/* Lista de envíos */}
      <div className="card bg-base-100 border border-gray-200">
        <div className="card-body">
          <h2 className="card-title text-lg mb-4">Mis Envíos</h2>

          {submissions.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-600 mb-4">No tienes envíos todavía</p>
              <button onClick={handleCreateSubmission} className="btn btn-primary btn-sm">
                Crear primer envío
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Estado</th>
                    <th>Archivo</th>
                    <th>Validación</th>
                    <th>Creado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map(submission => (
                    <tr key={submission.id}>
                      <td className="font-mono text-sm">{submission.id}</td>
                      <td>
                        <span className={`badge ${getEstadoBadge(submission.estado)}`}>
                          {submission.estado}
                        </span>
                      </td>
                      <td>
                        {submission.archivo_nombre || (
                          <span className="text-gray-400 text-sm">Sin archivo</span>
                        )}
                      </td>
                      <td>
                        {submission.validacion_resultado ? (
                          submission.validacion_resultado.valido ? (
                            <span className="text-success text-sm">✓ Válido</span>
                          ) : (
                            <span className="text-error text-sm">✗ Errores</span>
                          )
                        ) : (
                          <span className="text-gray-400 text-sm">-</span>
                        )}
                      </td>
                      <td className="text-sm">
                        {new Date(submission.creado_en).toLocaleDateString('es-PE')}
                      </td>
                      <td>
                        <button
                          onClick={() => setSelectedSubmission(submission)}
                          className="btn btn-sm btn-ghost"
                        >
                          Ver
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal de detalle */}
      {selectedSubmission && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Envío {selectedSubmission.id}</h3>

            <div className="mb-4">
              <span className={`badge ${getEstadoBadge(selectedSubmission.estado)}`}>
                {selectedSubmission.estado}
              </span>
            </div>

            {/* Upload de archivo */}
            {selectedSubmission.estado === 'borrador' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cargar archivo Excel
                </label>
                <input
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleFileUpload(selectedSubmission.id, file)
                  }}
                  className="file-input file-input-bordered w-full"
                  disabled={uploadingFile}
                />
                {uploadingFile && <progress className="progress w-full mt-2"></progress>}
              </div>
            )}

            {/* Archivo cargado */}
            {selectedSubmission.archivo_nombre && (
              <div className="alert alert-info mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{selectedSubmission.archivo_nombre}</span>
              </div>
            )}

            {/* Resultado de validación */}
            {selectedSubmission.validacion_resultado && (
              <div className={`alert ${selectedSubmission.validacion_resultado.valido ? 'alert-success' : 'alert-error'} mb-4`}>
                <div>
                  <p className="font-semibold">
                    {selectedSubmission.validacion_resultado.valido ? '✓ Validación exitosa' : '✗ Errores encontrados'}
                  </p>
                  {selectedSubmission.validacion_resultado.errores && selectedSubmission.validacion_resultado.errores.length > 0 && (
                    <ul className="mt-2 text-sm">
                      {selectedSubmission.validacion_resultado.errores.map((error, idx) => (
                        <li key={idx}>
                          Fila {error.fila}, {error.columna}: {error.mensaje}
                        </li>
                      ))}
                    </ul>
                  )}
                  {selectedSubmission.validacion_resultado.advertencias && selectedSubmission.validacion_resultado.advertencias.length > 0 && (
                    <ul className="mt-2 text-sm">
                      {selectedSubmission.validacion_resultado.advertencias.map((adv, idx) => (
                        <li key={idx} className="text-warning">
                          ⚠ Fila {adv.fila}, {adv.columna}: {adv.mensaje}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            {/* Comentarios */}
            {selectedSubmission.comentarios && selectedSubmission.comentarios.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Comentarios</h4>
                {selectedSubmission.comentarios.map(comment => (
                  <div key={comment.id} className="bg-gray-50 p-3 rounded-lg mb-2">
                    <p className="text-sm font-medium">{comment.usuario_nombre}</p>
                    <p className="text-sm text-gray-600">{comment.texto}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(comment.creado_en).toLocaleString('es-PE')}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Acciones */}
            <div className="modal-action">
              <button onClick={() => setSelectedSubmission(null)} className="btn">
                Cerrar
              </button>

              {selectedSubmission.estado === 'borrador' && selectedSubmission.archivo_nombre && !selectedSubmission.validacion_resultado && (
                <button onClick={() => handleValidate(selectedSubmission.id)} className="btn btn-primary">
                  Validar Datos
                </button>
              )}

              {selectedSubmission.estado === 'borrador' && selectedSubmission.validacion_resultado?.valido && (
                <button onClick={() => handleSubmit(selectedSubmission.id)} className="btn btn-success">
                  Confirmar Envío
                </button>
              )}
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setSelectedSubmission(null)}></div>
        </div>
      )}
    </div>
  )
}

export default function ProtocoloPRODUCEEmpresa() {
  return (
    <ProtectedRoute allowedRoles={['empresa']}>
      <ProtocoloPRODUCEEmpresaContent />
    </ProtectedRoute>
  )
}
