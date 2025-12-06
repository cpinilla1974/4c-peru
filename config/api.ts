// API Configuration
export const API_CONFIG = {
  FICEM_CORE_URL: process.env.NEXT_PUBLIC_FICEM_CORE_URL || 'http://localhost:8000',
  KNOWLEDGE_API_URL: process.env.NEXT_PUBLIC_KNOWLEDGE_API_URL || 'http://localhost:3001',
}

export const API_ENDPOINTS = {
  EXCEL_GENERATOR: '/api/v1/excel-generator/generate',
  EMPRESAS: '/api/v1/empresas',
  RESULTADOS: (id: string) => `/api/v1/resultados/${id}`,
  CLASSIFIER: '/api/v1/classifier/classify',
}
