#!/usr/bin/env python3
"""
Script para convertir páginas de PDF a imágenes PNG.
Útil para extraer guías de diseño (colores, tipografías, etc.)

Uso:
    python pdf_to_images.py [--dpi DPI] [--pages PAGES]

Ejemplos:
    python pdf_to_images.py                    # Todas las páginas a 150 DPI
    python pdf_to_images.py --dpi 300          # Alta resolución
    python pdf_to_images.py --pages 1,15,16    # Solo páginas específicas
    python pdf_to_images.py --pages 1-5        # Rango de páginas
"""

import subprocess
import sys
import os
from pathlib import Path

# Configuración
PDF_FILE = "HR Perú 2050_VerFinal_20-10-2025.pdf"
OUTPUT_DIR = "paginas"
DEFAULT_DPI = 150


def check_dependencies():
    """Verifica que pdftoppm esté instalado."""
    try:
        subprocess.run(["pdftoppm", "-v"], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False


def install_poppler():
    """Intenta instalar poppler-utils."""
    print("Instalando poppler-utils...")
    try:
        subprocess.run(["sudo", "apt-get", "update"], check=True)
        subprocess.run(["sudo", "apt-get", "install", "-y", "poppler-utils"], check=True)
        return True
    except subprocess.CalledProcessError:
        return False


def parse_pages(pages_str, total_pages):
    """Parsea el string de páginas a una lista de números."""
    if not pages_str:
        return list(range(1, total_pages + 1))

    pages = set()
    for part in pages_str.split(","):
        part = part.strip()
        if "-" in part:
            start, end = part.split("-")
            pages.update(range(int(start), int(end) + 1))
        else:
            pages.add(int(part))

    return sorted([p for p in pages if 1 <= p <= total_pages])


def get_pdf_page_count(pdf_path):
    """Obtiene el número de páginas del PDF."""
    try:
        result = subprocess.run(
            ["pdfinfo", pdf_path],
            capture_output=True,
            text=True,
            check=True
        )
        for line in result.stdout.split("\n"):
            if line.startswith("Pages:"):
                return int(line.split(":")[1].strip())
    except (subprocess.CalledProcessError, FileNotFoundError):
        # Si pdfinfo no está disponible, intentamos con pdftoppm
        pass
    return 46  # Valor por defecto para este PDF


def convert_pdf_to_images(pdf_path, output_dir, dpi, pages=None):
    """Convierte páginas del PDF a imágenes PNG."""

    # Crear directorio de salida
    output_path = Path(output_dir)
    output_path.mkdir(exist_ok=True)

    total_pages = get_pdf_page_count(pdf_path)
    pages_to_convert = parse_pages(pages, total_pages)

    print(f"PDF: {pdf_path}")
    print(f"Total páginas: {total_pages}")
    print(f"Páginas a convertir: {len(pages_to_convert)}")
    print(f"Resolución: {dpi} DPI")
    print(f"Salida: {output_dir}/")
    print("-" * 50)

    converted = []
    for page in pages_to_convert:
        output_prefix = output_path / f"pagina_{page:02d}"

        cmd = [
            "pdftoppm",
            "-png",
            "-r", str(dpi),
            "-f", str(page),
            "-l", str(page),
            pdf_path,
            str(output_prefix)
        ]

        try:
            subprocess.run(cmd, check=True, capture_output=True)
            # pdftoppm agrega un sufijo con el número de página
            generated_file = f"{output_prefix}-{page}.png"
            final_file = f"{output_prefix}.png"

            # Renombrar para quitar el sufijo redundante
            if os.path.exists(generated_file):
                os.rename(generated_file, final_file)
                converted.append(final_file)
                print(f"✓ Página {page} → {os.path.basename(final_file)}")
            elif os.path.exists(final_file):
                converted.append(final_file)
                print(f"✓ Página {page} → {os.path.basename(final_file)}")
            else:
                # Buscar el archivo generado
                for f in output_path.glob(f"pagina_{page:02d}*.png"):
                    converted.append(str(f))
                    print(f"✓ Página {page} → {f.name}")
                    break

        except subprocess.CalledProcessError as e:
            print(f"✗ Error en página {page}: {e}")

    return converted


def main():
    import argparse

    parser = argparse.ArgumentParser(
        description="Convierte páginas de PDF a imágenes PNG"
    )
    parser.add_argument(
        "--dpi",
        type=int,
        default=DEFAULT_DPI,
        help=f"Resolución en DPI (default: {DEFAULT_DPI})"
    )
    parser.add_argument(
        "--pages",
        type=str,
        default=None,
        help="Páginas a convertir: '1,5,10' o '1-10' (default: todas)"
    )
    parser.add_argument(
        "--output",
        type=str,
        default=OUTPUT_DIR,
        help=f"Directorio de salida (default: {OUTPUT_DIR})"
    )

    args = parser.parse_args()

    # Cambiar al directorio del script
    script_dir = Path(__file__).parent
    os.chdir(script_dir)

    # Verificar que el PDF existe
    if not Path(PDF_FILE).exists():
        print(f"Error: No se encuentra el archivo {PDF_FILE}")
        sys.exit(1)

    # Verificar dependencias
    if not check_dependencies():
        print("pdftoppm no está instalado.")
        response = input("¿Desea instalarlo? (s/n): ")
        if response.lower() == 's':
            if not install_poppler():
                print("No se pudo instalar. Instale manualmente:")
                print("  sudo apt-get install poppler-utils")
                sys.exit(1)
        else:
            sys.exit(1)

    # Convertir
    converted = convert_pdf_to_images(
        PDF_FILE,
        args.output,
        args.dpi,
        args.pages
    )

    print("-" * 50)
    print(f"Convertidas {len(converted)} páginas en {args.output}/")

    # Sugerencias de páginas clave para diseño
    print("\n📌 Páginas sugeridas para guía de diseño:")
    print("   --pages 1,15,16  → Portada y trayectorias (cascada)")
    print("   --pages 11,12    → Metas 2030")
    print("   --pages 19,23    → Diseño/construcción, Cementos")
    print("   --pages 42,43    → Ideas fuerza y conclusiones")


if __name__ == "__main__":
    main()
