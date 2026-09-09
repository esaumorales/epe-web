import StatCard from "@/modules/campaigns/components/StatCard";
import { CalendarDays, FileCheck, ClipboardList, CalendarClock } from "lucide-react";

interface CampaignStatsOverviewProps {
    activeStatus: string;
    onStatusChange: (status: string) => void;
}

const stats = [
    {
        status: "todos",
        title: "N° Campañas",
        value: 12,
        icon: <CalendarDays size={28} strokeWidth={2} />,
        trend: { value: "+33%", direction: "up" as const },
        sparklineVariant: "green" as const,
    },
    {
        status: "Terminado",
        title: "Campañas Completadas",
        value: 7,
        icon: <FileCheck size={28} strokeWidth={2} />,
        trend: { value: "+40%", direction: "up" as const },
        sparklineVariant: "green" as const,
    },
    {
        status: "En proceso",
        title: "Campañas en Proceso",
        value: 3,
        icon: <ClipboardList size={28} strokeWidth={2} />,
        trend: { value: "+0%", direction: "down" as const },
        sparklineVariant: "grey" as const,
    },
    {
        status: "Planificado",
        title: "Campañas Programadas",
        value: 2,
        icon: <CalendarClock size={28} strokeWidth={2} />,
        trend: { value: "+100%", direction: "up" as const },
        sparklineVariant: "yellow" as const,
    },
];

export default function CampaignStatsOverview({ activeStatus, onStatusChange }: CampaignStatsOverviewProps) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-8">
            {stats.map((stat) => (
                <StatCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    trend={stat.trend}
                    sparklineVariant={stat.sparklineVariant}
                    active={activeStatus === stat.status}
                    onClick={() => onStatusChange(activeStatus === stat.status ? "todos" : stat.status)}
                />
            ))}
        </div>
    );
}
