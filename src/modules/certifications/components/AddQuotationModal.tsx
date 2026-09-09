import { useState } from "react";
import { FileStack, Upload, Paperclip } from "lucide-react";
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

interface AddQuotationModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function AddQuotationModal({ open, onOpenChange }: AddQuotationModalProps) {
    const [estado, setEstado] = useState("En espera");

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[850px] lg:max-w-[1000px] p-5 sm:p-8 rounded-2xl bg-white border-none shadow-2xl gap-0 max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-4 sm:gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0 border border-brand-border">
                            <FileStack size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-ink">
                                Agregar Cotización
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-ink-muted mt-1">
                                Registra el costo y adjunta el documento de la cotización.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {/* Datos */}
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-ink">Nombre:</label>
                            <Input
                                defaultValue="Cotización 1S"
                                className="rounded-lg h-11 border-border shadow-none font-medium text-ink focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand"
                            />
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-ink">Costo S/.:</label>
                            <Input
                                defaultValue="9000.00"
                                className="rounded-lg h-11 border-border shadow-none font-medium text-ink focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand"
                            />
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-ink">Estado:</label>
                            <Select value={estado} onValueChange={setEstado}>
                                <SelectTrigger className="w-full rounded-lg !h-11 border-border text-ink font-medium shadow-none focus:ring-1 focus:ring-brand/30 focus:border-brand">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="rounded-lg">
                                    <SelectItem value="En espera" className="rounded-lg">En espera</SelectItem>
                                    <SelectItem value="En aprobación" className="rounded-lg">En aprobación</SelectItem>
                                    <SelectItem value="Aprobado" className="rounded-lg">Aprobado</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button
                            type="button"
                            variant="outline"
                            className="h-11 rounded-lg border-dashed border-brand-border text-ink-body hover:border-brand hover:text-brand hover:bg-brand-surface font-semibold flex items-center gap-2 shadow-none w-full transition-colors active:scale-95"
                        >
                            <Paperclip size={18} />
                            Adjuntar recibo
                        </Button>
                    </div>

                    {/* Documento */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Documento:</label>
                        {/* Mismo dropzone que el modal de certificaciones de campaña */}
                        <div className="flex-1 border-2 border-dashed border-border bg-surface-page hover:bg-muted transition-colors rounded-2xl p-8 flex flex-col items-center justify-center min-h-[240px] cursor-pointer group">
                            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-ink-muted mb-4 group-hover:text-brand group-hover:shadow transition-all">
                                <Upload size={24} strokeWidth={2} />
                            </div>
                            <span className="text-[13.5px] font-semibold text-ink-body">Adjuntar documento</span>
                            <span className="text-[12px] text-ink-muted font-medium mt-1">Formatos soportados: .pdf (máximo 10MB)</span>
                        </div>
                    </div>
                </div>

                {/* Botones Footer */}
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 sm:gap-4 mt-8 [&>button]:w-full sm:[&>button]:w-auto">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg h-11 px-8 border-border text-ink-muted font-bold hover:bg-muted hover:text-ink transition-colors"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg h-11 px-8 bg-brand hover:bg-brand-dark text-white font-semibold gap-2 shadow-sm transition-colors active:scale-95"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
