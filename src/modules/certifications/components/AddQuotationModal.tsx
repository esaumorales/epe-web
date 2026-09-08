import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

interface AddQuotationModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function AddQuotationModal({ open, onOpenChange }: AddQuotationModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] max-w-[550px] md:max-w-[850px] lg:max-w-[1000px] p-8 rounded-[2rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-[22px] font-bold text-[#1a2f22]">
                        Agregar Cotización de certificaciones
                    </DialogTitle>
                </DialogHeader>

                <div className="flex gap-6">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-bold text-[#1a2f22]">Nombre</label>
                            <Input defaultValue="Cotización 1S" className="rounded-xl h-10 border-gray-300 shadow-none font-medium text-gray-800" />
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-bold text-[#1a2f22]">Costo S/.</label>
                            <Input defaultValue="9000.00" className="rounded-xl h-10 border-gray-300 shadow-none font-medium text-gray-800" />
                        </div>

                        <div className="mt-1">
                            <Button variant="outline" className="w-full h-12 border-gray-300 text-gray-600 rounded-xl shadow-none font-bold">
                                Adjuntar recibo
                            </Button>
                        </div>

                        <div className="flex flex-col gap-1.5 mt-2">
                            <label className="text-[13px] font-bold text-[#1a2f22]">Estado</label>
                            <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden bg-white">
                                <div className="text-[#1a2f22] font-bold px-4 py-2.5 text-[14px] border-b border-gray-300">
                                    En espera
                                </div>
                                <div className="text-[#1a2f22] font-medium px-4 py-2.5 text-[14px] border-b border-gray-300">
                                    En Aprobación
                                </div>
                                <div className="text-[#1a2f22] font-medium px-4 py-2.5 text-[14px]">
                                    Aprobado
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Document) */}
                    <div className="flex-1 flex flex-col pt-1">
                        <label className="text-[13px] font-bold text-[#1a2f22] mb-1.5">Documento</label>
                        <div className="flex-1 border-2 border-gray-300 rounded-xl flex items-center justify-center bg-white min-h-[280px]">
                            <span className="text-[14px] text-gray-500 font-medium">Adjuntar documento</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end items-center gap-6 mt-6">
                    <button 
                        onClick={() => onOpenChange(false)}
                        className="text-red-600 font-bold hover:text-red-700 transition-colors"
                    >
                        Cancelar
                    </button>
                    <Button 
                        onClick={() => onOpenChange(false)}
                        className="rounded-xl h-10 px-8 bg-[#22c55e] hover:bg-green-600 text-white font-bold shadow-none"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
