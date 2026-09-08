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
            <DialogContent className="max-w-[850px] sm:max-w-[700px] p-8 rounded-2xl bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-xl font-bold text-ink">
                        Vincular Proveedores
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    {/* Seleccionar Proveedor */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Seleccionar Proveedor:</label>
                        <Select value={selectedProvider} onValueChange={(val) => setSelectedProvider(val || "")}>
                            <SelectTrigger className="w-full rounded-lg !h-11 border-border text-ink-muted shadow-none focus:ring-1 focus:ring-brand/30 focus:border-brand">
                                <SelectValue placeholder="Seleccione un proveedor..." />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg">
                                <SelectItem value="pepe" className="rounded-lg">Pepe Alonso</SelectItem>
                                <SelectItem value="juan" className="rounded-lg">Juan Perez</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Toggle and Cantidad */}
                    <div className="grid grid-cols-2 gap-6 items-end">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between w-[130px] px-1">
                                <span className={`text-[12px] font-bold ${!isAcopiador ? "text-ink" : "text-ink-muted"}`}>Productor</span>
                                <span className={`text-[12px] font-bold ${isAcopiador ? "text-ink" : "text-ink-muted"}`}>Acopiador</span>
                            </div>
                            <div 
                                className="relative w-[130px] h-11 rounded-full cursor-pointer border-[2.5px] border-ink-muted bg-white transition-colors hover:border-ink"
                                onClick={() => setIsAcopiador(!isAcopiador)}
                            >
                                <div className={`absolute top-1 w-8 h-8 rounded-full bg-brand transition-transform ${isAcopiador ? 'translate-x-[88px]' : 'translate-x-1'}`} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-ink">Cantidad Estimada:</label>
                            <Input
                                type="number"
                                placeholder="0"
                                value={cantidad}
                                onChange={(e) => setCantidad(e.target.value)}
                                className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand"
                            />
                        </div>
                    </div>

                    {/* Boton Agregar */}
                    <div className="flex justify-center mt-2">
                        <Button 
                            onClick={handleAdd}
                            disabled={!selectedProvider}
                            className="h-10 rounded-lg bg-brand hover:bg-brand-dark text-white font-bold px-8 shadow-sm disabled:opacity-50 transition-colors active:scale-95"
                        >
                            Agregar
                        </Button>
                    </div>

                    {/* Proveedores Agregados */}
                    <div className="flex flex-col gap-3 mt-4">
                        <label className="text-[13px] font-semibold text-ink">Productores Agregados:</label>
                        <div className="flex flex-wrap gap-3">
                            {addedProviders.map((provider) => (
                                <div key={provider.id} className="flex items-center gap-3 p-3 rounded-2xl border border-border bg-white min-w-[200px]">
                                    <button 
                                        onClick={() => handleRemove(provider.id)}
                                        className="text-ink hover:text-destructive transition-colors"
                                    >
                                        <X size={18} strokeWidth={2.5} />
                                    </button>
                                    <div className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center text-ink shrink-0">
                                        <UserRound size={22} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-bold text-ink leading-tight mb-0.5">{provider.name}</span>
                                        <span className="text-[11px] font-medium text-ink">Proveedor - {provider.type}</span>
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
                        className="rounded-lg h-10 px-6 border-transparent bg-muted hover:bg-border text-ink-body font-bold shadow-none transition-colors"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => onSave ? onSave() : onOpenChange(false)}
                        className="rounded-lg h-10 px-8 bg-brand hover:bg-brand-dark text-white font-bold shadow-sm transition-colors active:scale-95"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
