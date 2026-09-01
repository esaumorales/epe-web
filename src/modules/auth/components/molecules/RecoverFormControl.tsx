import Button from "../../../../globals/compontens/atoms/Button";

interface RecoverFormControlProps {
    onBack: () => void;
}

export default function RecoverFormControl({ onBack }: RecoverFormControlProps) {

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-center">Recuperar Contraseña</h1>
            <p>Se ha enviado un codigo de seguridad a su correo electronico</p>
            <Button onClick={onBack}><span></span>Volver</Button>
            <a href="Reintentar"></a>
        </div>
    )
}   