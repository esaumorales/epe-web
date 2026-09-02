import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const [editingCampaignId, setEditingCampaignId] = useState<number | null>(null);
    const [managingProvidersCampaignId, setManagingProvidersCampaignId] = useState<number | null>(null);
    const [managingCertificationsCampaignId, setManagingCertificationsCampaignId] = useState<number | null>(null);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const navigate = useNavigate();
    const [successModalMode, setSuccessModalMode] = useState<"edit" | "provider" | "certification">("edit");

    const handleEditSuccess = () => {
        setEditingCampaignId(null);
        setSuccessModalMode("edit");
        setIsSuccessModalOpen(true);
    };

    return (
        <div className="bg-white rounded-[1.5rem] p-3 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 overflow-hidden">
            <div className="rounded-xl overflow-hidden border border-gray-100">
                <Table>
                    <TableHeader className="bg-[#f9fbf9]">
                        <TableRow className="border-b border-gray-100 hover:bg-transparent">
                            <TableHead className="text-[#1a2f22] font-semibold h-14 px-6">Nombre Campaña</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14">Fecha Inicio</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14">Fecha Fin</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14 text-center">Kilos Org. Ven</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14">Estado</TableHead>
                            <TableHead className="text-[#1a2f22] font-semibold h-14 text-center px-6">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                                <TableCell className="font-medium text-[#1a2f22] h-16 px-6">{row.nombre}</TableCell>
                                <TableCell className="text-[#545454] font-medium">{row.inicio}</TableCell>
                                <TableCell className="text-[#545454] font-medium">{row.fin}</TableCell>
                                <TableCell className="text-[#545454] font-medium text-center">{row.kilos}</TableCell>
                                <TableCell>
                                    <StatusBadge status={row.estado} />
                                </TableCell>
                                <TableCell className="px-6">
                                    <div className="flex items-center justify-center gap-1.5 text-gray-500">
                                        {row.estado === "Planificado" && (
                                            <>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors" onClick={() => setManagingCertificationsCampaignId(row.id)}>
                                                    <FileText size={18} strokeWidth={2.5} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors" onClick={() => setManagingProvidersCampaignId(row.id)}>
                                                    <Users size={18} strokeWidth={2.5} />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors" onClick={() => setEditingCampaignId(row.id)}>
                                                    <Pencil size={18} strokeWidth={2.5} />
                                                </Button>
                                            </>
                                        )}
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors" onClick={() => navigate(`/campaigns/${row.id}`)}>
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
