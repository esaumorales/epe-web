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

interface ClientViewModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    clientId: number | null;
}

export default function ClientViewModal({ open, onOpenChange, clientId }: ClientViewModalProps) {
    if (!clientId) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[650px] p-5 sm:p-8 rounded-2xl bg-white border-none shadow-2xl gap-0 max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0 border border-brand-border">
                            <Building2 size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-ink">
                                Detalles del Cliente
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-ink-muted mt-1">
                                Visualizando la información registrada del cliente.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-6 opacity-90 pointer-events-none">
                    {/* Row 1 */}
                    <div className="flex flex-col gap-2.5 col-span-2">
                        <label className="text-[13px] font-semibold text-ink">Nombres Completos:</label>
                        <Input readOnly value="Nombre de Ejemplo" className="rounded-lg h-11 border-border shadow-none bg-surface-page" />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Empresa:</label>
                        <Input readOnly value="Empresa Ejemplo S.A.C" className="rounded-lg h-11 border-border shadow-none bg-surface-page" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Teléfono:</label>
                        <Input readOnly value="+51 987 654 321" className="rounded-lg h-11 border-border shadow-none bg-surface-page" />
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">RUC:</label>
                        <Input readOnly value="20123456789" className="rounded-lg h-11 border-border shadow-none bg-surface-page" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Correo Corporativo:</label>
                        <Input readOnly value="contacto@empresa.com" className="rounded-lg h-11 border-border shadow-none bg-surface-page" />
                    </div>

                    {/* Row 4 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Ubicación:</label>
                        <Input readOnly value="Lima, Perú" className="rounded-lg h-11 border-border shadow-none bg-surface-page" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Tipo de Cliente:</label>
                        <Select value="mayorista">
                            <SelectTrigger className="rounded-lg h-11 border-border text-ink shadow-none bg-surface-page">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg">
                                <SelectItem value="mayorista" className="rounded-lg">Mayorista</SelectItem>
                                <SelectItem value="minorista" className="rounded-lg">Minorista</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-center gap-3 mt-8">
                    <Button
                        variant="secondary"
                        onClick={() => onOpenChange(false)}
                        className="rounded-full w-full sm:w-auto h-10 px-10 bg-muted hover:bg-muted/80 text-ink font-semibold border-none transition-all active:scale-95"
                    >
                        Cerrar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
