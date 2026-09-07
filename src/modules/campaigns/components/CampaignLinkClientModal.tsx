import { useState } from "react";
import { X, UserSquare, Upload } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

interface CampaignLinkClientModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave?: () => void;
}

export default function CampaignLinkClientModal({ open, onOpenChange, onSave }: CampaignLinkClientModalProps) {
    const [selectedClient, setSelectedClient] = useState<string>("");
    const [cantidad, setCantidad] = useState<string>("");
    
    const [addedClients, setAddedClients] = useState([
        { id: 1, contact: "Pepe Alonso", company: "Sutrimex" },
        { id: 2, contact: "Pepe Alonso", company: "Fixgrom" }
    ]);

    const handleRemove = (id: number) => {
        setAddedClients(addedClients.filter(c => c.id !== id));
    };

    const handleAdd = () => {
        if (!selectedClient) return;
        
        const company = selectedClient === "sutrimex" ? "Sutrimex" : "Fixgrom";
        const newClient = {
            id: Date.now(),
            contact: "Pepe Alonso",
            company
        };

        setAddedClients([...addedClients, newClient]);
        setSelectedClient("");
        setCantidad("");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[550px] md:max-w-xl p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-xl font-bold text-[#1a2f22]">
                        Registrar Clientes
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-5">
                    {/* Seleccionar Cliente */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Seleccionar Cliente:</label>
                        <Select value={selectedClient} onValueChange={(val) => setSelectedClient(val || "")}>
                            <SelectTrigger className="w-full rounded-xl h-11 border-[1.5px] border-gray-400 text-gray-600 shadow-none focus:ring-[#5D9634]">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="sutrimex" className="rounded-lg">Sutrimex</SelectItem>
                                <SelectItem value="fixgrom" className="rounded-lg">Fixgrom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col items-end gap-2.5 mt-[-10px]">
                        <div className="w-[200px]">
                            <label className="text-[13px] font-semibold text-[#1a2f22] ml-4">Cantidad kg:</label>
                            <Input
                                type="number"
                                placeholder=""
                                value={cantidad}
                                onChange={(e) => setCantidad(e.target.value)}
                                className="rounded-xl h-11 border-[1.5px] border-gray-400 shadow-none focus-visible:ring-[#5D9634] mt-1"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 mt-2">
                        <Button 
                            variant="secondary" 
                            className="rounded-xl h-12 bg-[#6B6B6B] hover:bg-[#5a5a5a] text-white font-semibold px-8 flex gap-3 shadow-md w-[280px]"
                        >
                            <Upload size={18} />
                            Adjuntar Requerimientos
                        </Button>

                        <Button 
                            onClick={handleAdd}
                            disabled={!selectedClient}
                            className="h-10 rounded-xl bg-[#5D9634] hover:bg-[#4b7a29] text-white font-bold px-8 shadow-sm disabled:opacity-50"
                        >
                            Agregar
                        </Button>
                    </div>

                    {/* Clientes Agregados */}
                    <div className="flex flex-col gap-3 mt-4">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Clientes agregados:</label>
                        <div className="flex flex-wrap gap-3">
                            {addedClients.map((client) => (
                                <div key={client.id} className="flex items-center gap-3 p-3 rounded-[1.25rem] border-[2px] border-gray-500 bg-white min-w-[200px]">
                                    <button 
                                        onClick={() => handleRemove(client.id)}
                                        className="text-[#1a2f22] hover:text-red-500 transition-colors"
                                    >
                                        <X size={18} strokeWidth={2.5} />
                                    </button>
                                    <div className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center text-gray-800 shrink-0">
                                        <UserSquare size={22} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-bold text-[#1a2f22] leading-tight mb-0.5">{client.contact}</span>
                                        <span className="text-[11px] font-medium text-[#1a2f22]">Cliente - {client.company}</span>
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
