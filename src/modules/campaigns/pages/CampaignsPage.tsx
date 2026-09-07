import { useState } from "react";
import DashboardLayout from "@/shared/layout/DashboardLayout";
import CampaignStatsOverview from "@/modules/campaigns/components/CampaignStatsOverview";
import CampaignFilters from "@/modules/campaigns/components/CampaignFilters";
import CampaignTable from "@/modules/campaigns/components/CampaignTable";
import CampaignCreateModal from "@/modules/campaigns/components/CampaignCreateModal";
import CampaignSuccessModal from "@/modules/campaigns/components/CampaignSuccessModal";
import { Leaf } from "lucide-react";

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
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <div className="text-[#5D9634]">
                        <Leaf size={24} strokeWidth={2.5} />
                    </div>
                    <h1 className="text-[22px] font-bold text-[#1a2f22]">Planificación de Campaña</h1>
                </div>
                <button 
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-[#6b9d3b] hover:bg-[#58852e] text-white px-6 py-2.5 rounded-[0.8rem] font-semibold text-[14px] transition-colors shadow-sm"
                >
                    + Nueva Campaña
                </button>
            </div>

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
        </DashboardLayout>
    );
}
