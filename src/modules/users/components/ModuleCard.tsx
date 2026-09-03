import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ModuleCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    onClick: () => void;
}

export default function ModuleCard({ title, description, icon, onClick }: ModuleCardProps) {
    return (
        <div 
            onClick={onClick} 
            className="flex flex-col items-center justify-between w-full h-[300px] max-w-[260px] mx-auto bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative z-10"
        >
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] mb-5">
                    {icon}
                </div>
                <h2 className="text-lg font-bold text-[#1a2f22] leading-tight mb-2">
                    {title}
                </h2>
                <p className="text-[#8898aa] text-[13px] leading-relaxed px-1">
                    {description}
                </p>
            </div>
            
            <div className="w-10 h-10 rounded-full bg-[#eefff0] flex items-center justify-center text-[#5D9634] mt-2 transition-colors hover:bg-[#5D9634] hover:text-white">
                <ArrowRight size={18} />
            </div>
        </div>
    )
}