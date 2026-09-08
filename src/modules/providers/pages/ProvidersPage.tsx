import ProvidersFilters from "@/modules/providers/components/ProvidersFilters";
import ProvidersTable from "@/modules/providers/components/ProvidersTable";
import PageHeader from "@/shared/layout/PageHeader";
import { Truck } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export default function ProvidersPage() {
    return (
        <div className="px-14 py-5">
            <PageHeader
                icon={<Truck size={24} strokeWidth={2.5} />}
                title="Gestión de Proveedores"
                description="Administra los proveedores y sus parcelas registrados en el sistema."
                action={
                    <div className="flex gap-4">
                        <Button variant="secondary" className="h-11 rounded-lg px-6 bg-muted hover:bg-border text-ink font-semibold shadow-none border border-transparent transition-colors active:scale-95">
                            Importar Excel
                        </Button>
                        <Button className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm transition-colors active:scale-95">
                            + Nuevo Proveedor
                        </Button>
                    </div>
                }
            />

            <ProvidersFilters />
            
            <ProvidersTable />
        </div>
    );
}
