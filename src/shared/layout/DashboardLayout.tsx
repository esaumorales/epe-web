import type { CSSProperties, ReactNode } from "react";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import AppSidebar from "@/shared/layout/Sidebar";
import TopNavBar from "@/shared/layout/TopNavBar";

interface DashboardLayoutProps {
    children: ReactNode;
    hideSidebar?: boolean;
    onLogout?: () => void;
}

export default function DashboardLayout({ children, hideSidebar = true, onLogout }: DashboardLayoutProps) {
    return (
        <SidebarProvider style={{ "--sidebar-width": "14rem" } as CSSProperties}>
            <div className="flex flex-col h-screen overflow-hidden w-full">
                <TopNavBar onLogout={onLogout} />

                <div className="flex flex-1 overflow-hidden w-full relative z-10">
                    {!hideSidebar && <AppSidebar />}

                    {/* `relative` para que los fondos absolutos de cada página se anclen acá y no en un ancestro lejano */}
                    <main className="relative flex-1 overflow-y-auto bg-surface-page">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
