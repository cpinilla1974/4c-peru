import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-0 -mx-6 -my-10">
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] flex items-center justify-center px-6 md:px-20"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-bold tracking-wider">
            HOJA DE RUTA 2050
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Hacia una industria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-400">Carbono Neutralidad</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Plataforma oficial de reporte MRV y gestión de huella de carbono para el sector cemento y concreto en Perú.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/hoja-de-ruta" className="btn btn-secondary btn-lg">
              Ver Hoja de Ruta
            </Link>
            <Link href="/login" className="btn btn-ghost btn-lg bg-white text-primary hover:bg-gray-100">
              Sistema de Reporte
            </Link>
          </div>
        </div>
      </section>

      {/* Los 3 Pilares del Sistema MRV */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Los 3 Pilares del Sistema MRV</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Un sistema integrado para la medición, reporte y verificación de las emisiones del sector.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1: Reporte Oficial */}
            <div className="group card bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="card-body p-8">
                <div className="absolute top-6 right-6">
                  <span className="badge badge-primary">Anual</span>
                </div>
                <div className="mb-6 text-primary">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reporte Oficial</h3>
                <p className="text-gray-500 text-sm mb-4 min-h-[40px]">Cumplimiento regulatorio anual y certificación de emisiones.</p>
                <div className="text-2xl font-bold text-gray-900 mb-6">Ciclo 2024-2025</div>
                <Link href="/empresa/dashboard" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group-hover:translate-x-1 duration-300">
                  Ver Dashboard
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Pilar 2: Roadmap Sectorial */}
            <div className="group card bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="card-body p-8">
                <div className="absolute top-6 right-6">
                  <span className="badge badge-secondary">4C</span>
                </div>
                <div className="mb-6 text-primary">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Roadmap Sectorial</h3>
                <p className="text-gray-500 text-sm mb-4 min-h-[40px]">Seguimiento de metas sectoriales y reducción progresiva.</p>
                <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
                  580 <span className="text-secondary text-lg">→</span> 520 <span className="text-sm font-normal text-gray-400 self-end mb-1">kg CO₂</span>
                </div>
                <Link href="/hoja-de-ruta" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group-hover:translate-x-1 duration-300">
                  Ver Progreso
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Pilar 3: Calculadora Técnica */}
            <div className="group card bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="card-body p-8">
                <div className="absolute top-6 right-6">
                  <span className="badge badge-secondary">4C</span>
                </div>
                <div className="mb-6 text-primary">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Calculadora Técnica</h3>
                <p className="text-gray-500 text-sm mb-4 min-h-[40px]">Medición técnica detallada por tipo de producto y planta.</p>
                <div className="text-2xl font-bold text-gray-900 mb-6">4 productos</div>
                <Link href="/empresa/ciclo-actual/mi-envio" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group-hover:translate-x-1 duration-300">
                  Usar Calculadora
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Desafío 2050 */}
      <section className="px-6 md:px-20 py-10">
        <div className="card bg-white border border-gray-200 shadow-lg overflow-hidden lg:card-side">
          <figure className="lg:w-1/2 min-h-[300px] relative bg-gray-900">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80')`
              }}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="p-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
            </div>
          </figure>
          <div className="card-body lg:w-1/2 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Nuestro Desafío 2050</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Transformar la industria peruana del cemento para alcanzar la neutralidad de carbono, superando desafíos geográficos y tecnológicos mediante la innovación constante.
            </p>
            <Link href="/hoja-de-ruta" className="btn btn-neutral">
              Conoce el Reto
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosistema Colaborativo */}
      <section className="relative px-6 md:px-20 py-24 bg-base-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <svg className="w-[600px] h-[600px] text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Ecosistema Colaborativo</h2>
            <p className="text-gray-500 mt-2">Uniendo esfuerzos a nivel regional, nacional y gubernamental.</p>
          </div>

          {/* Cards con flechas conectoras */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-16">
            <div className="relative w-full max-w-[280px] card bg-white shadow-md border-t-4 border-primary">
              <div className="card-body text-center">
                <h3 className="text-2xl font-bold text-primary">FICEM</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Regional</p>
                <div className="text-4xl font-light text-gray-800 my-2">13</div>
                <p className="text-sm text-gray-500">Países miembros</p>
              </div>
              {/* Flecha conectora - solo en desktop */}
              <div className="hidden md:block absolute top-1/2 -right-10 w-8 h-0.5 bg-primary/30">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2 border-primary/30"></div>
              </div>
            </div>

            <div className="relative w-full max-w-[280px] card bg-white shadow-md border-t-4 border-primary">
              <div className="card-body text-center">
                <h3 className="text-2xl font-bold text-primary">ASOCEM</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Nacional</p>
                <div className="text-4xl font-light text-gray-800 my-2">8</div>
                <p className="text-sm text-gray-500">Plantas de cemento</p>
              </div>
              {/* Flecha conectora - solo en desktop */}
              <div className="hidden md:block absolute top-1/2 -right-10 w-8 h-0.5 bg-primary/30">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2 border-primary/30"></div>
              </div>
            </div>

            <div className="relative w-full max-w-[280px] card bg-white shadow-md border-t-4 border-primary">
              <div className="card-body text-center">
                <h3 className="text-2xl font-bold text-primary">PRODUCE</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Ministerio</p>
                <div className="flex justify-center items-center h-[48px] my-2">
                  <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Políticas NDC</p>
              </div>
            </div>
          </div>

          {/* Mapa de puntos de plantas */}
          <div className="flex flex-wrap justify-center gap-3 opacity-80">
            {[
              { name: 'Lima', count: 3, locations: ['Atocongo', 'Condorcocha', 'Inca'] },
              { name: 'Arequipa', count: 1, locations: ['Yura'] },
              { name: 'Cajamarca', count: 1, locations: ['Pacasmayo'] },
              { name: 'Piura', count: 1, locations: ['Piura'] },
              { name: 'San Martín', count: 1, locations: ['Rioja'] },
              { name: 'Junín', count: 1, locations: ['Mixercon'] }
            ].map((region, idx) => (
              <div key={idx} className="group relative flex justify-center">
                <div className={`w-4 h-4 ${region.count > 1 ? 'bg-secondary' : 'bg-secondary/70'} rounded-full cursor-pointer hover:scale-125 transition-transform`}></div>
                <div className="absolute -top-16 bg-black text-white text-xs py-2 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <div className="font-bold">{region.name}</div>
                  {region.locations.map((loc, i) => (
                    <div key={i} className="text-[10px] opacity-70">{loc}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejes Estratégicos */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Ejes Estratégicos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Eje 1 */}
            <div className="card bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="card-body p-6 flex flex-col justify-between h-[200px]">
                <div className="flex justify-between items-start">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-3xl font-bold text-primary">35%</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">Clinker, cemento y aditivos</h3>
                  <p className="text-xs text-gray-500 mt-2">Reducción del factor clínker</p>
                </div>
              </div>
            </div>

            {/* Eje 2 */}
            <div className="card bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="card-body p-6 flex flex-col justify-between h-[200px]">
                <div className="flex justify-between items-start">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                  <span className="text-3xl font-bold text-primary">40%</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">Eficiencia energética</h3>
                  <p className="text-xs text-gray-500 mt-2">Coprocesamiento y combustibles alternativos</p>
                </div>
              </div>
            </div>

            {/* Eje 3 */}
            <div className="card bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="card-body p-6 flex flex-col justify-between h-[200px]">
                <div className="flex justify-between items-start">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-3xl font-bold text-primary">11%</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">Electricidad</h3>
                  <p className="text-xs text-gray-500 mt-2">Energías renovables</p>
                </div>
              </div>
            </div>

            {/* Eje 4 */}
            <div className="card bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="card-body p-6 flex flex-col justify-between h-[200px]">
                <div className="flex justify-between items-start">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-3xl font-bold text-primary">9%</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">Carbonatación</h3>
                  <p className="text-xs text-gray-500 mt-2">Recarbonatación natural</p>
                </div>
              </div>
            </div>

            {/* Eje 5 */}
            <div className="card bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="card-body p-6 flex flex-col justify-between h-[200px]">
                <div className="flex justify-between items-start">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span className="text-3xl font-bold text-primary">5%</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">Captura de Carbono (CCUS)</h3>
                  <p className="text-xs text-gray-500 mt-2">Tecnologías de captura</p>
                </div>
              </div>
            </div>

            {/* Ver más */}
            <div className="card bg-primary/5 border border-dashed border-primary/30 hover:bg-primary/10 transition-all cursor-pointer">
              <div className="card-body p-6 flex flex-col justify-center items-center h-[200px]">
                <svg className="w-10 h-10 text-primary/50 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-medium text-primary/70">Ver todas las iniciativas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metas Claras para el 2030 */}
      <section className="px-6 md:px-20 py-10">
        <div className="relative overflow-hidden rounded-2xl p-8 md:p-16"
          style={{
            background: 'linear-gradient(135deg, #6B1D84 0%, #4a145c 100%)'
          }}
        >
          <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80')`
            }}
          />
          <div className="relative flex flex-col items-center justify-center text-center gap-8">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold tracking-wider">
              COMPROMISO
            </span>
            <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              Metas Claras para el 2030
            </h3>
            <blockquote className="max-w-2xl border-t-4 border-secondary pt-6">
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic">
                "Nuestra hoja de ruta es un compromiso colectivo para transformar la industria hacia un futuro sostenible y libre de carbono."
              </p>
            </blockquote>
            <div className="mt-4">
              <Link href="/login" className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-0 shadow-xl">
                Acceder al Sistema de Reporte
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-gray-200 bg-white">
        <div className="px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800">Industria Cemento Perú</span>
              <span className="text-xs text-gray-500">Unidos por la sostenibilidad</span>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors font-medium">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors font-medium">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors font-medium">Contacto</a>
          </div>
          <p className="text-sm text-gray-400">© 2024. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
