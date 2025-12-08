export default function Footer() {
  return (
    <footer className="border-t border-base-200 bg-base-100">
      <div className="container mx-auto px-6 py-6 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-base-content/60">
            4C Perú - Huella de Carbono para la Industria Cementera
          </p>
          <div className="flex gap-4 text-xs text-base-content/40">
            <a href="/sobre" className="hover:text-base-content/70 transition">Sobre</a>
            <a href="/hoja-de-ruta" className="hover:text-base-content/70 transition">Hoja de Ruta</a>
            <a href="/documentos" className="hover:text-base-content/70 transition">Documentos</a>
          </div>
          <p className="text-xs text-base-content/40">
            © 2025 FICEM-ASOCEM-PRODUCE
          </p>
        </div>

        {/* Powered by */}
        <div className="mt-6 pt-4 border-t border-base-200 flex justify-center">
          <a
            href="https://omniscien.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-base-content/30 hover:text-base-content/50 transition-colors"
          >
            <span>Desarrollado por</span>
            <img
              src="/logos/logo_omniscien_x.png"
              alt="Omniscien"
              className="h-4 w-auto opacity-40 hover:opacity-60 transition-opacity"
            />
            <span className="font-medium">Omniscien</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
