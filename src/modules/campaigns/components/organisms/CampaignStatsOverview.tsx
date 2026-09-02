import StatCard from "../molecules/StatCard";
import { CalendarDays, FileCheck, ClipboardList, CalendarClock } from "lucide-react";

export default function CampaignStatsOverview() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
                title="N° Campañas" 
                value="-----" 
                icon={<CalendarDays size={20} strokeWidth={2} />} 
            />
            <StatCard 
                title="Campañas Completadas" 
                value="-----" 
                icon={<FileCheck size={20} strokeWidth={2} />} 
            />
            <StatCard 
                title="Campañas en Proceso" 
                value="-----" 
                icon={<ClipboardList size={20} strokeWidth={2} />} 
            />
            <StatCard 
                title="Campañas Programadas" 
                value="-----" 
                icon={<CalendarClock size={20} strokeWidth={2} />} 
            />
        </div>
    );
}
