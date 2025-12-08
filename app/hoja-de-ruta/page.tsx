import Link from 'next/link'

export default function HojaDeRutaPage() {
  return (
    <div className="space-y-12 -mx-6 -my-10">
      {/* Hero */}
      <section className="min-h-[400px] flex flex-col gap-4 items-start justify-end p-6 md:p-10 rounded-none md:rounded-xl"
        style={{
          background: 'linear-gradient(to top, rgba(107, 29, 132, 0.15) 0%, rgba(255, 255, 255, 0) 70%), linear-gradient(to right, #f5f5f7, #ffffff)'
        }}>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Hoja de Ruta hacia la Carbono Neutralidad 2050
        </h1>
        <p className="text-base-content/70 text-lg max-w-2xl">
          El compromiso de la industria del cemento y concreto de Perú para un futuro sostenible.
        </p>
      </section>

      {/* KPIs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body flex-row items-start justify-between">
            <div>
              <p className="font-medium">Empresas Comprometidas</p>
              <p className="text-4xl font-bold text-primary">3</p>
            </div>
            <svg className="w-10 h-10 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body flex-row items-start justify-between">
            <div>
              <p className="font-medium">Producción Anual</p>
              <p className="text-4xl font-bold text-primary">10+ Mt/año</p>
            </div>
            <svg className="w-10 h-10 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4">
        <h2 className="text-2xl font-bold mb-6">Nuestra Trayectoria hacia Cero Emisiones</h2>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box bg-base-100 border-base-300">
              <p className="font-bold">Línea Base</p>
              <p className="text-base-content/70">580 kg CO₂/t</p>
            </div>
            <div className="timeline-middle">
              <div className="bg-secondary/20 text-secondary rounded-full p-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="timeline-end text-lg font-bold text-primary">2024</div>
            <hr className="bg-base-300"/>
          </li>
          <li>
            <hr className="bg-base-300"/>
            <div className="timeline-start text-lg font-bold text-primary">2030</div>
            <div className="timeline-middle">
              <div className="bg-secondary/20 text-secondary rounded-full p-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="timeline-end timeline-box bg-base-100 border-base-300">
              <p className="font-bold">Meta Intermedia</p>
              <p className="text-base-content/70">520 kg CO₂/t (-10%)</p>
            </div>
            <hr className="bg-base-300"/>
          </li>
          <li>
            <hr className="bg-base-300"/>
            <div className="timeline-start timeline-box bg-base-100 border-base-300">
              <p className="font-bold">Carbono Neutralidad</p>
              <p className="text-base-content/70">Emisiones netas cero</p>
            </div>
            <div className="timeline-middle">
              <div className="bg-secondary/20 text-secondary rounded-full p-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="timeline-end text-lg font-bold text-primary">2050</div>
          </li>
        </ul>
      </section>

      {/* Ejes Estratégicos */}
      <section className="px-4">
        <h2 className="text-2xl font-bold mb-6">Ejes Estratégicos de Reducción</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary/20 rounded-full p-2 text-secondary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold">Clínker y Cemento</h3>
              </div>
              <p className="text-base-content/70 text-sm">Reducción del factor clínker y uso de cementos adicionados.</p>
              <div className="text-right text-2xl font-bold text-primary">35%</div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary/20 rounded-full p-2 text-secondary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold">CCUS</h3>
              </div>
              <p className="text-base-content/70 text-sm">Captura, uso y almacenamiento de carbono.</p>
              <div className="text-right text-2xl font-bold text-primary">40%</div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary/20 rounded-full p-2 text-secondary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="font-bold">Diseño y Construcción</h3>
              </div>
              <p className="text-base-content/70 text-sm">Concreto optimizado e industrialización.</p>
              <div className="text-right text-2xl font-bold text-primary">11%</div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary/20 rounded-full p-2 text-secondary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold">Recarbonatación</h3>
              </div>
              <p className="text-base-content/70 text-sm">Captura natural de CO₂ durante vida útil.</p>
              <div className="text-right text-2xl font-bold text-primary">9%</div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary/20 rounded-full p-2 text-secondary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold">Electricidad Renovable</h3>
              </div>
              <p className="text-base-content/70 text-sm">Transición a matriz eléctrica 100% renovable.</p>
              <div className="text-right text-2xl font-bold text-primary">5%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos */}
      <section className="px-4">
        <h2 className="text-2xl font-bold mb-6">Documentos Clave</h2>
        <div className="flex flex-col gap-3">
          <a href="#" className="flex items-center gap-4 p-4 bg-base-100 border border-base-300 rounded-lg hover:bg-base-200 transition-colors">
            <svg className="w-6 h-6 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-medium flex-grow">Hoja de Ruta Perú 2050</span>
            <svg className="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <a href="#" className="flex items-center gap-4 p-4 bg-base-100 border border-base-300 rounded-lg hover:bg-base-200 transition-colors">
            <svg className="w-6 h-6 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-medium flex-grow">Metodología de Cálculo</span>
            <svg className="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <a href="#" className="flex items-center gap-4 p-4 bg-base-100 border border-base-300 rounded-lg hover:bg-base-200 transition-colors">
            <svg className="w-6 h-6 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-medium flex-grow">TDR FICEM-ASOCEM-PRODUCE</span>
            <svg className="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 rounded-xl p-8 md:p-12 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(107, 29, 132, 0.15) 0%, rgba(237, 31, 122, 0.15) 100%)'
        }}>
        <h2 className="text-3xl font-bold mb-4">Únase a la iniciativa</h2>
        <p className="text-base-content/70 max-w-lg mx-auto mb-6">
          Sea parte del cambio. Registre su empresa y comience a reportar su huella de carbono para contribuir a un futuro más sostenible para el Perú.
        </p>
        <Link href="/login" className="btn btn-primary btn-lg">
          Acceder al Sistema
        </Link>
      </section>
    </div>
  )
}
