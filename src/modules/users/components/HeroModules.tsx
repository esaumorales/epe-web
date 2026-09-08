import HeroModulesImg from "@/assets/hero_modules.webp";
import HeroPhraseImg from "@/assets/hero_phrase.webp";
import { HERO_CLIP_ID, HERO_EDGE_D } from "@/modules/users/components/WaveClipDefs";
import { Sparkles } from "lucide-react";

/** Ancho de la foto dentro del hero. Lo comparten la foto y la línea decorativa. */
const PHOTO_WIDTH = "67%";

export default function HeroModules() {
  return (
    /* Alto en % del área disponible: el hero cede espacio al grid en pantallas
       bajas, así todo entra sin scroll sin depender de un alto fijo en px. */
    <section className="relative w-full h-[30.6%] shrink-0 overflow-hidden">
      {/* Foto. El borde curvo se recorta por CSS (no viene incrustado en el asset),
          así la altura del hero y la forma de la curva se ajustan por separado. */}
      <div
        className="absolute inset-y-0 right-0"
        style={{ width: PHOTO_WIDTH, clipPath: `url(#${HERO_CLIP_ID})` }}
      >
        <img
          src={HeroModulesImg}
          alt="Cultivo de palta de Agro Exportaciones F.V."
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Línea decorativa: el mismo borde, corrido 14px a la izquierda.
          `h-full` es obligatorio: el <svg> es un elemento reemplazado y con solo
          el ancho fijado toma el ratio intrínseco del viewBox (1:1), quedando de
          1013px de alto en vez de los 271 del hero.
          `preserveAspectRatio="none"` deja que el path 0..1 se estire igual que el
          clip-path, y `vectorEffect="non-scaling-stroke"` evita que ese estirado
          deforme el grosor del trazo. */}
      <svg
        className="absolute inset-y-0 right-0 h-full z-10 pointer-events-none -translate-x-[14px]"
        style={{ width: PHOTO_WIDTH }}
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={HERO_EDGE_D}
          fill="none"
          stroke="var(--brand)"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Lema. Antes venía incrustado en la foto; como asset aparte se puede
          reubicar y escalar sin volver a exportar la imagen de fondo. */}
      <img
        src={HeroPhraseImg}
        alt="Del campo al mundo. Frutas que conectan futuros."
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-[115%] w-auto object-contain pointer-events-none"
      />

      {/* Columna de textos */}
      <div className="relative z-20 h-full flex flex-col justify-center pl-14 lg:pl-20 max-w-[40%]">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={16} className="text-brand" strokeWidth={2} />
          <span className="text-[14px] md:text-[16px] font-medium tracking-[0.2em] md:tracking-[0.25em]">
            Bienvenido a tu
          </span>
        </div>

        <h1 className="text-4xl lg:text-[40px] leading-[1.08] text-brand-dark font-semibold tracking-tight">
          Centro de operaciones
          <br />
          <span className="text-brand font-medium">Agro F.V.</span>
        </h1>

        <div className="flex gap-4 items-start mt-5">
          <div className="h-0.5 w-8 bg-brand shrink-0 mt-2.5"></div>
          <p className="text-ink-muted text-[14px] leading-relaxed max-w-95">
            Selecciona un área para gestionar y continuar con tus actividades.
          </p>
        </div>
      </div>
    </section>
  );
}
