import { useState } from "react";
import { Users, X, User } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface CampaignProvidersModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

interface Provider {
    id: string;
    name: string;
    role: string;
}

export default function CampaignProvidersModal({ open, onOpenChange, onSuccess }: CampaignProvidersModalProps) {
    const [addedProviders, setAddedProviders] = useState<Provider[]>([]);
    
    // Form state
    const [selectedName, setSelectedName] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleAddProvider = () => {
        if (!selectedName || !selectedRole) return;
        
        const newProvider: Provider = {
            id: Date.now().toString(),
            name: selectedName,
            role: selectedRole
        };
        
        setAddedProviders([...addedProviders, newProvider]);
        
        // Reset form
        setSelectedName("");
        setSelectedRole("");
        setQuantity("");
    };

    const handleRemoveProvider = (id: string) => {
        setAddedProviders(addedProviders.filter(p => p.id !== id));
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[600px] sm:max-w-[700px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0 border border-[#d2e5d5]">
                            <Users size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-[#1a2f22]">
                                Registrar Proveedores
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-gray-500 mt-1">
                                Asigna los proveedores y productores a esta campaña.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    {/* Seleccionar Proveedor */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Seleccionar Proveedor:</label>
                        <Select value={selectedName} onValueChange={(val) => setSelectedName(val || "")}>
                            <SelectTrigger className="w-full rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
                                <SelectValue placeholder="Seleccione un proveedor de la lista" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="Pepe Alonso" className="rounded-lg">Pepe Alonso</SelectItem>
                                <SelectItem value="Maria Gomez" className="rounded-lg">Maria Gomez</SelectItem>
                                <SelectItem value="Juan Perez" className="rounded-lg">Juan Perez</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Estado y Cantidad */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Estado:</label>
                            <Select value={selectedRole} onValueChange={(val) => setSelectedRole(val || "")}>
                                <SelectTrigger className="w-full rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
                                    <SelectValue placeholder="Ej: Productor" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="Productor" className="rounded-lg">Productor</SelectItem>
                                    <SelectItem value="Acopiador" className="rounded-lg">Acopiador</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Cantidad:</label>
                            <Input
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder="Ej: 1000"
                                className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                            />
                        </div>
                    </div>

                    {/* Botón Agregar */}
                    <div className="flex justify-center mt-2">
                        <Button 
                            onClick={handleAddProvider}
                            disabled={!selectedName || !selectedRole}
                            className="rounded-xl h-10 px-8 bg-[#5D9634] hover:bg-[#5D9634] text-white font-semibold shadow-sm disabled:opacity-50"
                        >
                            Agregar
                        </Button>
                    </div>

                    {/* Productores Agregados */}
                    <div className={`flex flex-col gap-3 transition-all duration-300 ${addedProviders.length > 0 ? "opacity-100 h-auto mt-4" : "opacity-0 h-0 overflow-hidden"}`}>
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Productores Agregados:</label>
                        <div className="flex flex-wrap gap-3">
                            {addedProviders.map((provider) => (
                                <div
                                    key={provider.id}
                                    className="bg-white border-2 border-[#EBF3EC] pl-2 pr-4 py-2 rounded-2xl flex items-center gap-3 w-full sm:w-[calc(50%-6px)]"
                                >
                                    <button
                                        onClick={() => handleRemoveProvider(provider.id)}
                                        className="hover:bg-red-50 hover:text-red-500 rounded-full p-1 transition-colors text-gray-400 shrink-0"
                                    >
                                        <X size={16} strokeWidth={2.5} />
                                    </button>
                                    
                                    <div className="w-10 h-10 rounded-full bg-[#f4f7f5] flex items-center justify-center shrink-0 overflow-hidden border border-[#d2e5d5]">
                                        <User size={20} className="text-[#5D9634]" />
                                    </div>
                                    
                                    <div className="flex flex-col overflow-hidden">
                                        <span className="text-[13.5px] font-bold text-[#1a2f22] truncate">{provider.name}</span>
                                        <span className="text-[11.5px] font-medium text-gray-500 truncate">Proveedor - {provider.role}</span>
                                    </div>
                                </div>
                            ))}
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
                        onClick={() => {
                            if (onSuccess) {
                                onSuccess();
                            } else {
                                onOpenChange(false);
                            }
                        }}
                        className="rounded-xl h-11 px-8 bg-[#5D9634] hover:bg-[#5D9634] text-white font-semibold gap-2 shadow-sm"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
