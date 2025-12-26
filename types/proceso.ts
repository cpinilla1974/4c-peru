// Tipos para Motor de Procesos MRV
// Basado en la API documentada en latam-3c/docs/1-tecnica/05-api-motor-procesos-mrv.md

export type ProcesoEstado = 'borrador' | 'activo' | 'cerrado' | 'anulado';
export type SubmissionEstado = 'borrador' | 'enviado' | 'en_revision' | 'rechazado' | 'validado' | 'publicado';

export interface Proceso {
  id: string;
  nombre: string;
  pais: string;
  tipo: string;
  descripcion: string;
  estado: ProcesoEstado;
  fecha_inicio: string;
  fecha_cierre: string;
  template_url?: string;
  metadata: {
    ciclo?: string;
    año_fiscal?: number;
    requiere_validacion?: boolean;
    [key: string]: any;
  };
  creado_en: string;
  actualizado_en: string;
}

export interface Submission {
  id: string;
  proceso_id: string;
  empresa_id: number;
  empresa_nombre?: string;
  estado: SubmissionEstado;
  archivo_nombre?: string;
  archivo_url?: string;
  validacion_resultado?: {
    valido: boolean;
    errores?: Array<{
      fila?: number;
      columna?: string;
      mensaje: string;
      severidad: 'error' | 'warning';
    }>;
    advertencias?: Array<{
      fila?: number;
      columna?: string;
      mensaje: string;
    }>;
  };
  datos_extraidos?: any;
  comentarios?: Array<{
    id: string;
    usuario_id: number;
    usuario_nombre: string;
    texto: string;
    creado_en: string;
  }>;
  creado_en: string;
  actualizado_en: string;
  enviado_en?: string;
  revisado_en?: string;
  revisado_por?: number;
}

export interface CreateSubmissionRequest {
  proceso_id: string;
  empresa_id: number;
}

export interface UploadFileRequest {
  file: File;
}

export interface SubmitRequest {
  confirmar: boolean;
}

export interface ReviewRequest {
  accion: 'aprobar' | 'rechazar';
  comentario?: string;
}
