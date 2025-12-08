'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

type EstadoEnvio = 'BORRADOR' | 'ENVIADO' | 'EN_REVISION' | 'RECHAZADO' | 'VALIDADO' | 'PUBLICADO'

interface Envio {
  id: string
  empresa: string
  ruc: string
  fechaEnvio: string | null
  estado: EstadoEnvio
  año: number
}

function PendientesContent() {
  const { user } = useAuth()
  const [filtroEstado, setFiltroEstado] = useState<string>('Todos')
  const [envioSeleccionado, setEnvioSeleccionado] = useState<Envio | null>(null)
  const [comentario, setComentario] = useState('')
  const [procesando, setProcesando] = useState(false)

  // Datos de ejemplo
  const [envios, setEnvios] = useState<Envio[]>([
    { id: '1', empresa: 'Cemento Andino S.A.', ruc: '20100130207', fechaEnvio: '2024-05-10', estado: 'ENVIADO', año: 2023 },
    { id: '2', empresa: 'Unión Andina de Cementos', ruc: '20100137390', fechaEnvio: '2024-05-09', estado: 'EN_REVISION', año: 2023 },
    { id: '3', empresa: 'Cementos Pacasmayo', ruc: '20100131359', fechaEnvio: '2024-05-08', estado: 'VALIDADO', año: 2023 },
    { id: '4', empresa: 'Caliza Cemento Inca S.A.', ruc: '20293700093', fechaEnvio: '2024-05-07', estado: 'RECHAZADO', año: 2023 },
    { id: '5', empresa: 'Yura S.A.', ruc: '20100147514', fechaEnvio: '2024-05-06', estado: 'PUBLICADO', año: 2023 },
    { id: '6', empresa: 'Concretos Supermix S.A.', ruc: '20454492524', fechaEnvio: null, estado: 'BORRADOR', año: 2023 },
  ])

  const getEstadoBadge = (estado: EstadoEnvio) => {
    const config: Record<EstadoEnvio, { bg: string; text: string; dot: string }> = {
      BORRADOR: { bg: 'bg-base-200', text: 'text-base-content/70', dot: 'bg-base-content/50' },
      ENVIADO: { bg: 'bg-info/10', text: 'text-info', dot: 'bg-info' },
      EN_REVISION: { bg: 'bg-warning/10', text: 'text-warning', dot: 'bg-warning' },
      RECHAZADO: { bg: 'bg-error/10', text: 'text-error', dot: 'bg-error' },
      VALIDADO: { bg: 'bg-success/10', text: 'text-success', dot: 'bg-success' },
      PUBLICADO: { bg: 'bg-secondary/10', text: 'text-secondary', dot: 'bg-secondary' },
    }
    return config[estado]
  }

  const getEstadoLabel = (estado: EstadoEnvio) => {
    const labels: Record<EstadoEnvio, string> = {
      BORRADOR: 'Borrador',
      ENVIADO: 'Enviado',
      EN_REVISION: 'En Revisión',
      RECHAZADO: 'Rechazado',
      VALIDADO: 'Validado',
      PUBLICADO: 'Publicado',
    }
    return labels[estado]
  }

  const enviosFiltrados = filtroEstado === 'Todos'
    ? envios
    : envios.filter(e => e.estado === filtroEstado)

  const handleAprobar = async () => {
    if (!envioSeleccionado) return
    setProcesando(true)
    await new Promise(r => setTimeout(r, 1000))
    setEnvios(envios.map(e =>
      e.id === envioSeleccionado.id ? { ...e, estado: 'VALIDADO' as EstadoEnvio } : e
    ))
    setEnvioSeleccionado(null)
    setComentario('')
    setProcesando(false)
  }

  const handleRechazar = async () => {
    if (!envioSeleccionado) return
    setProcesando(true)
    await new Promise(r => setTimeout(r, 1000))
    setEnvios(envios.map(e =>
      e.id === envioSeleccionado.id ? { ...e, estado: 'RECHAZADO' as EstadoEnvio } : e
    ))
    setEnvioSeleccionado(null)
    setComentario('')
    setProcesando(false)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">Tabla de envíos</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Filtros por estado:</span>
          <select
            className="select select-bordered select-sm"
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
          >
            <option>Todos</option>
            <option value="ENVIADO">Enviado</option>
            <option value="EN_REVISION">En Revisión</option>
            <option value="RECHAZADO">Rechazado</option>
            <option value="VALIDADO">Validado</option>
          </select>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto rounded-lg border border-base-200 bg-base-100 mb-8">
        <table className="table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Fecha envío</th>
              <th>Estado</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {enviosFiltrados.map((envio) => {
              const badge = getEstadoBadge(envio.estado)
              return (
                <tr key={envio.id} className="hover">
                  <td className="font-medium">{envio.empresa}</td>
                  <td>{envio.fechaEnvio || 'N/A'}</td>
                  <td>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
                      <span className={`w-2 h-2 rounded-full ${badge.dot}`}></span>
                      {getEstadoLabel(envio.estado)}
                    </span>
                  </td>
                  <td className="text-center">
                    {envio.estado !== 'BORRADOR' ? (
                      <button
                        className="link link-primary text-sm font-medium"
                        onClick={() => setEnvioSeleccionado(envio)}
                      >
                        {envio.estado === 'ENVIADO' || envio.estado === 'EN_REVISION' ? 'Revisar' : 'Ver Detalle'}
                      </button>
                    ) : (
                      <span className="text-base-content/30">N/A</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Modal de revisión */}
      {envioSeleccionado && (
        <div className="card bg-base-100 border border-base-200 shadow-lg">
          <div className="card-body">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="card-title">Revisión de Envío: {envioSeleccionado.empresa}</h3>
                <p className="text-sm text-base-content/60">
                  Enviado el {envioSeleccionado.fechaEnvio}
                </p>
              </div>
              <button
                className="btn btn-ghost btn-sm btn-circle"
                onClick={() => setEnvioSeleccionado(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Datos del envío */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <span className="text-xs font-bold uppercase text-base-content/50">Empresa</span>
                <p>{envioSeleccionado.empresa}</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-base-content/50">RUC</span>
                <p>{envioSeleccionado.ruc}</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-base-content/50">Año del Reporte</span>
                <p>{envioSeleccionado.año}</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-base-content/50">Estado Actual</span>
                <div className="mt-1">
                  {(() => {
                    const badge = getEstadoBadge(envioSeleccionado.estado)
                    return (
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
                        <span className={`w-2 h-2 rounded-full ${badge.dot}`}></span>
                        {getEstadoLabel(envioSeleccionado.estado)}
                      </span>
                    )
                  })()}
                </div>
              </div>
            </div>

            {/* Documentos adjuntos */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-base-content/70 mb-2">Documentos Adjuntos</h4>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-base-200 hover:bg-base-200/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span className="flex-grow text-sm font-medium">Reporte_Huella_Carbono_{envioSeleccionado.año}.pdf</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>

            {/* Acciones de revisión */}
            {(envioSeleccionado.estado === 'ENVIADO' || envioSeleccionado.estado === 'EN_REVISION') && (
              <div className="mt-6 pt-6 border-t border-base-200">
                <h4 className="text-sm font-bold text-base-content/70 mb-2">Acciones de Revisión</h4>
                <textarea
                  className="textarea textarea-bordered w-full mb-4"
                  placeholder="Añadir comentarios (opcional)..."
                  rows={3}
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="btn btn-error flex-1 gap-2"
                    onClick={handleRechazar}
                    disabled={procesando}
                  >
                    {procesando ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                      </svg>
                    )}
                    Rechazar
                  </button>
                  <button
                    className="btn btn-success flex-1 gap-2"
                    onClick={handleAprobar}
                    disabled={procesando}
                  >
                    {procesando ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>
                    )}
                    Aprobar y Validar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function PendientesPage() {
  return (
    <ProtectedRoute allowedRoles={['coordinador']}>
      <PendientesContent />
    </ProtectedRoute>
  )
}
