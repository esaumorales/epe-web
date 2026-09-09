import { Upload, FlaskConical } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/shared/components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/components/ui/table";
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
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[1100px] md:max-w-[1000px] p-5 sm:p-8 rounded-2xl bg-white border-none shadow-2xl gap-0 max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-4 sm:gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0 border border-brand-border">
                            <FlaskConical size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-ink">
                                Registrar Examen
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-ink-muted mt-1">
                                Registra los análisis de laboratorio asociados al productor.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {/* Columna 1 */}
                        <div className="flex flex-col gap-4 sm:gap-5">
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[13px] font-semibold text-ink">Fecha:</label>
                                <Input
                                    type="date"
                                    className="rounded-lg h-11 border-border text-ink-muted shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand"
                                />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[13px] font-semibold text-ink">Resultado:</label>
                                <Input
                                    placeholder="Ingrese el resultado"
                                    className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand placeholder:text-muted-foreground"
                                />
                            </div>
                        </div>

                        {/* Columna 2 */}
                        <div className="flex flex-col gap-4 sm:gap-5">
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[13px] font-semibold text-ink">Tipo de examen:</label>
                                <Input
                                    placeholder="Tipo de examen"
                                    className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand placeholder:text-muted-foreground"
                                />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[13px] font-semibold text-ink">Origen:</label>
                                <Input
                                    placeholder="Origen"
                                    className="rounded-lg h-11 border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand placeholder:text-muted-foreground"
                                />
                            </div>
                        </div>

                        {/* Columna 3 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2.5 flex-1">
                                <label className="text-[13px] font-semibold text-ink">Observaciones/Detalles:</label>
                                <Textarea
                                    className="resize-none h-full min-h-[90px] rounded-lg border-border shadow-none focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand"
                                />
                            </div>
                            {/* Acción secundaria: outline punteado, igual que "Adjuntar requerimientos" */}
                            <Button
                                type="button"
                                variant="outline"
                                className="h-11 rounded-lg border-dashed border-brand-border text-ink-body hover:border-brand hover:text-brand hover:bg-brand-surface font-semibold flex items-center gap-2 shadow-none w-full transition-colors active:scale-95"
                            >
                                <Upload size={18} />
                                Importar archivo
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button
                            onClick={handleAdd}
                            className="h-11 rounded-lg bg-brand hover:bg-brand-dark text-white font-bold px-8 shadow-sm transition-colors active:scale-95 w-full sm:w-auto"
                        >
                            Agregar
                        </Button>
                    </div>

                    {/* Exámenes registrados */}
                    <div className="flex flex-col gap-2.5 pt-1">
                        <label className="text-[13px] font-semibold text-ink">Exámenes registrados:</label>

                        {/* Móvil: tarjeta por examen; la tabla de 5 columnas no cabe */}
                        <div className="flex flex-col gap-3 sm:hidden">
                            {addedExams.map((exam) => (
                                <div key={exam.id} className="rounded-xl border border-border border-l-[3px] border-l-brand bg-white overflow-hidden">
                                    <div className="flex items-start justify-between gap-3 p-4 pb-3">
                                        <span className="text-[14px] font-bold text-ink leading-tight">{exam.name}</span>
                                        <span className="text-[13px] font-semibold text-brand shrink-0">{exam.result}</span>
                                    </div>
                                    <div className="mx-4 mb-4 flex flex-col gap-2.5 rounded-lg bg-surface-page border border-border p-3">
                                        <div className="flex justify-between gap-3">
                                            <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider shrink-0">Fecha</span>
                                            <span className="text-[13px] font-semibold text-ink">{exam.date}</span>
                                        </div>
                                        <div className="flex justify-between gap-3">
                                            <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider shrink-0">Origen</span>
                                            <span className="text-[13px] font-semibold text-ink">{exam.origin}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">Detalles</span>
                                            <span className="text-[12.5px] font-medium text-ink-body">{exam.details}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hidden sm:block rounded-xl overflow-hidden border border-border">
                            <Table>
                                <TableHeader className="bg-surface-page">
                                    <TableRow className="border-b border-border hover:bg-transparent">
                                        <TableHead className="text-ink font-semibold h-12 px-4">Nombre Análisis</TableHead>
                                        <TableHead className="text-ink font-semibold h-12">Resultado</TableHead>
                                        <TableHead className="text-ink font-semibold h-12">Fecha</TableHead>
                                        <TableHead className="text-ink font-semibold h-12">Origen</TableHead>
                                        <TableHead className="text-ink font-semibold h-12">Detalles</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {addedExams.map((exam) => (
                                        <TableRow key={exam.id} className="border-b border-border last:border-0 hover:bg-surface-page/60 transition-colors">
                                            <TableCell className="font-medium text-ink h-14 px-4">{exam.name}</TableCell>
                                            <TableCell className="text-ink-body font-medium">{exam.result}</TableCell>
                                            <TableCell className="text-ink-body font-medium">{exam.date}</TableCell>
                                            <TableCell className="text-ink-body font-medium">{exam.origin}</TableCell>
                                            <TableCell className="text-ink-body font-medium">{exam.details}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
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
                        onClick={() => onSave ? onSave() : onOpenChange(false)}
                        className="rounded-lg h-11 px-8 bg-brand hover:bg-brand-dark text-white font-semibold gap-2 shadow-sm transition-colors active:scale-95"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
