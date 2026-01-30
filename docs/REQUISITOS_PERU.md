# Requisitos de Alta - Perú

Este documento especifica los usuarios y empresas que deben crearse en `4c-ficem-core` para el sistema de Perú.

---

## País

**Código**: `peru`
**Nombre**: Perú

---

## Coordinador de País

**Organización**: ASOCEM (Asociación de Productores de Cemento)

| Campo | Valor |
|-------|-------|
| Email | coordinador@asocem.pe |
| Password | peru123 |
| Nombre | Coordinador ASOCEM |
| Rol | COORDINADOR_PAIS |
| País | peru |

---

## Empresas Participantes

### 1. UNACEM (Unión Andina de Cementos)

**Información de la Empresa**:
- Nombre: UNACEM
- País: peru
- Email: contacto@unacem.com.pe
- Perfil: Grupo cementero peruano (Cementos Andino, Cementos Sol)

**Usuarios**:

| Email | Password | Rol | Nombre |
|-------|----------|-----|--------|
| informante@unacem.com.pe | demo123 | INFORMANTE_EMPRESA | Informante UNACEM |
| supervisor@unacem.com.pe | demo123 | SUPERVISOR_EMPRESA | Supervisor UNACEM |
| visor@unacem.com.pe | demo123 | VISOR_EMPRESA | Visor UNACEM |

---

### 2. Cementos Pacasmayo

**Información de la Empresa**:
- Nombre: Cementos Pacasmayo
- País: peru
- Email: contacto@pacasmayo.com.pe
- Perfil: Empresa cementera del norte del Perú

**Usuarios**:

| Email | Password | Rol | Nombre |
|-------|----------|-----|--------|
| informante@pacasmayo.com.pe | demo123 | INFORMANTE_EMPRESA | Informante Pacasmayo |
| supervisor@pacasmayo.com.pe | demo123 | SUPERVISOR_EMPRESA | Supervisor Pacasmayo |
| visor@pacasmayo.com.pe | demo123 | VISOR_EMPRESA | Visor Pacasmayo |

---

### 3. Yura S.A.

**Información de la Empresa**:
- Nombre: Yura S.A.
- País: peru
- Email: contacto@yura.com.pe
- Perfil: Empresa cementera del sur del Perú

**Usuarios**:

| Email | Password | Rol | Nombre |
|-------|----------|-----|--------|
| informante@yura.com.pe | demo123 | INFORMANTE_EMPRESA | Informante Yura |
| supervisor@yura.com.pe | demo123 | SUPERVISOR_EMPRESA | Supervisor Yura |
| visor@yura.com.pe | demo123 | VISOR_EMPRESA | Visor Yura |

---

## Resumen

**Total de usuarios a crear**: 10

- 1 Coordinador País (ASOCEM)
- 9 Usuarios de empresas (3 por empresa × 3 empresas)

**Empresas**: 3
- UNACEM
- Cementos Pacasmayo
- Yura S.A.

---

## Notas

1. Todas las contraseñas son `demo123` para facilitar pruebas
2. Los usuarios de tipo `INFORMANTE_EMPRESA` pueden cargar datos
3. Los usuarios de tipo `SUPERVISOR_EMPRESA` pueden aprobar antes de enviar
4. Los usuarios de tipo `VISOR_EMPRESA` solo tienen acceso de lectura
5. El coordinador país puede ver todos los datos de Perú pero no aprobar submissions (esa es responsabilidad de FICEM)

---

## Validación del Frontend

El frontend `4c-peru` debe validar que:
1. Solo usuarios con `pais='peru'` puedan acceder
2. Los usuarios vean únicamente datos de su empresa (excepto coordinador que ve todo Perú)
3. Los roles tengan los permisos correctos según lo definido en ficem-core

---

**Creado**: 2026-01-16
**Para implementar en**: `4c-ficem-core`
