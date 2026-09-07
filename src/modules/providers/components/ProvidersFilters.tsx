import { Search, X } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";

export default function ProvidersFilters() {
    return (
        <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 mb-6 flex flex-col gap-5">
            {/* Top Row: Search and Clear Filters */}
            <div className="flex gap-4 items-center">
                <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} strokeWidth={2} />
                    <Input 
                        placeholder="Búsqueda de Proveedor" 
                        className="pl-11 rounded-xl h-11 border-[1.5px] border-gray-400 bg-white shadow-none text-[14px]"
                    />
                </div>
                <Button variant="outline" className="h-11 rounded-xl px-6 border-[1.5px] border-gray-400 text-[#1a2f22] gap-2 shadow-none font-semibold transition-colors">
                    <X size={18} />
                    Limpiar Filtros
                </Button>
            </div>

            {/* Bottom Row: Selects and Actions */}
            <div className="flex gap-4 items-end justify-between">
                <div className="flex gap-4">
                    <div className="w-[180px] flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Tipo:</label>
                        <Select defaultValue="todos">
                            <SelectTrigger className="rounded-xl h-11 border-[1.5px] border-gray-400 shadow-none text-[#1a2f22] font-medium">
                                <SelectValue placeholder="Productor/Acopi..." />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="todos" className="rounded-lg">Productor/Acopiador</SelectItem>
                                <SelectItem value="productor" className="rounded-lg">Productor</SelectItem>
                                <SelectItem value="acopiador" className="rounded-lg">Acopiador</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-[180px] flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Registro:</label>
                        <Select>
                            <SelectTrigger className="rounded-xl h-11 border-[1.5px] border-gray-400 shadow-none text-gray-500 font-medium [&>svg]:opacity-50">
                                <SelectValue placeholder="--/--/----" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="today" className="rounded-lg">Hoy</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-[180px] flex flex-col gap-2">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Estado</label>
                        <Select defaultValue="estados">
                            <SelectTrigger className="rounded-xl h-11 border-[1.5px] border-gray-400 shadow-none text-[#1a2f22] font-medium">
                                <SelectValue placeholder="Estados" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="estados" className="rounded-lg">Estados</SelectItem>
                                <SelectItem value="aprobado" className="rounded-lg">Aprobado</SelectItem>
                                <SelectItem value="por_aprobar" className="rounded-lg">Por aprobar</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button variant="secondary" className="h-11 rounded-xl px-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold shadow-none border border-gray-400">
                        Importar Excel
                    </Button>
                    <Button variant="outline" className="h-11 rounded-xl px-6 border-[1.5px] border-gray-400 text-[#1a2f22] font-semibold shadow-none bg-white hover:bg-gray-50">
                        + Nuevo Proveedor
                    </Button>
                </div>
            </div>
        </div>
    );
}
