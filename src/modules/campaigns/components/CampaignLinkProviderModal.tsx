import { useState } from "react";
import { X, UserRound } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

interface CampaignLinkProviderModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave?: () => void;
}

export default function CampaignLinkProviderModal({ open, onOpenChange, onSave }: CampaignLinkProviderModalProps) {
    const [isAcopiador, setIsAcopiador] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<string>("");
    const [cantidad, setCantidad] = useState<string>("");
    
    const [addedProviders, setAddedProviders] = useState([
        { id: 1, name: "Pepe Alonso", type: "Productor" },
        { id: 2, name: "Pepe Alonso", type: "Acopiador" }
    ]);

    const handleRemove = (id: number) => {
        setAddedProviders(addedProviders.filter(p => p.id !== id));
    };

    const handleAdd = () => {
        if (!selectedProvider) return;
        
        const name = selectedProvider === "pepe" ? "Pepe Alonso" : "Juan Perez";
        const newProvider = {
            id: Date.now(),
            name,
            type: isAcopiador ? "Acopiador" : "Productor"
        };

        setAddedProviders([...addedProviders, newProvider]);
        setSelectedProvider("");
        setCantidad("");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[850px] sm:max-w-[700px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-xl font-bold text-[#1a2f22]">
                        Vincular Proveedores
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    {/* Seleccionar Proveedor */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Seleccionar Proveedor:</label>
                        <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                            <SelectTrigger className="w-full rounded-xl h-11 border-[1.5px] border-gray-400 text-gray-600 shadow-none focus:ring-[#5D9634]">
                                <SelectValue placeholder="Seleccione un proveedor..." />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="pepe" className="rounded-lg">Pepe Alonso</SelectItem>
                                <SelectItem value="juan" className="rounded-lg">Juan Perez</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Toggle and Cantidad */}
                    <div className="grid grid-cols-2 gap-6 items-end">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between w-[130px] px-1">
                                <span className={`text-[12px] font-bold ${!isAcopiador ? "text-[#1a2f22]" : "text-gray-500"}`}>Productor</span>
                                <span className={`text-[12px] font-bold ${isAcopiador ? "text-[#1a2f22]" : "text-gray-500"}`}>Acopiador</span>
                            </div>
                            <div 
                                className="relative w-[130px] h-11 rounded-full cursor-pointer border-[2.5px] border-gray-500 bg-white"
                                onClick={() => setIsAcopiador(!isAcopiador)}
                            >
                                <div className={`absolute top-1 w-8 h-8 rounded-full bg-orange-400 transition-transform ${isAcopiador ? 'translate-x-[88px]' : 'translate-x-1'}`} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Cantidad Estimada:</label>
                            <Input
                                type="number"
                                placeholder="0"
                                value={cantidad}
                                onChange={(e) => setCantidad(e.target.value)}
                                className="rounded-xl h-11 border-[1.5px] border-gray-400 shadow-none focus-visible:ring-[#5D9634]"
                            />
                        </div>
                    </div>

                    {/* Boton Agregar */}
                    <div className="flex justify-center mt-2">
                        <Button 
                            onClick={handleAdd}
                            disabled={!selectedProvider}
                            className="h-10 rounded-xl bg-[#5D9634] hover:bg-[#4b7a29] text-white font-bold px-8 shadow-sm disabled:opacity-50"
                        >
                            Agregar
                        </Button>
                    </div>

                    {/* Proveedores Agregados */}
                    <div className="flex flex-col gap-3 mt-4">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Productores Agregados:</label>
                        <div className="flex flex-wrap gap-3">
                            {addedProviders.map((provider) => (
                                <div key={provider.id} className="flex items-center gap-3 p-3 rounded-[1.25rem] border-[2px] border-gray-500 bg-white min-w-[200px]">
                                    <button 
                                        onClick={() => handleRemove(provider.id)}
                                        className="text-[#1a2f22] hover:text-red-500 transition-colors"
                                    >
                                        <X size={18} strokeWidth={2.5} />
                                    </button>
                                    <div className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center text-gray-800 shrink-0">
                                        <UserRound size={22} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-bold text-[#1a2f22] leading-tight mb-0.5">{provider.name}</span>
                                        <span className="text-[11px] font-medium text-[#1a2f22]">Proveedor - {provider.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Botones Footer */}
                <div className="flex justify-end gap-3 mt-8">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-xl h-10 px-6 border-transparent bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold shadow-none"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => onSave ? onSave() : onOpenChange(false)}
                        className="rounded-xl h-10 px-8 bg-[#5D9634] hover:bg-[#4b7a29] text-white font-bold shadow-sm"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
