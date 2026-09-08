import type { ReactNode } from "react";

interface PageHeaderProps {
    icon: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
}

export default function PageHeader({ icon, title, description, action }: PageHeaderProps) {
    return (
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <div className="text-brand">{icon}</div>
                <div className="flex flex-col">
                    <h1 className="text-[22px] font-bold text-ink leading-tight">{title}</h1>
                    {description && (
                        <p className="text-[13px] text-ink-muted font-medium">{description}</p>
                    )}
                </div>
            </div>
            {action}
        </div>
    );
}
