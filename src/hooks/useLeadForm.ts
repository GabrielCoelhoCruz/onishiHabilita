'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { insertLead } from '@/lib/supabase'
import type { LicenseType, Situation, LeadInsert } from '@/types/lead'

interface FormData {
  name: string
  phone: string
  license_type: LicenseType | ''
  situation: Situation | ''
}

interface FormErrors {
  name?: string
  phone?: string
  license_type?: string
  situation?: string
}

export function useLeadForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    license_type: '',
    situation: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '')
    return cleaned.length >= 10 && cleaned.length <= 11
  }

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 2) return cleaned
    if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`
    if (cleaned.length <= 11)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp é obrigatório'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'WhatsApp inválido'
    }

    if (!formData.license_type) {
      newErrors.license_type = 'Selecione o tipo de habilitação'
    }

    if (!formData.situation) {
      newErrors.situation = 'Selecione sua situação'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: keyof FormData, value: string) => {
    if (field === 'phone') {
      value = formatPhone(value)
    }
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async () => {
    if (!validate()) return false

    setIsSubmitting(true)

    try {
      const lead: LeadInsert = {
        name: formData.name.trim(),
        phone: formData.phone.replace(/\D/g, ''),
        license_type: formData.license_type as LicenseType,
        situation: formData.situation as Situation,
        utm_source: searchParams.get('utm_source'),
        utm_medium: searchParams.get('utm_medium'),
        utm_campaign: searchParams.get('utm_campaign'),
      }

      await insertLead(lead)
      setIsSuccess(true)
      setFormData({ name: '', phone: '', license_type: '', situation: '' })
      return true
    } catch (error) {
      console.error('Error submitting lead:', error)
      toast.error('Erro ao enviar cadastro. Tente novamente.')
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    setIsSuccess,
  }
}
