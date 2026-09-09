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
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[650px] p-5 sm:p-8 rounded-2xl bg-white border-none shadow-2xl gap-0 max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0 border border-brand-border">
                            <Building2 size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-ink">
                                Registrar Cliente
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-ink-muted mt-1">
                                Completa la información para registrar un nuevo cliente.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-6">
                    {/* Row 1 */}
                    <div className="flex flex-col gap-2.5 col-span-2">
                        <label className="text-[13px] font-semibold text-ink">Nombres Completos:</label>
                        <Input className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand" />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Empresa:</label>
                        <Input className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Teléfono:</label>
                        <Input className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand" />
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">RUC:</label>
                        <Input className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Correo Corporativo:</label>
                        <Input className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand" />
                    </div>

                    {/* Row 4 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Ubicación:</label>
                        <Input className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-ink">Tipo de Cliente:</label>
                        <Select>
                            <SelectTrigger className="rounded-lg h-11 border-border text-ink-muted shadow-none focus:ring-1 focus:ring-brand/30 focus:border-brand">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg">
                                <SelectItem value="mayorista" className="rounded-lg">Mayorista</SelectItem>
                                <SelectItem value="minorista" className="rounded-lg">Minorista</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-center gap-3 sm:gap-4 mt-8 [&>button]:w-full sm:[&>button]:w-auto">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg h-11 px-8 border-border text-brand font-bold hover:bg-muted hover:text-brand transition-all active:scale-95"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={onSuccess}
                        className="rounded-lg h-11 px-8 bg-brand hover:bg-brand-dark text-white font-semibold gap-2 shadow-sm transition-all active:scale-95"
                    >
                        Crear Cliente
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
