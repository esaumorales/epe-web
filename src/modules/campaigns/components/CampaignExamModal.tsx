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

interface CampaignExamModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave?: () => void;
}

export default function CampaignExamModal({ open, onOpenChange, onSave }: CampaignExamModalProps) {

    // Mock data for added exams
    const addedExams = [
        { id: 1, name: "CADMIO", result: "Negativo", date: "28/05/20", origin: "Trujillo", details: "ACETAMIPRID 0.15 mg/kg, TRAZAS: CLORFENAPIR" }
    ];

    const handleAdd = () => {
        // Logic to add to addedExams
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[1100px] sm:max-w-[1100px] md:max-w-[1000px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-[24px] font-bold text-[#1a2f22]">
                        Registrar examen
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-12 gap-6">
                        {/* Left Column (Inputs) */}
                        <div className="col-span-4 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha:</label>
                                <Input
                                    type="date"
                                    className="rounded-xl h-11 border-[1.5px] border-gray-400 shadow-none focus-visible:ring-[#5D9634]"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-semibold text-[#1a2f22]">Resultado:</label>
                                <Input
                                    placeholder="Ingrese el resultado"
                                    className="rounded-xl h-11 border-[1.5px] border-gray-400 shadow-none focus-visible:ring-[#5D9634]"
                                />
                            </div>
                        </div>

                        {/* Middle Column (Inputs) */}
                        <div className="col-span-4 flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-semibold text-[#1a2f22]">Tipo de examen:</label>
                                <Input
                                    placeholder="Tipo de examen"
                                    className="rounded-xl h-11 border-[1.5px] border-gray-400 shadow-none focus-visible:ring-[#5D9634]"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[13px] font-semibold text-[#1a2f22]">Origen:</label>
                                <Input
                                    placeholder="Origen"
                                    className="rounded-xl h-11 border-[1.5px] border-gray-400 shadow-none focus-visible:ring-[#5D9634]"
                                />
                            </div>
                        </div>

                        {/* Right Column (Textarea & Button) */}
                        <div className="col-span-4 flex flex-col gap-4">
                            <div className="flex flex-col gap-2 flex-1">
                                <label className="text-[13px] font-semibold text-[#1a2f22]">Observaciones/Detalles:</label>
                                <Textarea
                                    className="resize-none h-full min-h-[90px] rounded-xl border-[1.5px] border-gray-400 shadow-none focus-visible:ring-[#5D9634]"
                                />
                            </div>
                            <Button className="h-11 rounded-xl bg-gray-500 hover:bg-gray-600 text-white font-bold flex items-center gap-2 shadow-sm w-full mx-auto max-w-[200px]">
                                <Upload size={18} />
                                Importar Archivo
                            </Button>
                        </div>
                    </div>

                    {/* Boton Agregar */}
                    <div className="flex justify-center mt-2">
                        <Button
                            onClick={handleAdd}
                            className="h-10 rounded-xl bg-[#5D9634] hover:bg-[#4b7a29] text-white font-bold px-10 shadow-sm"
                        >
                            Agregar
                        </Button>
                    </div>

                    {/* Tabla de Examenes */}
                    <div className="mt-4 rounded-xl border border-gray-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 bg-white">
                                    <th className="py-3 px-4 text-[12px] font-semibold text-[#1a2f22]">Nombre Analisis</th>
                                    <th className="py-3 px-4 text-[12px] font-semibold text-[#1a2f22]">Resultado</th>
                                    <th className="py-3 px-4 text-[12px] font-semibold text-[#1a2f22]">Fecha</th>
                                    <th className="py-3 px-4 text-[12px] font-semibold text-[#1a2f22]">Origen</th>
                                    <th className="py-3 px-4 text-[12px] font-semibold text-[#1a2f22]">Detalles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addedExams.map((exam) => (
                                    <tr key={exam.id} className="border-b border-gray-100 last:border-0 bg-white">
                                        <td className="py-3 px-4 text-[12px] font-medium text-gray-700">{exam.name}</td>
                                        <td className="py-3 px-4 text-[12px] font-medium text-gray-700">{exam.result}</td>
                                        <td className="py-3 px-4 text-[12px] font-medium text-gray-700">{exam.date}</td>
                                        <td className="py-3 px-4 text-[12px] font-medium text-gray-700">{exam.origin}</td>
                                        <td className="py-3 px-4 text-[12px] font-medium text-gray-700">{exam.details}</td>
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
                        className="rounded-xl h-10 px-6 border-transparent bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold shadow-none"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => onSave ? onSave() : onOpenChange(false)}
                        className="rounded-xl h-10 px-8 bg-[#5D9634] hover:bg-[#4b7a29] text-white font-bold shadow-sm"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
