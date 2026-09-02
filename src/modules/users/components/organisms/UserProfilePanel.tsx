import { User, Shield, LogOut } from "lucide-react";

interface UserProfilePanelProps {
    onLogout?: () => void;
}

export default function UserProfilePanel({ onLogout }: UserProfilePanelProps) {
    return (
        <div className="flex flex-col items-center bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-[360px] h-[550px] p-10 relative overflow-hidden z-10">
            <div className="flex-1 w-full flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 mb-8 flex items-center justify-center rounded-full border-[3px] border-[#5D9634] text-[#5D9634]">
                    <User size={64} strokeWidth={1.5} />
                </div>
                
                <h2 className="text-2xl font-bold text-[#1a2f22] mb-5">Nombre Usuario</h2>
                
                <div className="h-[2px] bg-[#5D9634] w-12 mb-8"></div>
                
                <div className="flex items-center gap-2 bg-[#F1F6F2] text-[#5D9634] px-5 py-2.5 rounded-lg font-medium text-sm border border-[#E1EDE3]">
                    <Shield size={18} />
                    <span>Rol Usuario</span>
                </div>
            </div>

            <button 
                onClick={onLogout}
                className="absolute bottom-8 right-8 flex items-center gap-2 bg-[#6b9d3b] hover:bg-[#58852e] text-white px-5 py-2.5 rounded-xl font-medium shadow-md transition-colors"
            >
                Cerrar Sesión
                <LogOut size={16} />
            </button>
        </div>
    )
}