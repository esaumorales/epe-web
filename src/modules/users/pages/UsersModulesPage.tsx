import ModulesGrid from "@/modules/users/components/ModulesGrid";
import UserProfilePanel from "@/modules/users/components/UserProfilePanel";

interface UsersModulesPageProps {
    onLogout?: () => void;
}

export default function UsersModulesPage({ onLogout }: UsersModulesPageProps) {
    return (
        <div
            className="h-screen w-full relative flex flex-col bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: "url('/image/fondo_modules.webp')" }}
        >
            <div className="flex flex-row gap-12 w-full justify-center items-start flex-1 min-h-0 relative z-10">

                <div className="flex-none h-full flex flex-col justify-start">
                    <UserProfilePanel onLogout={onLogout} />
                </div>

                <div className="flex-1 h-full overflow-y-auto pr-6 pt-8" style={{ scrollbarWidth: 'thin' }}>
                    <ModulesGrid />
                </div>
            </div>
        </div>
    )
}