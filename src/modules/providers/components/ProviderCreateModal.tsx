import { useState } from "react";
import { Upload, X, Users } from "lucide-react";
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";

interface ProviderCreateModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
}

export default function ProviderCreateModal({ open, onOpenChange, onSuccess }: ProviderCreateModalProps) {
    const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

    const handleAddFruit = (value: string | null) => {
        if (value && !selectedFruits.includes(value)) {
            setSelectedFruits([...selectedFruits, value]);
        }
    };

    const handleRemoveFruit = (fruit: string) => {
        setSelectedFruits(selectedFruits.filter((f) => f !== fruit));
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[800px] sm:max-w-[900px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0">
                <DialogHeader className="mb-6">
                    <div className="flex items-start gap-5">
                        <div className="w-[52px] h-[52px] rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0 border border-[#d2e5d5]">
                            <Users size={24} strokeWidth={2} />
                        </div>
                        <div className="flex-1 pt-1">
                            <DialogTitle className="text-xl font-bold text-[#1a2f22]">
                                Registrar Proveedor
                            </DialogTitle>
                            <DialogDescription className="text-[13.5px] text-gray-500 mt-1">
                                Completa la información para registrar un nuevo proveedor.
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-4 gap-6">
                    {/* Row 1 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Nombres:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Apellidos:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Tipo de Documento:</label>
                        <Select>
                            <SelectTrigger className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="dni" className="rounded-lg">DNI</SelectItem>
                                <SelectItem value="ce" className="rounded-lg">CE</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">DNI:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Zona:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Revision SENASA:</label>
                        <Input type="date" className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5 col-span-2">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Frutas derivadas:</label>
                        <Select onValueChange={handleAddFruit} value="">
                            <SelectTrigger className="rounded-xl h-11 border-gray-200 text-gray-500 shadow-none focus:ring-[#5D9634]">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="Mango Kent" className="rounded-lg">Mango Kent</SelectItem>
                                <SelectItem value="Mango Edward" className="rounded-lg">Mango Edward</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Codigo Proveedor:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Teléfono:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Email:</label>
                        <Input className="rounded-xl h-11 border-gray-200 shadow-none focus-visible:ring-[#5D9634]" />
                    </div>
                    <div className="flex flex-col gap-2.5 row-span-2">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Frutas seleccionadas:</label>
                        <div className="flex flex-wrap gap-2">
                            {selectedFruits.map((fruit) => (
                                <div
                                    key={fruit}
                                    className="bg-[#EBF3EC] text-[#5D9634] pr-3 pl-2 py-1.5 rounded-full text-[13px] font-semibold flex items-center gap-2"
                                >
                                    <button
                                        onClick={() => handleRemoveFruit(fruit)}
                                        className="hover:bg-[#d2e5d5] rounded-full p-0.5 transition-colors text-[#5D9634]"
                                    >
                                        <X size={14} strokeWidth={3} />
                                    </button>
                                    {fruit}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="flex flex-col justify-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger 
                                render={
                                    <Button variant="secondary" className="bg-gray-500 hover:bg-gray-600 text-white rounded-xl h-11 flex gap-2 shadow-none w-full">
                                        <Upload size={16} />
                                        Adjuntar archivo DNI
                                    </Button>
                                }
                            />
                            <DropdownMenuContent align="center" className="w-[180px] rounded-xl p-1">
                                <DropdownMenuItem className="rounded-lg cursor-pointer text-[13.5px] font-medium justify-center py-2.5">
                                    Link
                                </DropdownMenuItem>
                                <DropdownMenuItem className="rounded-lg cursor-pointer text-[13.5px] font-medium justify-center py-2.5 text-gray-500 border-t border-gray-100 mt-1">
                                    Archivo
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex flex-col justify-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger 
                                render={
                                    <Button variant="secondary" className="bg-gray-500 hover:bg-gray-600 text-white rounded-xl h-11 flex gap-2 shadow-none w-full">
                                        <Upload size={16} />
                                        Certificado Nacional
                                    </Button>
                                }
                            />
                            <DropdownMenuContent align="center" className="w-[180px] rounded-xl p-1">
                                <DropdownMenuItem className="rounded-lg cursor-pointer text-[13.5px] font-medium justify-center py-2.5">
                                    Link
                                </DropdownMenuItem>
                                <DropdownMenuItem className="rounded-lg cursor-pointer text-[13.5px] font-medium justify-center py-2.5 text-gray-500 border-t border-gray-100 mt-1">
                                    Archivo
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
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
                        onClick={onSuccess}
                        className="rounded-xl h-11 px-8 bg-[#6b9d3b] hover:bg-[#58852e] text-white font-semibold gap-2 shadow-sm"
                    >
                        Crear Proveedor
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
