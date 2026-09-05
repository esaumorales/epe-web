import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput, InputGroupButton } from "@/shared/components/ui/input-group";
import { User, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

interface FormControlProps {
    onSubmit: () => void;
}

const inputGroupClassName = "h-11 border-border/70 bg-background transition-colors rounded-sm has-[[data-slot=input-group-control]:focus-visible]:border-chart-4 has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot=input-group-control]:focus-visible]:ring-chart-4/30";

export default function FormControl({ onSubmit }: FormControlProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form
            className="flex flex-col w-full space-y-4"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <Field className="space-y-1.5">
                <FieldLabel htmlFor="username" className="text-sm font-bold text-chart-5">Usuario</FieldLabel>
                <InputGroup className={inputGroupClassName}>
                    <InputGroupAddon align="inline-start" className="pl-4 pr-2">
                        <InputGroupText className="text-chart-4"><User size={20} strokeWidth={2.5} /></InputGroupText>
                    </InputGroupAddon>
                    <InputGroupInput
                        id="username"
                        name="username"
                        autoComplete="username"
                        placeholder="Ingresa tu usuario"
                        className="h-full text-foreground placeholder:text-muted-foreground/50 text-sm pl-2"
                    />
                </InputGroup>
            </Field>

            <Field className="space-y-1.5">
                <FieldLabel htmlFor="password" className="text-sm font-bold text-chart-5">Contraseña</FieldLabel>
                <InputGroup className={inputGroupClassName}>
                    <InputGroupAddon align="inline-start" className="pl-4 pr-2">
                        <InputGroupText className="text-chart-4"><Lock size={20} strokeWidth={2.5} /></InputGroupText>
                    </InputGroupAddon>
                    <InputGroupInput
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Ingresa tu contraseña"
                        className="h-full text-foreground placeholder:text-muted-foreground/50 text-sm pl-2"
                    />
                    <InputGroupAddon align="inline-end" className="pr-4">
                        <InputGroupButton
                            type="button"
                            size="icon-sm"
                            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            aria-pressed={showPassword}
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="text-chart-5 hover:text-chart-4 transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} strokeWidth={2.5} /> : <Eye size={20} strokeWidth={2.5} />}
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </Field>

            <div className="pt-2">
                <Button type="submit" className="bg-chart-5 hover:bg-chart-5/90 w-full h-11 rounded-sm font-medium text-white shadow-md shadow-chart-5/20 flex items-center justify-between px-6 transition-all text-[15px]">
                    <span className="flex-1 text-center pr-2">Ingresar</span>
                    <ArrowRight size={20} strokeWidth={2.5} className="shrink-0" />
                </Button>
            </div>
        </form>
    )
}
