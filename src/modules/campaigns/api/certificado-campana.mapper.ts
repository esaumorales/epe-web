import { format } from "date-fns";
import type {
  CertificadoCampanaDto,
  CreateCertificadoCampanaDto,
  EstadoCertificadoCampana,
} from "@/modules/campaigns/api/certificado-campana.dto";

export interface CertificadoCampana {
  certificadoId: number;
  nombre: string;
  documentoUrl: string;
  fechaVencimiento: Date;
  campaniaId: number;
  estado: EstadoCertificadoCampana;
}

export interface CertificadoCampanaFormInput {
  nombre: string;
  documentoUrl: string;
  fechaVencimiento: Date;
  estado: EstadoCertificadoCampana;
}

function parseFecha(fecha: string): Date {
  return new Date(`${fecha}T00:00:00`);
}

export function formatFecha(fecha: Date): string {
  return format(fecha, "yyyy-MM-dd");
}

export function toCertificadoCampana(dto: CertificadoCampanaDto): CertificadoCampana {
  const { documentUrl, fechaVencimiento, ...rest } = dto;
  return {
    ...rest,
    documentoUrl: documentUrl,
    fechaVencimiento: parseFecha(fechaVencimiento),
  };
}

export function toCreateCertificadoCampanaDto(
  input: CertificadoCampanaFormInput,
): CreateCertificadoCampanaDto {
  const { documentoUrl, fechaVencimiento, ...rest } = input;
  return {
    ...rest,
    documentUrl: documentoUrl,
    fechaVencimiento: formatFecha(fechaVencimiento),
  };
}
