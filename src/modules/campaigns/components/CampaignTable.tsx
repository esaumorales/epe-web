import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FileText, Users, Pencil, Eye, Contact, Layers } from "lucide-react";
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
import { Button } from "@/shared/components/ui/button";
import CampaignEditModal from "@/modules/campaigns/components/CampaignEditModal";
import CampaignSuccessModal from "@/modules/campaigns/components/CampaignSuccessModal";
import CampaignCertificationsModal from "@/modules/campaigns/components/CampaignCertificationsModal";
import { getCampanas } from "@/modules/campaigns/api/campaign.api";
import type { Campana } from "@/modules/campaigns/api/campaign.mapper";
import CampaignLinkClientModal from "@/modules/campaigns/components/CampaignLinkClientModal";
const data = [
    {
        id: 1,
        nombre: "Mango 2026",
        inicio: "01/06/2026",
        fin: "31/08/2026",
        kilos: "3000",
        estado: "Planificado"
    },
    {
        id: 2,
        nombre: "Mango 2025",
        inicio: "27/07/2025",
        fin: "27/07/2025",
        kilos: "3100",
        estado: "Terminado"
    }
];

export default function CampaignTable() {
    const [campaigns, setCampaigns] = useState<Campana[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingCampaignId, setEditingCampaignId] = useState<number | null>(null);
    const [managingCertificationsCampaignId, setManagingCertificationsCampaignId] = useState<number | null>(null);
    const [managingClientsCampaignId, setManagingClientsCampaignId] = useState<number | null>(null);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const navigate = useNavigate();
    const [successModalMode, setSuccessModalMode] = useState<"edit" | "provider" | "certification" | "client">("edit");

    useEffect(() => {
        getCampanas()
            .then(setCampaigns)
            .catch(() => setError("No se pudieron cargar las campañas."))
            .finally(() => setIsLoading(false));
    }, []);

    const handleEditSuccess = () => {
        setEditingCampaignId(null);
        setSuccessModalMode("edit");
        setIsSuccessModalOpen(true);
        getCampanas()
            .then(setCampaigns)
            .catch(() => setError("No se pudieron cargar las campañas."));
    };

    if (isLoading) {
        return (
            <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 text-center text-[#545454]">
                Cargando campañas...
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 text-center text-red-600">
                {error}
            </div>
        );
    }

    return (
        <>
            <Card className="rounded-2xl border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)]">
            <CardContent className="p-6 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0">
                            <Layers size={24} strokeWidth={2.5} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[17px] font-bold text-ink leading-tight mb-1">Campañas de Exportación</h2>
                            <p className="text-[13px] text-ink-muted font-medium">Gestiona, consulta y da seguimiento a todas tus campañas registradas.</p>
                        </div>
                    </div>
                    <div className="text-[13px] text-muted-foreground font-medium">
                        Mostrando <span className="font-bold">{data.length}</span> de <span className="font-bold">{data.length}</span> campañas
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border">
                    <Table>
                        <TableHeader className="bg-surface-page">
                            <TableRow className="border-b border-border hover:bg-transparent">
                                <TableHead className="text-ink font-semibold h-14 px-6">Nombre Campaña</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Fruta</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Fecha Inicio</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Fecha Fin</TableHead>
                                <TableHead className="text-ink font-semibold h-14 text-center">Kilos Org. Ven</TableHead>
                                <TableHead className="text-ink font-semibold h-14">Estado</TableHead>
                                <TableHead className="text-ink font-semibold h-14 text-right px-6 w-[180px]">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {campaigns.map((row) => (
                                <TableRow key={row.campaniaId} className="border-b border-border hover:bg-surface-page/60">
                                    <TableCell className="font-medium text-ink h-16 px-6">{row.nombre}</TableCell>
                                    <TableCell className="font-medium text-ink h-16 px-6">{row.fruta?.name ?? "-"}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{format(row.fechaInicio, "dd/MM/yyyy")}</TableCell>
                                    <TableCell className="text-ink-body font-medium">{format(row.fechaFin, "dd/MM/yyyy")}</TableCell>
                                    <TableCell className="text-ink-body font-medium text-center">{row.requerimientoComercial}</TableCell>
                                    <TableCell>
                                        <StatusBadge status={row.estado} />
                                    </TableCell>
                                    <TableCell className="px-6">
                                        <div className="flex items-center justify-end gap-1 text-ink-muted">
                                            {row.estado === "planificacion" && (
                                                <>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => setManagingCertificationsCampaignId(row.campaniaId)}>
                                                        <FileText size={18} strokeWidth={2.5} />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => navigate(`/campaigns/${row.campaniaId}/providers`)}>
                                                        <Users size={18} strokeWidth={2.5} />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => setManagingClientsCampaignId(row.campaniaId)}>
                                                        <Contact size={18} strokeWidth={2.5} />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => setEditingCampaignId(row.campaniaId)}>
                                                        <Pencil size={18} strokeWidth={2.5} />
                                                    </Button>
                                                </>
                                            )}
                                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-brand hover:bg-brand-surface rounded-lg transition-colors active:scale-95" onClick={() => navigate(`/campaigns/${row.campaniaId}`)}>
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

            <CampaignEditModal
                open={editingCampaignId !== null}
                campaniaId={editingCampaignId}
                onOpenChange={(open) => !open && setEditingCampaignId(null)}
                onSuccess={handleEditSuccess}
            />

            {/* <CampaignProvidersModal
                campaniaId={managingProvidersCampaignId}
                open={managingProvidersCampaignId !== null}
                onOpenChange={(open) => !open && setManagingProvidersCampaignId(null)}
                onSuccess={() => {
                    setManagingProvidersCampaignId(null);
                    setSuccessModalMode("provider");
                    setIsSuccessModalOpen(true);
                }}
            /> */}

            <CampaignCertificationsModal
                open={managingCertificationsCampaignId !== null}
                campaniaId={managingCertificationsCampaignId}
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
