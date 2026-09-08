import { Building2 } from "lucide-react";
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

interface ClientCreateModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function ClientCreateModal({ open, onOpenChange, onSuccess }: ClientCreateModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[550px] sm:max-w-[650px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0 border border-[#d2e5d5]">
                            <Building2 size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-[#1a2f22]">
                                Registrar Cliente
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-gray-500 mt-1">
                                Completa la información para registrar un nuevo cliente.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-6">
                    {/* Row 1 */}
                    <div className="flex flex-col gap-2.5 col-span-2">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Nombres Completos:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Empresa:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Teléfono:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">RUC:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Correo Corporativo:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>

                    {/* Row 4 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Ubicación:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Tipo de Cliente:</label>
                        <Select>
                            <SelectTrigger className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="mayorista" className="rounded-lg">Mayorista</SelectItem>
                                <SelectItem value="minorista" className="rounded-lg">Minorista</SelectItem>
                            </SelectContent>
                        </Select>
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
                        className="rounded-xl h-11 px-8 bg-[#6b9d3b] hover:bg-[#58852e] text-white font-semibold gap-2 shadow-sm"
                    >
                        Crear Cliente
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
