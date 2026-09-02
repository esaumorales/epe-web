import { Search, Settings2, CalendarDays } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";

export default function CampaignFilters() {
    return (
        <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 mb-8 flex flex-col gap-4">
            <div className="flex gap-5 items-end">
                <div className="flex-1 flex flex-col gap-2.5">
                    <label className="text-[13px] font-semibold text-[#1a2f22]">Buscador</label>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} strokeWidth={2} />
                        <Input 
                            placeholder="Buscar campaña..." 
                            className="pl-11 rounded-xl h-11 border-gray-200 bg-white shadow-none text-[14px]"
                        />
                    </div>
                </div>

                <div className="w-[180px] flex flex-col gap-2.5">
                    <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Inicio</label>
                    <Select>
                        <SelectTrigger className="rounded-xl h-11 border-gray-200 shadow-none text-gray-500 font-medium [&>svg]:opacity-50">
                            <div className="flex items-center gap-2">
                                <CalendarDays size={16} className="opacity-70" />
                                <SelectValue placeholder="--/--/----" />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                            <SelectItem value="today" className="rounded-lg">Hoy</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-[180px] flex flex-col gap-2.5">
                    <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Fin</label>
                    <Select>
                        <SelectTrigger className="rounded-xl h-11 border-gray-200 shadow-none text-gray-500 font-medium [&>svg]:opacity-50">
                            <div className="flex items-center gap-2">
                                <CalendarDays size={16} className="opacity-70" />
                                <SelectValue placeholder="--/--/----" />
                            </div>
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                            <SelectItem value="today" className="rounded-lg">Hoy</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-[180px] flex flex-col gap-2.5">
                    <label className="text-[13px] font-semibold text-[#1a2f22]">Estado</label>
                    <Select defaultValue="todos">
                        <SelectTrigger className="rounded-xl h-11 border-gray-200 shadow-none text-[#1a2f22] font-medium [&>svg]:opacity-50">
                            <SelectValue placeholder="Todos" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                            <SelectItem value="todos" className="rounded-lg">Todos</SelectItem>
                            <SelectItem value="planificado" className="rounded-lg">Planificado</SelectItem>
                            <SelectItem value="terminado" className="rounded-lg">Terminado</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Button variant="outline" className="h-11 rounded-xl px-6 border-gray-200 text-gray-600 gap-2 hover:bg-[#EBF3EC] hover:text-[#5D9634] hover:border-[#EBF3EC] shadow-none font-semibold transition-colors">
                    <Settings2 size={18} />
                    Limpiar Filtros
                </Button>
            </div>
        </div>
    );
}
