import { Search, Settings2 } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";
import { DatePicker } from "@/shared/components/ui/date-picker";
import { Card, CardContent } from "@/shared/components/ui/card";

export default function CampaignFilters() {
    return (
        <Card className="mb-8 border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)] rounded-2xl">
            <CardContent className="p-6 flex flex-col gap-6">
                {/* Encabezado del Filtro */}
                <div className="flex items-start gap-3">
                    <Search className="text-brand mt-0.5" size={22} strokeWidth={2.5} />
                    <div className="flex flex-col">
                        <h2 className="text-[16px] font-bold text-ink leading-tight">Filtros de Búsqueda</h2>
                        <p className="text-[13px] text-ink-muted font-medium">Encuentra y filtra tus campañas</p>
                    </div>
                </div>

            {/* Fila de Controles */}
            <div className="flex gap-4 items-end w-full">
                {/* Buscador Principal */}
                <div className="flex-[2] min-w-[250px] relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} strokeWidth={2} />
                    <Input 
                        placeholder="Buscar campaña..." 
                        className="pl-10 rounded-sm h-11 border-border bg-white shadow-none text-[14px] focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand placeholder:text-muted-foreground"
                    />
                </div>

                {/* Fecha Inicio */}
                <div className="flex-1 min-w-[150px] flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-ink">Fecha Inicio</label>
                    <DatePicker placeholder="--/--/----" className="h-11 rounded-sm border-border text-ink-muted focus:ring-1 focus:ring-brand/30 focus:border-brand" />
                </div>

                {/* Fecha Fin */}
                <div className="flex-1 min-w-[150px] flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-ink">Fecha Fin</label>
                    <DatePicker placeholder="--/--/----" className="h-11 rounded-sm border-border text-ink-muted focus:ring-1 focus:ring-brand/30 focus:border-brand" />
                </div>

                {/* Estado */}
                <div className="flex-1 min-w-[150px] flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-ink">Estado</label>
                    <Select defaultValue="todos">
                        <SelectTrigger className="w-full rounded-sm !h-11 border-border shadow-none text-ink font-medium [&>svg]:opacity-50 focus:ring-1 focus:ring-brand/30 focus:border-brand">
                            <SelectValue placeholder="todos" />
                        </SelectTrigger>
                        <SelectContent className="rounded-sm">
                            <SelectItem value="todos" className="rounded-sm">todos</SelectItem>
                            <SelectItem value="planificado" className="rounded-sm">planificado</SelectItem>
                            <SelectItem value="terminado" className="rounded-sm">terminado</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Botón Limpiar Filtros */}
                <Button variant="outline" className="h-11 rounded-sm px-6 border-border text-ink-muted gap-2 hover:bg-muted hover:text-ink shadow-none font-semibold transition-colors">
                    <Settings2 size={16} strokeWidth={2.5} />
                    Limpiar Filtros
                </Button>
            </div>
            </CardContent>
        </Card>
    );
}
