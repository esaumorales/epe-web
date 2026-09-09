import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Users, Pencil, Eye, Contact, Layers, ArrowUpDown, ArrowUp, ArrowDown, SearchX } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Card, CardContent } from "@/shared/components/ui/card";
import StatusBadge from "@/shared/components/StatusBadge";
import EmptyState from "@/shared/components/EmptyState";
import TablePagination from "@/shared/components/TablePagination";
import { Button } from "@/shared/components/ui/button";
import CampaignEditModal from "@/modules/campaigns/components/CampaignEditModal";
import CampaignSuccessModal from "@/modules/campaigns/components/CampaignSuccessModal";
import CampaignCertificationsModal from "@/modules/campaigns/components/CampaignCertificationsModal";
import CampaignLinkClientModal from "@/modules/campaigns/components/CampaignLinkClientModal";
import type { Campaign } from "@/modules/campaigns/campaigns.data";

const PAGE_SIZE = 8;

type SortKey = "nombre" | "inicio" | "fin" | "kilos";

interface CampaignTableProps {
    data: Campaign[];
    onClearFilters: () => void;
    hasActiveFilters: boolean;
}

/** Acento lateral de la tarjeta móvil, con los mismos tonos que el StatusBadge */
const STATUS_ACCENTS: Record<string, string> = {
    Planificado: "border-l-brand",
    "En proceso": "border-l-status-warning",
    Terminado: "border-l-status-neutral",
};

/** Las fechas llegan como dd/mm/aaaa, así que hay que invertirlas para comparar */
function toSortableDate(value: string) {
    const [day, month, year] = value.split("/");
    return `${year}${month}${day}`;
}

interface SortableHeadProps {
    label: string;
    sortKey: SortKey;
    sort: { key: SortKey; direction: "asc" | "desc" } | null;
    onToggle: (key: SortKey) => void;
    className?: string;
}

function SortableHead({ label, sortKey, sort, onToggle, className = "" }: SortableHeadProps) {
    const isActive = sort?.key === sortKey;
    const Icon = !isActive ? ArrowUpDown : sort.direction === "asc" ? ArrowUp : ArrowDown;

    return (
        <TableHead className={`text-ink font-semibold h-14 ${className}`}>
            <button
                onClick={() => onToggle(sortKey)}
                className={`inline-flex items-center gap-1.5 transition-colors hover:text-brand ${isActive ? "text-brand" : ""}`}
            >
                {label}
                <Icon size={14} strokeWidth={2.5} className={isActive ? "opacity-100" : "opacity-40"} />
            </button>
        </TableHead>
    );
}

export default function CampaignTable({ data, onClearFilters, hasActiveFilters }: CampaignTableProps) {
    const [editingCampaignId, setEditingCampaignId] = useState<number | null>(null);
    const [managingCertificationsCampaignId, setManagingCertificationsCampaignId] = useState<number | null>(null);
    const [managingClientsCampaignId, setManagingClientsCampaignId] = useState<number | null>(null);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [sort, setSort] = useState<{ key: SortKey; direction: "asc" | "desc" } | null>(null);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const [successModalMode, setSuccessModalMode] = useState<"edit" | "provider" | "certification" | "client">("edit");

    const handleEditSuccess = () => {
        setEditingCampaignId(null);
        setSuccessModalMode("edit");
        setIsSuccessModalOpen(true);
    };

    const toggleSort = (key: SortKey) => {
        setPage(1);
        setSort((current) => {
            if (current?.key !== key) return { key, direction: "asc" };
            if (current.direction === "asc") return { key, direction: "desc" };
            return null;
        });
    };

    const sortedData = useMemo(() => {
        if (!sort) return data;
        return [...data].sort((a, b) => {
            const factor = sort.direction === "asc" ? 1 : -1;
            if (sort.key === "kilos") return (Number(a.kilos) - Number(b.kilos)) * factor;
            if (sort.key === "inicio" || sort.key === "fin") {
                return toSortableDate(a[sort.key]).localeCompare(toSortableDate(b[sort.key])) * factor;
            }
            return a.nombre.localeCompare(b.nombre) * factor;
        });
    }, [data, sort]);

    const pageCount = Math.max(1, Math.ceil(sortedData.length / PAGE_SIZE));
    const currentPage = Math.min(page, pageCount);
    const visibleData = sortedData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    return (
        <>
            <Card className="rounded-2xl border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)]">
            <CardContent className="p-4 sm:p-6 flex flex-col gap-5 sm:gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0">
                            <Layers size={24} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[15px] sm:text-[17px] font-bold text-ink leading-tight mb-1">Campañas de Exportación</h2>
                            <p className="text-[12.5px] sm:text-[13px] text-ink-muted font-medium">Gestiona, consulta y da seguimiento a todas tus campañas registradas.</p>
                        </div>
                    </div>
                    <div className="text-[13px] text-muted-foreground font-medium">
                        Mostrando <span className="font-bold">{visibleData.length}</span> de <span className="font-bold">{sortedData.length}</span> campañas
                    </div>
                </div>

                {/* Móvil: cada campaña como tarjeta. Una tabla de 6 columnas
                    obligaría a scroll horizontal para llegar al estado y las acciones. */}
                <div className="flex flex-col gap-3 sm:hidden">
                    {visibleData.map((row) => (
                        <div
                            key={row.id}
                            className={`rounded-xl border border-border border-l-[3px] bg-white overflow-hidden ${STATUS_ACCENTS[row.estado] ?? "border-l-status-neutral"}`}
                        >
                            <div className="flex items-start justify-between gap-3 p-4 pb-3">
                                <span className="text-[15px] font-bold text-ink leading-tight">{row.nombre}</span>
                                <StatusBadge status={row.estado} />
                            </div>

                            {/* Bloque de datos sobre fondo tenue: separa los valores del
                                título y evita la tarjeta completamente en blanco. */}
                            <div className="mx-4 grid grid-cols-2 gap-y-3 gap-x-3 rounded-lg bg-surface-page border border-border p-3">
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">Inicio</span>
                                    <span className="text-[13px] font-semibold text-ink">{row.inicio}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">Fin</span>
                                    <span className="text-[13px] font-semibold text-ink">{row.fin}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">Kilos</span>
                                    <span className="text-[13px] font-semibold text-ink">{row.kilos}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-1 mt-3 px-2.5 py-1.5 border-t border-border bg-surface-page/50 text-ink-muted">
                                {row.estado === "Planificado" && (
                                    <>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => setManagingCertificationsCampaignId(row.id)} aria-label="Certificaciones">
                                            <FileText size={18} strokeWidth={2.5} />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => navigate(`/campaigns/${row.id}/providers`)} aria-label="Proveedores">
                                            <Users size={18} strokeWidth={2.5} />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => setManagingClientsCampaignId(row.id)} aria-label="Clientes">
                                            <Contact size={18} strokeWidth={2.5} />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => setEditingCampaignId(row.id)} aria-label="Editar">
                                            <Pencil size={18} strokeWidth={2.5} />
                                        </Button>
                                    </>
                                )}
                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95 ml-auto" onClick={() => navigate(`/campaigns/${row.id}`)} aria-label="Ver detalle">
                                    <Eye size={18} strokeWidth={2.5} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden sm:block rounded-xl overflow-hidden border border-border">
                    <Table>
                        <TableHeader className="bg-surface-page">
                            <TableRow className="border-b border-border hover:bg-transparent">
                                <SortableHead label="Nombre Campaña" sortKey="nombre" sort={sort} onToggle={toggleSort} className="px-6" />
                                <SortableHead label="Fecha Inicio" sortKey="inicio" sort={sort} onToggle={toggleSort} />
                                <SortableHead label="Fecha Fin" sortKey="fin" sort={sort} onToggle={toggleSort} />
                                <SortableHead label="Kilos Org. Ven" sortKey="kilos" sort={sort} onToggle={toggleSort} className="text-center" />
                                <TableHead className="text-ink font-semibold h-14">Estado</TableHead>
                                <TableHead className="text-ink font-semibold h-14 text-right px-6 w-64">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {visibleData.map((row) => (
                                <TableRow key={row.id} className="border-b border-border hover:bg-surface-page/60 transition-colors">
                                    <TableCell className="font-medium text-ink h-16 px-6">{row.nombre}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{row.inicio}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{row.fin}</TableCell>
                                    <TableCell className="text-ink-body font-medium text-center">{row.kilos}</TableCell>
                                    <TableCell>
                                        <StatusBadge status={row.estado} />
                                    </TableCell>
                                    <TableCell className="px-6">
                                        <div className="flex items-center justify-end gap-1.5 text-ink-muted">
                                            {row.estado === "Planificado" && (
                                                <>
                                                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => setManagingCertificationsCampaignId(row.id)}>
                                                        <FileText size={18} strokeWidth={2.5} />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => navigate(`/campaigns/${row.id}/providers`)}>
                                                        <Users size={18} strokeWidth={2.5} />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => setManagingClientsCampaignId(row.id)}>
                                                        <Contact size={18} strokeWidth={2.5} />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => setEditingCampaignId(row.id)}>
                                                        <Pencil size={18} strokeWidth={2.5} />
                                                    </Button>
                                                </>
                                            )}
                                            <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => navigate(`/campaigns/${row.id}`)}>
                                                <Eye size={18} strokeWidth={2.5} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {visibleData.length === 0 && (
                    <div className="rounded-xl border border-border">
                        <EmptyState
                            icon={<SearchX size={28} strokeWidth={2} />}
                            title={hasActiveFilters ? "Sin resultados" : "Aún no hay campañas"}
                            description={
                                hasActiveFilters
                                    ? "Ninguna campaña coincide con los filtros aplicados. Prueba ajustándolos."
                                    : "Cuando registres tu primera campaña de exportación aparecerá acá."
                            }
                            action={
                                hasActiveFilters ? (
                                    <Button
                                        variant="outline"
                                        onClick={onClearFilters}
                                        className="h-11 rounded-lg px-6 border-border text-ink-body font-semibold hover:bg-muted hover:text-ink shadow-none transition-colors active:scale-95"
                                    >
                                        Limpiar filtros
                                    </Button>
                                ) : undefined
                            }
                        />
                    </div>
                )}

                <TablePagination page={currentPage} pageCount={pageCount} onPageChange={setPage} />
            </CardContent>
            </Card>

            <CampaignEditModal
                open={editingCampaignId !== null}
                onOpenChange={(open) => !open && setEditingCampaignId(null)}
                onSuccess={handleEditSuccess}
            />

            <CampaignCertificationsModal
                open={managingCertificationsCampaignId !== null}
                onOpenChange={(open) => !open && setManagingCertificationsCampaignId(null)}
                onSuccess={() => {
                    setManagingCertificationsCampaignId(null);
                    setSuccessModalMode("certification");
                    setIsSuccessModalOpen(true);
                }}
            />

            <CampaignLinkClientModal
                open={managingClientsCampaignId !== null}
                onOpenChange={(open) => !open && setManagingClientsCampaignId(null)}
                onSave={() => {
                    setManagingClientsCampaignId(null);
                    setSuccessModalMode("client");
                    setIsSuccessModalOpen(true);
                }}
            />

            <CampaignSuccessModal
                open={isSuccessModalOpen}
                onOpenChange={setIsSuccessModalOpen}
                mode={successModalMode}
            />
        </>
    );
}
