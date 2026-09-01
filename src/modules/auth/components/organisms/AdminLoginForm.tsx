import FormControl from "../molecules/FormControl";
import logoEmpresa from "@Assets/image/logo_empresa.webp";
import { useState } from "react";
import RecoverFormControl from "../molecules/RecoverFormControl";
import ConfirmSuccessFormControl from "../molecules/ConfirmSuccessFormControl";
import { Leaf, ShieldCheck } from "lucide-react";

type ViewState = 'login' | 'recover' | 'confirm';

interface AdminLoginFormProps {
    onLogin: () => void;
}

export default function AdminLoginForm({ onLogin }: AdminLoginFormProps) {
    const [view, setView] = useState<ViewState>('login');

    return (
        <div className="bg-white rounded-2xl shadow-xl w-[400px] p-8 flex flex-col items-center relative z-10">
            <img src={logoEmpresa} alt="logo" className="w-40 mb-4" />
            
            {view === 'recover' && <RecoverFormControl onBack={() => setView('login')} />}
            
            {view === 'confirm' && <ConfirmSuccessFormControl onBack={() => setView('login')} onConfirm={onLogin} />}
            
            {view === 'login' && (
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-[#1a2f22]">Iniciar Sesión</h1>
                    <div className="flex items-center w-full justify-center my-4">
                        <div className="h-px bg-[#c2d3b4] w-16"></div>
                        <Leaf className="text-[#5D9634] mx-2" size={18} />
                        <div className="h-px bg-[#c2d3b4] w-16"></div>
                    </div>
                    <FormControl onSubmit={() => setView('confirm')} />
                    <button onClick={() => setView('recover')} className="text-[#5D9634] text-sm mt-4 hover:underline">
                        ¿Olvidó su contraseña?
                    </button>
                </div>
            )}
        </div>
    );
}