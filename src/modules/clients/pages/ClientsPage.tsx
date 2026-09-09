import { useState } from "react";
import ClientsFilters from "@/modules/clients/components/ClientsFilters";
import ClientsTable from "@/modules/clients/components/ClientsTable";
import ClientCreateModal from "@/modules/clients/components/ClientCreateModal";
import ClientSuccessModal from "@/modules/clients/components/ClientSuccessModal";
import PageHeader from "@/shared/layout/PageHeader";
import { Users } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export default function ClientsPage() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleCreateSuccess = () => {
        setIsCreateModalOpen(false);
        setIsSuccessModalOpen(true);
    };

    return (
        <div className="px-4 py-5 sm:px-8 lg:px-14">
            <PageHeader
                icon={<Users size={24} strokeWidth={2.5} />}
                title="Gestión de Clientes"
                description="Administra los productores y acopiadores registrados en el sistema."
                action={
                    <Button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm transition-colors active:scale-95"
                    >
                        + Nuevo Cliente
                    </Button>
                }
            />

            <ClientsFilters />

            <ClientsTable />

            <ClientCreateModal
                open={isCreateModalOpen}
                onOpenChange={setIsCreateModalOpen}
                onSuccess={handleCreateSuccess}
            />

            <ClientSuccessModal
                open={isSuccessModalOpen}
                onOpenChange={setIsSuccessModalOpen}
            />
        </div>
    );
}
