import DashboardLayout from "@/shared/layout/DashboardLayout";
import ClientsFilters from "@/modules/clients/components/ClientsFilters";
import ClientsTable from "@/modules/clients/components/ClientsTable";

export default function ClientsPage() {
    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-[22px] font-bold text-[#1a2f22]">Gestión de Clientes</h1>
            </div>

            <ClientsFilters />
            
            <ClientsTable />
        </DashboardLayout>
    );
}
