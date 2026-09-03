import { Button } from "@/shared/components/ui/button";
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { InputGroup, InputGroupInput } from "@/shared/components/ui/input-group";
import { Leaf } from "lucide-react";

interface RecoverFormControlProps {
    onBack: () => void;
}

export default function RecoverFormControl({ onBack }: RecoverFormControlProps) {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold text-[#1a2f22] text-center">Recuperar Contraseña</h1>
            <div className="flex items-center w-full justify-center my-4">
                <div className="h-px bg-[#c2d3b4] w-16"></div>
                <Leaf className="text-[#5D9634] mx-2" size={18} />
                <div className="h-px bg-[#c2d3b4] w-16"></div>
            </div>
            
            <p className="text-base text-gray-600 text-center mb-6">
                Ingrese su correo electrónico para recibir las instrucciones de recuperación.
            </p>
            
            <div className="flex flex-col gap-4 w-full">
                <Field>
                    <FieldLabel className="text-base font-semibold text-[#1a2f22]">Correo Electrónico</FieldLabel>
                    <InputGroup className="border-gray-300 focus-within:border-[#5D9634] py-1">
                        <InputGroupInput type="email" className="text-[#1a2f22]" placeholder="Ingrese su correo" />
                    </InputGroup>
                </Field>
                <Button className="!bg-[#5D9634] hover:!bg-[#4a7a28] w-full py-2.5 mt-2 rounded-md font-medium text-white shadow-md">Recuperar</Button>
                <button onClick={onBack} className="text-[#5D9634] text-base mt-4 hover:underline">Volver</button>
            </div>
        </div>
    )
}