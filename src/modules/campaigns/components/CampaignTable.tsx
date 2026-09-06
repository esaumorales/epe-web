import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FileText, Users, Pencil, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import StatusBadge from "@/modules/campaigns/components/StatusBadge";
import { Button } from "@/shared/components/ui/button";
import CampaignEditModal from "@/modules/campaigns/components/CampaignEditModal";
import CampaignSuccessModal from "@/modules/campaigns/components/CampaignSuccessModal";
import CampaignProvidersModal from "@/modules/campaigns/components/CampaignProvidersModal";
import CampaignCertificationsModal from "@/modules/campaigns/components/CampaignCertificationsModal";
import { getCampanas } from "@/modules/campaigns/api/campaign.api";
import type { Campana } from "@/modules/campaigns/api/campaign.mapper";

export default function CampaignTable() {
    const [campaigns, setCampaigns] = useState<Campana[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingCampaignId, setEditingCampaignId] = useState<number | null>(null);
    const [managingProvidersCampaignId, setManagingProvidersCampaignId] = useState<number | null>(null);
    const [managingCertificationsCampaignId, setManagingCertificationsCampaignId] = useState<number | null>(null);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const navigate = useNavigate();
    const [successModalMode, setSuccessModalMode] = useState<"edit" | "provider" | "certification">("edit");

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
        <div className="bg-white rounded-[1.5rem] p-3 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 overflow-hidden">
            <div className="rounded-xl overflow-hidden border border-gray-100">
                <Table>
                    <TableHeader className="bg-[#f9fbf9]">
                        <TableRow className="border-b border-gray-100 hover:bg-transparent">
                            <TableHead className="text-[#1a2f22] font-semibold h-14 px-6">Nombre Campaña</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14">Fruta</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14">Fecha Inicio</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14">Fecha Fin</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14 text-center">Requerimiento Comercial</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14">Estado</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14 text-center px-6">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {campaigns.map((row) => (
                            <TableRow key={row.campaniaId} className="border-b border-gray-50 hover:bg-gray-50/50">
                                <TableCell className="font-medium text-[#1a2f22] h-16 px-6">{row.nombre}</TableCell>
                                <TableCell className="text-[#545454] font-medium">{row.fruta?.name ?? "-"}</TableCell>
                                <TableCell className="text-[#545454] font-medium">{format(row.fechaInicio, "dd/MM/yyyy")}</TableCell>
                                <TableCell className="text-[#545454] font-medium">{format(row.fechaFin, "dd/MM/yyyy")}</TableCell>
                                <TableCell className="text-[#545454] font-medium text-center">{row.requerimientoComercial}</TableCell>
                                <TableCell>
                                    <StatusBadge status={row.estado} />
                                </TableCell>
                                <TableCell className="px-6">
                                    <div className="flex items-center justify-center gap-1.5 text-gray-500">
                                        {row.estado === "planificacion" && (
                                            <>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors" onClick={() => setManagingCertificationsCampaignId(row.campaniaId)}>
                                                    <FileText size={18} strokeWidth={2.5} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors" onClick={() => setManagingProvidersCampaignId(row.campaniaId)}>
                                                    <Users size={18} strokeWidth={2.5} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors" onClick={() => setEditingCampaignId(row.campaniaId)}>
                                                    <Pencil size={18} strokeWidth={2.5} />
                                                </Button>
                                            </>
                                        )}
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors" onClick={() => navigate(`/campaigns/${row.campaniaId}`)}>
                                            <Eye size={18} strokeWidth={2.5} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <CampaignEditModal 
                open={editingCampaignId !== null}
                onOpenChange={(open) => !open && setEditingCampaignId(null)}
                onSuccess={handleEditSuccess}
            />

            <CampaignProvidersModal
                campaniaId={managingProvidersCampaignId}
                open={managingProvidersCampaignId !== null}
                onOpenChange={(open) => !open && setManagingProvidersCampaignId(null)}
                onSuccess={() => {
                    setManagingProvidersCampaignId(null);
                    setSuccessModalMode("provider");
                    setIsSuccessModalOpen(true);
                }}
            />

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

            <CampaignSuccessModal
                open={isSuccessModalOpen}
                onOpenChange={setIsSuccessModalOpen}
                mode={successModalMode}
            />
        </div>
    );
}
