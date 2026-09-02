# AGENTS.md — epe-web

Guía rápida de arquitectura para agentes que trabajen en este proyecto (React + Vite + TypeScript).

## Screaming Architecture

- `src/modules/<domain>/{components,pages}` — un módulo por feature de negocio (`auth`, `campaigns`, `users`).
- `components/` es **plano**: sin anidamiento atomic-design (`molecules`/`organisms`). Se descartó deliberadamente por ser indirección innecesaria.
- Cada módulo es autocontenido: sus páginas importan sus propios componentes vía `@/modules/<domain>/components/...`.

## `src/shared/`

Todo lo transversal / no-dominio vive aquí:

- `shared/components/ui/` — catálogo shadcn vendorizado. **Nunca** meter lógica de negocio ahí a mano; se actualiza vía `npx shadcn@latest add`.
- `shared/layout/` — chrome de la app: `Sidebar.tsx`, `TopNavBar.tsx`, `DashboardLayout.tsx`.

## Convención de imports

- Usar el alias `@/` para todo import interno (`@/modules/...`, `@/shared/...`, `@/lib/...`).
- Los imports relativos (`./`, `../`) quedan reservados **exclusivamente** para archivos dentro de `shared/components/ui/` (convención propia de shadcn, se deja intacta para no divergir del upstream).

## Config de shadcn

`components.json` define `aliases.ui` y `aliases.components` apuntando a `@/shared/components(/ui)`. Por eso `npx shadcn@latest add` ya coloca los componentes nuevos en el lugar correcto sin ajustes manuales.
