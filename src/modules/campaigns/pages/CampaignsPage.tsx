import { useMemo, useState } from "react";
import CampaignStatsOverview from "@/modules/campaigns/components/CampaignStatsOverview";
import CampaignFilters from "@/modules/campaigns/components/CampaignFilters";
import CampaignTable from "@/modules/campaigns/components/CampaignTable";
import CampaignCreateModal from "@/modules/campaigns/components/CampaignCreateModal";
import CampaignSuccessModal from "@/modules/campaigns/components/CampaignSuccessModal";
import { campaigns } from "@/modules/campaigns/campaigns.data";
import { Leaf } from "lucide-react";
import PageHeader from "@/shared/layout/PageHeader";
import { Button } from "@/shared/components/ui/button";

export default function CampaignsPage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("todos");

    const hasActiveFilters = search !== "" || status !== "todos";

    const clearFilters = () => {
        setSearch("");
        setStatus("todos");
    };

    const filteredCampaigns = useMemo(() => {
        return campaigns.filter((campaign) => {
            const matchesStatus = status === "todos" || campaign.estado === status;
            const matchesSearch = campaign.nombre.toLowerCase().includes(search.trim().toLowerCase());
            return matchesStatus && matchesSearch;
        });
    }, [search, status]);

    const handleCreateSuccess = () => {
        setIsCreateModalOpen(false);
        setIsSuccessModalOpen(true);
    };

    return (
        <div className="px-4 py-5 sm:px-8 lg:px-14">
            <PageHeader
                icon={<Leaf size={24} strokeWidth={2.5} />}
                title="Planificación de Campaña"
                description="Organiza y planifica tus campañas de exportación."
                action={
                    <Button onClick={() => setIsCreateModalOpen(true)} className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm transition-colors active:scale-95">
                        + Nueva Campaña
                    </Button>
                }
            />

            <CampaignStatsOverview activeStatus={status} onStatusChange={setStatus} />

            <CampaignFilters
                search={search}
                onSearchChange={setSearch}
                status={status}
                onStatusChange={setStatus}
                onClear={clearFilters}
            />

            <CampaignTable
                data={filteredCampaigns}
                onClearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
            />

            <CampaignCreateModal
                open={isCreateModalOpen}
                onOpenChange={setIsCreateModalOpen}
                onSuccess={handleCreateSuccess}
            />

            <CampaignSuccessModal
                open={isSuccessModalOpen}
                onOpenChange={setIsSuccessModalOpen}
            />
        </div>
    );
}
