import { useEffect, useState } from "react";
import { Users, X, User, AlertCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Button } from "@/shared/components/ui/button";
import {
    getProveedores,
    getCampaniaProveedoresByCampania,
    createCampaniaProveedor,
    deleteCampaniaProveedor,
} from "@/modules/campaigns/api/campania-proveedor.api";
import type { ProveedorDto, TipoProveedorCampania } from "@/modules/campaigns/api/campania-proveedor.dto";
import type { CampaniaProveedor } from "@/modules/campaigns/api/campania-proveedor.mapper";

interface CampaignProvidersModalProps {
    campaniaId: number | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function CampaignProvidersModal({ campaniaId, open, onOpenChange, onSuccess }: CampaignProvidersModalProps) {
    const [proveedores, setProveedores] = useState<ProveedorDto[]>([]);
    const [addedProviders, setAddedProviders] = useState<CampaniaProveedor[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Form state
    const [selectedProveedorId, setSelectedProveedorId] = useState("");
    const [tipoProveedor, setTipoProveedor] = useState<TipoProveedorCampania | "">("");
    const [cantidadProveedor, setCantidadProveedor] = useState("");
    const [mtdCeratitis, setMtdCeratitis] = useState("");
    const [frutaConvencionalEstimado, setFrutaConvencionalEstimado] = useState("");

    useEffect(() => {
        if (!open || campaniaId === null) return;
        Promise.all([getProveedores(), getCampaniaProveedoresByCampania(campaniaId)])
            .then(([proveedoresData, campaniaProveedoresData]) => {
                setProveedores(proveedoresData);
                setAddedProviders(campaniaProveedoresData);
                setError(null);
            })
            .catch(() => setError("No se pudieron cargar los proveedores."));
    }, [open, campaniaId]);

    const resetForm = () => {
        setSelectedProveedorId("");
        setTipoProveedor("");
        setCantidadProveedor("");
        setMtdCeratitis("");
        setFrutaConvencionalEstimado("");
    };

    const handleAddProvider = () => {
        if (campaniaId === null || !selectedProveedorId || !tipoProveedor || !cantidadProveedor || !mtdCeratitis) return;

        setError(null);
        createCampaniaProveedor({
            campaniaId,
            proveedorId: Number(selectedProveedorId),
            cantidadProveedor,
            mtdCeratitis,
            tipoProveedor,
            frutaConvencionalEstimado: tipoProveedor === "productor" && frutaConvencionalEstimado
                ? Number(frutaConvencionalEstimado)
                : undefined,
        })
            .then((created) => {
                setAddedProviders([...addedProviders, created]);
                resetForm();
            })
            .catch(() => setError("No se pudo registrar el proveedor."));
    };

    const handleRemoveProvider = (cxpId: number) => {
        setError(null);
        deleteCampaniaProveedor(cxpId)
            .then(() => setAddedProviders(addedProviders.filter((p) => p.cxpId !== cxpId)))
            .catch(() => setError("No se pudo eliminar el proveedor."));
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[600px] sm:max-w-[700px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0 border border-[#d2e5d5]">
                            <Users size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-[#1a2f22]">
                                Registrar Proveedores
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-gray-500 mt-1">
                                Asigna los proveedores y productores a esta campaña.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex flex-col gap-6">
                    {/* Seleccionar Proveedor */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Seleccionar Proveedor:</label>
                        <Select value={selectedProveedorId} onValueChange={(val) => setSelectedProveedorId(val || "")}>
                            <SelectTrigger className="w-full rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
                                <SelectValue placeholder="Seleccione un proveedor de la lista" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                {proveedores.map((proveedor) => (
                                    <SelectItem key={proveedor.proveedorId} value={String(proveedor.proveedorId)} className="rounded-lg">
                                        {proveedor.nombres} {proveedor.apellido}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Tipo y Cantidad */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Tipo:</label>
                            <Select value={tipoProveedor} onValueChange={(val) => setTipoProveedor((val as TipoProveedorCampania) || "")}>
                                <SelectTrigger className="w-full rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
                                    <SelectValue placeholder="Ej: Productor" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="productor" className="rounded-lg">Productor</SelectItem>
                                    <SelectItem value="acopio" className="rounded-lg">Acopio</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">Cantidad:</label>
                            <Input
                                value={cantidadProveedor}
                                onChange={(e) => setCantidadProveedor(e.target.value)}
                                placeholder="Ej: 1000"
                                className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                            />
                        </div>
                    </div>

                    {/* MTD Ceratitis y Fruta Convencional Estimado */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2.5">
                            <label className="text-[13px] font-semibold text-[#1a2f22]">MTD Ceratitis:</label>
                            <Input
                                value={mtdCeratitis}
                                onChange={(e) => setMtdCeratitis(e.target.value)}
                                placeholder="Ej: 0.5"
                                className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                            />
                        </div>
                        {tipoProveedor === "productor" && (
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[13px] font-semibold text-[#1a2f22]">Fruta Convencional Estimada:</label>
                                <Input
                                    value={frutaConvencionalEstimado}
                                    onChange={(e) => setFrutaConvencionalEstimado(e.target.value)}
                                    placeholder="Ej: 500"
                                    className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]"
                                />
                            </div>
                        )}
                    </div>

                    {/* Error */}
                    <div className={`transition-all duration-300 overflow-hidden flex items-center gap-2 text-red-500 ${error ? "opacity-100 max-h-10" : "opacity-0 max-h-0"}`}>
                        <AlertCircle size={14} />
                        <span className="text-[13px] font-medium">{error}</span>
                    </div>

                    {/* Botón Agregar */}
                    <div className="flex justify-center mt-2">
                        <Button
                            onClick={handleAddProvider}
                            disabled={!selectedProveedorId || !tipoProveedor || !cantidadProveedor || !mtdCeratitis}
                            className="rounded-xl h-11 px-8 bg-[#5D9634] hover:bg-[#5D9634] text-white font-semibold shadow-sm disabled:opacity-50"
                        >
                            Agregar
                        </Button>
                    </div>

                    {/* Productores Agregados */}
                    <div className={`flex flex-col gap-3 transition-all duration-300 ${addedProviders.length > 0 ? "opacity-100 h-auto mt-4" : "opacity-0 h-0 overflow-hidden"}`}>
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Productores Agregados:</label>
                        <div className="flex flex-wrap gap-3">
                            {addedProviders.map((provider) => (
                                <div
                                    key={provider.cxpId}
                                    className="bg-white border-2 border-[#EBF3EC] pl-2 pr-4 py-2 rounded-2xl flex items-center gap-3 w-full sm:w-[calc(50%-6px)]"
                                >
                                    <button
                                        onClick={() => handleRemoveProvider(provider.cxpId)}
                                        className="hover:bg-red-50 hover:text-red-500 rounded-full p-1 transition-colors text-gray-400 shrink-0"
                                    >
                                        <X size={16} strokeWidth={2.5} />
                                    </button>

                                    <div className="w-10 h-10 rounded-full bg-[#f4f7f5] flex items-center justify-center shrink-0 overflow-hidden border border-[#d2e5d5]">
                                        <User size={20} className="text-[#5D9634]" />
                                    </div>

                                    <div className="flex flex-col overflow-hidden">
                                        <span className="text-[13.5px] font-bold text-[#1a2f22] truncate">
                                            {provider.proveedor ? `${provider.proveedor.nombres} ${provider.proveedor.apellido}` : `Proveedor #${provider.proveedorId}`}
                                        </span>
                                        <span className="text-[11.5px] font-medium text-gray-500 truncate">
                                            {provider.tipoProveedor === "productor" ? "Productor" : "Acopio"} - Cant: {provider.cantidadProveedor} - MTD: {provider.mtdCeratitis}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                        onClick={() => {
                            if (onSuccess) {
                                onSuccess();
                            } else {
                                onOpenChange(false);
                            }
                        }}
                        className="rounded-xl h-11 px-8 bg-[#5D9634] hover:bg-[#5D9634] text-white font-semibold gap-2 shadow-sm"
                    >
                        Guardar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
