import Link from 'next/link'

export default function ProtocoloProducePage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-secondary badge-lg">Pilar 1</span>
            <span className="badge badge-outline badge-lg border-white/40 text-white">Anual</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Protocolo PRODUCE</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Sistema estandarizado de captura, cálculo y análisis de datos para el cumplimiento regulatorio anual
            ante el Ministerio de la Producción y el sistema nacional de MRV.
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
                Proveer a PRODUCE de un protocolo estandarizado y una herramienta técnica que permita
                recopilar, analizar y verificar datos del sector cementero en forma anual, garantizando
                la integración y compatibilidad con el sistema nacional de MRV.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-6 md:px-20 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Características del Sistema</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Captura de Datos</h3>
                <p className="text-gray-600">
                  Estructura estandarizada para solicitar datos de producción, consumo energético y emisiones
                  a las empresas del sector.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cálculos Automáticos</h3>
                <p className="text-gray-600">
                  Integración y procesamiento automático de resultados bajo metodología IPCC 2006 y
                  estándares nacionales.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Análisis de Consistencia</h3>
                <p className="text-gray-600">
                  Verificación cruzada de datos mediante criterios comparativos y benchmarking sectorial
                  para garantizar calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Proceso Anual</h2>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Solicitud de Datos</h3>
                <p className="text-gray-600">
                  PRODUCE solicita información anual a las empresas mediante plantillas estandarizadas.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Carga y Validación</h3>
                <p className="text-gray-600">
                  Las empresas completan las plantillas Excel y envían los datos para validación inicial.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Procesamiento y Análisis</h3>
                <p className="text-gray-600">
                  El sistema realiza cálculos automáticos y ejecuta análisis de consistencia cruzada.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reporte Final</h3>
                <p className="text-gray-600">
                  Generación del reporte consolidado para PRODUCE y el sistema nacional de MRV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actores */}
      <section className="py-16 px-6 md:px-20 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Actores Involucrados</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card bg-white border-t-4 border-primary shadow-md">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold text-primary mb-2">FICEM</h3>
                <p className="text-sm text-gray-600">
                  Coordinación técnica regional y desarrollo metodológico
                </p>
              </div>
            </div>

            <div className="card bg-white border-t-4 border-primary shadow-md">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold text-primary mb-2">ASOCEM</h3>
                <p className="text-sm text-gray-600">
                  Coordinación nacional y gestión con empresas
                </p>
              </div>
            </div>

            <div className="card bg-white border-t-4 border-primary shadow-md">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold text-primary mb-2">PRODUCE</h3>
                <p className="text-sm text-gray-600">
                  Validación técnica y compatibilidad MRV nacional
                </p>
              </div>
            </div>

            <div className="card bg-white border-t-4 border-primary shadow-md">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold text-primary mb-2">Empresas</h3>
                <p className="text-sm text-gray-600">
                  Provisión de datos bajo acuerdos de confidencialidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ciclo Actual 2024-2025</h2>
          <p className="text-xl text-white/90 mb-8">
            Accede al sistema para cargar los datos de tu empresa y cumplir con el reporte anual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="btn btn-secondary btn-lg">
              Acceder al Sistema
            </Link>
            <Link href="/" className="btn btn-ghost btn-lg bg-white/10 text-white hover:bg-white/20">
              Volver a Inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
