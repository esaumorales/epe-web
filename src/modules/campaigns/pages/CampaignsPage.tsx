import { useState } from "react";
import CampaignStatsOverview from "@/modules/campaigns/components/CampaignStatsOverview";
import CampaignFilters from "@/modules/campaigns/components/CampaignFilters";
import CampaignTable from "@/modules/campaigns/components/CampaignTable";
import CampaignCreateModal from "@/modules/campaigns/components/CampaignCreateModal";
import CampaignSuccessModal from "@/modules/campaigns/components/CampaignSuccessModal";
import { Leaf } from "lucide-react";
import PageHeader from "@/shared/layout/PageHeader";
import { Button } from "@/shared/components/ui/button";

export default function CampaignsPage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [tableKey, setTableKey] = useState(0);

    const handleCreateSuccess = () => {
        setIsCreateModalOpen(false);
        setIsSuccessModalOpen(true);
        setTableKey((k) => k + 1);
    };

    return (
        <div className="px-14 py-5">
            <PageHeader
                icon={<Leaf size={24} strokeWidth={2.5} />}
                title="Planificación de Campaña"
                description="Organiza y planifica tus campañas de exportación."
                action={
                    <Button onClick={() => setIsCreateModalOpen(true)} className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm">
                        + Nueva Campaña
                    </Button>
                }
            />

            <CampaignStatsOverview />

            <CampaignFilters />

            <CampaignTable key={tableKey} />

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
