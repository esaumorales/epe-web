import type { ReactNode } from "react";
import { Card, CardContent } from "@/shared/components/ui/card";

interface StatCardProps {
    title: string;
    value: string | ReactNode;
    icon: ReactNode;
}

export default function StatCard({ title, value, icon }: StatCardProps) {
    return (
        <Card className="rounded-[1.25rem] border border-gray-100 shadow-[0_2px_12px_rgb(0,0,0,0.02)] h-[110px]">
            <CardContent className="p-6 flex items-center gap-5 h-full">
                <div className="w-12 h-12 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] border border-[#d2e5d5] shrink-0">
                    {icon}
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <span className="text-[13px] font-semibold text-[#1a2f22]">{title}</span>
                    <span className="text-xl font-bold text-[#5D9634] tracking-widest">{value}</span>
                </div>
            </CardContent>
        </Card>
    );
}
