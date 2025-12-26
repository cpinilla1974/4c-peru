import Link from 'next/link'

export default function InformesAnualesPage() {
  // Datos de ejemplo de informes anuales
  const informes = [
    {
      año: 2024,
      titulo: 'Informe de Seguimiento Hoja de Ruta 2024',
      fecha: 'Marzo 2025',
      estado: 'Publicado',
      emisionPromedio: 580,
      reduccion: 0,
      pdfUrl: '#'
    },
    {
      año: 2023,
      titulo: 'Informe de Seguimiento Hoja de Ruta 2023',
      fecha: 'Marzo 2024',
      estado: 'Publicado',
      emisionPromedio: 590,
      reduccion: -1.7,
      pdfUrl: '#'
    },
  ]

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-secondary badge-lg">MRV</span>
            <span className="badge badge-outline badge-lg border-white/40 text-white">Informes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Informes Anuales de Seguimiento</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Reportes anuales de progreso del sector cementero peruano hacia las metas de reducción
            de emisiones establecidas en la Hoja de Ruta 2050.
          </p>
        </div>
      </section>

      {/* Resumen Ejecutivo */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Progreso Sectorial</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card bg-base-100 border border-gray-200 shadow-sm">
              <div className="card-body text-center">
                <div className="text-sm font-semibold text-gray-500 mb-2">Línea Base 2024</div>
                <div className="text-4xl font-bold text-gray-900">580</div>
                <div className="text-xs text-gray-600">kg CO₂/t cemento</div>
              </div>
            </div>

            <div className="card bg-base-100 border border-gray-200 shadow-sm">
              <div className="card-body text-center">
                <div className="text-sm font-semibold text-gray-500 mb-2">Meta 2030</div>
                <div className="text-4xl font-bold text-secondary">520</div>
                <div className="text-xs text-gray-600">kg CO₂/t cemento</div>
              </div>
            </div>

            <div className="card bg-base-100 border border-gray-200 shadow-sm">
              <div className="card-body text-center">
                <div className="text-sm font-semibold text-gray-500 mb-2">Reducción Objetivo</div>
                <div className="text-4xl font-bold text-gray-900">-10.3%</div>
                <div className="text-xs text-gray-600">2024-2030</div>
              </div>
            </div>

            <div className="card bg-primary text-white shadow-md">
              <div className="card-body text-center">
                <div className="text-sm font-semibold text-white/80 mb-2">Empresas Reportando</div>
                <div className="text-4xl font-bold">8</div>
                <div className="text-xs text-white/90">100% del sector</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Informes */}
      <section className="py-16 px-6 md:px-20 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Informes Disponibles</h2>

          <div className="space-y-6">
            {informes.map((informe) => (
              <div key={informe.año} className="card bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="badge badge-primary badge-lg">{informe.año}</span>
                        <span className="badge badge-outline badge-success">{informe.estado}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{informe.titulo}</h3>
                      <p className="text-sm text-gray-500">Publicado: {informe.fecha}</p>
                    </div>

                    {/* Métricas */}
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="text-sm text-gray-500 mb-1">Emisión Promedio</div>
                        <div className="text-2xl font-bold text-gray-900">{informe.emisionPromedio}</div>
                        <div className="text-xs text-gray-500">kg CO₂/t</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-500 mb-1">Reducción vs Anterior</div>
                        <div className={`text-2xl font-bold ${informe.reduccion < 0 ? 'text-success' : 'text-gray-400'}`}>
                          {informe.reduccion > 0 ? '+' : ''}{informe.reduccion}%
                        </div>
                      </div>
                    </div>

                    {/* Acciones */}
                    <div className="flex gap-2">
                      <a
                        href={informe.pdfUrl}
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Descargar PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Próximo informe */}
            <div className="card bg-base-200 border border-dashed border-gray-300">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="badge badge-outline badge-lg">2025</span>
                      <span className="badge badge-outline badge-warning">En Proceso</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Informe de Seguimiento Hoja de Ruta 2025</h3>
                    <p className="text-sm text-gray-500">Publicación estimada: Marzo 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicadores Clave */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Indicadores de los Informes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Emisiones CO₂</h3>
                    <p className="text-gray-600">
                      Evolución anual de las emisiones promedio del sector y por empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ejes Estratégicos</h3>
                    <p className="text-gray-600">
                      Progreso en factor clínker, eficiencia energética y combustibles alternativos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Benchmarking</h3>
                    <p className="text-gray-600">
                      Comparación con estándares nacionales e internacionales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Sistema MRV</h2>
          <p className="text-xl text-white/90 mb-8">
            Conoce más sobre el sistema de monitoreo, reporte y verificación de la industria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mrv/sistema" className="btn btn-secondary btn-lg">
              Ver Sistema MRV
            </Link>
            <Link href="/hoja-de-ruta" className="btn btn-ghost btn-lg bg-white/10 text-white hover:bg-white/20">
              Ver Hoja de Ruta
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
