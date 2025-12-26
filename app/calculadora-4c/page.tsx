import Link from 'next/link'

export default function Calculadora4CPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-secondary badge-lg">Pilar 3</span>
            <span className="badge badge-outline badge-lg border-white/40 text-white">4C FICEM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Calculadora 4C Perú</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Herramienta técnica para la medición detallada de emisiones en clínker, cemento, concreto y CO₂,
            conforme al estándar EPD (A1–A3) con benchmarking y ranking de productos bajos en carbono.
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
                Desarrollar y aplicar la herramienta Calculadora 4C Perú, destinada a la medición precisa de
                emisiones por tipo de producto, generando curvas promedio de CO₂ por resistencia del concreto
                y estableciendo un sistema de benchmarking de productos bajos en carbono.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Los 4 Productos */}
      <section className="py-16 px-6 md:px-20 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Los 4 Productos Medidos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Producto 1 */}
            <div className="card bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clínker</h3>
                <p className="text-sm text-gray-600">
                  Producto intermedio con mayores emisiones de proceso
                </p>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="card bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cemento</h3>
                <p className="text-sm text-gray-600">
                  Diferentes tipos según factor clínker y adiciones
                </p>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="card bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Concreto</h3>
                <p className="text-sm text-gray-600">
                  Curvas CO₂ vs resistencia para optimización
                </p>
              </div>
            </div>

            {/* Producto 4 */}
            <div className="card bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">CO₂</h3>
                <p className="text-sm text-gray-600">
                  Medición y verificación de emisiones totales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Características Técnicas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Estándar EPD</h3>
                <p className="text-gray-600">
                  Cálculos conforme a Environmental Product Declaration (A1–A3), alineado con estándares
                  internacionales de certificación.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Curvas CO₂ vs Resistencia</h3>
                <p className="text-gray-600">
                  Cálculo de curvas promedio país de CO₂ en función de la resistencia del concreto,
                  permitiendo optimización por diseño.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="card-body">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Benchmarking y Ranking</h3>
                <p className="text-gray-600">
                  Sistema de clasificación y ranking de productos bajos en carbono, incentivando la
                  innovación y mejores prácticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 px-6 md:px-20 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Metodología de Cálculo</h2>

          <div className="space-y-6">
            <div className="card bg-white border-l-4 border-purple-600 shadow-sm">
              <div className="card-body">
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Captura de Datos por Producto</h3>
                <p className="text-gray-600">
                  Protocolos específicos de captura de datos para cada tipo de producto (clínker, cemento,
                  concreto, CO₂) con variables técnicas clave.
                </p>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-purple-600 shadow-sm">
              <div className="card-body">
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Cálculo de Emisiones EPD</h3>
                <p className="text-gray-600">
                  Cálculo automático de emisiones de ciclo de vida (A1–A3) según metodología EPD:
                  extracción de materias primas, transporte y manufactura.
                </p>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-purple-600 shadow-sm">
              <div className="card-body">
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Generación de Curvas Promedio</h3>
                <p className="text-gray-600">
                  Análisis estadístico de datos del sector para generar curvas promedio país de CO₂ en
                  función de la resistencia del concreto.
                </p>
              </div>
            </div>

            <div className="card bg-white border-l-4 border-purple-600 shadow-sm">
              <div className="card-body">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4. Benchmarking y Clasificación</h3>
                <p className="text-gray-600">
                  Comparación de productos versus curvas promedio y clasificación en categorías de
                  desempeño (bajo, medio, alto carbono).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Beneficios</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Decisiones Informadas</h3>
                <p className="text-gray-600">
                  Datos técnicos precisos para optimizar diseño de mezclas y selección de materiales.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Certificación EPD</h3>
                <p className="text-gray-600">
                  Base técnica para obtener declaraciones ambientales de productos reconocidas internacionalmente.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Ventaja Competitiva</h3>
                <p className="text-gray-600">
                  Diferenciación de productos bajos en carbono en licitaciones y proyectos sostenibles.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Innovación Sectorial</h3>
                <p className="text-gray-600">
                  Impulso a la investigación y desarrollo de productos de menor huella de carbono.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Calculadora Disponible Abril 2026</h2>
          <p className="text-xl text-white/90 mb-8">
            Herramienta técnica en desarrollo. Próximamente disponible para todas las empresas del sector.
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
