import { Pencil, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Button } from "@/shared/components/ui/button";

const data = [
    {
        id: 1,
        nombre: "Pepito",
        pago: "Acopiador",
        estado: "Aprobado"
    },
    {
        id: 2,
        nombre: "Brayan ",
        pago: "Productor",
        estado: "Por aprobar"
    }
];

export default function CertificationsTable() {
    return (
        <div className="bg-white rounded-[1.5rem] p-3 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 overflow-hidden">
            <div className="rounded-xl overflow-hidden border border-gray-100">
                <Table>
                    <TableHeader className="bg-white">
                        <TableRow className="border-b border-gray-100 hover:bg-transparent">
                            <TableHead className="text-[#1a2f22] font-semibold h-14 px-6 text-center">Nombre</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14 text-center">Pago</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14 text-center">Estado</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14 text-center px-6">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                                <TableCell className="font-bold text-[#1a2f22] h-16 px-6 text-center">{row.nombre}</TableCell>
                                <TableCell className="text-[#545454] font-medium text-center">{row.pago}</TableCell>
                                <TableCell className="text-center">
                                    <span className={`text-[13px] font-medium ${row.estado === 'Aprobado' ? 'text-gray-800' : 'text-gray-500'}`}>
                                        {row.estado}
                                    </span>
                                </TableCell>
                                <TableCell className="px-6 text-center">
                                    <div className="flex items-center justify-center gap-1.5 text-[#1a2f22]">
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors">
                                            <Pencil size={20} strokeWidth={2.5} />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors">
                                            <Eye size={20} strokeWidth={2.5} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
