import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/lib/utils";
import type { CampanaEstado } from "@/modules/campaigns/api/campaign.dto";

interface StatusBadgeProps {
    status: CampanaEstado;
}

const ESTADO_LABEL: Record<CampanaEstado, string> = {
    planificacion: "Planificación",
    "en proceso": "En proceso",
    terminado: "Terminado",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    const isPlanificacion = status === "planificacion";
    const isTerminado = status === "terminado";

    return (
        <Badge
            variant="outline"
            className={cn(
                "rounded-full px-3.5 py-1.5 font-semibold text-[13px] border-none gap-2",
                isPlanificacion && "bg-[#EBF3EC] text-[#5D9634]",
                isTerminado && "bg-[#FEF1E7] text-[#E06E22]"
            )}
        >
            <div className={cn(
                "w-1.5 h-1.5 rounded-full",
                isPlanificacion && "bg-[#5D9634]",
                isTerminado && "bg-[#E06E22]"
            )} />
            {ESTADO_LABEL[status]}
        </Badge>
    );
}
