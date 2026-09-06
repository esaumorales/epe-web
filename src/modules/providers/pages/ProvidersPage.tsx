import DashboardLayout from "@/shared/layout/DashboardLayout";
import ProvidersFilters from "@/modules/providers/components/ProvidersFilters";
import ProvidersTable from "@/modules/providers/components/ProvidersTable";

export default function ProvidersPage() {
    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-[22px] font-bold text-[#1a2f22]">Gestión de Proveedores</h1>
            </div>

            <ProvidersFilters />
            
            <ProvidersTable />
        </DashboardLayout>
    );
}
