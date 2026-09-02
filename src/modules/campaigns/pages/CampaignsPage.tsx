import { useState } from "react";
import DashboardLayout from "@/globals/components/templates/DashboardLayout";
import CampaignStatsOverview from "../components/organisms/CampaignStatsOverview";
import CampaignFilters from "../components/organisms/CampaignFilters";
import CampaignTable from "../components/organisms/CampaignTable";
import CampaignCreateModal from "../components/organisms/CampaignCreateModal";
import CampaignSuccessModal from "../components/organisms/CampaignSuccessModal";
import { Leaf } from "lucide-react";

export default function CampaignsPage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleCreateSuccess = () => {
        setIsCreateModalOpen(false);
        setIsSuccessModalOpen(true);
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

            <CampaignTable />

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
