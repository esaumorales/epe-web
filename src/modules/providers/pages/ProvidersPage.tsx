import { useState } from "react";
import ProvidersFilters from "@/modules/providers/components/ProvidersFilters";
import ProvidersTable from "@/modules/providers/components/ProvidersTable";
import ProviderCreateModal from "@/modules/providers/components/ProviderCreateModal";
import ProviderSuccessModal from "@/modules/providers/components/ProviderSuccessModal";
import PageHeader from "@/shared/layout/PageHeader";
import { Truck } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export default function ProvidersPage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleCreateSuccess = () => {
        setIsCreateModalOpen(false);
        setIsSuccessModalOpen(true);
    };

    return (
        <div className="px-4 py-5 sm:px-8 lg:px-14">
            <PageHeader
                icon={<Truck size={24} strokeWidth={2.5} />}
                title="Gestión de Proveedores"
                description="Administra los proveedores y sus parcelas registrados en el sistema."
                action={
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 [&>button]:w-full sm:[&>button]:w-auto">
                        <Button
                            variant="outline"
                            className="h-11 rounded-lg px-6 border-border text-ink-body font-semibold shadow-none hover:bg-muted hover:text-ink transition-colors active:scale-95"
                        >
                            Importar Excel
                        </Button>
                        <Button
                            onClick={() => setIsCreateModalOpen(true)}
                            className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm transition-colors active:scale-95"
                        >
                            + Nuevo Proveedor
                        </Button>
                    </div>
                }
            />

            <ProvidersFilters />

            <ProvidersTable />

            <ProviderCreateModal
                open={isCreateModalOpen}
                onOpenChange={setIsCreateModalOpen}
                onSuccess={handleCreateSuccess}
            />

            <ProviderSuccessModal
                open={isSuccessModalOpen}
                onOpenChange={setIsSuccessModalOpen}
            />
        </div>
    );
}
