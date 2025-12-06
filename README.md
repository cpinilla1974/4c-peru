# 4C Perú - Frontend

Sistema de cálculo de huella de carbono para la industria cementera y de concreto en Perú.

## Descripción

4C Perú es la interfaz frontend específica para Perú del sistema de cálculo de huella de carbono. Consume APIs REST de [ficem-core](https://github.com/cpinilla1974/4c-ficem-core) para proporcionar:

- Dashboard consolidado con métricas de Perú
- Listado y detalle de empresas peruanas
- Generador de plantillas Excel para cálculos
- Visualización de resultados de cálculos
- Benchmarking específico de Perú
- Reportes y exportación de datos

## Stack Tecnológico

- **Framework**: Next.js 16 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Cliente HTTP**: Axios
- **Node**: v18+

## Instalación

### Requisitos previos

- Node.js 18 o superior
- npm o yarn

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/cpinilla1974/4c-peru.git
cd 4c-peru
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env.local
```

4. Editar `.env.local` con tus valores:
```env
NEXT_PUBLIC_FICEM_CORE_URL=http://localhost:8000
NEXT_PUBLIC_KNOWLEDGE_API_URL=http://localhost:3001
```

## Desarrollo

Iniciar servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Build para producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
4c-peru/
├── app/                    # Páginas y rutas
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Dashboard
│   ├── empresas/          # Sección de empresas
│   ├── generador/         # Generador de Excel
│   └── reportes/          # Reportes
├── components/            # Componentes reutilizables
├── hooks/                 # Custom hooks
├── utils/                 # Utilidades
│   └── apiClient.ts       # Cliente REST para ficem-core
├── config/                # Configuración
│   └── api.ts            # Configuración de APIs
├── types/                 # Tipos TypeScript
├── styles/                # Estilos globales
└── package.json
```

## Configuración de APIs

### FICEM Core

Cliente configurado en `utils/apiClient.ts`:

- `GET /api/v1/empresas` - Listado de empresas
- `GET /api/v1/empresas/{id}` - Detalle de empresa
- `GET /api/v1/resultados/{empresaId}` - Resultados de cálculos
- `POST /api/v1/excel-generator/generate` - Generar plantilla Excel
- `POST /api/v1/classifier/classify` - Clasificación GCCA

URL base configurable via `NEXT_PUBLIC_FICEM_CORE_URL`

## Guía de Desarrollo

### Agregar una nueva página

1. Crear carpeta en `app/` (ej: `app/nueva-pagina`)
2. Crear `page.tsx` en la carpeta
3. La ruta se genera automáticamente

Ejemplo:
```typescript
// app/nueva-pagina/page.tsx
export default function NuevaPagina() {
  return <div>Contenido</div>
}
```

### Consumir APIs

Usar el cliente pre-configurado en `utils/apiClient.ts`:

```typescript
import { fiemCoreClient } from '@/utils/apiClient'

const empresas = await fiemCoreClient.getEmpresas()
```

### Estilos

Se utiliza Tailwind CSS. Los estilos se aplican directamente en los componentes:

```typescript
<div className="bg-blue-600 text-white p-4 rounded-lg">
  Contenido
</div>
```

## Documentación Centralizada

La documentación técnica completa vive en [latam-3c](https://github.com/cpinilla1974/latam-3c/tree/main/docs):

- Plan de arquitectura
- Especificación técnica
- Decisiones de diseño
- Guías de integración

## Contribuciones

Por favor revisa [CLAUDE.md](./CLAUDE.md) para las políticas de desarrollo y comunicación del proyecto.

## Licencia

ISC
