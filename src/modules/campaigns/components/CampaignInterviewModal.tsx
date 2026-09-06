import { MapPin, Sprout, Leaf, Users } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

interface CampaignInterviewModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave?: () => void;
}

export default function CampaignInterviewModal({ open, onOpenChange, onSave }: CampaignInterviewModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[1100px] sm:max-w-[1100px] p-0 rounded-[1.5rem] bg-white border-none shadow-2xl overflow-hidden gap-0">
                {/* Header Custom */}
                <div className="flex items-center gap-4 px-8 py-6 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF3EC] flex items-center justify-center text-[#5D9634]">
                        <Users size={24} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <DialogTitle className="text-[20px] font-bold text-[#1a2f22]">
                            Informe de Entrevista
                        </DialogTitle>
                        <span className="text-[14px] text-gray-500 font-medium">Fundo Los Olivos</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 grid grid-cols-2 gap-x-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-8 border-r border-gray-100 pr-12">
                        {/* Datos del cultivo */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2 text-[#5D9634] pb-2 border-b border-gray-100">
                                <Sprout size={18} strokeWidth={2.5} />
                                <h3 className="text-[13px] font-bold uppercase tracking-wider">Datos del cultivo</h3>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[12px] font-bold text-gray-400 uppercase">Densidad plantación</label>
                                    <Input
                                        placeholder="0.00"
                                        className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label className="text-[12px] font-bold text-gray-400 uppercase">Distanciamiento</label>
                                    <div className="relative">
                                        <Input
                                            placeholder="0.00"
                                            className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634] pr-8"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] font-bold text-[#1a2f22]">m</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[12px] font-bold text-gray-400 uppercase">Frecuencia de riego (Cantidad / día)</label>
                                <Input
                                    placeholder="40"
                                    className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[12px] font-bold text-gray-400 uppercase">Ha total finca</label>
                                    <Input
                                        placeholder="0"
                                        className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label className="text-[12px] font-bold text-gray-400 uppercase">Ha del cultivo</label>
                                    <div className="relative">
                                        <Input
                                            placeholder="0"
                                            className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634] pr-8"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] font-bold text-[#1a2f22]">ha</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fertilización */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-2 text-[#5D9634] pb-2 border-b border-gray-100">
                                <Leaf size={18} strokeWidth={2.5} />
                                <h3 className="text-[13px] font-bold uppercase tracking-wider">Fertilización</h3>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[12px] font-bold text-gray-400 uppercase">Nombre de aplicación</label>
                                    <Input
                                        placeholder="Fertilizante X"
                                        className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label className="text-[12px] font-bold text-gray-400 uppercase">Aplicaciones al año</label>
                                    <div className="relative">
                                        <Input
                                            placeholder="3"
                                            className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634] pr-10"
                                        />
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[14px] font-bold text-[#1a2f22]">/año</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2 text-[#5D9634] pb-2 border-b border-gray-100">
                            <MapPin size={18} strokeWidth={2.5} />
                            <h3 className="text-[13px] font-bold uppercase tracking-wider">Ubicación</h3>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Departamento</label>
                                <Input placeholder="Piura" className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634] text-[13px]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Provincia</label>
                                <Input placeholder="Sullana" className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634] text-[13px]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase">Distrito</label>
                                <Input placeholder="Marcavelica" className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634] text-[13px]" />
                            </div>
                        </div>

                        {/* Fake Map */}
                        <div className="h-[200px] w-full rounded-2xl border-[1.5px] border-[#EBF3EC] bg-[#F8FDF9] overflow-hidden relative mt-2 flex flex-col items-center justify-center gap-2">
                            {/* Grid overlay for map look */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#5D9634 1px, transparent 1px), linear-gradient(90deg, #5D9634 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            <div className="relative z-10 w-10 h-10 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634]">
                                <MapPin size={24} strokeWidth={2.5} />
                            </div>
                            <span className="relative z-10 text-[13px] font-bold text-[#5D9634]">Mapa de ubicación</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-[12px] font-bold text-gray-400 uppercase">Latitud</label>
                                <Input placeholder="4" className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[12px] font-bold text-gray-400 uppercase">Longitud</label>
                                <Input placeholder="5" className="rounded-xl h-11 border-[1.5px] border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botones Footer */}
                <div className="flex justify-end gap-3 px-8 py-5 border-t border-gray-100 bg-gray-50/50">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-xl h-11 px-6 border-[1.5px] border-gray-300 text-gray-700 font-bold shadow-none hover:bg-gray-100"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={() => onSave ? onSave() : onOpenChange(false)}
                        className="rounded-xl h-11 px-8 bg-[#00D15A] hover:bg-[#00b34d] text-white font-bold shadow-sm"
                    >
                        Guardar entrevista
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
