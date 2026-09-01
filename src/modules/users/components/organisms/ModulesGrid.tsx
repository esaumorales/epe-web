import ModuleCard from '../molecules/ModuleCard';

export default function ModulesGrid() {
  return (
    <div className="flex gap-4 p-8">
      <ModuleCard title="Planificación de Campaña" onClick={() => {}} />
      <ModuleCard title="Gestión de Proveedores" onClick={() => {}} />
      <ModuleCard title="Gestión de Clientes" onClick={() => {}} />
    </div>
  );
}
