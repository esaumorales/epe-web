import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";

export default function TopNavBar() {
    return (
        <header className="flex h-20 shrink-0 items-center justify-between px-8 bg-transparent">
            <div className="flex items-center gap-8 ml-auto">
                <div className="flex items-center gap-5">
                    <button className="text-gray-500 hover:text-[#5D9634] transition-colors">
                        <Bell size={22} strokeWidth={2} />
                    </button>
                    <button className="text-gray-500 hover:text-[#5D9634] transition-colors">
                        <Settings size={22} strokeWidth={2} />
                    </button>
                </div>
                
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <Avatar className="h-10 w-10 border border-[#d2e5d5]">
                        <AvatarFallback className="bg-[#EBF3EC] text-[#5D9634] font-bold">RE</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#1a2f22] leading-tight">Ripley</span>
                        <span className="text-xs text-gray-500 font-medium">Ecommerce</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
