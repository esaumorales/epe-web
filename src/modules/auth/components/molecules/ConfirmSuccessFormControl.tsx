import Button from "../../../../globals/compontens/atoms/Button";
import Input from "../atoms/Input";

interface ConfirmSuccessProps {
    onBack?: () => void;
    onConfirm: () => void;
}

export default function ConfirmSuccessFormControl({ onBack, onConfirm }: ConfirmSuccessProps) {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-center">Confirmar Sesión</h1>
            <p>Se le ha mandado un codigo al correo al cual esta enlazado</p>
            <Input name="Codigo de Seguridad"></Input>
            <Button onClick={onConfirm}>Confirmar</Button>
            {onBack && <a onClick={onBack} className="cursor-pointer text-center hover:underline mt-2 ">Reenviar</a>}
        </div>
    )
}