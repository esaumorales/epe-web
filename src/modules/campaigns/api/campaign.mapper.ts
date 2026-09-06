import { format } from "date-fns";
import type { CampanaDto, CreateCampanaDto, FrutaDto, CampanaEstado } from "@/modules/campaigns/api/campaign.dto";

export interface Campana {
  campaniaId: number;
  nombre: string;
  frutaId: number;
  fruta?: FrutaDto;
  fechaInicio: Date;
  fechaFin: Date;
  estado: CampanaEstado;
  requerimientoComercial: string;
  createdAt: string;
  updatedAt: string;
}

export interface CampaignFormInput {
  nombre: string;
  frutaId: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: CampanaEstado;
  requerimientoComercial: string;
}

function parseFecha(fecha: string): Date {
  return new Date(`${fecha}T00:00:00`);
}

export function formatFecha(fecha: Date): string {
  return format(fecha, "yyyy-MM-dd");
}

export function toCampana(dto: CampanaDto): Campana {
  return {
    ...dto,
    fechaInicio: parseFecha(dto.fechaInicio),
    fechaFin: parseFecha(dto.fechaFin),
  };
}

export function toCreateCampanaDto(input: CampaignFormInput): CreateCampanaDto {
  return {
    ...input,
    fechaInicio: formatFecha(input.fechaInicio),
    fechaFin: formatFecha(input.fechaFin),
  };
}
