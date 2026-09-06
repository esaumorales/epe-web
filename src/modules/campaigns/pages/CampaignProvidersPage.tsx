import { useState } from "react";
import DashboardLayout from "@/shared/layout/DashboardLayout";
import { Search, CalendarDays, Settings2, UserPlus, UserCheck, Eye, Users, FilePlus } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import StatusBadge from "@/modules/campaigns/components/StatusBadge";
import CampaignLinkProviderModal from "@/modules/campaigns/components/CampaignLinkProviderModal";
import CampaignSuccessModal from "@/modules/campaigns/components/CampaignSuccessModal";
import CampaignExamModal from "@/modules/campaigns/components/CampaignExamModal";
import CampaignInterviewModal from "@/modules/campaigns/components/CampaignInterviewModal";

export default function CampaignProvidersPage() {
    const [activeTab, setActiveTab] = useState<"Productor" | "Acopiador">("Productor");
    const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
    const [isExamModalOpen, setIsExamModalOpen] = useState(false);
    const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [successMode, setSuccessMode] = useState<"provider" | "exam" | "interview">("provider");

    return (
        <DashboardLayout>
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <div className="text-[#5D9634]">
                        <Users size={24} strokeWidth={2.5} />
                    </div>
                    <h1 className="text-[22px] font-bold text-[#1a2f22]">Proveedores de la Campaña</h1>
                </div>
                <Button 
                    variant="default" 
                    onClick={() => setIsLinkModalOpen(true)}
                    className="h-11 rounded-xl px-6 font-semibold text-white border-gray-200 bg-[#5D9634]"
                >
                    + Vincular proveedor
                </Button>
            </div>

            {/* Tabs & Subtitle */}
            <div className="mb-8">
                <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as "Productor" | "Acopiador")} className="w-full ">
                    <TabsList className=" grid grid-cols-2 w-full h-12 mb-6 p-1 bg-gray-50/80 border border-gray-200/60 rounded-xl ">
                        <TabsTrigger value="Productor" className="text-[14px] font-semibold rounded-lg data-active:shadow-sm data-active:border data-active:border-gray-100">Productor</TabsTrigger>
                        <TabsTrigger value="Acopiador" className="text-[14px] font-semibold rounded-lg data-active:shadow-sm data-active:border data-active:border-gray-100">Acopiador</TabsTrigger>
                    </TabsList>
                </Tabs>
                <h2 className="text-[18px] font-bold text-[#1a2f22]">
                    {activeTab === "Productor" ? "Productores de la Campaña" : "Acopiadores de la Campaña"}
                </h2>
            </div>

            {/* Filters Area - Match CampaignFilters.tsx */}
            <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 mb-8 flex flex-col gap-4">
                <div className="flex gap-5 items-end">
                    <div className="flex-1 flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Buscador</label>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} strokeWidth={2} />
                            <Input 
                                placeholder="Man..." 
                                className="pl-11 rounded-xl h-11 border-gray-200 bg-white shadow-none text-[14px] focus-visible:ring-[#5D9634]"
                            />
                        </div>
                    </div>

                    <div className="w-[180px] flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Inicio</label>
                        <Select>
                            <SelectTrigger className="rounded-xl h-11 border-gray-200 shadow-none text-gray-500 font-medium [&>svg]:opacity-50">
                                <div className="flex items-center gap-2">
                                    <CalendarDays size={16} className="opacity-70" />
                                    <SelectValue placeholder="--/--/----" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="today" className="rounded-lg">Hoy</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-[180px] flex flex-col gap-2.5">
                        <label className="text-[13px] font-semibold text-[#1a2f22]">Fecha Fin</label>
                        <Select>
                            <SelectTrigger className="rounded-xl h-11 border-gray-200 shadow-none text-gray-500 font-medium [&>svg]:opacity-50">
                                <div className="flex items-center gap-2">
                                    <CalendarDays size={16} className="opacity-70" />
                                    <SelectValue placeholder="--/--/----" />
                                </div>
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectItem value="today" className="rounded-lg">Hoy</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button variant="outline" className="h-11 rounded-xl px-6 border-gray-200 text-gray-600 gap-2 hover:bg-[#EBF3EC] hover:text-[#5D9634] hover:border-[#EBF3EC] shadow-none font-semibold transition-colors">
                        <Settings2 size={18} />
                        Limpiar Filtros
                    </Button>
                </div>
            </div>

            {/* Table Area - Match CampaignTable.tsx */}
            <div className="bg-white rounded-[1.5rem] p-3 shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-gray-100 overflow-hidden">
                <div className="rounded-xl overflow-hidden border border-gray-100">
                    <Table>
                        <TableHeader className="bg-[#f9fbf9]">
                            <TableRow className="border-b border-gray-100 hover:bg-transparent">
                                <TableHead className="text-[#1a2f22] font-semibold h-14 px-6">Nombres</TableHead>
                                <TableHead className="text-[#1a2f22] font-semibold h-14">DNI</TableHead>
                                <TableHead className="text-[#1a2f22] font-semibold h-14">Zona</TableHead>
                                <TableHead className="text-[#1a2f22] font-semibold h-14">Tipo de Proveedor</TableHead>
                                <TableHead className="text-[#1a2f22] font-semibold h-14">Estado</TableHead>
                                <TableHead className="text-[#1a2f22] font-semibold h-14 text-center px-6">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="border-b border-gray-50 hover:bg-gray-50/50">
                                <TableCell className="font-medium text-[#1a2f22] h-16 px-6">Robertp</TableCell>
                                <TableCell className="text-[#545454] font-medium">75369841</TableCell>
                                <TableCell className="text-[#545454] font-medium">Lima</TableCell>
                                <TableCell className="text-[#545454] font-medium">{activeTab}</TableCell>
                                <TableCell>
                                    <StatusBadge status="Desconocido" />
                                </TableCell>
                                <TableCell className="px-6">
                                    <div className="flex items-center justify-center gap-1.5 text-gray-500">
                                        {activeTab === "Productor" && (
                                            <>
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon" 
                                                    onClick={() => setIsInterviewModalOpen(true)}
                                                    className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors relative"
                                                >
                                                    <UserPlus size={18} strokeWidth={2.5} />
                                                </Button>
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon" 
                                                    onClick={() => setIsExamModalOpen(true)}
                                                    className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors"
                                                >
                                                    <FilePlus size={18} strokeWidth={2.5} />
                                                </Button>
                                            </>
                                        )}
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors">
                                            <Eye size={18} strokeWidth={2.5} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-gray-50 hover:bg-gray-50/50">
                                <TableCell className="font-medium text-[#1a2f22] h-16 px-6">Felipe</TableCell>
                                <TableCell className="text-[#545454] font-medium">74125896</TableCell>
                                <TableCell className="text-[#545454] font-medium">Piura</TableCell>
                                <TableCell className="text-[#545454] font-medium">{activeTab}</TableCell>
                                <TableCell>
                                    <StatusBadge status="Desconocido" />
                                </TableCell>
                                <TableCell className="px-6">
                                    <div className="flex items-center justify-center gap-1.5 text-gray-500">
                                        {activeTab === "Productor" && (
                                            <>
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon" 
                                                    onClick={() => setIsInterviewModalOpen(true)}
                                                    className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors relative"
                                                >
                                                    <UserCheck size={18} strokeWidth={2.5} />
                                                </Button>
                                                <Button 
                                                    variant="ghost" 
                                                    size="icon" 
                                                    onClick={() => setIsExamModalOpen(true)}
                                                    className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors"
                                                >
                                                    <FilePlus size={18} strokeWidth={2.5} />
                                                </Button>
                                            </>
                                        )}
                                        <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-[#5D9634] hover:bg-[#EBF3EC] rounded-lg transition-colors">
                                            <Eye size={18} strokeWidth={2.5} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <CampaignLinkProviderModal 
                open={isLinkModalOpen}
                onOpenChange={setIsLinkModalOpen}
                onSave={() => {
                    setIsLinkModalOpen(false);
                    setSuccessMode("provider");
                    setIsSuccessModalOpen(true);
                }}
            />

            <CampaignExamModal 
                open={isExamModalOpen}
                onOpenChange={setIsExamModalOpen}
                onSave={() => {
                    setIsExamModalOpen(false);
                    setSuccessMode("exam");
                    setIsSuccessModalOpen(true);
                }}
            />

            <CampaignInterviewModal 
                open={isInterviewModalOpen}
                onOpenChange={setIsInterviewModalOpen}
                onSave={() => {
                    setIsInterviewModalOpen(false);
                    setSuccessMode("interview");
                    setIsSuccessModalOpen(true);
                }}
            />

            <CampaignSuccessModal 
                open={isSuccessModalOpen}
                onOpenChange={setIsSuccessModalOpen}
                mode={successMode}
            />
        </DashboardLayout>
    );
}
