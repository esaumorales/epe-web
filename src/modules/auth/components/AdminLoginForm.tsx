import FormControl from "@/modules/auth/components/FormControl";
import { useLayoutEffect, useRef, useState } from "react";
import RecoverFormControl from "@/modules/auth/components/RecoverFormControl";
import ConfirmSuccessFormControl from "@/modules/auth/components/ConfirmSuccessFormControl";
import { Leaf } from "lucide-react";
import LogoEmpresaOnly from "@/assets/image/logo_empresa_only.webp";
type ViewState = 'login' | 'recover' | 'confirm';

interface AdminLoginFormProps {
    onLogin: () => void;
}

export default function AdminLoginForm({ onLogin }: AdminLoginFormProps) {
    const [view, setView] = useState<ViewState>('login');
    const contentRef = useRef<HTMLDivElement>(null);
    const [cardHeight, setCardHeight] = useState<number>();

    useLayoutEffect(() => {
        if (contentRef.current) {
            setCardHeight(contentRef.current.scrollHeight);
        }
    }, [view]);

    return (
        <div
            className="w-full max-w-md rounded-2xl overflow-hidden relative z-10 bg-white shadow-2xl border border-border/40 transition-[height] duration-300 ease-in-out"
            style={{ height: cardHeight }}
        >
            <div ref={contentRef} className="px-6 py-8 sm:px-10 lg:px-12 flex flex-col">
                {view === 'recover' && <RecoverFormControl onBack={() => setView('login')} />}

                {view === 'confirm' && <ConfirmSuccessFormControl onBack={() => setView('login')} onConfirm={onLogin} />}

                {view === 'login' && (
                    <div className="w-full flex flex-col">
                        <div className="flex items-center gap-4 w-full mb-8">
                            <img src={LogoEmpresaOnly} alt="Agro Exportaciones Logo" className="h-14 w-auto object-contain shrink-0" />
                            <div className="h-14 w-0.5 bg-brand shrink-0 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <span className="font-bold text-[18px] md:text-[20px] leading-none text-brand-dark tracking-tight">AGRO EXPORTACIONES</span>
                                <span className="text-[8px] md:text-[9px] tracking-[0.2em] font-bold text-brand mt-1.5">CULTIVANDO CONFIANZA</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h1 className="text-[24px] font-semibold text-chart-5 tracking-tight">Iniciar sesión</h1>
                            <div className="h-1 w-10 bg-chart-4 rounded-full mb-3"></div>
                            <p className="text-xs text-muted-foreground">
                                Accede para continuar con tus operaciones
                            </p>
                        </div>

                        <FormControl onSubmit={() => setView('confirm')} />

                        <div className="mt-6 w-full flex justify-center">
                            <button onClick={() => setView('recover')} className="text-chart-4 text-sm font-bold hover:underline transition-colors">
                                ¿Olvidó su contraseña?
                            </button>
                        </div>

                        <div className="w-full mt-8 flex items-center gap-3">
                            <Leaf size={12} className="text-chart-3 shrink-0" />
                            <span className="text-[9px] font-bold tracking-[0.15em] text-foreground/80 whitespace-nowrap opacity-80">
                                GENTE QUE CULTIVA OPORTUNIDADES
                            </span>
                            <div className="flex-1 h-px bg-border"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}