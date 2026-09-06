import ModuleCard from '@/modules/users/components/ModuleCard';
import { CalendarDays, Users, User, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ModulesGrid() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-5xl mx-auto pb-8">
      <ModuleCard 
        title="Planificación de Campaña" 
        description="Organiza y planifica tus campañas de exportación."
        icon={<CalendarDays size={32} strokeWidth={1.5} />}
        onClick={() => navigate('/campaigns')} 
      />
      <ModuleCard 
        title="Gestión de Proveedores" 
        description="Administra y evalúa a tus proveedores."
        icon={<Users size={32} strokeWidth={1.5} />}
        onClick={() => navigate('/proveedores')} 
      />
      <ModuleCard 
        title="Gestión de Clientes" 
        description="Administra y da seguimiento a tus clientes."
        icon={<User size={32} strokeWidth={1.5} />}
        onClick={() => navigate('/clientes')} 
      />
      <ModuleCard 
        title="Gestión de Certificaciones" 
        description="Administra y haz seguimiento de las certificaciones."
        icon={<Award size={32} strokeWidth={1.5} />}
        onClick={() => navigate('/certificaciones')} 
      />
    </div>
  );
}
