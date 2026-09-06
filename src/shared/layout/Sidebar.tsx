import { Home, Users, Award, User, LogOut, Contact } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
} from "@/shared/components/ui/sidebar";

const items = [
  {
    title: "Campañas",
    url: "/campaigns",
    icon: Home,
  },
  {
    title: "Proveedores",
    url: "/proveedores",
    icon: Users,
  },
  {
    title: "Clientes",
    url: "/clientes",
    icon: Contact,
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
    <Sidebar collapsible="icon" className="!top-20 !h-[calc(100vh-5rem)] border-r border-gray-100 shadow-[4px_0_24px_rgb(0,0,0,0.02)] bg-white mt-0">
      <SidebarContent className="px-4 group-data-[collapsible=icon]:px-2 mt-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map((item) => {
                const isActive = location.pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                        isActive={isActive}
                        className={`h-auto py-4 px-4 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center rounded-xl transition-all ${
                            isActive 
                            ? "bg-brand-surface text-ink hover:bg-brand-surface hover:text-ink" 
                            : "text-ink-body hover:bg-brand-surface/50 hover:text-ink"
                        }`}
                        render={
                            <Link to={item.url} className="flex items-center gap-4 group-data-[collapsible=icon]:gap-0 w-full overflow-hidden justify-start group-data-[collapsible=icon]:justify-center">
                                <item.icon size={24} className={`shrink-0 ${isActive ? "text-brand" : "text-ink-muted"}`} />
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
      
      <SidebarFooter className="p-6 pb-8 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:pb-4">
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:border-none group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
            <div className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-brand border border-brand-border shrink-0">
                <User size={20} strokeWidth={2} />
            </div>
            <div className="flex flex-col flex-1 overflow-hidden group-data-[collapsible=icon]:hidden">
                <span className="text-ink font-bold text-sm truncate">Nombre Usuario</span>
                <span className="text-ink-muted text-[12px] font-medium truncate">Gerente General</span>
            </div>
            <Link to="/login" className="text-gray-400 hover:text-red-500 transition-colors ml-auto group-data-[collapsible=icon]:hidden">
                <LogOut size={18} />
            </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
