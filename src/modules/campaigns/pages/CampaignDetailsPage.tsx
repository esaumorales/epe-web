import {  useNavigate } from "react-router-dom";
import {  Calendar, Tag, Sprout, TrendingUp, ShieldCheck, Users, Briefcase, ArrowLeft } from "lucide-react";
import StatusBadge from "@/modules/campaigns/components/StatusBadge";
import { Button } from "@/shared/components/ui/button";
import { Progress } from "@/shared/components/ui/progress";
import DashboardLayout from "@/shared/layout/DashboardLayout";

export default function CampaignDetailsPage() {
    const navigate = useNavigate();

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full bg-[#f4f7f5] overflow-hidden rounded-[2rem] shadow-sm">
                {/* Custom Header */}
                <div className="bg-white px-8 py-5 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/campaigns')}
                            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors mr-2"
                        >
                            <ArrowLeft size={20} strokeWidth={2.5} />
                        </button>
                        <div className="w-12 h-12 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] border border-[#d2e5d5]">
                            <Sprout size={24} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#1a2f22]">Detalle de Campaña</h2>
                            <p className="text-[13px] text-gray-500 font-medium">Visualización general y estado de la campaña</p>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-8 grid grid-cols-1 xl:grid-cols-3 gap-6 overflow-y-auto flex-1">

                    {/* Left Column (Main Info) */}
                    <div className="xl:col-span-2 flex flex-col gap-6">

                        {/* Info Card */}
                        <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
                            {/* Decorative top border */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#5D9634]"></div>

                            <div className="flex justify-between items-start mt-2">
                                <div>
                                    <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">Campaña Activa</p>
                                    <h1 className="text-3xl font-extrabold text-[#1a2f22]">Mango 2026</h1>
                                </div>
                                <StatusBadge status="planificacion" />
                            </div>

                            {/* Dates Section */}
                            <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                                <div className="flex-1">
                                    <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">Fecha Inicio</p>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-[#5D9634]" />
                                        <span className="text-[15px] font-bold text-[#1a2f22]">01 / 06 / 2026</span>
                                    </div>
                                </div>
                                <div className="w-8 flex justify-center text-gray-300">
                                    <TrendingUp size={20} strokeWidth={3} className="rotate-45" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-1">Fecha Fin</p>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-[#5D9634]" />
                                        <span className="text-[15px] font-bold text-[#1a2f22]">31 / 08 / 2026</span>
                                    </div>
                                </div>
                                <div className="pl-6 border-l border-gray-200 flex flex-col items-center justify-center">
                                    <p className="text-[11px] font-bold text-[#5D9634] tracking-wider uppercase mb-0.5">Días</p>
                                    <span className="text-xl font-black text-[#5D9634]">92</span>
                                </div>
                            </div>

                            {/* Derivados */}
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3">Derivados de Fruta</p>
                                <div className="flex flex-wrap gap-2">
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF3EC] border border-[#d2e5d5] text-[#5D9634]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D9634]"></div>
                                        <span className="text-[13px] font-bold">Mango Kent</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF3EC] border border-[#d2e5d5] text-[#5D9634]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D9634]"></div>
                                        <span className="text-[13px] font-bold">Mango Eduard</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Avance de Cosecha Card */}
                        <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 flex flex-col gap-5">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-[17px] font-bold text-[#1a2f22]">Avance de cosecha</h3>
                                    <p className="text-[13px] text-gray-500 font-medium mt-0.5">Kilos cosechados vs. estimados</p>
                                </div>
                                <span className="text-2xl font-black text-gray-300">0%</span>
                            </div>

                            <div>
                                <Progress value={0} className="h-3 bg-gray-100" />
                                <div className="flex justify-between items-center mt-3 text-[12.5px] font-bold">
                                    <span className="text-gray-400">0 Kg cosechados</span>
                                    <span className="text-gray-400">0 Kg estimados</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="h-14 rounded-2xl bg-[#5D9634] hover:bg-[#4b7a29] text-white font-bold text-[15px] flex items-center justify-center gap-3 shadow-sm border-b-4 border-[#4b7a29] active:border-b-0 active:translate-y-[4px] transition-all">
                                <Briefcase size={22} strokeWidth={2.5} />
                                Proveedores
                            </Button>
                            <Button className="h-14 rounded-2xl bg-[#5D9634] hover:bg-[#4b7a29] text-white font-bold text-[15px] flex items-center justify-center gap-3 shadow-sm border-b-4 border-[#4b7a29] active:border-b-0 active:translate-y-[4px] transition-all">
                                <Users size={22} strokeWidth={2.5} />
                                Clientes
                            </Button>
                        </div>
                    </div>

                    {/* Right Column (Stats & Certs) */}
                    <div className="flex flex-col gap-4">

                        {/* Stat Cards - Grid with 2 columns as requested */}
                        <div className="grid grid-cols-2 gap-3">
                            {/* Kilos Estimados */}
                            <div className="bg-white p-5 rounded-[1.25rem] border border-gray-100 shadow-sm flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase leading-tight w-20">Kilos Estimados</p>
                                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-400 shrink-0">
                                        <Tag size={14} strokeWidth={2.5} />
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1 mt-auto">
                                    <span className="text-xl font-black text-gray-300">----</span>
                                    <span className="text-[12px] font-bold text-gray-300">Kg</span>
                                </div>
                            </div>

                            {/* Kilos Cosechados */}
                            <div className="bg-white p-5 rounded-[1.25rem] border border-gray-100 shadow-sm flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase leading-tight w-20">Kilos Cosechados</p>
                                    <div className="w-8 h-8 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0">
                                        <TrendingUp size={14} strokeWidth={2.5} />
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1 mt-auto">
                                    <span className="text-xl font-black text-gray-300">----</span>
                                    <span className="text-[12px] font-bold text-gray-300">Kg</span>
                                </div>
                            </div>
                        </div>

                        {/* Certificaciones List */}
                        <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm flex-1 flex flex-col overflow-hidden">
                            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-[#f9fbf9]">
                                <div>
                                    <h3 className="text-[15px] font-bold text-[#1a2f22]">Certificaciones</h3>
                                    <p className="text-[12px] text-gray-500 font-medium">4 certificaciones · 12 archivos</p>
                                </div>
                            </div>

                            <div className="flex flex-col p-2">
                                {/* Item 1 */}
                                <div className="p-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-3 cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0">
                                        <ShieldCheck size={18} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-[13.5px] font-bold text-[#1a2f22] truncate">Global G.A.P.</p>
                                        <p className="text-[11px] font-medium text-gray-400 truncate">3 archivos · vence 31/12/2026</p>
                                    </div>
                                    <div className="px-2.5 py-1 rounded-full bg-[#EBF3EC] text-[#5D9634] text-[11px] font-bold border border-[#d2e5d5] flex items-center gap-1.5 shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D9634]"></div>
                                        Vigente
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="p-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-3 cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] shrink-0">
                                        <ShieldCheck size={18} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-[13.5px] font-bold text-[#1a2f22] truncate">SENASA Export</p>
                                        <p className="text-[11px] font-medium text-gray-400 truncate">2 archivos · vence 15/06/2026</p>
                                    </div>
                                    <div className="px-2.5 py-1 rounded-full bg-[#EBF3EC] text-[#5D9634] text-[11px] font-bold border border-[#d2e5d5] flex items-center gap-1.5 shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5D9634]"></div>
                                        Vigente
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="p-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-3 cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                                        <ShieldCheck size={18} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-[13.5px] font-bold text-[#1a2f22] truncate">Rainforest Alliance</p>
                                        <p className="text-[11px] font-medium text-gray-400 truncate">4 archivos · vence 20/09/2025</p>
                                    </div>
                                    <div className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-600 text-[11px] font-bold border border-orange-200 flex items-center gap-1.5 shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                        Por Vencer
                                    </div>
                                </div>

                                {/* Item 4 */}
                                <div className="p-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-3 cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                                        <ShieldCheck size={18} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-[13.5px] font-bold text-[#1a2f22] truncate">BRC Food Safety</p>
                                        <p className="text-[11px] font-medium text-gray-400 truncate">3 archivos · vence 01/03/2025</p>
                                    </div>
                                    <div className="px-2.5 py-1 rounded-full bg-red-100 text-red-600 text-[11px] font-bold border border-red-200 flex items-center gap-1.5 shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                        Vencida
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
