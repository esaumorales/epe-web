import ModuleCard from "@/modules/users/components/ModuleCard";
import { CalendarDays, Users, User, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CampaignPlanningImg from "@/assets/campaign_planning.webp";
import SupplierManagementImg from "@/assets/supplier_management.webp";
import CustomerManagementImg from "@/assets/customer_management.webp";
import CertificationsImg from "@/assets/certifications.webp";

export default function ModulesGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(155px,auto)] content-start gap-6 w-full flex-1 min-h-0 px-14 py-5">
      <ModuleCard
        title="Planificación de Campaña"
        description="Organiza y planifica tus campañas de exportación."
        icon={<CalendarDays size={28} strokeWidth={1.5} />}
        image={CampaignPlanningImg}
        onClick={() => navigate("/campaigns")}
      />
      <ModuleCard
        title="Gestión de Proveedores"
        description="Administra y evalúa a tus proveedores."
        icon={<Users size={28} strokeWidth={1.5} />}
        image={SupplierManagementImg}
        onClick={() => navigate("/proveedores")}
      />
      <ModuleCard
        title="Gestión de Clientes"
        description="Administra y da seguimiento a tus clientes."
        icon={<User size={28} strokeWidth={1.5} />}
        image={CustomerManagementImg}
        onClick={() => navigate("/clientes")}
      />
      <ModuleCard 
        title="Gestión de Certificaciones" 
        description="Administra y haz seguimiento de las certificaciones."
        icon={<Award size={28} strokeWidth={1.5} />}
        image={CertificationsImg}
        onClick={() => navigate('/certificaciones')} 
      />
    </div>
  );
}
