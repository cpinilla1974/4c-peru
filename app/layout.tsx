import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import { AuthProvider } from '@/lib/auth-context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

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
    <html lang="es" data-theme="4c-peru" suppressHydrationWarning className={spaceGrotesk.variable}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-display)]">
        <AuthProvider>
          <Navbar />
          <main className="flex-1 container mx-auto px-6 py-10 max-w-7xl">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
