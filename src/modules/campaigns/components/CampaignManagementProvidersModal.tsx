import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/shared/components/ui/dialog";

interface CampaignManagementProvidersModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CampaignManagementProvidersModal({ open, onOpenChange }: CampaignManagementProvidersModalProps) {
    const providers = [
        {
            initial: "F",
            name: "Fundo Los Olivos",
            location: "Piura",
            hectares: "45",
            owner: "Carlos Mendoza",
            phone: "+51 973 441 220",
            varieties: [
                { name: "Mango Kent", color: "bg-brand", text: "text-brand" },
                { name: "Mango Tommy", color: "bg-purple-500", text: "text-purple-500" }
            ]
        },
        {
            initial: "A",
            name: "Agrícola San Martín",
            location: "Lambayeque",
            hectares: "28",
            owner: "Rosa Gutiérrez",
            phone: "+51 945 882 331",
            varieties: [
                { name: "Mango Kent", color: "bg-brand", text: "text-brand" },
                { name: "Mango Ataulfo", color: "bg-orange-500", text: "text-orange-500" }
            ]
        },
        {
            initial: "F",
            name: "Fundo El Milagro",
            location: "La Libertad",
            hectares: "62",
            owner: "Jorge Paredes",
            phone: "+51 961 334 775",
            varieties: [
                { name: "Mango Dulce", color: "bg-yellow-500", text: "text-yellow-600" },
                { name: "Mango Haden", color: "bg-red-500", text: "text-red-500" }
            ]
        },
        {
            initial: "C",
            name: "Cooperativa Valle Verde",
            location: "Piura",
            hectares: "110",
            owner: "Ana Flores",
            phone: "+51 987 221 004",
            varieties: [
                { name: "Mango Kent", color: "bg-brand", text: "text-brand" },
                { name: "Mango Eduard", color: "bg-teal-500", text: "text-teal-500" },
                { name: "Mango Tommy", color: "bg-purple-500", text: "text-purple-500" }
            ]
        }
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[500px] md:max-w-[800px] p-8 rounded-2xl bg-white border-none shadow-2xl gap-6">
                <DialogHeader className="mb-2">
                    <DialogTitle className="text-[22px] font-bold text-ink">
                        Gestión de Proveedores
                    </DialogTitle>
                    <p className="text-[13px] font-medium text-ink-muted">4 proveedores activos · Mango 2026</p>
                </DialogHeader>

                {/* Resumen */}
                <div className="grid grid-cols-3 border-y border-border py-4">
                    <div className="flex flex-col items-center justify-center border-r border-border">
                        <span className="text-2xl font-black text-ink">4</span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Proveedores</span>
                    </div>
                    <div className="flex flex-col items-center justify-center border-r border-border">
                        <span className="text-2xl font-black text-ink">245 ha</span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Hectáreas Totales</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-2xl font-black text-ink">2</span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Variedades</span>
                    </div>
                </div>

                {/* Lista de Proveedores */}
                <div className="flex flex-col gap-6 mt-2 max-h-[350px] overflow-y-auto pr-2">
                    {providers.map((provider, index) => (
                        <div key={index} className="flex items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0">
                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center shrink-0">
                                <span className="text-[15px] font-bold text-brand">{provider.initial}</span>
                            </div>

                            {/* Info Principal */}
                            <div className="flex-1 flex flex-col gap-2.5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-[14px] font-bold text-ink">{provider.name}</h4>
                                        <p className="text-[12px] text-ink-muted font-medium">{provider.location} · {provider.hectares} ha</p>
                                    </div>
                                    <div className="text-right">
                                        <h4 className="text-[13px] font-bold text-ink">{provider.owner}</h4>
                                        <p className="text-[12px] text-ink-muted font-medium">{provider.phone}</p>
                                    </div>
                                </div>

                                {/* Chips */}
                                <div className="flex flex-wrap gap-2">
                                    {provider.varieties.map((variety, vIndex) => (
                                        <div 
                                            key={vIndex}
                                            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border border-border shadow-sm ${variety.text}`}
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full ${variety.color}`}></div>
                                            <span className="text-[11px] font-bold">{variety.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
