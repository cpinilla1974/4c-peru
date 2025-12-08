# Metodología de Trabajo - 4C PERÚ

## Rol en el Ecosistema

**4C PERÚ** es el **frontend para Perú** del sistema de huella de carbono. Las empresas y coordinadores de Perú acceden por aquí.

### Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                    ECOSISTEMA 4C LATAM                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  latam-3c (Documentación)                                   │
│  └── Arquitectura, decisiones, flujos, funcionalidades      │
│      https://github.com/cpinilla1974/latam-3c               │
│                                                             │
│  4c-ficem-core (Backend Centralizado)                       │
│  └── APIs REST, cálculos, validación, PostgreSQL            │
│  └── JWT auth emitido aquí                                  │
│                                                             │
│  4c-peru (ESTE REPO) ◄── Frontend País                      │
│  └── Next.js, consume APIs de ficem-core                    │
│  └── Empresas cargan Excel, coordinadores revisan           │
│                                                             │
│  knowledge-api (IA/Analítica)                               │
│  └── RAG, predicciones, insights (desarrollo paralelo)      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Documentación Centralizada

**IMPORTANTE**: La documentación técnica vive en `latam-3c`:

| Documento | Contenido |
|-----------|-----------|
| `docs/1-tecnica/02-funcionalidades-por-usuario.md` | Funcionalidades por grupo, arquitectura, auth |
| `docs/1-tecnica/03-flujo-datos.md` | Flujo completo: empresa → país → FICEM |

**URL**: https://github.com/cpinilla1974/latam-3c/tree/main/docs

---

## Usuarios de 4C PERÚ

### Empresas Cementeras
- Login con credenciales de su empresa
- Descargar plantillas Excel
- Cargar Excel con datos
- Ver estado del envío (borrador, enviado, validado, rechazado)
- Corregir y reenviar si fue rechazado
- Ver resultados y benchmarking
- Descargar reportes

### Coordinadores País (ASOCEM, PRODUCE)
- Revisar envíos de empresas
- Aprobar o rechazar con comentarios
- Ver dashboard métricas país
- Generar reportes país
- Benchmarking nacional

---

## Flujo de Datos

```
Empresa (4c-peru)              ficem-core              Coordinador (4c-peru)
       │                            │                         │
       │ 1. Login ─────────────────>│                         │
       │<─────────────── JWT ───────│                         │
       │                            │                         │
       │ 2. Descarga template ─────>│                         │
       │<─────────────── Excel ─────│                         │
       │                            │                         │
       │ 3. Sube Excel ────────────>│                         │
       │<─────────── validación ────│                         │
       │                            │                         │
       │ 4. Confirma envío ────────>│ estado: enviado         │
       │                            │────────────────────────>│
       │                            │                         │
       │                            │ 5. Revisa y aprueba ◄───│
       │                            │                         │
       │ 6. Ve resultados ─────────>│                         │
       │<─────────── datos ─────────│                         │
```

---

## Stack Tecnológico

- **Framework**: Next.js
- **Auth**: JWT (recibido de ficem-core, guardado en cookie httpOnly)
- **API Client**: fetch/axios
- **Styling**: TailwindCSS + DaisyUI

---

## APIs Consumidas (de ficem-core)

| Endpoint | Método | Uso |
|----------|--------|-----|
| `/auth/login` | POST | Autenticación |
| `/templates/{tipo}` | GET | Descargar plantilla |
| `/uploads` | POST | Cargar Excel |
| `/uploads/{id}/validate` | GET | Validar datos |
| `/uploads/{id}/submit` | POST | Confirmar envío |
| `/uploads/{id}/review` | POST | Aprobar/rechazar (coordinador) |
| `/results/{empresa_id}` | GET | Resultados |
| `/benchmarking/PE` | GET | Benchmarking Perú |

**Config**:
```
FICEM_CORE_URL=http://localhost:8000  # Dev
FICEM_CORE_URL=https://api.ficem.com  # Prod
```

---

## Estructura de Carpetas

```
4c-peru/
├── app/                        # App Router (Next.js 13+)
│   ├── page.tsx               # Landing/Login
│   ├── dashboard/             # Dashboard empresa/coordinador
│   ├── upload/                # Carga Excel
│   ├── submissions/           # Estado envíos
│   ├── results/               # Resultados
│   └── benchmarking/          # Benchmarking
├── components/                 # Componentes UI
├── lib/                        # Utilidades
│   └── api.ts                 # Cliente API ficem-core
├── hooks/                      # Custom hooks
├── docs/
│   └── sesiones/              # Registro de sesiones de trabajo
└── package.json
```

---

## Iniciar la Aplicación

```bash
npm install
npm run dev
# Acceso: http://localhost:3000
```

---

## Principios de Documentación

1. **Solo lo esencial**: Documentar únicamente lo discutido y acordado
2. **Bloques de construcción**: Cada documento debe ser necesario y suficiente para construir el software
3. **Sin opciones**: Las opciones son para discusión en pantalla, no para documentar
4. **Conciso y efectivo**: Evitar documentos extensos, ir al punto

## Qué NO documentar
- Listas de opciones
- Planes tentativos sin discutir
- Recomendaciones no solicitadas
- Información redundante o especulativa

## Qué SÍ documentar
- Estructuras de datos acordadas
- Decisiones técnicas tomadas
- Especificaciones funcionales definidas
- Código y configuraciones necesarias

---

## Política de Comunicación

- NUNCA usar jerga argentina o regionalismos (ej: "tenés", "vos", etc.)
- SIEMPRE usar español neutro profesional
- Usar "usted" o tuteo neutro ("tienes", "tú") según el contexto

## Política de Commits

- NUNCA incluir a Claude como autor del commit
- NO usar las líneas "🤖 Generated with Claude Code" ni "Co-Authored-By: Claude"
- Los commits deben aparecer como del usuario únicamente

---

## Gestión de Sesiones de Trabajo

### Al iniciar una sesión:
1. Revisar archivos en `/docs/sesiones/` para entender el contexto y progreso anterior
2. Crear archivo de nueva sesión con formato: `sesion_YYYY-MM-DD.md`
3. Incluir datos básicos:
   - Fecha
   - Objetivo de la sesión
   - Estado inicial del proyecto

### Al finalizar una sesión:
1. Actualizar el archivo de sesión con:
   - Trabajo realizado
   - Decisiones tomadas
   - Próximos pasos identificados
2. Guardar cambios antes de terminar

---

**Última actualización**: 2025-12-08
