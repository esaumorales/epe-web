import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { DatePicker } from "@/shared/components/ui/date-picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";
import { getFrutas, getFrutaDerivadas, createCampana } from "@/modules/campaigns/api/campaign.api";
import type { FrutaDto, FrutaDerivadaDto } from "@/modules/campaigns/api/campaign.dto";
import { parseFecha } from "@/modules/campaigns/api/fecha.util";

interface CampaignCreateModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function CampaignCreateModal({ open, onOpenChange, onSuccess }: CampaignCreateModalProps) {
    const [frutas, setFrutas] = useState<FrutaDto[]>([]);
    const [nombre, setNombre] = useState("");
    const [frutaId, setFrutaId] = useState<number | null>(null);
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [requerimientoComercial, setRequerimientoComercial] = useState("");
    const [derivadas, setDerivadas] = useState<FrutaDerivadaDto[]>([]);
    const [derivadasLoading, setDerivadasLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!open) return;
        setNombre("");
        setFrutaId(null);
        setFechaInicio("");
        setFechaFin("");
        setRequerimientoComercial("");
        setDerivadas([]);
        setError(null);
        getFrutas()
            .then(setFrutas)
            .catch(() => setFrutas([]));
    }, [open]);

    useEffect(() => {
        if (!open || frutaId === null) {
            setDerivadas([]);
            return;
        }
        setDerivadasLoading(true);
        getFrutaDerivadas(frutaId)
            .then(setDerivadas)
            .catch(() => setDerivadas([]))
            .finally(() => setDerivadasLoading(false));
    }, [open, frutaId]);

    const isValid =
        nombre.trim() !== "" &&
        frutaId !== null &&
        fechaInicio !== "" &&
        fechaFin !== "" &&
        requerimientoComercial.trim() !== "";

    const handleSubmit = async () => {
        if (!isValid || frutaId === null) return;
        setSaving(true);
        setError(null);
        try {
            await createCampana({
                nombre,
                frutaId,
                fechaInicio: parseFecha(fechaInicio),
                fechaFin: parseFecha(fechaFin),
                estado: "planificacion",
                requerimientoComercial,
            });
            onSuccess?.();
        } catch {
            setError("No se pudo crear la campaña.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[600px] sm:max-w-[700px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0 border border-[#d2e5d5]">
                            <Leaf size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-[#1a2f22]">
                                Nueva Campaña
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-gray-500 mt-1">
                                Completa la información para registrar una nueva campaña.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    {/* Nombre */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Nombre de Campaña:</label>
                        <Input
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ej: Campaña Mango 2026"
                            className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                        />
                    </div>

                    {/* Fechas */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Inicio:</label>
                            <DatePicker
                                value={fechaInicio}
                                onChange={setFechaInicio}
                                className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus-visible:ring-[#5D9634]"
                            />
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Fin:</label>
                            <DatePicker
                                value={fechaFin}
                                onChange={setFechaFin}
                                className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus-visible:ring-[#5D9634]"
                            />
                        </div>
                    </div>

                    {/* Fruta */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Fruta:</label>
                        <Select
                            value={frutaId !== null ? String(frutaId) : ""}
                            onValueChange={(val) => setFrutaId(val ? Number(val) : null)}
                        >
                            <SelectTrigger className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
                                <SelectValue placeholder="Selecciona una fruta">
                                    {frutas.find((f) => f.frutaId === frutaId)?.name}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                {frutas.map((fruta) => (
                                    <SelectItem key={fruta.frutaId} value={String(fruta.frutaId)} className="rounded-lg">
                                        {fruta.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Derivadas de la fruta seleccionada (informativo, solo lectura) */}
                    <div className={`flex flex-col gap-2.5 transition-all duration-300 ${frutaId !== null ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"}`}>
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Frutas derivadas:</label>
                        <div className="flex flex-wrap gap-2">
                            {derivadasLoading ? (
                                <span className="text-[13px] text-gray-500">Cargando derivadas...</span>
                            ) : derivadas.length === 0 ? (
                                <span className="text-[13px] text-gray-500">Esta fruta no tiene derivadas registradas.</span>
                            ) : (
                                derivadas.map((derivada) => (
                                    <div
                                        key={derivada.frutaDerivadaId}
                                        className="bg-[#EBF3EC] text-[#5D9634] px-3 py-1.5 rounded-full text-[13px] font-semibold"
                                    >
                                        {derivada.name}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Requerimientos */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Requerimientos Comerciales:</label>
                        <div className="relative">
                            <Input
                                value={requerimientoComercial}
                                onChange={(e) => setRequerimientoComercial(e.target.value)}
                                placeholder="Ej: 3000"
                                className="rounded-xl h-11 border-gray-200 pr-12 shadow-none focus-visible:ring-[#5D9634]"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#EBF3EC] text-[#5D9634] text-[11px] font-bold px-2 py-1 rounded-md">
                                KG
                            </div>
                        </div>
                    </div>

                    {error && <p className="text-[13px] text-red-500 font-medium">{error}</p>}
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        className="rounded-xl h-11 px-8 border-gray-200 text-[#5D9634] font-bold hover:bg-gray-50 hover:text-[#5D9634]"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={!isValid || saving}
                        className="rounded-xl h-11 px-6 bg-[#6b9d3b] hover:bg-[#58852e] text-white font-semibold gap-2 shadow-sm disabled:opacity-50"
                    >
                        <Leaf size={18} strokeWidth={2.5} />
                        Crear Campaña
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
