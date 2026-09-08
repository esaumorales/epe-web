import AdminLoginForm from "@/modules/auth/components/AdminLoginForm";
import { Globe, Sprout, TrendingUp } from "lucide-react";

interface AdminLoginPageProps {
  onLogin: () => void;
}

export default function AdminLoginPage({ onLogin }: AdminLoginPageProps) {
  return (
    <div
      className="min-h-screen w-full flex relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/image/fondo_login.webp')" }}
    >
      <div className="relative flex flex-col justify-between p-10 md:p-20 w-full lg:w-[45%] z-10 text-white">
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/60 to-transparent pointer-events-none"></div>

        <div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal leading-none tracking-tight">
            De la cosecha<br/>
            a la <span className="text-brand font-medium">exportación</span>
          </h1>
          <div className="h-1 w-20 bg-brand mt-6 mb-6"></div>
          <p className="text-xs md:text-base max-w-sm text-white">
            Conectamos el esfuerzo del campo con oportunidades en el mundo.
          </p>
        </div>

        <div className="flex gap-4 md:gap-6 mt-auto items-center">
          <div className="flex items-center gap-1.5 h-10">
            <div className="h-full w-1 bg-brand"></div>
            <div className="h-[70%] w-1 bg-brand"></div>
            <div className="h-[40%] w-1 bg-brand"></div>
          </div>

          <div className="flex items-center gap-3 border-r border-white/30 pr-4 md:pr-6">
            <Sprout size={28} className="text-brand" />
            <span className="text-xs font-medium leading-tight text-white">Producción<br/>responsable</span>
          </div>
          <div className="flex items-center gap-3 border-r border-white/30 pr-4 md:pr-6">
            <Globe size={28} className="text-brand" />
            <span className="text-xs font-medium leading-tight">Mercados<br/>globales</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp size={28} className="text-brand" />
            <span className="text-xs font-medium leading-tight">Un futuro<br/>más sostenible</span>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] font-bold tracking-[0.2em] text-foreground/80 z-20 flex items-center gap-4 whitespace-nowrap">
        <div className="h-8 w-0.5 bg-brand"></div>
        [AGRO EXPORTA. CONECTA. TRANSFORMA]
        <div className="h-8 w-0.5 bg-brand"></div>
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center lg:justify-end px-6 sm:px-10 lg:pr-12 z-10">
          <AdminLoginForm onLogin={onLogin} />
      </div>
    </div>
  );
}