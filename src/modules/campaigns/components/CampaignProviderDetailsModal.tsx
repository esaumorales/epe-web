import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/shared/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table";
import { Input } from "@/shared/components/ui/input";
import { MapPin, Sprout, Leaf } from "lucide-react";

interface CampaignProviderDetailsModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    providerName?: string;
    providerType?: string;
}

export default function CampaignProviderDetailsModal({ 
    open, 
    onOpenChange, 
    providerName = "Juan Pérez", 
    providerType = "Productor" 
}: CampaignProviderDetailsModalProps) {
    const [activeTab, setActiveTab] = useState<"examen" | "entrevista">("examen");

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[900px] p-0 rounded-2xl bg-muted/80 border-none shadow-2xl gap-0 max-h-[90vh] flex flex-col overflow-hidden">
                <DialogTitle className="sr-only">Detalles del Proveedor</DialogTitle>
                
                <div className="p-4 sm:p-5 flex justify-between items-center text-ink">
                    <h2 className="text-lg font-medium">{providerType} - {providerName}</h2>
                    <span className="text-lg font-medium">Cantidad: 1000 t</span>
                </div>

                <div className="px-4 sm:px-5 flex flex-col sm:flex-row gap-2 w-full h-auto sm:h-[48px]">
                    <button 
                        onClick={() => setActiveTab("examen")}
                        className={`flex-1 flex items-center justify-center uppercase text-sm font-medium border-2 border-border/80 rounded-md transition-colors h-11 sm:h-full ${activeTab === 'examen' ? 'bg-border text-ink' : 'bg-white text-ink'}`}
                    >
                        examen
                    </button>
                    <button 
                        onClick={() => setActiveTab("entrevista")}
                        className={`flex-1 flex items-center justify-center uppercase text-sm font-medium border-2 border-border/80 rounded-md transition-colors h-11 sm:h-full ${activeTab === 'entrevista' ? 'bg-border text-ink' : 'bg-white text-ink'}`}
                    >
                        entrevista
                    </button>
                </div>

                <div className="p-4 sm:p-5 flex-1 overflow-y-auto">
                    <div className="bg-white rounded-xl p-4 sm:p-6 min-h-[400px] border border-border shadow-sm">
                        {activeTab === "examen" ? (
                            <div className="rounded-xl border border-border overflow-hidden overflow-x-auto">
                                <Table className="min-w-[600px]">
                                    <TableHeader>
                                        <TableRow className="border-b border-border bg-surface-page/50 hover:bg-surface-page/50">
                                            <TableHead className="text-xs font-bold text-ink h-12">Nombre Análisis</TableHead>
                                            <TableHead className="text-xs font-bold text-ink h-12">Resultado</TableHead>
                                            <TableHead className="text-xs font-bold text-ink h-12">Fecha</TableHead>
                                            <TableHead className="text-xs font-bold text-ink h-12">Origen</TableHead>
                                            <TableHead className="text-xs font-bold text-ink h-12">Detalles</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <TableRow key={i} className="border-b border-border">
                                                <TableCell className="text-[13px] font-medium h-14">CADMIO</TableCell>
                                                <TableCell className="text-[13px] font-medium">Negativo</TableCell>
                                                <TableCell className="text-[13px] font-medium">28/05/20</TableCell>
                                                <TableCell className="text-[13px] font-medium">Trujillo</TableCell>
                                                <TableCell className="text-[12px] font-medium text-ink-muted">ACETAMIPRID 0.15 mg/kg, TRAZAS: CLORFENAPIR</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                {/* Columna Izquierda */}
                                <div className="flex flex-col gap-6">
                                    {/* Datos del cultivo */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-2 text-brand">
                                            <Sprout size={18} strokeWidth={2.5} />
                                            <h3 className="text-xs font-bold uppercase tracking-wider">Datos del Cultivo</h3>
                                        </div>
                                        
                                        <div className="flex gap-3 sm:gap-4">
                                            <div className="flex-1 flex flex-col gap-2">
                                                <label className="text-[10px] font-bold text-ink-muted uppercase">Densidad Plantación</label>
                                                <Input readOnly value="0.00" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink text-[13px] font-medium" />
                                            </div>
                                            <div className="flex-1 flex flex-col gap-2">
                                                <label className="text-[10px] font-bold text-ink-muted uppercase">Distanciamiento</label>
                                                <div className="relative">
                                                    <Input readOnly value="0.00" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink text-[13px] font-medium pr-8" />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-ink-muted">m</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] font-bold text-ink-muted uppercase">Frecuencia de Riego (Cantidad / Día)</label>
                                            <Input readOnly value="40" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink text-[13px] font-medium" />
                                        </div>

                                        <div className="flex gap-3 sm:gap-4">
                                            <div className="flex-1 flex flex-col gap-2">
                                                <label className="text-[10px] font-bold text-ink-muted uppercase">HA Total Finca</label>
                                                <Input readOnly value="0" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink text-[13px] font-medium" />
                                            </div>
                                            <div className="flex-1 flex flex-col gap-2">
                                                <label className="text-[10px] font-bold text-ink-muted uppercase">HA del Cultivo</label>
                                                <div className="relative">
                                                    <Input readOnly value="0" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink text-[13px] font-medium pr-8" />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-ink-muted">ha</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fertilización */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-2 text-brand">
                                            <Leaf size={18} strokeWidth={2.5} />
                                            <h3 className="text-xs font-bold uppercase tracking-wider">Fertilización</h3>
                                        </div>

                                        <div className="flex gap-3 sm:gap-4">
                                            <div className="flex-[2] flex flex-col gap-2">
                                                <label className="text-[10px] font-bold text-ink-muted uppercase">Nombre de Aplicación</label>
                                                <Input readOnly value="Fertilizante X" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink text-[13px] font-medium" />
                                            </div>
                                            <div className="flex-1 flex flex-col gap-2">
                                                <label className="text-[10px] font-bold text-ink-muted uppercase">Aplicaciones al año</label>
                                                <div className="relative">
                                                    <Input readOnly value="3" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink text-[13px] font-medium pr-10" />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-ink-muted">/año</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Columna Derecha */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-brand">
                                        <MapPin size={18} strokeWidth={2.5} />
                                        <h3 className="text-xs font-bold uppercase tracking-wider">Ubicación</h3>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="flex-1 flex flex-col gap-2">
                                            <label className="text-[10px] font-bold text-ink-muted uppercase">Departamento</label>
                                            <Input readOnly value="Piura" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink-muted text-[12px] px-2 font-medium" />
                                        </div>
                                        <div className="flex-1 flex flex-col gap-2">
                                            <label className="text-[10px] font-bold text-ink-muted uppercase">Provincia</label>
                                            <Input readOnly value="Sullana" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink-muted text-[12px] px-2 font-medium" />
                                        </div>
                                        <div className="flex-1 flex flex-col gap-2">
                                            <label className="text-[10px] font-bold text-ink-muted uppercase">Distrito</label>
                                            <Input readOnly value="Marcavelica" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink-muted text-[12px] px-2 font-medium" />
                                        </div>
                                    </div>

                                    <div className="w-full h-40 sm:h-48 bg-brand/5 border border-brand/20 rounded-xl flex flex-col items-center justify-center text-brand relative overflow-hidden my-1" style={{
                                        backgroundImage: 'linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }}>
                                        <MapPin size={28} strokeWidth={2.5} className="mb-2" />
                                        <span className="text-xs font-bold">Mapa de ubicación</span>
                                    </div>

                                    <div className="flex gap-3 sm:gap-4 mt-1">
                                        <div className="flex-1 flex flex-col gap-2">
                                            <label className="text-[10px] font-bold text-ink-muted uppercase">Latitud</label>
                                            <Input readOnly value="4" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink text-[13px] font-medium" />
                                        </div>
                                        <div className="flex-1 flex flex-col gap-2">
                                            <label className="text-[10px] font-bold text-ink-muted uppercase">Longitud</label>
                                            <Input readOnly value="5" className="h-10 rounded-lg border-border/60 bg-surface-page/50 shadow-none text-ink text-[13px] font-medium" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
