import { Pencil, Eye, Contact } from "lucide-react";
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

const data = [
    {
        id: 1,
        empresa: "SUTRIMEX",
        representante: "Brayayin",
        numero: "987456321",
        correo: "SUTRIMEX@gmail.com",
        ruc: "209874563210"
    },
    {
        id: 2,
        empresa: "FIXGROM",
        representante: "Luchito",
        numero: "962541387",
        correo: "FIXGROM@gmail.com",
        ruc: "209874563210"
    }
];

export default function ClientsTable() {
    return (
        <Card className="rounded-2xl border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)]">
            <CardContent className="p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0">
                            <Contact size={24} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[17px] font-bold text-ink leading-tight mb-1">Clientes Registrados</h2>
                            <p className="text-[13px] text-ink-muted font-medium">Gestiona, consulta y da seguimiento a todos tus clientes registrados.</p>
                        </div>
                    </div>
                    <div className="text-[13px] text-muted-foreground font-medium">
                        Mostrando <span className="font-bold">{data.length}</span> de <span className="font-bold">{data.length}</span> clientes
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                    <Table>
                        <TableHeader className="bg-surface-page">
                            <TableRow className="border-b border-border hover:bg-transparent">
                                <TableHead className="text-ink font-semibold h-14 px-6">Empresa</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Representante</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Número</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Correo</TableHead>
                                <TableHead className="text-ink font-semibold h-14">RUC</TableHead>
                                <TableHead className="text-ink font-semibold h-14 text-right px-6 w-36">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id} className="border-b border-border hover:bg-surface-page/60 transition-colors">
                                    <TableCell className="font-medium text-ink h-16 px-6">{row.empresa}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{row.representante}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{row.numero}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{row.correo}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{row.ruc}</TableCell>
                                    <TableCell className="px-6">
                                        <div className="flex items-center justify-end gap-1.5 text-ink-muted">
                                            <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95">
                                                <Pencil size={18} strokeWidth={2.5} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95">
                                                <Eye size={18} strokeWidth={2.5} />
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
