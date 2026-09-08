# Plan de implementación — Identidad visual (Campañas + módulos hermanos)

Proyecto: `epe-web` (React + Vite + TypeScript, Tailwind v4, shadcn vendorizado en `shared/components/ui/`).

Contexto: login, confirmación de sesión, recuperar contraseña, header (`TopNavBar`) y selección de módulos (`UsersModulesPage`/`ModuleCard`) ya tienen la identidad visual definitiva (tokens en `src/index.css`: `brand`, `brand-dark`, `brand-surface`, `brand-border`, `ink`, `ink-body`, `ink-muted`, `surface-page`, más la escala `chart-1..5` y la escala de radios `--radius-sm` a `--radius-4xl`). El módulo de Campañas (y los de Clientes/Proveedores/Certificaciones, aún más crudos) fueron construidos antes de ese sistema y repiten los mismos colores a mano en hex, con radios y sombras inconsistentes. Este plan lleva esos módulos al mismo nivel, sin rehacer su lógica.

---

## Regla 0 — Política de tokens (aplica a TODO el trabajo, no solo a este plan)

Antes de escribir cualquier color, ejecutar este procedimiento:

1. **¿Ya existe un token en `src/index.css` con ese valor exacto?** → usarlo (`brand`, `brand-dark`, `brand-surface`, `brand-border`, `ink`, `ink-body`, `ink-muted`, `surface-page`, `chart-1..5`, `border`, `muted-foreground`, etc.). Nunca repetir el hex a mano.
2. **¿El color se repite ≥2 veces o representa un estado semántico** (advertencia, neutro, destacado, éxito, error)? → agregarlo como **token nuevo** en `index.css` (ver Fase 1) y consumirlo por token, no por hex.
3. **¿Es un valor verdaderamente único y decorativo** (una sombra puntual, un degradado de una sola vez)? → puede quedar como valor arbitrario de Tailwind, sin tokenizar.

Esta regla gobierna cada fase de abajo. Si en el camino aparece un hex nuevo no contemplado aquí, se decide con este procedimiento, no se improvisa.

---

## Fase 1 — Nuevos tokens en `src/index.css`

Agregar en `:root` (junto a `--brand`, `--brand-surface`, etc.) y su mapeo correspondiente en el bloque `@theme inline`:

```css
/* :root */
--status-warning: #f97316;          /* ya usado como flecha de tendencia negativa en StatCard */
--status-neutral: #94a3b8;          /* ya usado en el sparkline "gris" de StatCard */
--status-neutral-surface: #eef1f4;  /* fondo claro a juego, mismo patrón que brand-surface */
--status-highlight: #fbbf24;        /* ya usado en el sparkline "amarillo" de StatCard */
--status-highlight-surface: #fff7e6;/* fondo claro a juego */
```

```css
/* @theme inline */
--color-status-warning: var(--status-warning);
--color-status-neutral: var(--status-neutral);
--color-status-neutral-surface: var(--status-neutral-surface);
--color-status-highlight: var(--status-highlight);
--color-status-highlight-surface: var(--status-highlight-surface);
```

Esto habilita clases `text-status-warning`, `bg-status-neutral-surface`, etc. en toda la app.

**Verificación de esta fase**: `npx tsc --noEmit` (no debería afectar TS) y confirmar visualmente que no cambió nada aún (solo se agregaron variables, no se consumieron).

---

## Fase 2 — Layout global (afecta TODAS las vistas de una vez)

**Archivo: `src/shared/layout/DashboardLayout.tsx`**
- En el `<main>` (línea ~22), agregar `bg-surface-page` a la className existente.

**Archivo: `src/shared/layout/TopNavBar.tsx`**
- En el `<header>` (línea ~25), agregar `border-b border-border` a la className existente, para crear la línea de separación con el contenido.

**Verificación**: levantar el dev server, abrir `/modules` y `/campaigns`, confirmar que el header ahora tiene una línea sutil debajo y el fondo del contenido se distingue del blanco de las cards (debe ser un gris-verdoso casi imperceptible, no un cambio dramático).

---

## Fase 3 — Componente compartido `PageHeader`

**Por qué**: `CampaignsPage.tsx`, `ClientsPage.tsx`, `ProvidersPage.tsx` y `CertificationsPage.tsx` repiten literalmente el mismo bloque de encabezado (ícono + `<h1>` + a veces botón de acción), con estilos ligeramente distintos entre sí. Es duplicación real, no especulativa — calza con `shared/layout/` según `AGENTS.md`.

**Crear: `src/shared/layout/PageHeader.tsx`**

```tsx
import type { ReactNode } from "react";

interface PageHeaderProps {
    icon: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
}

export default function PageHeader({ icon, title, description, action }: PageHeaderProps) {
    return (
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <div className="text-brand">{icon}</div>
                <div className="flex flex-col">
                    <h1 className="text-[22px] font-bold text-ink leading-tight">{title}</h1>
                    {description && (
                        <p className="text-[13px] text-ink-muted font-medium">{description}</p>
                    )}
                </div>
            </div>
            {action}
        </div>
    );
}
```

**Verificación**: `npx tsc --noEmit`. Este componente no se usa todavía en ninguna página hasta la Fase 4/10, así que no debe cambiar nada visualmente aún.

---

## Fase 4 — `CampaignsPage.tsx`

Reemplazar el bloque completo del header actual (líneas 19-33) por:

```tsx
<div className="px-14 py-5">
    <PageHeader
        icon={<Leaf size={24} strokeWidth={2.5} />}
        title="Planificación de Campaña"
        description="Organiza y planifica tus campañas de exportación."
        action={
            <Button onClick={() => setIsCreateModalOpen(true)} className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm">
                + Nueva Campaña
            </Button>
        }
    />
    ...
```

- Importar `PageHeader` desde `@/shared/layout/PageHeader` y `Button` desde `@/shared/components/ui/button`.
- Eliminar el `<button>` crudo y sus clases `bg-[#6b9d3b] hover:bg-[#58852e] rounded-[0.8rem]`.
- La descripción es la misma que ya existe en `ModulesGrid.tsx:24` — copiarla tal cual, no inventar texto nuevo.

**Verificación**: visual — el botón debe verse del mismo verde (`brand`) que el ícono `Leaf` de al lado (hoy son dos verdes distintos).

---

## Fase 5 — `StatCard.tsx` + `CampaignStatsOverview.tsx`

**`StatCard.tsx`**:
- Reemplazar todos los hex: `#5D9634`→`brand`, `#1a2f22`→`ink`, `#EBF3EC`→`brand-surface`, `#d2e5d5`→`brand-border`, `#9ca3af`→`ink-muted`, `#f97316`→`status-warning` (color del trend "down").
- En el objeto `config` del `Sparkline` (líneas 18-34): cambiar `stroke`/`fill` de valores hex a `"var(--brand)"`, `"var(--status-neutral)"`, `"var(--status-highlight)"` (los atributos SVG `stroke`/`fill` aceptan `var()` directamente, no requieren clases Tailwind).
- Agregar el patrón de hover que ya existe en `ModuleCard.tsx:23`: añadir a la `Card` (línea 67) `border-l-[3px] border-transparent transition-all hover:-translate-y-0.5 hover:border-brand` — mismo lenguaje visual que las tarjetas de módulos.

**Verificación**: pasar el mouse sobre cada stat card — debe levantarse levemente y mostrar el borde izquierdo verde, igual que las tarjetas de `/modules`.

---

## Fase 6 — `CampaignFilters.tsx`

- Reemplazar el `<div className="bg-white rounded-2xl border ... ring-1 ring-foreground/10 shadow-[...]">` (línea 8) por el componente `Card`/`CardContent` compartido (mismo patrón que `StatCard`), quitando el `ring-1 ring-foreground/10` redundante (ya sobra con el `border`).
- Reemplazar hex: `#5D9634`→`brand`, `#1a2f22`→`ink`, `gray-500`→`ink-muted`, `gray-100`/`gray-400`→`border`/`muted-foreground`.
- Mantener `rounded-sm` en los inputs/selects/botón (ya es consistente con el resto del proyecto — auth usa el mismo `rounded-sm` en sus `InputGroup`).

**Verificación**: visual — el panel de filtros no debe verse distinto de antes (mismo layout), solo con los colores correctos y un borde más limpio (uno solo, no dos superpuestos).

---

## Fase 7 — `CampaignTable.tsx` + `StatusBadge.tsx`

**`CampaignTable.tsx`**:
- Mismo cambio de contenedor a `Card`/`CardContent` que en Fase 6.
- `bg-[#f9fbf9]` (header de tabla, línea 71) → `bg-surface-page`.
- Reemplazar todos los hex restantes por sus tokens (`ink`, `ink-body` para `#545454`, `brand-surface` para `#EBF3EC`).
- Agregar `active:scale-95` a los botones de acción de cada fila (línea 95-114) para feedback táctil al click.
- El botón `MoreVertical` (línea 112-114) no tiene acción conectada — envolverlo en un `DropdownMenu` (mismo componente que ya usa `TopNavBar.tsx`) con al menos una opción placeholder ("Ver detalles", "Duplicar", "Eliminar"), o si no hay contenido real para ese menú todavía, quitarlo por ahora en vez de dejarlo decorativo.

**`StatusBadge.tsx`** — decisión de diseño (ya tomada, no requiere validación adicional):
- `"Planificado"` se queda en verde: `bg-brand-surface text-brand` (antes `#EBF3EC`/`#5D9634`).
- `"Terminado"` cambia de naranja a **neutro**: `bg-status-neutral-surface text-status-neutral`. Razón: naranja comunica "atención/pendiente" en cualquier sistema de color; un estado terminado/cerrado no debería alarmar al usuario. El punto (`div` de 1.5px) sigue el mismo cambio de color.

**Verificación**: la tabla debe verse igual en estructura; el badge "Terminado" ahora se ve gris en vez de naranja — confirmar que se lee bien sobre fondo blanco.

---

## Fase 8 — Modales (`CampaignEditModal.tsx`, `CampaignCreateModal.tsx`, `CampaignSuccessModal.tsx`, `CampaignCertificationsModal.tsx`, `CampaignLinkClientModal.tsx`)

Aplicar a los 5 archivos (los dos primeros ya confirmados con este patrón; los otros dos siguen la misma estructura de `Dialog`/`DialogContent`, revisar y aplicar igual):

- **Radio consistente**: contenedor del modal `rounded-[1.5rem]` → `rounded-2xl` (usa el token `--radius-2xl` ya definido, mismo valor visual, ya no arbitrario). Inputs/`SelectTrigger`/`SelectContent` `rounded-xl`/`rounded-lg` → unificar todos a `rounded-lg`. Tags/pills (`rounded-full`) se quedan igual — es el radio correcto para ese elemento.
- **Colores**: `#5D9634`→`brand`, `#1a2f22`→`ink`, `#EBF3EC`→`brand-surface`, `#d2e5d5`→`brand-border`, `gray-500`/`gray-200`→`muted-foreground`/`border`.
- **Botones primarios**: `bg-[#6b9d3b] hover:bg-[#58852e]` (en `CampaignCreateModal.tsx:159` y `CampaignSuccessModal.tsx:54`) → `bg-brand hover:bg-brand-dark`. En `CampaignEditModal.tsx:191` ya usa `bg-[#5D9634] hover:bg-[#5D9634]` (sin variación de hover, bug menor) → `bg-brand hover:bg-brand-dark`.
- **`CampaignSuccessModal.tsx`**: ícono `Smile` en círculo `#EBF3EC`/`#5D9634` → `brand-surface`/`brand`, igual patrón.

**Verificación**: abrir cada modal desde la tabla (botones de certificaciones, clientes, editar, "+ Nueva Campaña") y confirmar que todos comparten el mismo verde y el mismo radio de esquina.

---

## Fase 9 — Microinteracciones con `tw-animate-css` (ya instalado, cero dependencias nuevas)

- `CampaignStatsOverview.tsx`: envolver cada `StatCard` en un `div` con `animate-in fade-in slide-in-from-bottom-2 duration-500` y un `style={{ animationDelay: `${index * 75}ms` }}` para el efecto de stagger (requiere convertir el `.map` implícito actual en un `.map` explícito sobre un array de props, o agregar el delay manualmente a cada una de las 4 instancias).
- `CampaignTable.tsx`: mismo tratamiento en las `TableRow` (delay más corto, ~50ms entre filas).

**Verificación**: recargar `/campaigns` y observar que las stat cards y filas de tabla entran con un fade+slide sutil, no de golpe.

---

## Fase 10 — Replicar a Clientes, Proveedores, Certificaciones

`ClientsPage.tsx`, `ProvidersPage.tsx`, `CertificationsPage.tsx` **no tienen ni padding** (`px-14 py-5`) **ni descripción** — están más crudos que Campañas, no solo "menos pulidos".

Para cada uno:

1. Envolver todo el contenido en `<div className="px-14 py-5">` (hoy usan un fragment `<>`, sin ningún padding — el contenido llega pegado al borde de la ventana).
2. Reemplazar el `<h1>` suelto por `<PageHeader icon={...} title="..." description="..." />`, usando exactamente el mismo texto de `description` que ya existe en `ModulesGrid.tsx` para cada módulo:
   - Proveedores: `<Users size={24} strokeWidth={2.5} />`, "Administra y evalúa a tus proveedores."
   - Clientes: `<User size={24} strokeWidth={2.5} />`, "Administra y da seguimiento a tus clientes."
   - Certificaciones: `<Award size={24} strokeWidth={2.5} />`, "Administra y haz seguimiento de las certificaciones."
3. Revisar sus componentes `*Filters.tsx`/`*Table.tsx` hermanos (mismo patrón que `CampaignFilters`/`CampaignTable`) y aplicarles exactamente las Fases 6-7 (contenedor `Card`, tokens en vez de hex, radios consistentes). Si tienen modales propios, aplicarles la Fase 8.

**Verificación**: las 4 páginas de módulo deben verse como parte de la misma app — mismo padding, mismo header, misma paleta, mismos radios.

---

## Fase 11 — Verificación final (no marcar como terminado sin esto)

1. `npx tsc --noEmit` — cero errores.
2. `npx eslint src` — cero errores nuevos.
3. `npm run build` (o `pnpm build`) — el build de producción debe completar sin fallos.
4. Recorrido visual en navegador (viewport ≥1280px):
   - `/modules` → `/campaigns` → abrir cada modal (crear, editar, certificaciones, vincular cliente) → volver.
   - `/clientes`, `/proveedores`, `/certificaciones`.
   - Confirmar en cada vista: header con línea separadora, fondo `surface-page` visible, un solo verde (`brand`) en toda la vista, radios consistentes, hover con borde izquierdo verde en cards, badges con los colores nuevos.
5. `grep -rn "#5D9634\|#6b9d3b\|#58852e\|#1a2f22\|#EBF3EC\|#d2e5d5\|#f9fbf9\|#9ca3af" src/modules/campaigns src/modules/clients src/modules/providers src/modules/certifications` → **debe devolver cero resultados**. Si aparece algo, esa fase no está completa.

---

## Definición de "hecho"

El trabajo se considera terminado cuando:
(a) el grep del punto 5 de la Fase 11 no encuentra nada,
(b) `tsc`/`eslint`/`build` pasan limpios, y
(c) las 4 vistas de módulo comparten header, padding, paleta y radios de forma indistinguible entre sí al ojo.

Si esto se ejecuta como loop autónomo: cada fase (1 a 10) es una iteración natural con su propio criterio de verificación — no avanzar a la siguiente fase sin que la verificación de la actual pase. La Fase 11 es el gate final que decide si el loop se detiene o sigue iterando sobre lo que falte.
