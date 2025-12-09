export type LicenseType = 'A' | 'B' | 'AB'

export type Situation =
  | 'primeira_habilitacao'
  | 'renovacao'
  | 'adicionar_categoria'
  | 'regularizar'

export interface Lead {
  id: string
  created_at: string
  name: string
  phone: string
  license_type: LicenseType
  situation: Situation
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  status: 'novo' | 'contactado' | 'convertido'
}

export interface LeadInsert {
  name: string
  phone: string
  license_type: LicenseType
  situation: Situation
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
}

export const SITUATION_LABELS: Record<Situation, string> = {
  primeira_habilitacao: 'Primeira Habilitação',
  renovacao: 'Renovação',
  adicionar_categoria: 'Adicionar Categoria',
  regularizar: 'Regularizar Situação',
}

export const LICENSE_TYPE_LABELS: Record<LicenseType, string> = {
  A: 'Categoria A (Moto)',
  B: 'Categoria B (Carro)',
  AB: 'Categoria AB (Carro + Moto)',
}
