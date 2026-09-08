import { Upload } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import { useState } from "react";

interface CampaignExamModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave?: () => void;
}

export default function CampaignExamModal({ open, onOpenChange, onSave }: CampaignExamModalProps) {

    // Mock state for added exams
    const [addedExams] = useState([
        { id: 1, name: "CADMIO", result: "Negativo", date: "28/05/20", origin: "Trujillo", details: "ACETAMIPRID 0.15 mg/kg, TRAZAS: CLORFENAPIR" }
    ]);

    const handleAdd = () => {
        // Logic to add to addedExams
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[1100px] sm:max-w-[1100px] md:max-w-[1000px] p-8 rounded-2xl bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-[24px] font-bold text-ink">
                        Registrar examen
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-12 gap-6">
                        {/* Left Column (Inputs) */}
                        <div className="col-span-4 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-semibold text-ink">Fecha:</label>
                                <Input
                                    type="date"
                                    className="rounded-lg h-11 border-border text-ink-muted shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-semibold text-ink">Resultado:</label>
                                <Input
                                    placeholder="Ingrese el resultado"
                                    className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand placeholder:text-muted-foreground"
                                />
                            </div>
                        </div>

                        {/* Middle Column (Inputs) */}
                        <div className="col-span-4 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-semibold text-ink">Tipo de examen:</label>
                                <Input
                                    placeholder="Tipo de examen"
                                    className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand placeholder:text-muted-foreground"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-semibold text-ink">Origen:</label>
                                <Input
                                    placeholder="Origen"
                                    className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand placeholder:text-muted-foreground"
                                />
                            </div>
                        </div>

                        {/* Right Column (Textarea & Button) */}
                        <div className="col-span-4 flex flex-col gap-4">
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-[13px] font-semibold text-ink">Observaciones/Detalles:</label>
                                <Textarea
                                    className="resize-none h-full min-h-[90px] rounded-lg border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand"
                                />
                            </div>
                            <Button className="h-11 rounded-lg bg-ink-body hover:bg-ink text-white font-bold flex items-center gap-2 shadow-sm w-full mx-auto max-w-[200px] transition-colors active:scale-95">
                                <Upload size={18} />
                                Importar Archivo
                            </Button>
                        </div>
                    </div>

                    {/* Boton Agregar */}
                    <div className="flex justify-center mt-2">
                        <Button
                            onClick={handleAdd}
                            className="h-10 rounded-lg bg-brand hover:bg-brand-dark text-white font-bold px-10 shadow-sm transition-colors active:scale-95"
                        >
                            Agregar
                        </Button>
                    </div>

                    {/* Tabla de Examenes */}
                    <div className="mt-4 rounded-xl border border-border overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border bg-white">
                                    <th className="py-3 px-4 text-[12px] font-semibold text-ink">Nombre Analisis</th>
                                    <th className="py-3 px-4 text-[12px] font-semibold text-ink">Resultado</th>
                                    <th className="py-3 px-4 text-[12px] font-semibold text-ink">Fecha</th>
                                    <th className="py-3 px-4 text-[12px] font-semibold text-ink">Origen</th>
                                    <th className="py-3 px-4 text-[12px] font-semibold text-ink">Detalles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addedExams.map((exam) => (
                                    <tr key={exam.id} className="border-b border-border last:border-0 bg-white">
                                        <td className="py-3 px-4 text-[12px] font-medium text-ink-body">{exam.name}</td>
                                        <td className="py-3 px-4 text-[12px] font-medium text-ink-body">{exam.result}</td>
                                        <td className="py-3 px-4 text-[12px] font-medium text-ink-body">{exam.date}</td>
                                        <td className="py-3 px-4 text-[12px] font-medium text-ink-body">{exam.origin}</td>
                                        <td className="py-3 px-4 text-[12px] font-medium text-ink-body">{exam.details}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Botones Footer */}
                <div className="flex justify-center gap-3 mt-8">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg h-10 px-6 border-transparent bg-muted hover:bg-border text-ink-body font-bold shadow-none transition-colors"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => onSave ? onSave() : onOpenChange(false)}
                        className="rounded-lg h-10 px-8 bg-brand hover:bg-brand-dark text-white font-bold shadow-sm transition-colors active:scale-95"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
