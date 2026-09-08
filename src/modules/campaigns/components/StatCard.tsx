import type { ReactNode } from "react";
import { Card, CardContent } from "@/shared/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number | ReactNode;
    icon: ReactNode;
    trend?: {
        value: string;
        direction: "up" | "down" | "neutral";
    };
    sparklineVariant?: "green" | "grey" | "yellow";
}

/** Mini sparkline SVG decorativa para el fondo de la card */
function Sparkline({ variant = "green" }: { variant?: "green" | "grey" | "yellow" }) {
    const config = {
        green: { 
            stroke: "var(--brand)", 
            fill: "var(--brand)",
            path: "M 0 50 C 20 50, 30 35, 50 40 C 70 45, 90 15, 120 15"
        },
        grey: { 
            stroke: "var(--status-neutral)",
            fill: "var(--status-neutral)",
            path: "M 0 50 C 40 50, 60 45, 80 45 C 100 45, 100 20, 120 20"
        },
        yellow: { 
            stroke: "var(--status-highlight)",
            fill: "var(--status-highlight)",
            path: "M 0 45 C 30 45, 50 40, 70 40 C 90 40, 100 15, 120 15"
        }
    };
    
    const c = config[variant];
    const fillPath = `${c.path} L 120 60 L 0 60 Z`;

    return (
        <svg
            className="absolute bottom-0 right-0 w-[60%] h-[60%] z-0 rounded-br-2xl pointer-events-none"
            viewBox="0 0 120 60"
            preserveAspectRatio="none"
            fill="none"
        >
            <defs>
                <linearGradient id={`grad-${variant}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={c.fill} stopOpacity="0.35" />
                    <stop offset="100%" stopColor={c.fill} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={fillPath} fill={`url(#grad-${variant})`} />
            <path d={c.path} stroke={c.stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    );
}

export default function StatCard({ title, value, icon, trend, sparklineVariant = "green" }: StatCardProps) {
    const trendColor =
        trend?.direction === "down"
            ? "text-status-warning"
            : trend?.direction === "up"
            ? "text-brand"
            : "text-ink-muted";

    return (
        <Card className="relative rounded-2xl border border-border shadow-[0_2px_12px_rgb(0,0,0,0.03)] h-[160px] bg-white transition-all hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] border-l-[3px] border-l-transparent hover:-translate-y-0.5 hover:border-l-brand">
            <CardContent className="p-5 pt-1 flex flex-col h-full relative z-10 justify-between">
                {/* Top Section: Icon on left, Title & Value on right */}
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-brand-surface flex items-center justify-center text-brand shrink-0 border border-brand-border/50">
                        {icon}
                    </div>
                    {/* Title and Value */}
                    <div className="flex flex-col pt-1">
                        <span className="text-[14px] font-semibold text-ink leading-snug">
                            {title}
                        </span>
                        <span className="text-[40px] font-bold text-ink leading-[1.1] tracking-tight mt-1">
                            {value}
                        </span>
                    </div>
                </div>

                {/* Bottom Section: Trend and VS text */}
                <div className="flex flex-col gap-0.5 mt-auto">
                    {trend && (
                        <>
                            <div className={`flex items-center gap-1 ${trendColor}`}>
                                {trend.direction === "up" ? (
                                    <ArrowUpRight size={18} strokeWidth={2.5} />
                                ) : (
                                    <ArrowDownRight size={18} strokeWidth={2.5} />
                                )}
                                <span className="text-[15px] font-bold">{trend.value}</span>
                            </div>
                            <span className="text-[12px] text-ink-muted font-medium">
                                vs. campaña anterior
                            </span>
                        </>
                    )}
                </div>
            </CardContent>

            {/* Sparkline Decorativa en el fondo derecho */}
            {trend && <Sparkline variant={sparklineVariant} />}
        </Card>
    );
}
