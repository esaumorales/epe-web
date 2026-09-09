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
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[380px] p-5 sm:p-6 rounded-2xl bg-white border-none shadow-2xl gap-0 max-h-[90vh] overflow-y-auto">
                <DialogTitle className="sr-only">Detalles del Fundo</DialogTitle>
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-4 mt-2">
                    <div className="w-[52px] h-[52px] rounded-full bg-brand-surface text-brand font-bold text-[22px] flex items-center justify-center shrink-0">
                        F
                    </div>
                    <div>
                        <h2 className="text-[17px] font-bold text-ink">Fundo Los Olivos</h2>
                        <p className="text-[13px] text-ink-muted font-medium">Piura - 45 ha</p>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2.5 mb-5">
                    <span className="bg-brand-surface border border-brand-border text-brand text-[11.5px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                        Mango Kent
                    </span>
                    <span className="bg-brand-surface border border-brand-border text-brand text-[11.5px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                        Mango Tommy
                    </span>
                </div>

                <div className="border-t border-border my-5" />

                {/* Details */}
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <span className="text-[11.5px] font-bold text-ink-muted">CONTACTO</span>
                        <span className="text-[13.5px] font-semibold text-ink">Carlos Mendoza</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[11.5px] font-bold text-ink-muted">TELÉFONO</span>
                        <span className="text-[13.5px] font-semibold text-ink">+51 973 441 220</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[11.5px] font-bold text-ink-muted">UBICACIÓN</span>
                        <span className="text-[13.5px] font-semibold text-ink">Piura</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[11.5px] font-bold text-ink-muted">HECTÁREAS</span>
                        <span className="text-[13.5px] font-semibold text-ink">45 ha</span>
                    </div>
                </div>

                <div className="border-t border-border my-5" />

                {/* Actions */}
                <div className="flex gap-3 mt-2">
                    <Button 
                        variant="outline" 
                        onClick={() => onOpenChange(false)}
                        className="flex-1 rounded-lg h-11 border-border text-ink-muted font-bold hover:bg-muted shadow-none transition-all active:scale-95"
                    >
                        Cerrar
                    </Button>
                    <Button 
                        onClick={onSuccess}
                        className="flex-1 rounded-lg h-11 bg-brand hover:bg-brand-dark text-white font-bold text-[14px] shadow-sm transition-all active:scale-95"
                    >
                        + Agregar entrevista
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
