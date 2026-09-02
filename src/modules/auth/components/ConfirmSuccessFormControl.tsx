import { Button } from "@/shared/components/ui/button";
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { InputGroup, InputGroupInput } from "@/shared/components/ui/input-group";
import { Leaf } from "lucide-react";

interface ConfirmSuccessProps {
    onBack?: () => void;
    onConfirm: () => void;
}

export default function ConfirmSuccessFormControl({ onBack, onConfirm }: ConfirmSuccessProps) {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold text-[#1a2f22]">Confirmar Sesión</h1>
            <div className="flex items-center w-full justify-center my-4">
                <div className="h-px bg-[#c2d3b4] w-16"></div>
                <Leaf className="text-[#5D9634] mx-2" size={18} />
                <div className="h-px bg-[#c2d3b4] w-16"></div>
            </div>
            
            <p className="text-sm text-gray-600 text-center mb-6">
                Se le ha mandado un código al correo al cual está enlazado
            </p>
            
            <div className="flex flex-col gap-4 w-full">
                <Field>
                    <FieldLabel className="text-sm font-semibold text-[#1a2f22]">Código de Seguridad</FieldLabel>
                    <InputGroup className="border-gray-300 focus-within:border-[#5D9634] py-1">
                        <InputGroupInput className="text-[#1a2f22]" placeholder="Ingrese el código" />
                    </InputGroup>
                </Field>
                <Button onClick={onConfirm} className="!bg-[#5D9634] hover:!bg-[#4a7a28] w-full py-2.5 mt-2 rounded-md font-medium text-white shadow-md">Confirmar</Button>
                {onBack && <button onClick={onBack} className="text-[#5D9634] text-sm mt-4 hover:underline">Volver</button>}
            </div>
        </div>
    )
}