import { useState } from "react";
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

interface CampaignEditModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function CampaignEditModal({ open, onOpenChange, onSuccess }: CampaignEditModalProps) {
    const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
    const [selectedDerivedFruits, setSelectedDerivedFruits] = useState<string[]>(["Mango 2026"]);
    
    const [fruitError, setFruitError] = useState<string | null>(null);
    const [derivedError, setDerivedError] = useState<string | null>(null);

    const handleFruitChange = (value: string) => {
        if (value === "Mngo ") {
            setFruitError("La fruta seleccionada no es válida o está mal escrita.");
            setSelectedFruit(null);
            return;
        }
        setFruitError(null);
        setSelectedFruit(value);
    };

    const handleAddDerivedFruit = (value: string) => {
        if (value === "Mngo marron") {
            setDerivedError("La fruta 'Mngo marron' no es válida o está mal escrita.");
            return;
        }
        setDerivedError(null);
        if (value && !selectedDerivedFruits.includes(value)) {
            setSelectedDerivedFruits([...selectedDerivedFruits, value]);
        }
    };

    const handleRemoveDerivedFruit = (fruit: string) => {
        setSelectedDerivedFruits(selectedDerivedFruits.filter((f) => f !== fruit));
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
                    <div className="grid grid-cols-2 gap-4">

                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Seleccionar Frutas:</label>
                            <Select onValueChange={handleFruitChange} value={selectedFruit || ""}>
                                <SelectTrigger className={`rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634] transition-colors ${fruitError ? "border-red-400 focus:ring-red-400" : ""}`}>
                                    <SelectValue placeholder="Seleccionar Fruta" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="Mango " className="rounded-lg">Mango </SelectItem>
                                    <SelectItem value="Mango " className="rounded-lg">Mango </SelectItem>
                                    <SelectItem value="Mango " className="rounded-lg">Mango </SelectItem>
                                    <SelectItem value="Mngo " className="rounded-lg text-red-500 font-medium">Mngo marron (Mal escrito)</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Validación Micro-animada */}
                            <div className={`transition-all duration-300 overflow-hidden flex items-center gap-2 text-red-500 ${fruitError ? "opacity-100 max-h-10 mt-1" : "opacity-0 max-h-0 mt-0"}`}>
                                <AlertCircle size={14} />
                                <span className="text-[13px] font-medium">{fruitError}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Frutas  derivadas:</label>
                            <Select onValueChange={handleAddDerivedFruit} value="">
                                <SelectTrigger className={`rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634] transition-colors ${derivedError ? "border-red-400 focus:ring-red-400" : ""}`}>
                                    <SelectValue placeholder="Seleccionar Fruta Derivada" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="Mango Kent" className="rounded-lg">Mango Kent</SelectItem>
                                    <SelectItem value="Mango Edward" className="rounded-lg">Mango Edward</SelectItem>
                                    <SelectItem value="Mango Haden" className="rounded-lg">Mango Haden</SelectItem>
                                    <SelectItem value="Mngo marron" className="rounded-lg text-red-500 font-medium">Mngo marron (Mal escrito)</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Validación Micro-animada */}
                            <div className={`transition-all duration-300 overflow-hidden flex items-center gap-2 text-red-500 ${derivedError ? "opacity-100 max-h-10 mt-1" : "opacity-0 max-h-0 mt-0"}`}>
                                <AlertCircle size={14} />
                                <span className="text-[13px] font-medium">{derivedError}</span>
                            </div>
                        </div>
                    </div>

                    {/* Frutas Seleccionadas */}
                    <div className={`flex flex-col gap-2.5 transition-all duration-300 ${selectedDerivedFruits.length > 0 ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"}`}>
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Frutas derivadas seleccionadas:</label>
                        <div className="flex flex-wrap gap-2">
                            {selectedDerivedFruits.map((fruit) => (
                                <div
                                    key={fruit}
                                    className="bg-[#EBF3EC] text-[#5D9634] pr-3 pl-2 py-1.5 rounded-full text-[13px] font-semibold flex items-center gap-2"
                                >
                                    <button
                                        onClick={() => handleRemoveDerivedFruit(fruit)}
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
