# Sesión 2025-12-07: Definición Macroestructura 4C Perú

**Fecha**: 2025-12-07
**Duración**: Sesión única de definición arquitectónica
**Estado**: Completado

---

## OBJETIVO SESIÓN

Definir la **macroestructura completa de 4c-peru** basada en:
1. Documentación TDR (Términos de Referencia FICEM-ASOCEM-PRODUCE)
2. Hoja de Ruta Perú 2050 (roadmap de reducción de emisiones)
3. Modelo de **dual validation** (cálculos locales + centrales)
4. Funcionalidades específicas por rol (Empresa vs Coordinador)

---

## CONTEXTO INICIAL

### Desafío Identificado
El usuario había detectado que faltaban documentos críticos que no habían sido revisados:
- **TDR** (Términos de Referencia)
- **Hoja de Ruta Perú 2050** (Carbon Neutrality Roadmap)

Estos documentos redefinían el alcance del proyecto: no es solo "cargar Excel y calcular", sino **rastrear progreso hacia targets de reducción de emisiones para 2030 y 2050**.

### Clarificación Crítica: Dual Validation Model
El usuario aclaró el flujo de datos más importante:

> "Cada empresa carga sus datos, en principio anual pero podría bajar a mensual. Se calcula pero además hay una validación y entonces los cálculos tendrán algo así como 'estados' dependiendo del flujo y puede haber cálculos locales para validación o autoevaluación y cálculos centrales para validación central externa y publicación"

**Implicación**: El sistema NO publica automáticamente. Hay dos tipos de cálculos:
- **Locales**: Empresa valida internamente (fórmulas en Excel)
- **Centrales**: FICEM Central re-calcula y publica resultados oficiales

---

## TRABAJO REALIZADO

### 1. Documento: Estructura de Contenidos 4C Perú (Principal)
**Archivo**: `latam-3c/docs/1-tecnica/03-estructura-contenidos-4c-peru.md`

**Contiene**:

#### 1.1 Modelo de Dual Validation
```
Empresa (cálculos locales)
    └─ ENVÍA SUBMISSION
         └─ Coordinador REVISA (aprueba/rechaza)
             └─ Si aprueba: envía a FICEM Central
                 └─ FICEM CALCULA (validación externa)
                 └─ PUBLICA RESULTADO
```

#### 1.2 Estados del Flujo
- **BORRADOR**: Empresa completando Excel
- **ENVIADO**: En cola de revisión
- **VALIDANDO**: Coordinador está revisando
- **RECHAZADO**: Requiere correcciones
- **APROBADO**: Enviado a FICEM
- **CALCULANDO**: FICEM ejecutando cálculos
- **PUBLICADO**: Resultados finales disponibles

#### 1.3 Dos Roles Principales
**EMPRESA** (personal de planta):
- Descargar plantilla Excel
- Completar datos (producción, energía, materiales)
- Validar localmente
- Enviar cuando esté lista
- Recibir feedback
- Ver resultados y benchmarking

**COORDINADOR** (ASOCEM + PRODUCE):
- Revisar envíos de empresas
- Aprobar/rechazar con comentarios
- Monitorear ciclo anual
- Ver dashboard de Hoja de Ruta (2025 vs 2030 vs 2050)
- Generar reportes país
- Exportar datos consolidados

#### 1.4 Estructura de Páginas Completa

**EMPRESA** (11 rutas):
- Dashboard (estado ciclo, acciones rápidas)
- Ciclo Actual: Descargar, Mi Envío, Comentarios
- Resultados: Actual, Histórico, Benchmarking
- Reportes: Individual

**COORDINADOR** (17 rutas):
- Dashboard (KPIs + Hoja de Ruta)
- Ciclo Actual: Pendientes, Por Validar, Validados
- Hoja de Ruta: Dashboard Progreso, Comparativa 2030, Proyección 2050
- Análisis: Benchmarking, Tendencias
- Reportes: Ciclo Anual, Ministerio, Exportar FICEM

#### 1.5 Base de Datos Centralizada
- Todos los datos en **ficem-core** (Backend centralizado)
- 4c-peru consume via APIs REST
- Datos por país con esquemas separados
- JWT Bearer Token con contexto completo (rol, grupo, empresa_id, pais_code)

#### 1.6 Endpoints Definidos
Fase 1-7, con desglose por prioridad:
- Autenticación
- Ciclos y Plantillas
- Envíos y Validación
- Comentarios y Revisión
- Resultados y Cálculos
- Hoja de Ruta y Métricas
- Reportes y Exportación

---

### 2. Documento: Mapa Visual 4C Perú
**Archivo**: `latam-3c/docs/1-tecnica/03b-mapa-visual-4c-peru.md`

**Propósito**: Referencia rápida visual

**Contiene**:
- Mapa de sitio (árbol de navegación)
- Vista del flujo Empresa (anual completo)
- Vista del flujo Coordinador (validación + análisis)
- Estructura de URLs por rol
- Componentes reutilizables (auth, layouts, charts, forms)
- Flujo de datos (empresa → ficem-core → coordinador)
- Matriz de permisos (quién puede hacer qué)
- Estados y transiciones (diagrama)
- Timeline del año

---

### 3. Documento: API Endpoints Prioritarios
**Archivo**: `latam-3c/docs/1-tecnica/04-api-endpoints-prioritarios.md`

**Propósito**: Guía para implementación de backend

**Contiene**:
- 7 Fases de implementación (Semana 1-7+)
- Cada endpoint con:
  - Request/Response completos (JSON)
  - Query parameters
  - Error handling
  - Códigos HTTP

**Fases**:
1. **Autenticación + Datos Básicos** (Semana 1-2): Login, me, empresas
2. **Ciclo y Plantillas** (Semana 2-3): Ciclo actual, descargar Excel
3. **Envíos y Validación** (Semana 3-4): Cargar, validar, enviar
4. **Comentarios y Revisión** (Semana 4-5): Revisar, comentar, aprobar
5. **Resultados y Cálculos** (Semana 5-6): Ver resultados, benchmarking
6. **Hoja de Ruta y Métricas** (Semana 6-7): Progreso país, targets 2030/2050
7. **Reportes y Exportación** (Semana 7+): Generar reportes, exportar

**Matriz de prioridad**: 25 endpoints clasificados 🔴 Crítica / 🟡 Alta / 🟢 Media

**Datos dummy**: Incluye ejemplos de empresas, ciclos, usuarios para testing inicial

---

## DECISIONES ARQUITECTÓNICAS TOMADAS

### 1. Backend Centralizado
- **ficem-core** es el ÚNICO backend
- Todos los datos (Perú, Colombia, Ecuador) en PostgreSQL
- 4c-peru es SOLO frontend (consume APIs)

**Justificación**:
- Reutilización completa para múltiples países
- Validación de datos en un solo lugar
- Escalabilidad (PostgreSQL vs SQLite)

### 2. Autenticación JWT Centralizada
- ficem-core emite y valida tokens
- 4c-peru guarda en cookie httpOnly (no localStorage)
- Token contiene: user_id, rol, grupo, empresa_id, pais_code

**Justificación**:
- Sin dependencias externas (Auth0, etc.)
- Contexto completo en token para tomar decisiones de UI

### 3. Ciclo Anual con Estados
- Estados explícitos (BORRADOR → ENVIADO → VALIDANDO → APROBADO → PUBLICADO)
- No hay cálculos automáticos (requieren aprobación coordinador)
- Dual validation: local (empresa) + central (FICEM)

**Justificación**:
- Cumple con requisitos TDR
- Auditable y trazable
- Flexibilidad para cambiar a ciclos mensuales/trimestrales

### 4. Hoja de Ruta 2050 como Contexto
- Targets claros: 2025 (580) → 2030 (520) → 2050 (350) kg CO₂e/tcem
- Dashboard del coordinador muestra progreso vs targets
- Análisis de velocidad de reducción requerida

**Justificación**:
- Alineación con regulación peruana (MINAM)
- Métrica clara de éxito del sistema
- Diferencia 4c-peru de otros sistemas de medición

### 5. Estructura de Rutas por Rol
- `/empresa/*` para personal de planta
- `/coordinador/*` para ASOCEM/PRODUCE
- Protegidas con middleware de autenticación

**Justificación**:
- Claridad en navegación
- Separación de contextos
- Fácil de defender en UI (no moestran opciones inválidas)

---

## ESTRUCTURA FINAL DE DIRECTORIOS

```
4c-peru/
├── app/
│   ├── (auth)/login/
│   ├── empresa/
│   │   ├── dashboard/
│   │   ├── ciclo-actual/ (descargar, mi-envio, comentarios)
│   │   ├── resultados/ (actual, historico, benchmarking)
│   │   └── reportes/ (individual)
│   └── coordinador/
│       ├── dashboard/
│       ├── ciclo-actual/ (pendientes, por-validar, validados)
│       ├── hoja-ruta/ (dashboard, comparativa-2030)
│       ├── analisis/ (benchmarking, tendencias)
│       └── reportes/ (ciclo-anual, ministerio, exportar-ficem)
├── components/
│   ├── auth/ (LoginForm, ProtectedRoute)
│   ├── layouts/ (NavbarEmpresa, NavbarCoordinador, Footer)
│   ├── shared/ (ThemeToggle, Spinners, Alerts)
│   ├── charts/ (Huellas, Bandas GCCA, Benchmarking, HojadeRuta)
│   └── forms/ (UploadExcel, Validación, Comentarios)
├── hooks/ (useAuth, useFiemCore, useLocalStorage)
├── lib/ (api.ts, auth.ts, validators.ts)
├── utils/ (apiClient.ts, formatters.ts, constants.ts)
├── styles/ (globals.css con temas)
└── docs/
    └── sesiones/ (registro de decisiones por fecha)
```

---

## PRÓXIMOS PASOS

### Fase 0: Preparación (Ahora)
- [ ] Revisar documentos en latam-3c
- [ ] Confirmar estructura de páginas
- [ ] Preparar datos dummy en ficem-core

### Fase 1: Autenticación (Semana 1-2)
- [ ] Implementar LoginForm component
- [ ] Crear hook useAuth()
- [ ] Proteger rutas con ProtectedRoute
- [ ] Crear página Login

### Fase 2: Dashboard Empresa (Semana 2-3)
- [ ] Dashboard Empresa (estado ciclo, acciones rápidas)
- [ ] Conectar con GET /api/ciclos/actual
- [ ] Conectar con GET /api/envios/{id}

### Fase 3: Descargar y Enviar (Semana 3-4)
- [ ] Página Descargar Plantilla
- [ ] Página Mi Envío (carga, validación local, envío)
- [ ] Upload Excel, validación, envío

### Fase 4: Dashboard Coordinador (Semana 4-5)
- [ ] Dashboard Coordinador (KPIs, Hoja de Ruta)
- [ ] Página Envíos Pendientes (tabla con acciones)
- [ ] Panel de Revisión (comentarios, aprobar/rechazar)

### Fase 5: Resultados y Benchmarking (Semana 5-6)
- [ ] Página Resultado Actual (huella, banda, comparativas)
- [ ] Página Benchmarking (box plot, percentiles)
- [ ] Gráficos de distribución

### Fase 6: Hoja de Ruta 2050 (Semana 6-7)
- [ ] Dashboard Hoja de Ruta (speedometer 2025 vs 2030)
- [ ] Comparativa 2030 (gap analysis)
- [ ] Gráficos de proyección

### Fase 7: Reportes (Semana 7+)
- [ ] Generación de reportes (PDF, Excel)
- [ ] Exportación de datos

---

## DEPENDENCIAS EXTERNAS

### Esperar que ficem-core tenga:
- Endpoints Fase 1 (Auth, empresas)
- Endpoints Fase 2 (Ciclos, plantillas)
- Endpoints Fase 3 (Envíos)
- Etc.

### Datos dummy necesarios:
```
- Empresas Perú (45 empresas)
- Ciclo 2025 (ABIERTO)
- Usuarios de prueba (empresa + coordinador)
- Ciclos históricos (2021-2024)
- Resultados históricos (para benchmarking)
```

---

## NOTAS IMPORTANTES

### Validación Local vs Central
- **Local**: Empresa usa fórmulas Excel para validar antes de enviar
- **Central**: FICEM re-calcula con factores oficiales 2025
- NO son idénticos (factores pueden variar)
- Coordinador ve ambos en dashboard

### Ciclo Anual
- Generalmente enero-mayo
- Flexible (puede ser trimestral o mensual después)
- Plazo de envío: ~30-90 días
- Validación: ~15-30 días
- Publicación: ~7-14 días

### Hoja de Ruta 2050
- **2025 (Línea Base)**: 580 kg CO₂e/tcem
- **2030 (Meta Nacional)**: 520 kg CO₂e/tcem (10% reducción)
- **2050 (Carbon Neutrality)**: 350 kg CO₂e/tcem (~40% reducción)
- Alineado con targets mundiales GCCA

### Benchmarking Anónimo
- Empresa NUNCA ve nombres de competidores
- Solo ve rangos (min, Q1, mediana, Q3, max)
- Distribuida por banda GCCA
- Percentil donde se encuentra

---

## CAMBIOS EN CLAUDE.MD

Se actualizó la sección de "Sesiones" para indicar que el registro de decisiones vive en `docs/sesiones/` de **este repo** (4c-peru), no en latam-3c.

Esto permite que:
- Decisiones de 4c-peru quedan aquí
- Documentación técnica centralizada en latam-3c
- No duplicación de registros

---

## ARCHIVOS CREADOS

| Archivo | Ubicación | Líneas | Descripción |
|---------|-----------|--------|-------------|
| `01-estructura-contenidos.md` | 4c-peru/docs/tecnica/ | 700+ | Macroestructura completa |
| `02-mapa-visual.md` | 4c-peru/docs/tecnica/ | 400+ | Referencia visual rápida |
| `03-api-endpoints.md` | 4c-peru/docs/tecnica/ | 1000+ | Endpoints por fase |
| `2025-12-07-macroestructura-4c-peru.md` | 4c-peru/docs/sesiones/ | 400+ | Esta sesión (registro de decisiones) |
| `CLAUDE.md` (actualizado) | 4c-peru | - | Aclaración de dónde va sesiones |
| `README.md` (actualizado) | 4c-peru | - | Links a documentación local |

---

## PRÓXIMA SESIÓN

- Revisar estructura con el usuario
- Confirmar orden de implementación
- Iniciar Fase 1: Autenticación y Login
- Si ficem-core tiene datos dummy, comenzar con conectividad

---

**Estado Final**: ✅ Macroestructura completamente definida
**Documentación**: ✅ 3 documentos creados (estructura, mapa visual, endpoints)
**Listos para**: Implementación de Fase 1 (Autenticación)

---

*Documento de sesión generado: 2025-12-07 ~ 14:30 CET*
