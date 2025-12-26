import Link from 'next/link'

export default function ProtocoloFicemPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-primary badge-lg">FICEM</span>
            <span className="badge badge-outline badge-lg border-white/40 text-white">Protocolo MRV</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Protocolo MRV FICEM</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Protocolo sectorial de medición, reporte y verificación desarrollado por la industria cementera
            para el seguimiento de la Hoja de Ruta hacia la carbono neutralidad 2050.
          </p>
        </div>
      </section>

      {/* Diferencias con PRODUCE */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Protocolo de la Industria</h2>

          <div className="alert alert-info mb-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold">Diferencia con Protocolo PRODUCE</h3>
              <div className="text-sm">
                El Protocolo FICEM es desarrollado por la industria para seguimiento voluntario de la Hoja de Ruta,
                mientras que el Protocolo PRODUCE es el marco regulatorio gubernamental obligatorio.
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FICEM */}
            <div className="card bg-secondary/5 border-2 border-secondary">
              <div className="card-body">
                <h3 className="text-2xl font-bold text-secondary mb-4">Protocolo FICEM</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Origen: Industria cementera (FICEM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Seguimiento Hoja de Ruta sectorial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Indicadores específicos de ejes estratégicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Benchmarking sectorial voluntario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Coordinación ASOCEM-FICEM</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* PRODUCE */}
            <div className="card bg-base-100 border border-gray-200">
              <div className="card-body">
                <h3 className="text-2xl font-bold text-primary mb-4">Protocolo PRODUCE</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Origen: Ministerio de la Producción</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cumplimiento regulatorio obligatorio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Integración con MRV nacional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reportes anuales obligatorios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Validación gubernamental</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section className="py-16 px-6 md:px-20 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Objetivo del Protocolo</h2>
          <div className="card bg-white border border-gray-200 shadow-sm">
            <div className="card-body">
              <p className="text-lg text-gray-700">
                Establecer una metodología estandarizada y voluntaria para que las empresas del sector cemento
                puedan medir, reportar y verificar su progreso hacia las metas de reducción de emisiones
                definidas en la Hoja de Ruta de la Industria hacia la carbono neutralidad 2050.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Características del Protocolo</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Alineación GCCA</h3>
                    <p className="text-gray-600">
                      Metodología alineada con los estándares de la Global Cement and Concrete Association
                      para garantizar comparabilidad internacional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ejes Estratégicos</h3>
                    <p className="text-gray-600">
                      Seguimiento detallado de los 5 ejes: factor clínker, eficiencia energética,
                      electricidad, carbonatación y CCUS.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Benchmarking Sectorial</h3>
                    <p className="text-gray-600">
                      Sistema de comparación confidencial entre empresas para identificar mejores prácticas
                      y oportunidades de mejora.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Apoyo Técnico Regional</h3>
                    <p className="text-gray-600">
                      Soporte técnico de FICEM y coordinación nacional de ASOCEM para implementación
                      y mejora continua del protocolo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicadores */}
      <section className="py-16 px-6 md:px-20 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Indicadores Clave</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">Emisiones Totales</div>
                <div className="text-3xl font-bold text-gray-900">kg CO₂/t</div>
                <div className="text-xs text-gray-600">Alcance 1, 2 y 3</div>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">Factor Clínker</div>
                <div className="text-3xl font-bold text-gray-900">Ratio</div>
                <div className="text-xs text-gray-600">Clínker/Cemento</div>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">TSR</div>
                <div className="text-3xl font-bold text-gray-900">%</div>
                <div className="text-xs text-gray-600">Combustibles Alternativos</div>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">Energía Eléctrica</div>
                <div className="text-3xl font-bold text-gray-900">kWh/t</div>
                <div className="text-xs text-gray-600">Renovable vs Total</div>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">Carbonatación</div>
                <div className="text-3xl font-bold text-gray-900">kg CO₂</div>
                <div className="text-xs text-gray-600">Reabsorbido</div>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">CCUS</div>
                <div className="text-3xl font-bold text-gray-900">t CO₂</div>
                <div className="text-xs text-gray-600">Capturado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-secondary to-secondary/80">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Accede al Sistema de Reporte</h2>
          <p className="text-xl text-white/90 mb-8">
            Las empresas pueden acceder al sistema para reportar su progreso según el Protocolo FICEM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="btn btn-primary btn-lg">
              Acceder al Sistema
            </Link>
            <Link href="/mrv/sistema" className="btn btn-ghost btn-lg bg-white/10 text-white hover:bg-white/20">
              Ver Sistema MRV
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
