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

export default function WaveClipDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <clipPath id={WAVE_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path d="M0,0 L1,0 L1,1 L0.38,1 C0.26,1 0.135,0.88 0.13,0.58 C0.125,0.28 0.085,0.05 0,0 Z" />
        </clipPath>

        {/* El hero no repite la media luna de las cards: es una S de tres tramos.
            Medido sobre el contenedor real (968x302px):
            - Tramo superior: baja casi recto, se aparta 9.7px como maximo de la
              recta entre el vertice y la panza.
            - Panza en el centro exacto de la altura (0.50); radio de curvatura de
              90px por arriba y 74px por abajo. El radio sale de la relacion entre
              el largo del handle vertical y cuanto se desplaza en horizontal el
              control siguiente: handle mas largo o control mas cerca = mas redonda.
            - Contra-arqueo hacia adentro de +5.6px con el pico en y=0.78. La
              inflexion (0.160,0.750) no puede acercarse mas a la panza: cuanto
              menos alto queda entre ambas, mas cerrado es el giro. A 0.72 el radio
              caia a 13px y se sentia un golpe; asi se mantiene sobre 33px, que es
              el minimo de toda la curva y cae recien en la esquina inferior.
            La continuidad se sostiene manteniendo colineales los controles a cada
            lado de un anclaje: verticales en la panza, paralelos en la inflexion, y
            horizontal en el pie para que la esquina inferior quede redondeada. */}
        <clipPath id={HERO_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path
            d="M0.145,0 L1,0 L1,1 L0.24,1
               C0.200,1     0.1915,0.804 0.160,0.750
               C0.125,0.690 0.070,0.670  0.070,0.500
               C0.070,0.318 0.122,0.250  0.145,0 Z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
