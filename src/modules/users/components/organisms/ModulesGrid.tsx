import ModuleCard from '../molecules/ModuleCard';
import { CalendarDays, Users, User } from 'lucide-react';

export default function ModulesGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-full">
      <ModuleCard 
        title="Planificación de Campaña" 
        description="Organiza y planifica tus campañas de exportación."
        icon={<CalendarDays size={40} strokeWidth={1.5} />}
        onClick={() => {}} 
      />
      <ModuleCard 
        title="Gestión de Proveedores" 
        description="Administra y evalúa a tus proveedores."
        icon={<Users size={40} strokeWidth={1.5} />}
        onClick={() => {}} 
      />
      <ModuleCard 
        title="Gestión de Clientes" 
        description="Administra y da seguimiento a tus clientes."
        icon={<User size={40} strokeWidth={1.5} />}
        onClick={() => {}} 
      />
    </div>
  );
}
