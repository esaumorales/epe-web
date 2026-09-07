import { useState } from "react";
import DashboardLayout from "@/shared/layout/DashboardLayout";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Eye, Download, Pencil, Trash2 } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/components/ui/table";
import AddQuotationModal from "../components/AddQuotationModal";

const data = [
    {
        id: 1,
        nombre: "Certificacion X",
        estado: "En espera",
        pago: "9000.00"
    }
];

export default function CertificationsCreatePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <DashboardLayout>
            <div className="bg-white rounded-[1.5rem] p-8 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 mb-6">

                {/* Header Inputs */}
                <div className="flex justify-between items-start mb-12 gap-6">
                    <div className="flex-1 max-w-[600px]">
                        <Input
                            defaultValue="Mango 2026 "
                            className="rounded-xl h-11 border-gray-400 bg-white shadow-none text-[14px]"
                        />
                    </div>
                    <Button variant="outline" className="h-11 rounded-xl px-6 border-gray-300 text-gray-500 gap-2 shadow-none font-medium">
                        Adjuntar documentos
                    </Button>
                </div>

                {/* Section Cotización */}
                <div className="flex items-center gap-4 mb-6">
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="h-10 rounded-xl px-6 bg-[#4ade80] hover:bg-[#22c55e] text-[#064e3b] font-bold shadow-none"
                    >
                        Agregar cotización de certificación
                    </Button>
                </div>

                <h3 className="text-[14px] font-bold text-gray-700 mb-4">Cotización de Certificación</h3>

                <div className="rounded-xl overflow-hidden border border-gray-200">
                    <Table>
                        <TableHeader className="bg-white">
                            <TableRow className="border-b border-gray-200 hover:bg-transparent">
                                <TableHead className="text-gray-500 font-bold h-12">Nombre</TableHead>
                                <TableHead className="text-gray-500 font-bold h-12">Estado</TableHead>
                                <TableHead className="text-gray-500 font-bold h-12">Pago</TableHead>
                                <TableHead className="text-gray-500 font-bold h-12">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                                    <TableCell className="font-semibold text-gray-700 h-16">{row.nombre}</TableCell>
                                    <TableCell className="font-semibold text-gray-700">{row.estado}</TableCell>
                                    <TableCell className="font-semibold text-gray-700">{row.pago}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1.5 text-gray-500">
                                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg shadow-none border-gray-200">
                                                <Eye size={16} strokeWidth={2} />
                                            </Button>
                                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg shadow-none border-gray-200 text-blue-500">
                                                <Download size={16} strokeWidth={2} />
                                            </Button>
                                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg shadow-none border-gray-200">
                                                <Pencil size={16} strokeWidth={2} />
                                            </Button>
                                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg shadow-none border-gray-200 text-blue-500">
                                                <Download size={16} strokeWidth={2} />
                                            </Button>
                                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg shadow-none border-gray-200 text-gray-400">
                                                <Trash2 size={16} strokeWidth={2} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="w-[300px] mt-6">
                    <Input className="rounded-xl h-10 border-gray-200 bg-gray-50 shadow-none" disabled />
                </div>
            </div>

            <AddQuotationModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </DashboardLayout>
    );
}
