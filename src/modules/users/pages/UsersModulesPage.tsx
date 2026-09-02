import ModulesGrid from "../components/organisms/ModulesGrid";
import UserProfilePanel from "../components/organisms/UserProfilePanel";
import logoEmpresaLarge from "@Assets/image/logo_empresa_large.webp";

interface UsersModulesPageProps {
    onLogout?: () => void;
}

export default function UsersModulesPage({ onLogout }: UsersModulesPageProps) {
    return (
        <div 
            className="h-screen w-full relative flex flex-col pt-8 px-12 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/image/fondo_modules.webp')" }}
        >
            <div className="w-full flex justify-end mb-6 relative z-20 shrink-0">
                <img src={logoEmpresaLarge} alt="Logo" className="h-14 object-contain" />
            </div>

            <div className="flex flex-row gap-12 w-full justify-center items-start flex-1 min-h-0 relative z-10 pb-8">
                
                <div className="flex-1 h-full overflow-y-auto pr-4" style={{ scrollbarWidth: 'thin' }}>
                    <ModulesGrid />
                </div>
                
                <div className="flex-none h-full flex flex-col justify-start">
                    <UserProfilePanel onLogout={onLogout} />
                </div>
            </div>
        </div>
    )
}