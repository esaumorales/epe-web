import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import LogoEmpresaOnly from "@/assets/image/logo_empresa_only.webp";
import { SidebarTrigger } from "@/shared/components/ui/sidebar";

interface TopNavBarProps {
    variant?: 'default' | 'no-sidebar';
    onLogout?: () => void;
}

export default function TopNavBar({ variant = 'default', onLogout }: TopNavBarProps) {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between px-8 bg-white w-full z-20">
            <div className="flex items-center gap-6">
                {variant === 'default' && (
                    <div className="flex items-center gap-6 pr-6 border-r border-border h-10">
                        <SidebarTrigger className="text-ink-muted hover:text-brand transition-colors" />
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <img src={LogoEmpresaOnly} alt="Agro Exportaciones Logo" className="h-10 w-auto object-contain shrink-0" />
                    <div className="h-9 w-px bg-ink/20 shrink-0"></div>
                    <div className="flex flex-col justify-center">
                        <span className="font-bold text-[16px] md:text-[18px] leading-none text-ink tracking-tight">AGRO EXPORTACIONES</span>
                        <span className="text-[7px] md:text-[8px] tracking-[0.2em] font-bold text-brand mt-1.5">CULTIVANDO CONFIANZA</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6 ml-auto">
                <button className="text-ink-muted hover:text-brand transition-colors relative" aria-label="Notificaciones">
                    <Bell size={22} strokeWidth={2} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <div className="h-9 w-px bg-border shrink-0"></div>

                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-3 p-1.5 pl-2 rounded-xl transition-colors hover:bg-black/5 outline-none focus-visible:ring-2 focus-visible:ring-brand/40">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                            <User size={20} strokeWidth={2} />
                        </span>
                        <span className="flex flex-col items-start">
                            <span className="text-sm font-bold text-ink leading-tight">Juan Pérez</span>
                            <span className="text-xs text-ink-muted font-medium">Usuario Normal</span>
                        </span>
                        <ChevronDown size={16} className="text-ink-muted ml-1" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" sideOffset={8} className="w-56 p-1.5">
                        <DropdownMenuItem className="gap-3 px-3 py-2.5 text-[13px] font-medium text-ink-body">
                            <Settings size={16} />
                            Configuración
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            variant="destructive"
                            className="gap-3 px-3 py-2.5 text-[13px] font-medium"
                            onClick={onLogout}
                        >
                            <LogOut size={16} />
                            Cerrar sesión
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
