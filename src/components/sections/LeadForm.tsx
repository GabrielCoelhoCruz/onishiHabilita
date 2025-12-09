'use client'

import { Suspense } from 'react'
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLeadForm } from '@/hooks/useLeadForm'
import { LICENSE_TYPE_LABELS, SITUATION_LABELS } from '@/types/lead'
import type { LicenseType, Situation } from '@/types/lead'
import { FadeIn } from '@/components/animations'

function LeadFormContent() {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  } = useLeadForm()

  if (isSuccess) {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <CheckCircle className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900">Cadastro realizado!</h3>
        <p className="mb-6 text-gray-600">
          Em breve um de nossos consultores entrará em contato pelo WhatsApp.
        </p>
        <p className="text-sm text-gray-500">
          Fique atento às mensagens no número informado.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
          Nome completo
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
          WhatsApp
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="(11) 99999-9999"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Qual habilitação você quer?
        </label>
        <Select
          value={formData.license_type}
          onValueChange={(value) => handleChange('license_type', value)}
        >
          <SelectTrigger className={errors.license_type ? 'border-red-500' : ''}>
            <SelectValue placeholder="Selecione a categoria" />
          </SelectTrigger>
          <SelectContent>
            {(Object.keys(LICENSE_TYPE_LABELS) as LicenseType[]).map((key) => (
              <SelectItem key={key} value={key}>
                {LICENSE_TYPE_LABELS[key]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.license_type && (
          <p className="mt-1 text-sm text-red-500">{errors.license_type}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Qual sua situação atual?
        </label>
        <Select
          value={formData.situation}
          onValueChange={(value) => handleChange('situation', value)}
        >
          <SelectTrigger className={errors.situation ? 'border-red-500' : ''}>
            <SelectValue placeholder="Selecione sua situação" />
          </SelectTrigger>
          <SelectContent>
            {(Object.keys(SITUATION_LABELS) as Situation[]).map((key) => (
              <SelectItem key={key} value={key}>
                {SITUATION_LABELS[key]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.situation && (
          <p className="mt-1 text-sm text-red-500">{errors.situation}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Quero minha CNH
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-gray-500">
        Ao enviar, você concorda em receber contato pelo WhatsApp.
      </p>
    </form>
  )
}

export function LeadForm() {
  return (
    <section id="formulario" className="bg-blue-600 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl md:flex">
              <FadeIn direction="left" delay={0.1} className="md:w-2/5">
                <div className="h-full bg-gradient-to-br from-blue-700 to-blue-800 p-8 text-white md:p-12">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                    Comece sua jornada para a CNH
                  </h2>
                  <p className="mb-8 text-blue-100">
                    Preencha o formulário e receba uma consultoria gratuita. Vamos te mostrar
                    como economizar até 80% no processo.
                  </p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400" />
                      Consultoria inicial gratuita
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400" />
                      Sem compromisso
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400" />
                      Resposta em até 2 horas
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2} className="md:w-3/5">
                <div className="p-8 md:p-12">
                  <Suspense fallback={<div className="py-12 text-center">Carregando...</div>}>
                    <LeadFormContent />
                  </Suspense>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
