import { X } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";

interface ProviderViewModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    providerId: number | null;
}

export default function ProviderViewModal({ open, onOpenChange, providerId }: ProviderViewModalProps) {
    // Mock data based on the provided design
    const mockProvider = {
        name: "Fundo Los Olivos",
        location: "Piura",
        size: "45 ha",
        initial: "F",
        fruits: [
            { name: "Mango Kent", color: "bg-emerald-500", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
            { name: "Mango Tommy", color: "bg-purple-500", bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" }
        ],
        details: [
            { label: "CONTACTO", value: "Carlos Mendoza" },
            { label: "TELÉFONO", value: "+51 973 441 220" },
            { label: "UBICACIÓN", value: "Piura" },
            { label: "HECTÁREAS", value: "45 ha" }
        ]
    };

    if (!providerId) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[450px] p-0 rounded-2xl bg-white border-none shadow-2xl gap-0 overflow-hidden">
                <div className="p-6">
                    <DialogHeader className="mb-5 flex flex-row items-start justify-between relative">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#e6fcf0] flex items-center justify-center text-[#048848] font-bold text-lg shrink-0">
                                {mockProvider.initial}
                            </div>
                            <div className="flex flex-col">
                                <DialogTitle className="text-[17px] font-bold text-ink leading-tight">
                                    {mockProvider.name}
                                </DialogTitle>
                                <p className="text-[13.5px] text-ink-muted font-medium mt-0.5">
                                    {mockProvider.location} · {mockProvider.size}
                                </p>
                            </div>
                        </div>
                    </DialogHeader>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {mockProvider.fruits.map((fruit, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${fruit.bg} ${fruit.border} ${fruit.text} text-[12px] font-bold`}
                            >
                                <div className={`w-1.5 h-1.5 rounded-full ${fruit.color}`}></div>
                                {fruit.name}
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-px bg-border my-2"></div>

                    {/* Details List */}
                    <div className="flex flex-col">
                        {mockProvider.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center justify-between py-3.5 border-b border-border/50 last:border-0">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">{detail.label}</span>
                                <span className="text-[14px] font-semibold text-ink">{detail.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-border"></div>

                <div className="p-4 bg-surface-page/30 flex justify-center">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg h-11 px-8 w-full border-border text-ink-muted font-bold hover:bg-muted hover:text-ink transition-all active:scale-95 bg-white"
                    >
                        Cerrar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
