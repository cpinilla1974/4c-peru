'use client'

import { useState, useRef } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Link from 'next/link'

type EstadoEnvio = 'BORRADOR' | 'ENVIADO' | 'EN_REVISION' | 'APROBADO' | 'RECHAZADO'

interface Comentario {
  id: string
  autor: string
  fecha: string
  mensaje: string
}

function MiEnvioContent() {
  const { user } = useAuth()
  const [estadoEnvio, setEstadoEnvio] = useState<EstadoEnvio>('BORRADOR')
  const [archivo, setArchivo] = useState<File | null>(null)
  const [arrastrando, setArrastrando] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Datos de ejemplo
  const comentarios: Comentario[] = []

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setArrastrando(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setArrastrando(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setArrastrando(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      setArchivo(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setArchivo(files[0])
    }
  }

  const handleEnviar = async () => {
    if (!archivo) return
    setEnviando(true)
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    setEstadoEnvio('ENVIADO')
    setEnviando(false)
  }

  const getEstadoIndex = (estado: EstadoEnvio) => {
    const estados: EstadoEnvio[] = ['BORRADOR', 'ENVIADO', 'EN_REVISION', 'APROBADO']
    return estados.indexOf(estado)
  }

  const pasos = [
    { id: 'BORRADOR', label: 'Borrador', descripcion: 'Aún no has enviado tu reporte.' },
    { id: 'ENVIADO', label: 'Enviado', descripcion: 'Tu reporte fue enviado al coordinador.' },
    { id: 'EN_REVISION', label: 'En Revisión', descripcion: 'El coordinador está revisando tu reporte.' },
    { id: 'APROBADO', label: 'Aprobado', descripcion: 'Tu reporte ha sido aprobado.' },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black tracking-tight">Mi Envío: Reporte Anual 2024</h1>
        <p className="text-primary/80 mt-1">Gestiona la subida de tu reporte de huella de carbono.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna principal (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Paso 1: Descargar plantilla */}
          <section>
            <h2 className="text-xl font-bold mb-3">1. Descargar y completar plantilla</h2>
            <p className="text-base-content/60 mb-4">
              Descarga la plantilla de Excel, completa todos los campos requeridos y guarda el archivo para subirlo.
            </p>
            <button className="btn btn-outline btn-primary gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Descargar Plantilla Excel
            </button>
          </section>

          {/* Paso 2: Cargar archivo */}
          <section>
            <h2 className="text-xl font-bold mb-3">2. Cargar archivo</h2>
            <div
              className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors ${
                arrastrando
                  ? 'border-primary bg-primary/5'
                  : 'border-primary/40 hover:border-primary/60'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {archivo ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-success">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{archivo.name}</span>
                  </div>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setArchivo(null)}
                  >
                    Cambiar archivo
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-lg font-bold">Arrastra y suelta tu archivo aquí</p>
                  <p className="text-base-content/60 text-sm">o haz clic para seleccionar</p>
                  <button
                    className="btn btn-outline btn-primary btn-sm"
                    onClick={() => inputRef.current?.click()}
                  >
                    Seleccionar archivo
                  </button>
                  <input
                    ref={inputRef}
                    type="file"
                    accept=".xlsx,.xls"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </div>
              )}
            </div>
          </section>

          {/* Botón Enviar */}
          <div className="flex justify-end">
            <button
              className="btn btn-primary btn-lg gap-2"
              disabled={!archivo || enviando || estadoEnvio !== 'BORRADOR'}
              onClick={handleEnviar}
            >
              {enviando ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Enviando...
                </>
              ) : (
                'Enviar Reporte'
              )}
            </button>
          </div>
        </div>

        {/* Columna lateral (1/3) */}
        <div className="space-y-6">
          {/* Estado del Envío */}
          <div className="card bg-base-100 border border-primary/10 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">Estado del Envío</h2>

              {/* Badge de estado */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm text-base-content/60">Estado:</span>
                <span className={`badge badge-lg font-bold ${
                  estadoEnvio === 'BORRADOR' ? 'badge-ghost' :
                  estadoEnvio === 'ENVIADO' ? 'badge-info' :
                  estadoEnvio === 'EN_REVISION' ? 'badge-warning' :
                  estadoEnvio === 'APROBADO' ? 'badge-success' :
                  'badge-error'
                }`}>
                  {estadoEnvio === 'EN_REVISION' ? 'En Revisión' : estadoEnvio.charAt(0) + estadoEnvio.slice(1).toLowerCase()}
                </span>
              </div>

              {/* Timeline de estados */}
              <div className="relative pl-6">
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-primary/20"></div>

                {pasos.map((paso, index) => {
                  const estadoActual = getEstadoIndex(estadoEnvio)
                  const estaCompleto = index <= estadoActual
                  const esActual = paso.id === estadoEnvio

                  return (
                    <div key={paso.id} className="relative mb-6 last:mb-0">
                      <div className={`absolute -left-4 top-1 w-5 h-5 rounded-full flex items-center justify-center ${
                        estaCompleto ? 'bg-primary text-white' : 'border-2 border-primary/30 bg-base-100'
                      }`}>
                        {estaCompleto && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className={`font-medium ${esActual ? 'text-primary' : estaCompleto ? '' : 'text-base-content/50'}`}>
                          {paso.label}
                        </p>
                        {esActual && (
                          <p className="text-sm text-base-content/60">{paso.descripcion}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Historial de Comentarios */}
          <div className="card bg-base-100 border border-primary/10 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">Historial de Comentarios</h2>

              {comentarios.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-base-content/50">Aún no hay comentarios del coordinador.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {comentarios.map((c) => (
                    <div key={c.id} className="border-l-2 border-primary/30 pl-3">
                      <p className="text-sm font-medium">{c.autor}</p>
                      <p className="text-xs text-base-content/50 mb-1">{c.fecha}</p>
                      <p className="text-sm">{c.mensaje}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MiEnvioPage() {
  return (
    <ProtectedRoute allowedRoles={['empresa']}>
      <MiEnvioContent />
    </ProtectedRoute>
  )
}
