import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Eye, Download, Pencil, Trash2, FileBadge, Plus, Paperclip, FileStack } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/components/ui/table";
import PageHeader from "@/shared/layout/PageHeader";
import StatusBadge from "@/shared/components/StatusBadge";
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
    const navigate = useNavigate();

    return (
        <div className="px-4 py-5 sm:px-8 lg:px-14">
            <PageHeader
                icon={<FileBadge size={24} strokeWidth={2.5} />}
                title="Nueva Cotización de Certificado"
                description="Registra la certificación y adjunta las cotizaciones asociadas."
                action={
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 [&>button]:w-full sm:[&>button]:w-auto">
                        <Button
                            variant="outline"
                            onClick={() => navigate("/certificaciones")}
                            className="h-11 rounded-lg px-6 border-border text-ink-body font-semibold shadow-none hover:bg-muted hover:text-ink transition-colors active:scale-95"
                        >
                            Cancelar
                        </Button>
                        <Button className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm transition-colors active:scale-95">
                            Guardar
                        </Button>
                    </div>
                }
            />

            {/* Datos de la certificación */}
            <Card className="mb-8 border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)] rounded-2xl">
                <CardContent className="p-4 sm:p-6 flex flex-col gap-5 sm:gap-6">
                    <div className="flex items-start gap-3">
                        <FileBadge className="text-brand mt-0.5" size={22} strokeWidth={2.5} />
                        <div className="flex flex-col">
                            <h2 className="text-[16px] font-bold text-ink leading-tight">Datos de la Certificación</h2>
                            <p className="text-[13px] text-ink-muted font-medium">Identifica la campaña y adjunta la documentación de respaldo</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-end w-full">
                        <div className="w-full sm:flex-[2] sm:min-w-[250px] flex flex-col gap-1.5">
                            <label className="text-[13px] font-bold text-ink">Campaña</label>
                            <Input
                                defaultValue="Mango 2026"
                                className="rounded-lg h-11 border-border bg-white shadow-none text-[14px] focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand"
                            />
                        </div>

                        <Button
                            variant="outline"
                            className="h-11 rounded-lg px-6 border-dashed border-brand-border text-ink-body gap-2 hover:border-brand hover:text-brand hover:bg-brand-surface shadow-none font-semibold transition-colors active:scale-95"
                        >
                            <Paperclip size={16} strokeWidth={2.5} />
                            Adjuntar documentos
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Cotizaciones */}
            <Card className="rounded-2xl border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)]">
                <CardContent className="p-4 sm:p-6 flex flex-col gap-5 sm:gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0">
                                <FileStack size={24} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-[15px] sm:text-[17px] font-bold text-ink leading-tight mb-1">Cotización de Certificación</h2>
                                <p className="text-[13px] text-ink-muted font-medium">Agrega y compara las cotizaciones recibidas para esta certificación.</p>
                            </div>
                        </div>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="h-11 rounded-lg px-6 bg-brand hover:bg-brand-dark text-white font-semibold gap-2 shadow-sm transition-colors active:scale-95"
                        >
                            <Plus size={18} strokeWidth={2.5} />
                            Agregar cotización
                        </Button>
                    </div>

                    {/* Móvil: tarjeta por cotización en vez de tabla con scroll lateral */}
                    <div className="flex flex-col gap-3 sm:hidden">
                        {data.map((row) => (
                            <div key={row.id} className="rounded-xl border border-border p-4 flex flex-col gap-3">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[15px] font-bold text-ink leading-tight truncate">{row.nombre}</span>
                                        <span className="text-[13px] font-medium text-ink-body">S/. {row.pago}</span>
                                    </div>
                                    <StatusBadge status={row.estado} />
                                </div>

                                <div className="flex items-center gap-1 pt-1 border-t border-border text-ink-muted">
                                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" aria-label="Ver">
                                        <Eye size={18} strokeWidth={2.5} />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" aria-label="Descargar">
                                        <Download size={18} strokeWidth={2.5} />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" aria-label="Editar">
                                        <Pencil size={18} strokeWidth={2.5} />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors active:scale-95 ml-auto" aria-label="Eliminar">
                                        <Trash2 size={18} strokeWidth={2.5} />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hidden sm:block rounded-xl overflow-hidden border border-border">
                        <Table>
                            <TableHeader className="bg-surface-page">
                                <TableRow className="border-b border-border hover:bg-transparent">
                                    <TableHead className="text-ink font-semibold h-14 px-6">Nombre</TableHead>
                                    <TableHead className="text-ink font-semibold h-14">Estado</TableHead>
                                    <TableHead className="text-ink font-semibold h-14">Pago</TableHead>
                                    <TableHead className="text-ink font-semibold h-14 text-right px-6 w-64">Acciones</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.id} className="border-b border-border hover:bg-surface-page/60 transition-colors">
                                        <TableCell className="font-medium text-ink h-16 px-6">{row.nombre}</TableCell>
                                        <TableCell>
                                            <StatusBadge status={row.estado} />
                                        </TableCell>
                                        <TableCell className="text-ink-body font-medium">S/. {row.pago}</TableCell>
                                        <TableCell className="px-6">
                                            <div className="flex items-center justify-end gap-1.5 text-ink-muted">
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95">
                                                    <Eye size={18} strokeWidth={2.5} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95">
                                                    <Download size={18} strokeWidth={2.5} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95">
                                                    <Pencil size={18} strokeWidth={2.5} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors active:scale-95">
                                                    <Trash2 size={18} strokeWidth={2.5} />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="flex justify-end">
                        <div className="flex items-center gap-3 rounded-lg bg-surface-page border border-border px-5 py-3">
                            <span className="text-[13px] font-bold text-ink-muted uppercase tracking-wider">Total</span>
                            <span className="text-[18px] font-bold text-ink">S/. 9000.00</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <AddQuotationModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </div>
    );
}
