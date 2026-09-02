import { CalendarDays, Users, Award, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoEmpresaLarge from "@Assets/image/logo_empresa_large.webp";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Campañas",
    url: "/campaigns",
    icon: CalendarDays,
  },
  {
    title: "Proveedores",
    url: "/proveedores",
    icon: Users,
  },
  {
    title: "Certificaciones",
    url: "/certificaciones",
    icon: Award,
  },
]

export default function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r-0 shadow-[4px_0_24px_rgb(0,0,0,0.02)] bg-white">
      <SidebarHeader className="p-6 flex flex-row items-center justify-between">
        <SidebarTrigger className="text-gray-500 hover:text-[#5D9634] shrink-0" />
        <img src={logoEmpresaLarge} alt="Agro Exportaciones" className="h-8 object-contain group-data-[collapsible=icon]:hidden" />
      </SidebarHeader>
      
      <SidebarContent className="px-4 mt-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map((item) => {
                const isActive = location.pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                        isActive={isActive}
                        className={`h-auto py-4 px-4 rounded-xl transition-all ${
                            isActive 
                            ? "bg-[#EBF3EC] text-[#1a2f22] hover:bg-[#EBF3EC] hover:text-[#1a2f22]" 
                            : "text-[#545454] hover:bg-gray-50 hover:text-[#1a2f22]"
                        }`}
                        render={
                            <Link to={item.url} className="flex items-center gap-4 w-full overflow-hidden">
                                <item.icon size={24} className={`shrink-0 ${isActive ? "text-[#5D9634]" : "text-[#8898aa]"}`} />
                                <span className={`text-[15px] group-data-[collapsible=icon]:hidden whitespace-nowrap ${isActive ? "font-bold" : "font-medium"}`}>
                                    {item.title}
                                </span>
                            </Link>
                        }
                    />
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-6 pb-8">
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] border border-[#d2e5d5] shrink-0">
                <User size={20} strokeWidth={2} />
            </div>
            <div className="flex flex-col flex-1 overflow-hidden">
                <span className="text-[#1a2f22] font-bold text-sm truncate">Nombre Usuario</span>
                <span className="text-[#8898aa] text-[12px] font-medium truncate">Gerente General</span>
            </div>
            <Link to="/login" className="text-gray-400 hover:text-red-500 transition-colors ml-auto">
                <LogOut size={18} />
            </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
