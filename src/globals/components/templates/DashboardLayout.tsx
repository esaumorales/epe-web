import type { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../organisms/Sidebar";
import TopNavBar from "../organisms/TopNavBar";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div
                className="flex-1 flex flex-col h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[#f4f7f5]"
                // style={{ backgroundImage: "url('/image/fondo_modules.webp')" }}
            >
                <TopNavBar />

                <main className="flex-1 overflow-y-auto px-10 py-6">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}
