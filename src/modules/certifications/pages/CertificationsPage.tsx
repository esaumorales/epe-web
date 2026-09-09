import { useNavigate } from "react-router-dom";
import CertificationsFilters from "@/modules/certifications/components/CertificationsFilters";
import CertificationsTable from "@/modules/certifications/components/CertificationsTable";
import PageHeader from "@/shared/layout/PageHeader";
import { FileBadge } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export default function CertificationsPage() {
    const navigate = useNavigate();

    return (
        <div className="px-4 py-5 sm:px-8 lg:px-14">
            <PageHeader
                icon={<FileBadge size={24} strokeWidth={2.5} />}
                title="Cotizaciones de Certificados"
                description="Administra las cotizaciones de certificaciones del sistema."
                action={
                    <Button
                        onClick={() => navigate("/certificaciones/nueva")}
                        className="bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold h-11 px-6 shadow-sm transition-colors active:scale-95"
                    >
                        + Nueva Cotización
                    </Button>
                }
            />

            <CertificationsFilters />

            <CertificationsTable />
        </div>
    );
}
