import { Search, Settings2, X } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";
import { DatePicker } from "@/shared/components/ui/date-picker";
import { Card, CardContent } from "@/shared/components/ui/card";

interface CampaignFiltersProps {
    search: string;
    onSearchChange: (value: string) => void;
    status: string;
    onStatusChange: (value: string) => void;
    onClear: () => void;
}

export default function CampaignFilters({ search, onSearchChange, status, onStatusChange, onClear }: CampaignFiltersProps) {
    const activeFilters = [
        search ? { key: "search", label: `Búsqueda: "${search}"`, clear: () => onSearchChange("") } : null,
        status !== "todos" ? { key: "status", label: `Estado: ${status}`, clear: () => onStatusChange("todos") } : null,
    ].filter((item) => item !== null);

    return (
        <Card className="mb-8 border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)] rounded-2xl">
            <CardContent className="p-4 sm:p-6 flex flex-col gap-5 sm:gap-6">
                {/* Encabezado del Filtro */}
                <div className="flex items-start gap-3">
                    <Search className="text-brand mt-0.5" size={22} strokeWidth={2.5} />
                    <div className="flex flex-col">
                        <h2 className="text-[16px] font-bold text-ink leading-tight">Filtros de Búsqueda</h2>
                        <p className="text-[13px] text-ink-muted font-medium">Encuentra y filtra tus campañas</p>
                    </div>
                </div>

                {/* Fila de Controles */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 sm:items-end w-full">
                    {/* Buscador Principal */}
                    <div className="w-full sm:flex-[2] sm:min-w-[250px] relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} strokeWidth={2} />
                        <Input
                            value={search}
                            onChange={(event) => onSearchChange(event.target.value)}
                            placeholder="Buscar campaña..."
                            className="pl-10 rounded-lg h-11 border-border bg-white shadow-none text-[14px] focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand placeholder:text-muted-foreground"
                        />
                    </div>

                    {/* Fecha Inicio */}
                    <div className="w-full sm:flex-1 sm:min-w-[150px] flex flex-col gap-1.5">
                        <label className="text-[13px] font-bold text-ink">Fecha Inicio</label>
                        <DatePicker placeholder="--/--/----" className="h-11 rounded-lg border-border text-ink-muted focus:ring-1 focus:ring-brand/30 focus:border-brand" />
                    </div>

                    {/* Fecha Fin */}
                    <div className="w-full sm:flex-1 sm:min-w-[150px] flex flex-col gap-1.5">
                        <label className="text-[13px] font-bold text-ink">Fecha Fin</label>
                        <DatePicker placeholder="--/--/----" className="h-11 rounded-lg border-border text-ink-muted focus:ring-1 focus:ring-brand/30 focus:border-brand" />
                    </div>

                    {/* Estado */}
                    <div className="w-full sm:flex-1 sm:min-w-[150px] flex flex-col gap-1.5">
                        <label className="text-[13px] font-bold text-ink">Estado</label>
                        <Select value={status} onValueChange={onStatusChange}>
                            <SelectTrigger className="w-full rounded-lg !h-11 border-border shadow-none text-ink font-medium [&>svg]:opacity-50 focus:ring-1 focus:ring-brand/30 focus:border-brand">
                                <SelectValue placeholder="todos" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg">
                                <SelectItem value="todos" className="rounded-lg">todos</SelectItem>
                                <SelectItem value="Planificado" className="rounded-lg">planificado</SelectItem>
                                <SelectItem value="En proceso" className="rounded-lg">en proceso</SelectItem>
                                <SelectItem value="Terminado" className="rounded-lg">terminado</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Botón Limpiar Filtros: solo cuando hay algo que limpiar */}
                    {activeFilters.length > 0 && (
                        <Button
                            variant="outline"
                            onClick={onClear}
                            className="h-11 rounded-lg px-6 border-border text-ink-muted gap-2 hover:bg-muted hover:text-ink shadow-none font-semibold transition-colors active:scale-95"
                        >
                            <Settings2 size={16} strokeWidth={2.5} />
                            Limpiar Filtros
                        </Button>
                    )}
                </div>

                {/* Chips de filtros activos */}
                {activeFilters.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-[12px] font-bold text-ink-muted uppercase tracking-wider">Filtros activos</span>
                        {activeFilters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={filter.clear}
                                className="flex items-center gap-1.5 rounded-full bg-brand-surface border border-brand-border px-3 py-1 text-[12px] font-bold text-brand hover:bg-brand-border transition-colors active:scale-95"
                            >
                                {filter.label}
                                <X size={13} strokeWidth={3} />
                            </button>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
