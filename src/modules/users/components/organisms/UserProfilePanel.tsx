import { User, Shield } from "lucide-react";

export default function UserProfilePanel() {
    return (
        <div className="flex flex-col items-center bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-[400px] h-[550px] p-10 relative overflow-hidden z-10">
            <div className="flex-1 w-full flex flex-col items-center justify-center">
                <div className="relative w-36 h-36 mb-8 flex items-center justify-center rounded-full border-[3px] border-[#5D9634] text-[#5D9634]">
                    <User size={72} strokeWidth={1.5} />
                </div>
                
                <h2 className="text-3xl font-bold text-[#1a2f22] mb-5">Nombre Usuario</h2>
                
                <div className="h-[2px] bg-[#5D9634] w-14 mb-8"></div>
                
                <div className="flex items-center gap-2 bg-[#F1F6F2] text-[#5D9634] px-5 py-2.5 rounded-lg font-medium text-sm border border-[#E1EDE3]">
                    <Shield size={18} />
                    <span>Rol Usuario</span>
                </div>
            </div>
        </div>
    )
}