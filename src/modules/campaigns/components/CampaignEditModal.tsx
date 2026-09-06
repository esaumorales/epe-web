import { useEffect, useState } from "react";
import { Leaf, X, AlertCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";
import { getFrutas } from "@/modules/campaigns/api/campaign.api";
import type { FrutaDto } from "@/modules/campaigns/api/campaign.dto";

interface CampaignEditModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function CampaignEditModal({ open, onOpenChange, onSuccess }: CampaignEditModalProps) {
    const [selectedFruits, setSelectedFruits] = useState<string[]>(["Mango 2026"]);
    const [frutas, setFrutas] = useState<FrutaDto[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!open) return;
        getFrutas()
            .then(setFrutas)
            .catch(() => setError("No se pudieron cargar las frutas."));
    }, [open]);

    const handleAddFruit = (value: string | null) => {
        setError(null);
        if (value && !selectedFruits.includes(value)) {
            setSelectedFruits([...selectedFruits, value]);
        }
    };

    const handleRemoveFruit = (fruit: string) => {
        setSelectedFruits(selectedFruits.filter((f) => f !== fruit));
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[600px] sm:max-w-[700px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0 border border-[#d2e5d5]">
                            <Leaf size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-[#1a2f22]">
                                Editar Campaña
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-gray-500 mt-1">
                                Modifica la información de la campaña existente.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    {/* Nombre */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Nombre de Campaña:</label>
                        <Input
                            placeholder="Ej: Campaña Mango 2026"
                            className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                        />
                    </div>

                    {/* Fechas */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Inicio:</label>
                            <Input
                                type="date"
                                className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus-visible:ring-[#5D9634]"
                            />
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Fin:</label>
                            <Input
                                type="date"
                                className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus-visible:ring-[#5D9634]"
                            />
                        </div>
                    </div>

                    {/* Frutas derivadas */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Frutas derivadas:</label>
                        <Select onValueChange={handleAddFruit} value="">
                            <SelectTrigger className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
                                <SelectValue placeholder="Selecciona una fruta derivada" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                {frutas.map((fruta) => (
                                    <SelectItem key={fruta.frutaId} value={fruta.name} className="rounded-lg">
                                        {fruta.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        
                        {/* Validación Micro-animada */}
                        <div className={`transition-all duration-300 overflow-hidden flex items-center gap-2 text-red-500 ${error ? "opacity-100 max-h-10 mt-1" : "opacity-0 max-h-0 mt-0"}`}>
                            <AlertCircle size={14} />
                            <span className="text-[13px] font-medium">{error}</span>
                        </div>
                    </div>

                    {/* Frutas Seleccionadas */}
                    <div className={`flex flex-col gap-2.5 transition-all duration-300 ${selectedFruits.length > 0 ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"}`}>
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Frutas derivadas seleccionadas:</label>
                        <div className="flex flex-wrap gap-2">
                            {selectedFruits.map((fruit) => (
                                <div
                                    key={fruit}
                                    className="bg-[#EBF3EC] text-[#5D9634] pr-3 pl-2 py-1.5 rounded-full text-[13px] font-semibold flex items-center gap-2"
                                >
                                    <button
                                        onClick={() => handleRemoveFruit(fruit)}
                                        className="hover:bg-[#d2e5d5] rounded-full p-0.5 transition-colors text-[#5D9634]"
                                    >
                                        <X size={14} strokeWidth={3} />
                                    </button>
                                    {fruit}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Requerimientos */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Requerimientos Comerciales:</label>
                        <div className="relative">
                            <Input
                                placeholder="Ej: 3000"
                                className="rounded-xl h-11 border-gray-200 pr-12 shadow-none focus-visible:ring-[#5D9634]"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#EBF3EC] text-[#5D9634] text-[11px] font-bold px-2 py-1 rounded-md">
                                KG
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-xl h-11 px-8 border-gray-200 text-[#5D9634] font-bold hover:bg-gray-50 hover:text-[#5D9634]"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={onSuccess}
                        className="rounded-xl h-11 px-8 bg-[#5D9634] hover:bg-[#5D9634] text-white font-semibold gap-2 shadow-sm"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
