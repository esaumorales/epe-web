import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
    status: "Planificado" | "Terminado" | string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
    const isPlanificado = status === "Planificado";
    const isTerminado = status === "Terminado";

    return (
        <Badge 
            variant="outline" 
            className={cn(
                "rounded-full px-3.5 py-1.5 font-semibold text-[13px] border-none gap-2",
                isPlanificado && "bg-[#EBF3EC] text-[#5D9634]",
                isTerminado && "bg-[#FEF1E7] text-[#E06E22]"
            )}
        >
            <div className={cn(
                "w-1.5 h-1.5 rounded-full",
                isPlanificado && "bg-[#5D9634]",
                isTerminado && "bg-[#E06E22]"
            )} />
            {status}
        </Badge>
    );
}
