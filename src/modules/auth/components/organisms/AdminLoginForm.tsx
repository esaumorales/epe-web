import FormControl from "../molecules/FormControl";
import logoEmpresa from "@Assets/image/logo_empresa.webp";
import { useState } from "react";
import RecoverFormControl from "../molecules/RecoverFormControl";
import ConfirmSuccessFormControl from "../molecules/ConfirmSuccessFormControl";
type ViewState = 'login' | 'recover' | 'confirm';

interface AdminLoginFormProps {
    onLogin: () => void;
}

export default function AdminLoginForm({ onLogin }: AdminLoginFormProps) {
    const [view, setView] = useState<ViewState>('login');

    return (
        <div className="flex flex-col gap-4  items-center object-center max-w-full max-h-full">
            <img src={logoEmpresa} alt="logo" className="w-30 h-30" />
            
            {view === 'recover' && <RecoverFormControl onBack={() => setView('login')} />}
            
            {view === 'confirm' && <ConfirmSuccessFormControl onBack={() => setView('login')} onConfirm={onLogin} />}
            
            {view === 'login' && (
                <>
                    <h1>Iniciar Sesión</h1>
                    <FormControl onSubmit={() => setView('confirm')} />
                    <a onClick={() => setView('recover')} className="cursor-pointer hover:underline text-center">¿Olvido su contraseña?</a>
                </>
            )}
        </div>
    );
}