import Link from 'next/link'

export default function MRVHojaRutaPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-primary badge-lg">Pilar 2</span>
            <span className="badge badge-outline badge-lg border-white/40 text-white">4C</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">MRV Hoja de Ruta Perú</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Sistema sectorial de medición y reporte para el seguimiento anual de las metas establecidas
            en la Hoja de Ruta de la Industria del Cemento y Concreto del Perú.
          </p>
        </div>
      </section>

      {/* Objetivo */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Objetivo</h2>
          <div className="card bg-base-100 border border-gray-200 shadow-sm">
            <div className="card-body">
              <p className="text-lg text-gray-700">
                Diseñar un sistema sectorial de reporte y seguimiento de indicadores para verificar el
                cumplimiento anual de las metas establecidas en la Hoja de Ruta de la Industria del Cemento
                y Concreto del Perú hacia la carbono neutralidad 2050.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metas */}
      <section className="py-16 px-6 md:px-20 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Metas de Reducción</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Meta 2024 */}
            <div className="card bg-white border border-gray-200 shadow-md">
              <div className="card-body text-center">
                <div className="text-sm font-bold text-gray-500 mb-2">Línea Base</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">580</div>
                <div className="text-sm text-gray-600 mb-4">kg CO₂/t cemento</div>
                <div className="badge badge-outline">2024</div>
              </div>
            </div>

            {/* Meta 2030 */}
            <div className="card bg-secondary text-white shadow-lg transform scale-105">
              <div className="card-body text-center">
                <div className="text-sm font-bold text-white/80 mb-2">Meta 2030</div>
                <div className="text-5xl font-bold mb-2">520</div>
                <div className="text-sm text-white/90 mb-4">kg CO₂/t cemento</div>
                <div className="badge badge-outline border-white/40 text-white">-10.3%</div>
              </div>
            </div>

            {/* Meta 2050 */}
            <div className="card bg-white border border-gray-200 shadow-md">
              <div className="card-body text-center">
                <div className="text-sm font-bold text-gray-500 mb-2">Meta 2050</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">350</div>
                <div className="text-sm text-gray-600 mb-4">kg CO₂/t cemento</div>
                <div className="badge badge-outline">-39.7%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Características del Sistema</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Confidencialidad</h3>
                    <p className="text-gray-600">
                      Diseño con procedimientos robustos de confidencialidad y resguardo de datos de cada compañía,
                      garantizando privacidad empresarial.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Indicadores Estandarizados</h3>
                    <p className="text-gray-600">
                      Planilla estandarizada de medición y reporte de emisiones con indicadores clave para
                      seguimiento de la Hoja de Ruta.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Benchmarking Nacional</h3>
                    <p className="text-gray-600">
                      Sistema de comparación y análisis de desempeño entre plantas a nivel nacional,
                      promoviendo mejores prácticas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Coordinación ASOCEM-FICEM</h3>
                    <p className="text-gray-600">
                      Integración de resultados y revisión de consistencia con apoyo técnico regional de FICEM
                      y coordinación nacional de ASOCEM.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Indicadores de Seguimiento</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">Factor Clínker</div>
                <div className="text-3xl font-bold text-gray-900">0.70</div>
                <div className="text-xs text-gray-600">Meta 2030</div>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">TSR</div>
                <div className="text-3xl font-bold text-gray-900">12%</div>
                <div className="text-xs text-gray-600">Combustibles Alternativos</div>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">Emisiones</div>
                <div className="text-3xl font-bold text-gray-900">520</div>
                <div className="text-xs text-gray-600">kg CO₂/t cemento</div>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-secondary shadow-sm">
              <div className="card-body">
                <div className="text-sm font-semibold text-gray-500">Reducción</div>
                <div className="text-3xl font-bold text-gray-900">-10%</div>
                <div className="text-xs text-gray-600">vs Línea Base</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Implementación</h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="badge badge-secondary badge-lg">Fase 1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diciembre 2025</h3>
                <p className="text-gray-600">Protocolo de captura de datos y planilla de reporte inicial</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="badge badge-secondary badge-lg">Fase 2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Junio 2026</h3>
                <p className="text-gray-600">Planilla consolidada con indicadores de seguimiento de la Hoja de Ruta</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="badge badge-outline badge-lg">Ciclo Anual</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reportes Anuales</h3>
                <p className="text-gray-600">Seguimiento continuo del progreso hacia las metas 2030 y 2050</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-secondary to-secondary/80">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Seguimiento de Metas 2030</h2>
          <p className="text-xl text-white/90 mb-8">
            Accede al sistema para reportar el progreso de tu empresa hacia las metas de la Hoja de Ruta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="btn btn-primary btn-lg">
              Acceder al Sistema
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
