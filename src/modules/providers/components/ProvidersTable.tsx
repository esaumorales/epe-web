import { Pencil, Eye, FileArchive, Truck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import StatusBadge from "@/shared/components/StatusBadge";

const data = [
    {
        id: 1,
        nombre: "Brayan Gay",
        dni: "98765412",
        fruta: "mango",
        categoria: "Mango Eduard",
        estado: "Aprobado"
    },
    {
        id: 2,
        nombre: "Brayan Gay 2",
        dni: "78451296",
        fruta: "mango",
        categoria: "Mango Eduard",
        estado: "Por aprobar"
    }
];

export default function ProvidersTable() {
    return (
        <Card className="rounded-2xl border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)]">
            <CardContent className="p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0">
                            <Truck size={24} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[17px] font-bold text-ink leading-tight mb-1">Proveedores Registrados</h2>
                            <p className="text-[13px] text-ink-muted font-medium">Gestiona, consulta y da seguimiento a todos tus proveedores registrados.</p>
                        </div>
                    </div>
                    <div className="text-[13px] text-muted-foreground font-medium">
                        Mostrando <span className="font-bold">{data.length}</span> de <span className="font-bold">{data.length}</span> proveedores
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                    <Table>
                        <TableHeader className="bg-surface-page">
                            <TableRow className="border-b border-border hover:bg-transparent">
                                <TableHead className="text-ink font-semibold h-14 px-6">Nombre</TableHead>
                                <TableHead className="text-ink font-semibold h-14">DNI</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Fruta</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Categoría de Fruta</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Estado</TableHead>
                                <TableHead className="text-ink font-semibold h-14 text-right px-6 w-44">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id} className="border-b border-border hover:bg-surface-page/60 transition-colors">
                                    <TableCell className="font-medium text-ink h-16 px-6">{row.nombre}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{row.dni}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{row.fruta}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{row.categoria}</TableCell>
                                    <TableCell>
                                        <StatusBadge status={row.estado} />
                                    </TableCell>
                                    <TableCell className="px-6">
                                        <div className="flex items-center justify-end gap-1.5 text-ink-muted">
                                            <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95">
                                                <Pencil size={18} strokeWidth={2.5} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95">
                                                <Eye size={18} strokeWidth={2.5} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95">
                                                <FileArchive size={18} strokeWidth={2.5} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
