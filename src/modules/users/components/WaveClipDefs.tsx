/**
 * Define una sola vez los clip-path curvos que usan el hero y las ModuleCard.
 * Se declaran en coordenadas relativas (objectBoundingBox: 0..1), por lo que las
 * curvas se adaptan a cualquier tamaño de contenedor sin deformarse.
 *
 * Forma de media luna: arriba termina en punta pegada al borde izquierdo y desde
 * ahí el borde barre hacia la derecha, redondeando la esquina inferior para que el
 * radio continúe el borde inferior del contenedor.
 */
export const WAVE_CLIP_ID = "module-card-wave";
export const HERO_CLIP_ID = "hero-wave";

/**
 * Solo el borde curvo del hero, de abajo hacia arriba. Se comparte entre el
 * clip-path y la línea decorativa para que no se puedan desincronizar: si se
 * ajusta la curva, ambas se mueven juntas.
 *
 * Medido sobre el contenedor real (~1013x271px):
 * - Tramo superior: baja casi recto, se aparta ~10px como máximo de la recta
 *   entre el vértice y la panza.
 * - Panza en el centro exacto de la altura (0.50). El radio de curvatura sale de
 *   la relación entre el largo del handle vertical y cuánto se desplaza en
 *   horizontal el control siguiente: handle más largo o control más cerca =
 *   panza más redonda.
 * - Contra-arqueo hacia adentro con el pico en y=0.78. La inflexión (0.160,0.750)
 *   no puede acercarse más a la panza: cuanto menos alto queda entre ambas, más
 *   cerrado es el giro y se siente un golpe en la curva.
 *
 * La continuidad se sostiene manteniendo colineales los controles a cada lado de
 * un anclaje: verticales en la panza, paralelos en la inflexión, y horizontal en
 * el pie para que la esquina inferior quede redondeada.
 */
export const HERO_EDGE_D =
  "M0.24,1 C0.200,1 0.1915,0.804 0.160,0.750 C0.125,0.690 0.070,0.670 0.070,0.500 C0.070,0.318 0.122,0.250 0.145,0";

export default function WaveClipDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <clipPath id={WAVE_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path d="M0,0 L1,0 L1,1 L0.38,1 C0.26,1 0.135,0.88 0.13,0.58 C0.125,0.28 0.085,0.05 0,0 Z" />
        </clipPath>

        {/* El borde curvo + el resto del rectángulo para cerrar la región */}
        <clipPath id={HERO_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path d={`${HERO_EDGE_D} L1,0 L1,1 Z`} />
        </clipPath>
      </defs>
    </svg>
  );
}
