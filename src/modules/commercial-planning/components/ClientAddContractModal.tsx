import { FileSignature, Upload } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

interface ClientAddContractModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function ClientAddContractModal({ open, onOpenChange, onSuccess }: ClientAddContractModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[750px] p-0 rounded-2xl bg-white border-none shadow-2xl gap-0 max-h-[90vh] overflow-y-auto">
                <div className="p-5 sm:p-8 border-b border-border">
                    <DialogHeader>
                        <div className="flex items-start gap-4 sm:gap-5">
                            <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-2xl bg-brand-surface flex items-center justify-center text-brand shrink-0">
                                <FileSignature size={24} strokeWidth={2.5} />
                            </div>
                            <div className="flex-1 pt-1">
                                <DialogTitle className="text-lg sm:text-xl font-bold text-ink">
                                    Añadir Contrato
                                </DialogTitle>
                                <DialogDescription className="text-[13px] sm:text-[13.5px] text-ink-muted mt-1">
                                    Datos del cliente y documentos adjuntos
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>
                </div>

                <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-[11px] font-bold text-ink-muted uppercase tracking-widest mb-4">Datos del contrato</h3>
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[13px] font-bold text-ink-muted uppercase tracking-wider">Kilos Acordados</label>
                                <div className="relative">
                                    <Input
                                        placeholder="0"
                                        className="rounded-xl h-12 border-border/60 bg-surface-page/50 pr-12 text-[15px] font-medium shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand focus-visible:bg-white placeholder:text-muted-foreground transition-all"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted font-bold text-[13px] px-2 py-1 bg-muted/50 rounded-md">
                                        kg
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-[11px] font-bold text-ink-muted uppercase tracking-widest mb-4">Documentos adjuntos</h3>
                            
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[13px] font-bold text-ink-muted uppercase tracking-wider">Contrato</label>
                                    <div className="border-2 border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-brand/5 hover:border-brand/30 transition-colors cursor-pointer group">
                                        <div className="w-10 h-10 rounded-xl bg-surface-page border border-border flex items-center justify-center text-ink-muted group-hover:text-brand group-hover:border-brand/30 transition-colors mb-1">
                                            <Upload size={18} strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[14px] font-bold text-ink">Haz clic para adjuntar</span>
                                        <span className="text-[12px] text-ink-muted font-medium">PDF · Máx. 10 MB</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[13px] font-bold text-ink-muted uppercase tracking-wider">Ficha Técnica</label>
                                    <div className="border-2 border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-brand/5 hover:border-brand/30 transition-colors cursor-pointer group">
                                        <div className="w-10 h-10 rounded-xl bg-surface-page border border-border flex items-center justify-center text-ink-muted group-hover:text-brand group-hover:border-brand/30 transition-colors mb-1">
                                            <Upload size={18} strokeWidth={2.5} />
                                        </div>
                                        <span className="text-[14px] font-bold text-ink">Haz clic para adjuntar</span>
                                        <span className="text-[12px] text-ink-muted font-medium">PDF, Excel · Máx. 10 MB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 sm:p-6 border-t border-border bg-surface-page/30 flex justify-end gap-3 sm:gap-4">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-xl h-11 px-6 border-border text-ink font-semibold hover:bg-muted shadow-none transition-colors"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={onSuccess}
                        className="rounded-xl h-11 px-6 bg-brand hover:bg-brand-dark text-white font-semibold shadow-sm transition-colors"
                    >
                        Guardar contrato
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
