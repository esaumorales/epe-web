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
            <DialogContent className="w-[95vw] max-w-[calc(100%-2rem)] sm:max-w-[550px] md:max-w-[850px] lg:max-w-[1000px] p-5 sm:p-8 rounded-2xl bg-white border-none shadow-2xl gap-0 max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-[22px] font-bold text-ink">
                        Agregar Cotización de certificaciones
                    </DialogTitle>
                </DialogHeader>

                <div className="flex gap-6">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-bold text-ink">Nombre</label>
                            <Input defaultValue="Cotización 1S" className="rounded-lg h-11 border-border shadow-none font-medium text-ink" />
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-bold text-ink">Costo S/.</label>
                            <Input defaultValue="9000.00" className="rounded-lg h-11 border-border shadow-none font-medium text-ink" />
                        </div>

                        <div className="mt-1">
                            <Button variant="outline" className="w-full h-11 border-border text-ink-body rounded-lg shadow-none font-bold transition-all active:scale-95">
                                Adjuntar recibo
                            </Button>
                        </div>

                        <div className="flex flex-col gap-1.5 mt-2">
                            <label className="text-[13px] font-bold text-ink">Estado</label>
                            <div className="flex flex-col border border-border rounded-lg overflow-hidden bg-white">
                                <div className="text-ink font-bold px-4 py-2.5 text-[14px] border-b border-border">
                                    En espera
                                </div>
                                <div className="text-ink font-medium px-4 py-2.5 text-[14px] border-b border-border">
                                    En Aprobación
                                </div>
                                <div className="text-ink font-medium px-4 py-2.5 text-[14px]">
                                    Aprobado
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Document) */}
                    <div className="flex-1 flex flex-col pt-1">
                        <label className="text-[13px] font-bold text-ink mb-1.5">Documento</label>
                        <div className="flex-1 border-2 border-border rounded-lg flex items-center justify-center bg-white min-h-[280px]">
                            <span className="text-[14px] text-ink-muted font-medium">Adjuntar documento</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end items-center gap-6 mt-6">
                    <button 
                        onClick={() => onOpenChange(false)}
                        className="text-red-600 font-bold hover:text-red-700 transition-all active:scale-95"
                    >
                        Cancelar
                    </button>
                    <Button 
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg h-11 px-8 bg-brand hover:bg-brand-dark text-white font-bold shadow-none transition-all active:scale-95"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
