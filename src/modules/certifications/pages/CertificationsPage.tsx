import CertificationsFilters from "@/modules/certifications/components/CertificationsFilters";
import CertificationsTable from "@/modules/certifications/components/CertificationsTable";
import PageHeader from "@/shared/layout/PageHeader";
import { FileBadge } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export default function CertificationsPage() {
    return (
        <div className="px-14 py-5">
            <PageHeader
                icon={<FileBadge size={24} strokeWidth={2.5} />}
                title="Cotizaciones de Certificados"
                description="Administra las cotizaciones de certificaciones del sistema."
                action={
                    <Button className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm transition-colors active:scale-95">
                        + Nueva Cotización
                    </Button>
                }
            />

            <CertificationsFilters />
            
            <CertificationsTable />
        </div>
    );
}
