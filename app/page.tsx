import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-8 -mx-6 -my-10">
      {/* Hero Section con gradiente púrpura */}
      <section className="relative min-h-[480px] flex flex-col gap-6 items-start justify-end p-6 md:p-10 rounded-none md:rounded-xl overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(107, 29, 132, 0.95) 0%, rgba(107, 29, 132, 0.4) 100%),
            url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="flex flex-col gap-3 text-left max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="badge badge-secondary">Hoja de Ruta 2050</span>
            <span className="badge badge-ghost bg-white/20 text-white border-0">ASOCEM - FICEM</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Rumbo al 2050: Carbono Neutral
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
            El compromiso de la industria del cemento y concreto en Perú con la sostenibilidad y la descarbonización.
          </p>
        </div>
        <Link
          href="/empresa/dashboard"
          className="btn btn-secondary btn-lg w-full md:w-auto min-w-[200px]"
        >
          Explorar Hoja de Ruta
        </Link>
      </section>

      {/* KPIs Grid - Estilo cards con iconos */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body p-4 gap-3">
            <div className="text-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl font-bold">520</span>
              <span className="text-sm text-base-content/60">kgCO2/t cemento</span>
              <span className="text-xs font-medium text-secondary">Meta 2030</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 border border-base-300">
          <div className="card-body p-4 gap-3">
            <div className="text-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl font-bold">0.70</span>
              <span className="text-sm text-base-content/60">Factor Clínker</span>
              <span className="text-xs font-medium text-secondary">Meta 2030</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 border border-base-300">
          <div className="card-body p-4 gap-3">
            <div className="text-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl font-bold">12%</span>
              <span className="text-sm text-base-content/60">Combustibles Alternativos</span>
              <span className="text-xs font-medium text-secondary">TSR 2030</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 border border-base-300">
          <div className="card-body p-4 gap-3">
            <div className="text-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl font-bold">-32%</span>
              <span className="text-sm text-base-content/60">vs 1990</span>
              <span className="text-xs font-medium text-secondary">Reducción CO2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Card destacada - Desafío 2030 */}
      <section className="px-4">
        <div className="card bg-base-200 border border-base-300 overflow-hidden">
          <figure className="aspect-video w-full">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Planta cementera moderna con elementos de energía verde"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">Nuestro Desafío 2050</h2>
            <p className="text-base-content/70">
              La industria del cemento y el concreto en el Perú se encuentra ante un desafío histórico:
              responder al imperativo global de la descarbonización mientras acompaña el desarrollo
              económico y social del país.
            </p>
          </div>
        </div>
      </section>

      {/* Ejes Estratégicos - Estilo acordeón */}
      <section className="px-4 space-y-3">
        <h2 className="text-2xl font-bold px-0 pb-2">Ejes Estratégicos</h2>

        <details className="group card bg-base-200 border border-base-300" open>
          <summary className="card-body p-4 cursor-pointer list-none flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="badge badge-secondary badge-lg">35%</span>
              <span className="font-bold">Producción de Clínker y Cemento</span>
            </div>
            <svg className="w-5 h-5 text-base-content/60 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-4 text-base-content/70">
            <p className="mb-3">Reducción del factor clínker, eficiencia energética y coprocesamiento:</p>
            <ul className="space-y-1 text-sm">
              <li>15% Cemento y adiciones</li>
              <li>9% Biomasa y metano evitado</li>
              <li>4% Combustibles alternativos</li>
              <li>4% Combustibles fósiles</li>
              <li>2% Eficiencia energética</li>
              <li>1% Hidrógeno</li>
            </ul>
          </div>
        </details>

        <details className="group card bg-base-200 border border-base-300">
          <summary className="card-body p-4 cursor-pointer list-none flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="badge badge-secondary badge-lg">40%</span>
              <span className="font-bold">CCUS y Soluciones Naturales</span>
            </div>
            <svg className="w-5 h-5 text-base-content/60 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-4 text-base-content/70">
            <p>Captura, uso y almacenamiento de CO2 junto con soluciones basadas en la naturaleza.
            Investigación y desarrollo de tecnologías CCUS para capturar las emisiones de CO2 en
            la fuente y utilizarlas en nuevos productos o almacenarlas de forma segura.</p>
          </div>
        </details>

        <details className="group card bg-base-200 border border-base-300">
          <summary className="card-body p-4 cursor-pointer list-none flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="badge badge-secondary badge-lg">11%</span>
              <span className="font-bold">Diseño y Construcción</span>
            </div>
            <svg className="w-5 h-5 text-base-content/60 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-4 text-base-content/70">
            <p>Concreto optimizado, industrialización y eficiencia en el uso de materiales.
            Incluye 10% por diseño y construcción eficiente, y 1% por producción de concreto.</p>
          </div>
        </details>

        <details className="group card bg-base-200 border border-base-300">
          <summary className="card-body p-4 cursor-pointer list-none flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="badge badge-primary badge-lg">9%</span>
              <span className="font-bold">Recarbonatación del Concreto</span>
            </div>
            <svg className="w-5 h-5 text-base-content/60 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-4 text-base-content/70">
            <p>Captura natural de CO2 por el concreto durante su vida útil, más carbonatación activa.
            Un proceso natural que contribuye significativamente a la neutralización de emisiones.</p>
          </div>
        </details>

        <details className="group card bg-base-200 border border-base-300">
          <summary className="card-body p-4 cursor-pointer list-none flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="badge badge-primary badge-lg">5%</span>
              <span className="font-bold">Electricidad Carbono Neutral</span>
            </div>
            <svg className="w-5 h-5 text-base-content/60 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-4 text-base-content/70">
            <p>Transición hacia una matriz eléctrica 100% renovable para cemento, CCUS y concreto.
            Aprovechamiento del potencial renovable del Perú.</p>
          </div>
        </details>
      </section>

      {/* Sección Metas 2030 con gradiente */}
      <section className="mx-4 rounded-xl p-6 md:p-10 text-white"
        style={{
          background: 'linear-gradient(135deg, #6B1D84 0%, #ED1F7A 100%)'
        }}>
        <div className="max-w-3xl">
          <span className="badge bg-white/20 text-white border-0 mb-4">Compromisos al 2030</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Metas intermedias ambiciosas
          </h2>
          <p className="text-white/90 text-lg mb-6">
            El sector del cemento y concreto en el Perú reafirma su compromiso de alcanzar
            metas intermedias al 2030 y avanzar hacia la carbono neutralidad en 2050.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="badge badge-outline badge-lg text-white border-white/40">Pacasmayo</span>
            <span className="badge badge-outline badge-lg text-white border-white/40">UNACEM</span>
            <span className="badge badge-outline badge-lg text-white border-white/40">Yura</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/15 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold">520</div>
              <div className="text-xs text-white/70">kgCO2/t</div>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold">12%</div>
              <div className="text-xs text-white/70">TSR</div>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold">70%</div>
              <div className="text-xs text-white/70">Factor K</div>
            </div>
            <div className="bg-white/15 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold">-32%</div>
              <div className="text-xs text-white/70">vs 1990</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-4 py-8 text-center">
        <blockquote className="text-xl md:text-2xl font-medium text-base-content max-w-3xl mx-auto leading-relaxed">
          "La transformación que aquí se traza no es solo técnica y ambiental,
          sino también social y económica: una apuesta por un futuro en el que
          el cemento y el concreto continúen siendo pilares de desarrollo,
          ahora bajo un paradigma de <span className="text-secondary font-bold">sostenibilidad,
          innovación y competitividad global</span>."
        </blockquote>
        <p className="mt-6 text-base-content/50 text-sm">
          — Hoja de Ruta Perú 2050, ASOCEM - FICEM
        </p>
      </section>

      {/* CTA Final */}
      <section className="px-4 pb-8">
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body text-center py-10">
            <h3 className="text-xl font-bold mb-2">Sistema MRV 4C Perú</h3>
            <p className="text-base-content/70 mb-6 max-w-md mx-auto">
              Monitoreo, Reporte y Verificación de huella de carbono compatible con estándar IPCC-2006
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/empresa/dashboard" className="btn btn-primary">
                Acceder al Sistema
              </Link>
              <Link href="/login" className="btn btn-outline">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer logos */}
      <section className="border-t border-base-300 px-4 py-8">
        <p className="text-center text-xs text-base-content/40 mb-6">
          Esfuerzo colaborativo entre
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-xl font-bold text-primary">ASOCEM</div>
            <div className="text-[10px] text-base-content/40">Asociación de Productores de Cemento</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-primary">FICEM</div>
            <div className="text-[10px] text-base-content/40">Federación Interamericana del Cemento</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-secondary">4C PERÚ</div>
            <div className="text-[10px] text-base-content/40">Sistema de Huella de Carbono</div>
          </div>
        </div>
      </section>
    </div>
  )
}
