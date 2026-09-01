
import Button from "@/globals/compontens/atoms/Button";
import logoEmpresaLarge from "@Assets/image/logo_empresa_large.webp";
import personIcon from "@Assets/image/person_icon.webp"
export default function UserProfilePanel() {
    return (
        <div className=" flex flex-col justify-between items-center h-screen p-8">
            <img src={logoEmpresaLarge} alt="logo" />
            <div className="flex gap-4 items-center flex-col">
                <img src={personIcon} alt="person" className="w-30 h-30" />
                <p>Nombre Usuario</p>
                <p>Rol Usuario</p>
            </div>
            <Button>Cerrar Sesión</Button>
        </div>
    )
}