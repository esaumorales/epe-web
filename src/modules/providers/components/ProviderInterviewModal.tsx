import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";

interface ProviderInterviewModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function ProviderInterviewModal({ open, onOpenChange, onSuccess }: ProviderInterviewModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[380px] p-6 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogTitle className="sr-only">Detalles del Fundo</DialogTitle>
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-4 mt-2">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#EBF3EC] text-[#5D9634] font-bold text-[22px] flex items-center justify-center shrink-0">
                        F
                    </div>
                    <div>
                        <h2 className="text-[17px] font-bold text-[#1a2f22]">Fundo Los Olivos</h2>
                        <p className="text-[13px] text-gray-400 font-medium">Piura - 45 ha</p>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2.5 mb-5">
                    <span className="bg-[#f0fdf4] border border-[#bbf7d0] text-[#166534] text-[11.5px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                        Mango Kent
                    </span>
                    <span className="bg-[#faf5ff] border border-[#e9d5ff] text-[#6b21a8] text-[11.5px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                        Mango Tommy
                    </span>
                </div>

                <div className="border-t border-gray-100 my-5" />

                {/* Details */}
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <span className="text-[11.5px] font-bold text-gray-400">CONTACTO</span>
                        <span className="text-[13.5px] font-semibold text-[#1a2f22]">Carlos Mendoza</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[11.5px] font-bold text-gray-400">TELÉFONO</span>
                        <span className="text-[13.5px] font-semibold text-[#1a2f22]">+51 973 441 220</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[11.5px] font-bold text-gray-400">UBICACIÓN</span>
                        <span className="text-[13.5px] font-semibold text-[#1a2f22]">Piura</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[11.5px] font-bold text-gray-400">HECTÁREAS</span>
                        <span className="text-[13.5px] font-semibold text-[#1a2f22]">45 ha</span>
                    </div>
                </div>

                <div className="border-t border-gray-100 my-5" />

                {/* Actions */}
                <div className="flex gap-3 mt-2">
                    <Button 
                        variant="outline" 
                        onClick={() => onOpenChange(false)}
                        className="flex-1 rounded-xl h-[46px] border-[1.5px] border-gray-200 text-gray-500 font-bold hover:bg-gray-50 shadow-none"
                    >
                        Cerrar
                    </Button>
                    <Button 
                        onClick={onSuccess}
                        className="flex-1 rounded-xl h-[46px] bg-[#00c853] hover:bg-[#00b248] text-white font-bold text-[14px] shadow-sm"
                    >
                        + Agregar entrevista
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
