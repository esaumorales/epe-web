import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput, InputGroupButton } from "@/components/ui/input-group";
import { User, Lock, Eye } from "lucide-react";

interface FormControlProps {
    onSubmit: () => void;
}

export default function FormControl({ onSubmit }: FormControlProps) {
    return (
        <div className="flex flex-col gap-4 w-full">
            <Field>
                <FieldLabel className="text-sm font-semibold text-[#1a2f22]">Usuario</FieldLabel>
                <InputGroup className="border-gray-300 focus-within:border-[#5D9634] py-1">
                    <InputGroupAddon align="inline-start">
                        <InputGroupText className="text-[#5D9634]"><User size={18} /></InputGroupText>
                    </InputGroupAddon>
                    <InputGroupInput placeholder="Ingresa tu usuario" className="text-[#1a2f22]" />
                </InputGroup>
            </Field>
            
            <Field>
                <FieldLabel className="text-sm font-semibold text-[#1a2f22]">Contraseña</FieldLabel>
                <InputGroup className="border-gray-300 focus-within:border-[#5D9634] py-1">
                    <InputGroupAddon align="inline-start">
                        <InputGroupText className="text-[#5D9634]"><Lock size={18} /></InputGroupText>
                    </InputGroupAddon>
                    <InputGroupInput type="password" placeholder="Ingresa tu contraseña" className="text-[#1a2f22]" />
                    <InputGroupAddon align="inline-end">
                        <InputGroupButton size="icon-sm" className="text-[#5D9634] hover:text-[#4a7a28]">
                            <Eye size={18} />
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </Field>

            <Button onClick={onSubmit} className="!bg-[#5D9634] hover:!bg-[#4a7a28] w-full py-2.5 mt-2 rounded-md font-medium text-white shadow-md">
                Ingresar
            </Button>
        </div>
    )
}