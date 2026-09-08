import ClientsFilters from "@/modules/clients/components/ClientsFilters";
import ClientsTable from "@/modules/clients/components/ClientsTable";
import PageHeader from "@/shared/layout/PageHeader";
import { Users } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export default function ClientsPage() {
    return (
        <div className="px-14 py-5">
            <PageHeader
                icon={<Users size={24} strokeWidth={2.5} />}
                title="Gestión de Clientes"
                description="Administra los productores y acopiadores registrados en el sistema."
                action={
                    <Button className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm transition-colors active:scale-95">
                        + Nuevo Cliente
                    </Button>
                }
            />

            <ClientsFilters />
            
            <ClientsTable />
        </div>
    );
}
