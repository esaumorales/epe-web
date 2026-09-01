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
            className="flex flex-col items-center justify-between w-[280px] h-[360px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative z-10"
        >
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] mb-8">
                    {icon}
                </div>
                <h2 className="text-xl font-bold text-[#1a2f22] leading-tight mb-4">
                    {title}
                </h2>
                <p className="text-[#8898aa] text-sm leading-relaxed px-2">
                    {description}
                </p>
            </div>
            
            <div className="w-12 h-12 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] mt-4 transition-colors hover:bg-[#5D9634] hover:text-white">
                <ArrowRight size={20} />
            </div>
        </div>
    )
}