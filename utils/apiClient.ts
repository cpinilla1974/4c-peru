import axios, { AxiosInstance, AxiosError } from 'axios'
import { API_CONFIG } from '@/config/api'

// Tipos para respuestas
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface Empresa {
  id: string
  nombre: string
  industria: string
  ubicacion: string
  empleados?: number
}

export interface Resultado {
  id: string
  empresaId: string
  huella: number
  fecha: string
  detalles?: any
}

export interface GenerarExcelRequest {
  empresaId: string
  tipo: string
}

// Cliente API reutilizable
class FiemCoreClient {
  private client: AxiosInstance

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Interceptor para errores
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('API Error:', error.message)
        return Promise.reject(error)
      }
    )
  }

  // Obtener listado de empresas
  async getEmpresas(): Promise<Empresa[]> {
    try {
      const response = await this.client.get('/api/v1/empresas')
      return response.data
    } catch (error) {
      console.error('Error fetching empresas:', error)
      throw error
    }
  }

  // Obtener empresa por ID
  async getEmpresa(id: string): Promise<Empresa> {
    try {
      const response = await this.client.get(`/api/v1/empresas/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching empresa ${id}:`, error)
      throw error
    }
  }

  // Obtener resultados de una empresa
  async getResultados(empresaId: string): Promise<Resultado[]> {
    try {
      const response = await this.client.get(`/api/v1/resultados/${empresaId}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching resultados for ${empresaId}:`, error)
      throw error
    }
  }

  // Generar plantilla Excel
  async generarExcel(request: GenerarExcelRequest): Promise<Blob> {
    try {
      const response = await this.client.post(
        '/api/v1/excel-generator/generate',
        request,
        {
          responseType: 'blob',
        }
      )
      return response.data
    } catch (error) {
      console.error('Error generating Excel:', error)
      throw error
    }
  }

  // Clasificar con GCCA
  async clasificar(data: any): Promise<any> {
    try {
      const response = await this.client.post('/api/v1/classifier/classify', data)
      return response.data
    } catch (error) {
      console.error('Error classifying:', error)
      throw error
    }
  }
}

// Exportar instancia única del cliente
export const fiemCoreClient = new FiemCoreClient(API_CONFIG.FICEM_CORE_URL)
