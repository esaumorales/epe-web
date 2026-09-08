import StatCard from "@/modules/campaigns/components/StatCard";
import { CalendarDays, FileCheck, ClipboardList, CalendarClock } from "lucide-react";

export default function CampaignStatsOverview() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <StatCard 
                title="N° Campañas" 
                value={12} 
                icon={<CalendarDays size={28} strokeWidth={2} />}
                trend={{ value: "+33%", direction: "up" }}
                sparklineVariant="green"
            />
            <StatCard 
                title="Campañas Completadas" 
                value={7} 
                icon={<FileCheck size={28} strokeWidth={2} />}
                trend={{ value: "+40%", direction: "up" }}
                sparklineVariant="green"
            />
            <StatCard 
                title="Campañas en Proceso" 
                value={3} 
                icon={<ClipboardList size={28} strokeWidth={2} />}
                trend={{ value: "+0%", direction: "down" }}
                sparklineVariant="grey"
            />
            <StatCard 
                title="Campañas Programadas" 
                value={2} 
                icon={<CalendarClock size={28} strokeWidth={2} />}
                trend={{ value: "+100%", direction: "up" }}
                sparklineVariant="yellow"
            />
        </div>
    );
}
