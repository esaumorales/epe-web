import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/shared/components/ui/dialog";

interface CampaignManagementClientsModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CampaignManagementClientsModal({ open, onOpenChange }: CampaignManagementClientsModalProps) {
    const clients = [
        {
            initial: "R",
            name: "Ripley",
            type: "Ecommerce",
            contact: "Sofía Vargas",
            email: "svargas@ripley.com.pe",
            orders: "12 pedidos",
            status: "Activo"
        },
        {
            initial: "S",
            name: "Saga Falabella",
            type: "Retail",
            contact: "Marco Ríos",
            email: "mrios@falabella.com.pe",
            orders: "8 pedidos",
            status: "Activo"
        },
        {
            initial: "P",
            name: "Plaza Vea",
            type: "Supermercado",
            contact: "Lucía Torres",
            email: "ltorres@plazavea.com.pe",
            orders: "21 pedidos",
            status: "Activo"
        },
        {
            initial: "M",
            name: "Metro",
            type: "Supermercado",
            contact: "Pedro Cárdenas",
            email: "pcardenas@metro.com.pe",
            orders: "5 pedidos",
            status: "Inactivo"
        }
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[600px] md:max-w-3xl p-5 sm:p-8 rounded-2xl bg-white border-none shadow-2xl gap-6 max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mb-2">
                    <DialogTitle className="text-[22px] font-bold text-ink">
                        Gestión de Clientes
                    </DialogTitle>
                    <p className="text-[13px] font-medium text-ink-muted">4 clientes registrados</p>
                </DialogHeader>

                {/* Lista de Clientes */}
                <div className="flex flex-col gap-6 mt-2 max-h-[400px] overflow-y-auto pr-2">
                    {clients.map((client, index) => (
                        <div key={index} className="flex items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0">
                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center shrink-0">
                                <span className="text-[15px] font-bold text-brand">{client.initial}</span>
                            </div>

                            {/* Info Principal */}
                            <div className="flex-1 flex flex-col gap-1.5">
                                <div className="flex justify-between items-start gap-2">
                                    <div className="min-w-0">
                                        <h4 className="text-[14px] font-bold text-ink truncate">{client.name}</h4>
                                        <p className="text-[12px] text-muted-foreground font-medium truncate">{client.type}</p>
                                    </div>
                                    
                                    {/* Status Badge */}
                                    {client.status === "Activo" ? (
                                        <div className="flex shrink-0 items-center gap-1.5 px-3 py-1 rounded-full border border-status-highlight-border text-status-highlight bg-status-highlight-surface">
                                            <div className="w-1.5 h-1.5 rounded-full bg-status-highlight"></div>
                                            <span className="text-[11px] font-bold">Activo</span>
                                        </div>
                                    ) : (
                                        <div className="flex shrink-0 items-center gap-1.5 px-3 py-1 rounded-full border border-status-neutral-border text-status-neutral bg-status-neutral-surface">
                                            <div className="w-1.5 h-1.5 rounded-full bg-status-neutral"></div>
                                            <span className="text-[11px] font-bold">Inactivo</span>
                                        </div>
                                    )}
                                </div>

                                {/* Contact Details */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-1 sm:gap-0 text-[12px] text-ink-muted font-medium mt-1">
                                    <span className="truncate">{client.contact}</span>
                                    <span className="hidden sm:inline mx-1.5 text-border">·</span>
                                    <span className="truncate">{client.email}</span>
                                    <span className="hidden sm:inline mx-1.5 text-border">·</span>
                                    <span className="truncate">{client.orders}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
