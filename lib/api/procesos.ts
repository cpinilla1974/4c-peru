// API Client para Motor de Procesos MRV
// Por ahora con datos mockeados, se conectará a ficem-core cuando esté disponible

import {
  Proceso,
  Submission,
  CreateSubmissionRequest,
  UploadFileRequest,
  SubmitRequest,
  ReviewRequest
} from '@/types/proceso';

const API_URL = process.env.NEXT_PUBLIC_FICEM_CORE_URL || 'http://localhost:8000';

// Mock data para desarrollo
const mockProceso: Proceso = {
  id: 'produce-peru-2024',
  nombre: 'Protocolo PRODUCE Perú 2024-2025',
  pais: 'PE',
  tipo: 'produce',
  descripcion: 'Reporte anual de huella de carbono para el Ministerio de la Producción',
  estado: 'activo',
  fecha_inicio: '2024-11-01',
  fecha_cierre: '2025-03-31',
  template_url: '/templates/PRODUCE_2024_Template.xlsx',
  metadata: {
    ciclo: '2024-2025',
    año_fiscal: 2024,
    requiere_validacion: true,
  },
  creado_en: '2024-10-15T00:00:00Z',
  actualizado_en: '2024-11-01T00:00:00Z',
};

const mockSubmissions: Submission[] = [
  {
    id: 'sub-001',
    proceso_id: 'produce-peru-2024',
    empresa_id: 1,
    empresa_nombre: 'UNACEM',
    estado: 'validado',
    archivo_nombre: 'UNACEM_PRODUCE_2024.xlsx',
    archivo_url: '/uploads/sub-001/UNACEM_PRODUCE_2024.xlsx',
    validacion_resultado: {
      valido: true,
      advertencias: [
        {
          fila: 15,
          columna: 'combustible_consumo',
          mensaje: 'Valor inusualmente alto comparado con histórico',
        },
      ],
    },
    creado_en: '2024-12-01T10:00:00Z',
    actualizado_en: '2024-12-05T14:30:00Z',
    enviado_en: '2024-12-02T16:00:00Z',
    revisado_en: '2024-12-05T14:30:00Z',
    revisado_por: 10,
  },
  {
    id: 'sub-002',
    proceso_id: 'produce-peru-2024',
    empresa_id: 1,
    empresa_nombre: 'UNACEM',
    estado: 'borrador',
    creado_en: '2024-12-08T09:00:00Z',
    actualizado_en: '2024-12-08T09:00:00Z',
  },
];

// Servicios
export const procesosService = {
  // Obtener procesos activos para un país
  async getProcesos(pais: string = 'PE', estado: string = 'activo'): Promise<Proceso[]> {
    // TODO: Reemplazar con fetch real cuando API esté disponible
    // const response = await fetch(`${API_URL}/procesos?pais=${pais}&estado=${estado}`);
    // return response.json();

    return Promise.resolve([mockProceso]);
  },

  // Obtener un proceso específico
  async getProceso(procesoId: string): Promise<Proceso> {
    // TODO: const response = await fetch(`${API_URL}/procesos/${procesoId}`);
    // return response.json();

    return Promise.resolve(mockProceso);
  },

  // Descargar template del proceso
  async downloadTemplate(procesoId: string): Promise<Blob> {
    // TODO: const response = await fetch(`${API_URL}/procesos/${procesoId}/template`);
    // return response.blob();

    // Mock: retornar un blob vacío
    return Promise.resolve(new Blob());
  },
};

export const submissionsService = {
  // Obtener submissions de una empresa para un proceso
  async getSubmissions(procesoId: string, empresaId: number): Promise<Submission[]> {
    // TODO: const response = await fetch(`${API_URL}/procesos/${procesoId}/submissions?empresa_id=${empresaId}`);
    // return response.json();

    return Promise.resolve(mockSubmissions.filter(s => s.empresa_id === empresaId));
  },

  // Obtener todas las submissions de un proceso (coordinador)
  async getAllSubmissions(procesoId: string, estado?: string): Promise<Submission[]> {
    // TODO: const response = await fetch(`${API_URL}/procesos/${procesoId}/submissions?estado=${estado}`);
    // return response.json();

    let filtered = mockSubmissions;
    if (estado) {
      filtered = mockSubmissions.filter(s => s.estado === estado);
    }
    return Promise.resolve(filtered);
  },

  // Crear nueva submission
  async createSubmission(data: CreateSubmissionRequest): Promise<Submission> {
    // TODO: const response = await fetch(`${API_URL}/procesos/${data.proceso_id}/submissions`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // return response.json();

    const newSubmission: Submission = {
      id: `sub-${Date.now()}`,
      proceso_id: data.proceso_id,
      empresa_id: data.empresa_id,
      estado: 'borrador',
      creado_en: new Date().toISOString(),
      actualizado_en: new Date().toISOString(),
    };
    return Promise.resolve(newSubmission);
  },

  // Obtener una submission específica
  async getSubmission(submissionId: string): Promise<Submission> {
    // TODO: const response = await fetch(`${API_URL}/submissions/${submissionId}`);
    // return response.json();

    const submission = mockSubmissions.find(s => s.id === submissionId);
    if (!submission) throw new Error('Submission no encontrada');
    return Promise.resolve(submission);
  },

  // Cargar archivo Excel
  async uploadFile(submissionId: string, file: File): Promise<Submission> {
    // TODO: const formData = new FormData();
    // formData.append('file', file);
    // const response = await fetch(`${API_URL}/submissions/${submissionId}/upload`, {
    //   method: 'POST',
    //   body: formData,
    // });
    // return response.json();

    const submission = await this.getSubmission(submissionId);
    submission.archivo_nombre = file.name;
    submission.actualizado_en = new Date().toISOString();
    return Promise.resolve(submission);
  },

  // Validar datos del archivo
  async validateSubmission(submissionId: string): Promise<Submission> {
    // TODO: const response = await fetch(`${API_URL}/submissions/${submissionId}/validate`, {
    //   method: 'POST',
    // });
    // return response.json();

    const submission = await this.getSubmission(submissionId);
    submission.validacion_resultado = {
      valido: true,
      advertencias: [],
    };
    submission.actualizado_en = new Date().toISOString();
    return Promise.resolve(submission);
  },

  // Confirmar envío
  async submitSubmission(submissionId: string): Promise<Submission> {
    // TODO: const response = await fetch(`${API_URL}/submissions/${submissionId}/submit`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ confirmar: true }),
    // });
    // return response.json();

    const submission = await this.getSubmission(submissionId);
    submission.estado = 'enviado';
    submission.enviado_en = new Date().toISOString();
    submission.actualizado_en = new Date().toISOString();
    return Promise.resolve(submission);
  },

  // Revisar submission (coordinador)
  async reviewSubmission(submissionId: string, data: ReviewRequest): Promise<Submission> {
    // TODO: const response = await fetch(`${API_URL}/submissions/${submissionId}/review`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // return response.json();

    const submission = await this.getSubmission(submissionId);
    submission.estado = data.accion === 'aprobar' ? 'validado' : 'rechazado';
    submission.revisado_en = new Date().toISOString();
    submission.actualizado_en = new Date().toISOString();

    if (data.comentario) {
      submission.comentarios = submission.comentarios || [];
      submission.comentarios.push({
        id: `comment-${Date.now()}`,
        usuario_id: 10,
        usuario_nombre: 'Coordinador ASOCEM',
        texto: data.comentario,
        creado_en: new Date().toISOString(),
      });
    }

    return Promise.resolve(submission);
  },
};
