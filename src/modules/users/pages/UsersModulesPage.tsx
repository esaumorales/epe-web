import ModulesGrid from "../components/organisms/ModulesGrid";
import UserProfilePanel from "../components/organisms/UserProfilePanel";
import logoEmpresaLarge from "@Assets/image/logo_empresa_large.webp";
import { LogOut } from "lucide-react";

export default function UsersModulesPage() {
    return (
        <div 
            className="min-h-screen w-full relative flex flex-col pt-12 px-16 bg-cover bg-center bg-no-repeat overflow-x-hidden"
            style={{ backgroundImage: "url('/image/fondo_modules.webp')" }}
        >
            {/* Logo superior derecho */}
            <div className="w-full flex justify-end mb-8 relative z-20">
                <img src={logoEmpresaLarge} alt="Logo" className="h-16 object-contain" />
            </div>

            {/* Contenido principal: Grid y Panel */}
            <div className="flex flex-row gap-12 w-full justify-center items-center flex-1 pb-24 relative z-10">
                <div className="flex justify-end pr-8">
                    <ModulesGrid />
                </div>
                
                <div className="flex-none">
                    <UserProfilePanel />
                </div>
            </div>

            {/* Botón flotante de Cerrar Sesión */}
            <button className="fixed bottom-10 right-12 flex items-center gap-2 bg-[#6b9d3b] hover:bg-[#58852e] text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-colors z-30">
                Cerrar Sesión
                <LogOut size={18} />
            </button>
        </div>
    )
}