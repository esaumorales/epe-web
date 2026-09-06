import DashboardLayout from "@/shared/layout/DashboardLayout";
import CertificationsFilters from "@/modules/certifications/components/CertificationsFilters";
import CertificationsTable from "@/modules/certifications/components/CertificationsTable";

export default function CertificationsPage() {
    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-[22px] font-bold text-[#1a2f22]">Cotizaciones de Certificados</h1>
            </div>

            <CertificationsFilters />
            
            <CertificationsTable />
        </DashboardLayout>
    );
}
