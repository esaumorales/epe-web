import { useState } from "react";
import { FileText, Upload } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/shared/components/ui/dialog";
import { DatePicker } from "@/shared/components/ui/date-picker";
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
            <DialogContent className="max-w-[500px] sm:max-w-[600px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0 border border-[#d2e5d5]">
                            <FileText size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-[#1a2f22]">
                                Registrar Certificaciones
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-gray-500 mt-1">
                                Añade los documentos de certificación necesarios para esta campaña.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    {/* Seleccionar Certificación */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Seleccionar Certificación:</label>
                        <Select value={selectedCert} onValueChange={(val) => setSelectedCert(val || "")}>
                            <SelectTrigger className="w-full rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
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
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha de Vencimiento:</label>
                        <DatePicker
                            value={expiryDate}
                            onChange={setExpiryDate}
                            className="rounded-xl h-11 border-gray-200 text-gray-700 shadow-none focus-visible:ring-[#5D9634]"
                        />
                    </div>

                    {/* Drag and Drop Area */}
                    <div className="mt-2">
                        <div className="border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-8 flex flex-col items-center justify-center relative group">
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            
                            <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 mb-4 group-hover:text-[#5D9634] group-hover:shadow transition-all">
                                <Upload size={24} strokeWidth={2} />
                            </div>
                            
                            <Button variant="secondary" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl mb-3 pointer-events-none">
                                Importar Archivo PDF
                            </Button>
                            
                            <p className="text-[12px] text-gray-500 font-medium text-center">
                                {fileName ? (
                                    <span className="text-[#5D9634] font-bold">Archivo seleccionado: {fileName}</span>
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
                        className="rounded-xl h-11 px-8 border-gray-200 text-[#5D9634] font-bold hover:bg-gray-50 hover:text-[#5D9634]"
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
                        className="rounded-xl h-11 px-8 bg-[#5D9634] hover:bg-[#5D9634] text-white font-semibold gap-2 shadow-sm disabled:opacity-50"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
