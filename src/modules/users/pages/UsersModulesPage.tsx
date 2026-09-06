import ModulesGrid from "@/modules/users/components/ModulesGrid";
import HeroModules from "@/modules/users/components/HeroModules";
import ModulesFooter from "@/modules/users/components/ModulesFooter";
import WaveClipDefs from "@/modules/users/components/WaveClipDefs";
import DashboardLayout from "@/shared/layout/DashboardLayout";

interface UsersModulesPageProps {
  onLogout?: () => void;
}

export default function UsersModulesPage({ onLogout }: UsersModulesPageProps) {
  return (
    <DashboardLayout hideSidebar onLogout={onLogout}>
      {/* Definiciones de los recortes curvos, compartidas por el hero y las cards */}
      <WaveClipDefs />

      {/* Fondo: color cálido de página + las ondas del asset en `multiply`, para que
          el blanco de la imagen deje pasar el color en vez de taparlo */}
      <div className="absolute inset-0 z-0 bg-surface-page" aria-hidden="true">
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage: "url('/image/fondo_modules.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* `overflow-hidden` + altos relativos: la vista entra completa en pantalla
          y nunca aparece scroll, sea cual sea el alto del viewport */}
      <div className="relative z-10 w-full h-full flex flex-col overflow-hidden">
        <HeroModules />
        <ModulesGrid />
        <ModulesFooter />
      </div>
    </DashboardLayout>
  );
}
