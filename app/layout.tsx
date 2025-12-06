import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '4C Perú - Huella de Carbono',
  description: 'Sistema de cálculo de huella de carbono para la industria cementera y de concreto en Perú',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">4C Perú</h1>
              </div>
              <div className="flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Dashboard
                </a>
                <a href="/empresas" className="text-gray-700 hover:text-gray-900">
                  Empresas
                </a>
                <a href="/generador" className="text-gray-700 hover:text-gray-900">
                  Generador
                </a>
                <a href="/reportes" className="text-gray-700 hover:text-gray-900">
                  Reportes
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
