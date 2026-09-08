import { useState } from "react";
import { FileText, Upload } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/shared/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";

interface CampaignCertificationsModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function CampaignCertificationsModal({ open, onOpenChange, onSuccess }: CampaignCertificationsModalProps) {
    const [selectedCert, setSelectedCert] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[500px] sm:max-w-[600px] p-8 rounded-2xl bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0 border border-brand-border">
                            <FileText size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-ink">
                                Registrar Certificaciones
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-ink-muted mt-1">
                                Añade los documentos de certificación necesarios para esta campaña.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex flex-col gap-6">

                    <div className="grid grid-cols-2 gap-4">
                        {/* Seleccionar Certificación */}
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-ink">Seleccionar Certificación:</label>
                            <Select value={selectedCert} onValueChange={(val) => setSelectedCert(val || "")}>
                                <SelectTrigger className="w-full rounded-lg !h-11 border-border text-ink-muted shadow-none focus:ring-1 focus:ring-brand/30 focus:border-brand">
                                    <SelectValue placeholder="Seleccione una certificación" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="Global GAP" className="rounded-lg">Global GAP</SelectItem>
                                    <SelectItem value="Fairtrade" className="rounded-lg">Fairtrade (Comercio Justo)</SelectItem>
                                    <SelectItem value="Organica" className="rounded-lg">Orgánica</SelectItem>
                                    <SelectItem value="Rainforest" className="rounded-lg">Rainforest Alliance</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Fecha de vencimiento */}
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-ink">Fecha de Vencimiento:</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    className="w-full rounded-lg h-11 border border-border text-ink-body shadow-none focus:outline-none focus:ring-1 focus:ring-brand/30 focus:border-brand px-4 transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Drag and Drop  */}
                    <div className="mt-2">
                        <div className="border-2 border-dashed border-border bg-surface-page hover:bg-muted transition-colors rounded-2xl p-8 flex flex-col items-center justify-center relative group">
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />

                            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-ink-muted mb-4 group-hover:text-brand group-hover:shadow transition-all">
                                <Upload size={24} strokeWidth={2} />
                            </div>

                            <Button variant="secondary" className="bg-muted hover:bg-border text-ink-body font-semibold rounded-lg mb-3 pointer-events-none">
                                Importar Archivo PDF
                            </Button>

                            <p className="text-[12px] text-ink-muted font-medium text-center">
                                {fileName ? (
                                    <span className="text-brand font-bold">Archivo seleccionado: {fileName}</span>
                                ) : (
                                    "Formatos soportados: .pdf (máximo 10MB)"
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg h-11 px-8 border-border text-ink-muted font-bold hover:bg-muted hover:text-ink transition-colors"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => {
                            if (onSuccess) {
                                onSuccess();
                            } else {
                                onOpenChange(false);
                            }
                        }}
                        disabled={!selectedCert || !expiryDate || !fileName}
                        className="rounded-lg h-11 px-8 bg-brand hover:bg-brand-dark text-white font-semibold gap-2 shadow-sm disabled:opacity-50 transition-colors active:scale-95"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
