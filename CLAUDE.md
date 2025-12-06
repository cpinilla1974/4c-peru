# Metodología de Trabajo - 4C PERÚ

## Contexto del Proyecto

**4C PERÚ** es el frontend específico para Perú del sistema de cálculo de huella de carbono para la industria cementera y de concreto.

**Origen**: Nuevo proyecto creado como parte de la arquitectura de dos aplicaciones separadas (decisión 2025-12-06).

**Relación con otros proyectos**:
- **latam-3c**: Repo centralizado con documentación técnica y coordinación
- **4c-ficem-core**: Backend que expone APIs REST consumidas por 4c-peru

**Documentación centralizada**: Toda la documentación técnica vive en el repo `latam-3c`:
- Plan de arquitectura: `docs/1-tecnica/00-plan-etapa-1-dos-apps.md`
- Especificación técnica: `docs/1-tecnica/01-arquitectura-ficem-4c.md`
- Decisión de separación: `docs/3-sesiones/sesion_2025-12-06.md`
- Documentación técnica completa: `latam-3c/docs/1-tecnica/`

**Acceso a documentación**:
```
https://github.com/cpinilla1974/latam-3c/tree/main/docs
```

---

## Responsabilidades de 4C PERÚ

- Dashboard consolidado de Perú (métricas, gráficos)
- Listado y detalle de empresas peruanas
- Interfaz para generación de plantillas Excel (consumiendo API de ficem-core)
- Visualización de resultados de cálculos
- Benchmarking específico de Perú
- Reportes y exportación de datos
- Integración con microservicios de knowledge-api

---

## Tecnología

**Stack TBD (a definir)**:
- Frontend: React / Next.js / Vue / Svelte (pendiente decisión)
- Cliente API: fetch / axios / requests
- Comunicación: REST (inicialmente), GraphQL (futuro)
- Dependencias: según framework elegido

---

## Principios de Documentación

1. **Solo lo esencial**: Documentar únicamente lo discutido y acordado
2. **Bloques de construcción**: Cada documento debe ser necesario y suficiente para construir
3. **Sin opciones**: Las opciones son para discusión en pantalla, no para documentar
4. **Conciso**: Evitar documentos extensos, ir al punto

### Qué NO documentar
- Listas de opciones
- Planes tentativos sin discutir
- Recomendaciones no solicitadas
- Información redundante o especulativa

### Qué SÍ documentar
- Decisiones técnicas tomadas (en sesiones/)
- Estructuras de datos
- Especificaciones funcionales
- Cambios de arquitectura
- Integraciones con otros servicios

---

## Política de Comunicación

- NUNCA usar jerga argentina o regionalismos (ej: "tenés", "vos", etc.)
- SIEMPRE usar español neutro profesional
- Usar tuteo neutro ("tienes", "tú") según contexto

---

## Política de Commits

- NUNCA incluir a Claude como autor del commit
- NO usar las líneas "🤖 Generated with Claude Code" ni "Co-Authored-By: Claude"
- Los commits deben aparecer como del usuario únicamente

---

## Gestión de Sesiones de Trabajo

### Al iniciar una sesión:
1. Revisar documentación en `latam-3c/docs/` para contexto
2. Si hay decisiones nuevas, documentarlas en `latam-3c/docs/3-sesiones/sesion_YYYY-MM-DD.md`
3. Mantener este repo enfocado en código y cambios técnicos

### Al finalizar una sesión:
1. Si hubo cambios significativos, crear/actualizar sesión en latam-3c
2. Hacer commit con descripción clara
3. Guardar cambios antes de terminar

---

## Estructura de Carpetas (TBD según framework)

Ejemplo para Next.js:
```
4c-peru/
├── pages/                      # Páginas de la aplicación
│   ├── index.tsx              # Dashboard Perú
│   ├── empresas/              # Listado empresas
│   ├── generador/             # Generador Excel
│   ├── resultados/            # Vista resultados
│   ├── benchmarking/          # Benchmarking
│   └── reportes/              # Reportes
├── components/                 # Componentes reutilizables
├── hooks/                      # Custom hooks
├── utils/                      # Utilidades
│   └── api_client.ts          # Cliente REST para ficem-core
├── config/                     # Configuración
│   └── api_config.ts          # URLs APIs
├── styles/                     # Estilos
└── package.json
```

---

## Comunicación con FICEM CORE

Este proyecto consume APIs REST de ficem-core:

**Endpoints esperados** (según `latam-3c/docs/1-tecnica/01-arquitectura-ficem-4c.md`):
- `GET /api/v1/excel-generator/generate` - Genera plantillas Excel
- `GET /api/v1/empresas` - Listado de empresas
- `GET /api/v1/resultados/{id}` - Resultados de cálculos
- `POST /api/v1/classifier/classify` - Clasificación GCCA

**Configuración**:
```
FICEM_CORE_URL=http://localhost:8000  # Desarrollo
FICEM_CORE_URL=https://api.ficem.com  # Producción (futuro)
```

---

## Próximos Pasos Iniciales

1. Definir stack tecnológico (framework)
2. Crear estructura base del proyecto
3. Implementar cliente REST para APIs de ficem-core
4. Crear primeras páginas (dashboard, listado empresas)
5. Integración con knowledge-api
6. Sincronizar estructura con plan en latam-3c

---

**Última actualización**: 2025-12-06
**Versión**: 1.0
