import HeroModulesImg from "@/assets/hero_modules.webp";
import { HERO_CLIP_ID } from "@/modules/users/components/WaveClipDefs";

export default function HeroModules() {
  return (
    /* Alto en % del área disponible: el hero cede espacio al grid en pantallas
       bajas, así todo entra sin scroll sin depender de un alto fijo en px. */
    <section className="relative w-full h-[38%] shrink-0 overflow-hidden">
      {/* Foto. El borde curvo se recorta por CSS (no viene incrustado en el asset),
          así la altura del hero y la forma de la curva se ajustan por separado. */}
      <div
        className="absolute inset-y-0 right-0 w-[64%]"
        style={{ clipPath: `url(#${HERO_CLIP_ID})` }}
      >
        <img
          src={HeroModulesImg}
          alt="Cultivo de palta de Agro Exportaciones F.V."
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Columna de textos */}
      <div className="relative z-20 h-full flex flex-col justify-center pl-14 lg:pl-20 max-w-[40%]">
        <span className="text-ink-muted text-[14px] md:text-[16px] font-medium tracking-[0.2em] md:tracking-[0.25em] mb-2 block">
          Bienvenido a tu
        </span>

        <h1 className="text-4xl lg:text-[40px] leading-[1.08] text-brand-dark font-semibold tracking-tight">
          Centro de operaciones
          <br />
          <span className="text-brand font-medium">Agro F.V.</span>
        </h1>

        <div className="flex gap-4 items-start mt-5">
          <div className="h-0.5 w-8 bg-brand shrink-0 mt-2.5"></div>
          <p className="text-ink-muted text-[14px] leading-relaxed max-w-[380px]">
            Selecciona un área para gestionar y continuar con tus actividades.
          </p>
        </div>
      </div>
    </section>
  );
}
