# Páginas y Funcionalidades - 4C Perú

## Propósito del sitio

**Doble función:**
1. **Vitrina pública**: Mostrar el compromiso de la industria cementera peruana con la carbono neutralidad (Hoja de Ruta 2050)
2. **Sistema operativo**: Gestionar el ciclo anual de reporte de huella de carbono de las empresas

---

## Objetivos

| # | Objetivo |
|---|----------|
| O1 | Comunicar la Hoja de Ruta 2050 y el progreso hacia las metas |
| O2 | Permitir a empresas reportar sus datos de huella de carbono |
| O3 | Permitir a coordinadores validar los reportes |
| O4 | Mostrar resultados y benchmarking a los participantes |

---

## Páginas

### Públicas (sin login)

| Ruta | Página | Funcionalidad | Objetivo | Estado |
|------|--------|---------------|----------|--------|
| `/` | Home | Presentación del proyecto, cifras clave, CTA a login | O1 | Implementada |
| `/hoja-de-ruta` | Hoja de Ruta | Metas 2030/2050, ejes estratégicos, progreso, descargas | O1 | Pendiente |
| `/login` | Login | Acceso al sistema | O2, O3 | Implementada |

### Empresa (con login)

| Ruta | Página | Funcionalidad | Objetivo | Estado |
|------|--------|---------------|----------|--------|
| `/empresa/dashboard` | Dashboard | Estado del ciclo, acciones pendientes | O2 | Pendiente |
| `/empresa/ciclo-actual/mi-envio` | Mi Envío | Descargar plantilla, cargar Excel, ver estado | O2 | Pendiente |
| `/empresa/resultados` | Resultados | Ver huella calculada, clasificación GCCA, benchmarking | O4 | Pendiente |

### Coordinador (con login)

| Ruta | Página | Funcionalidad | Objetivo | Estado |
|------|--------|---------------|----------|--------|
| `/coordinador/dashboard` | Dashboard | KPIs del ciclo, progreso Hoja de Ruta | O3, O1 | Pendiente |
| `/coordinador/pendientes` | Pendientes | Revisar envíos, aprobar/rechazar | O3 | Pendiente |
| `/coordinador/reportes` | Reportes | Generar reportes país, exportar datos | O3, O4 | Pendiente |

---

## Estados del Envío

```
BORRADOR → ENVIADO → EN_REVISION → RECHAZADO ↻
                          ↓
                      VALIDADO → PROCESADO → PUBLICADO
```

---

## Flujo Principal

### Empresa
1. Login → Dashboard → Ve ciclo abierto
2. Mi Envío → Descarga plantilla → Completa offline
3. Mi Envío → Carga Excel → Valida → Envía
4. Resultados → Ve huella y benchmarking (cuando publicado)

### Coordinador
1. Login → Dashboard → Ve KPIs y pendientes
2. Pendientes → Revisa envío → Aprueba/Rechaza
3. Reportes → Genera reporte país

---

**Total: 9 páginas** (3 públicas + 3 empresa + 3 coordinador)

**Última actualización**: 2025-12-08
