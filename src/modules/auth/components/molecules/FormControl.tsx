import Button from "../../../../globals/compontens/atoms/Button";
import Input from "../atoms/Input";

interface FormControlProps {
    onSubmit: () => void;
}

export default function FormControl({ onSubmit }: FormControlProps) {
    return (
        <div className="flex flex-col gap-3">
            <Input name="Usuario" />
            <Input name="Contraseña" />
            <Button onClick={onSubmit}>Ingresar</Button>
        </div>
    )
}