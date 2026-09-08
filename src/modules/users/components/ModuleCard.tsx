import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { WAVE_CLIP_ID } from "@/modules/users/components/WaveClipDefs";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  onClick: () => void;
}

export default function ModuleCard({
  title,
  description,
  icon,
  image,
  onClick,
}: ModuleCardProps) { 
  return (
    <div
      onClick={onClick}
      className="group relative flex items-stretch w-full h-full min-h-35 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border-l-[3px] border-transparent hover:border-brand"
    >

      {/* Efecto de iluminación (Shimmer on hover) */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
      </div>

      {/* Left section (Icon & Text) */}
      <div className="flex flex-1 items-start p-5 gap-4 z-20 relative">
        {/* Icon */}
        <div className="w-14 h-14 shrink-0 rounded-full bg-brand-surface flex items-center justify-center text-brand mt-0.5">
          {icon}
        </div>

        {/* Text & Link */}
        <div className="flex flex-col justify-center flex-1">
          <h2 className="text-[17px] font-bold text-ink leading-tight mb-1">
            {title}
          </h2>
          <p className="text-ink-muted text-[13px] leading-snug mb-2 line-clamp-3">
            {description}
          </p>
          <div className="text-brand text-[13px] font-bold flex items-center gap-1">
            Acceder al módulo{" "}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>

      {/* Right section (Image with wavy left edge) */}
      <div
        className="w-[155px] shrink-0 relative z-0 -ml-5"
        style={{ clipPath: `url(#${WAVE_CLIP_ID})` }}
      >
        <div className="w-full h-full bg-muted">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          )}
        </div>

        {/* Degradado que difumina la imagen hacia el fondo de la card */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/55 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
