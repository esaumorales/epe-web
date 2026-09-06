import { Button } from "@/shared/components/ui/button";
import { Field, FieldLabel } from "@/shared/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from "@/shared/components/ui/input-group";
import { ArrowRight, Mail } from "lucide-react";

interface RecoverFormControlProps {
    onBack: () => void;
}

export default function RecoverFormControl({ onBack }: RecoverFormControlProps) {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-chart-4/10 flex items-center justify-center mb-4">
                <Mail size={22} strokeWidth={2.5} className="text-chart-4" />
            </div>

            <h1 className="text-[24px] font-semibold text-chart-5 tracking-tight text-center">Recuperar contraseña</h1>
            <div className="h-1 w-10 bg-chart-4 rounded-full my-3"></div>
            <p className="text-xs text-muted-foreground text-center max-w-70 mb-6">
                Ingresa tu correo electrónico para recibir las instrucciones de recuperación
            </p>

            <form className="flex flex-col gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
                <Field className="space-y-1.5">
                    <FieldLabel htmlFor="recover-email" className="text-sm font-bold text-chart-5">Correo electrónico</FieldLabel>
                    <InputGroup className="h-11 border-border/70 bg-background transition-colors rounded-sm has-[[data-slot=input-group-control]:focus-visible]:border-chart-4 has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot=input-group-control]:focus-visible]:ring-chart-4/30">
                        <InputGroupAddon align="inline-start" className="pl-4 pr-2">
                            <InputGroupText className="text-chart-4"><Mail size={20} strokeWidth={2.5} /></InputGroupText>
                        </InputGroupAddon>
                        <InputGroupInput
                            id="recover-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Ingresa tu correo"
                            className="h-full text-foreground placeholder:text-muted-foreground/50 text-sm pl-2"
                        />
                    </InputGroup>
                </Field>

                <Button type="submit" className="bg-chart-5 hover:bg-chart-5/90 w-full h-11 rounded-sm font-medium text-white shadow-md shadow-chart-5/20 flex items-center justify-between px-6 transition-all text-[15px]">
                    <span className="flex-1 text-center pr-2">Recuperar</span>
                    <ArrowRight size={20} strokeWidth={2.5} className="shrink-0" />
                </Button>

                <div className="mt-2 w-full flex justify-center">
                    <button type="button" onClick={onBack} className="text-chart-4 text-sm font-bold hover:underline transition-colors">
                        Volver
                    </button>
                </div>
            </form>
        </div>
    )
}
