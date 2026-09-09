import { Search, Settings2, CalendarDays, X } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";

interface ProvidersFiltersProps {
    search: string;
    onSearchChange: (v: string) => void;
    status: string;
    onStatusChange: (v: string) => void;
    type: string;
    onTypeChange: (v: string) => void;
    onClear: () => void;
}

export default function ProvidersFilters({ search, onSearchChange, status, onStatusChange, type, onTypeChange, onClear }: ProvidersFiltersProps) {
    const activeFilters = [
        search ? { key: "search", label: `Búsqueda: "${search}"`, clear: () => onSearchChange("") } : null,
        status !== "estados" ? { key: "status", label: `Estado: ${status}`, clear: () => onStatusChange("estados") } : null,
        type !== "todos" ? { key: "type", label: `Tipo: ${type}`, clear: () => onTypeChange("todos") } : null,
    ].filter((item) => item !== null);

    return (
        <Card className="mb-8 border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)] rounded-2xl">
            <CardContent className="p-4 sm:p-6 flex flex-col gap-5 sm:gap-6">
                <div className="flex items-start gap-3">
                    <Search className="text-brand mt-0.5" size={22} strokeWidth={2.5} />
                    <div className="flex flex-col">
                        <h2 className="text-[16px] font-bold text-ink leading-tight">Filtros de Búsqueda</h2>
                        <p className="text-[13px] text-ink-muted font-medium">Encuentra y filtra tus proveedores</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 sm:items-end w-full">
                    <div className="w-full sm:flex-[2] sm:min-w-[250px] relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} strokeWidth={2} />
                        <Input
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Buscar proveedor (nombre o dni)..."
                            className="pl-10 rounded-lg h-11 border-border bg-white shadow-none text-[14px] focus-visible:ring-1 focus-visible:ring-brand/30 focus-visible:border-brand placeholder:text-muted-foreground"
                        />
                    </div>

                    <div className="w-full sm:flex-1 sm:min-w-[150px] flex flex-col gap-1.5">
                        <label className="text-[13px] font-bold text-ink">Tipo</label>
                        <Select value={type} onValueChange={(value) => onTypeChange(value || "")}>
                            <SelectTrigger className="w-full rounded-lg !h-11 border-border shadow-none text-ink font-medium [&>svg]:opacity-50 focus:ring-1 focus:ring-brand/30 focus:border-brand">
                                <SelectValue placeholder="todos" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg">
                                <SelectItem value="todos" className="rounded-lg">todos</SelectItem>
                                <SelectItem value="productor" className="rounded-lg">productor</SelectItem>
                                <SelectItem value="acopiador" className="rounded-lg">acopiador</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full sm:flex-1 sm:min-w-[150px] flex flex-col gap-1.5">
                        <label className="text-[13px] font-bold text-ink">Fecha Registro</label>
                        <Select>
                            <SelectTrigger className="w-full rounded-lg !h-11 border-border shadow-none text-ink-muted font-medium [&>svg]:opacity-50 focus:ring-1 focus:ring-brand/30 focus:border-brand">
                                <div className="flex items-center gap-2">
                                    <CalendarDays size={16} className="opacity-70" />
                                    <SelectValue placeholder="--/--/----" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="rounded-lg">
                                <SelectItem value="today" className="rounded-lg">Hoy</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full sm:flex-1 sm:min-w-[150px] flex flex-col gap-1.5">
                        <label className="text-[13px] font-bold text-ink">Estado</label>
                        <Select value={status} onValueChange={(value) => onStatusChange(value || "")}>
                            <SelectTrigger className="w-full rounded-lg !h-11 border-border shadow-none text-ink font-medium [&>svg]:opacity-50 focus:ring-1 focus:ring-brand/30 focus:border-brand">
                                <SelectValue placeholder="estados" />
                            </SelectTrigger>
                            <SelectContent className="rounded-lg">
                                <SelectItem value="estados" className="rounded-lg">estados</SelectItem>
                                <SelectItem value="aprobado" className="rounded-lg">aprobado</SelectItem>
                                <SelectItem value="por aprobar" className="rounded-lg">por aprobar</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

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
