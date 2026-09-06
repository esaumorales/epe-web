import { Leaf } from "lucide-react";

export default function ModulesFooter() {
  return (
    <footer className="w-full mt-auto pb-6 px-14 flex items-center justify-between gap-6 overflow-hidden">
      <div className="flex items-center gap-3 shrink-0">
        <Leaf size={18} className="text-brand" />
        <span className="text-[10px] md:text-[11px] font-medium tracking-[0.25em] text-ink-muted uppercase whitespace-nowrap">
          Agricultura que conecta personas
        </span>
      </div>

      <div className="flex-1 h-px bg-ink-muted/20 min-w-[50px]"></div>

      <span className="text-[10px] md:text-[11px] font-medium tracking-[0.25em] text-ink-muted uppercase whitespace-nowrap shrink-0">
        Agro Exportaciones F.V.
        <span className="opacity-40 mx-2">|</span>
        Todos los derechos reservados © 2024
      </span>
    </footer>
  );
}
