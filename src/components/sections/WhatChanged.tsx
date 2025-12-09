'use client'

import { X, Check } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'

const changes = [
  {
    before: 'Curso teórico pago na autoescola',
    after: 'Curso teórico gratuito e online',
  },
  {
    before: 'Mínimo 20-25h de aulas práticas',
    after: 'Apenas 2h obrigatórias',
  },
  {
    before: 'Obrigatório usar autoescola',
    after: 'Pode usar instrutor autônomo ou autoescola',
  },
  {
    before: 'Prazo limitado para concluir',
    after: 'Sem prazo — faça no seu ritmo',
  },
  {
    before: 'Pagar reteste em caso de reprovação',
    after: 'Primeiro reteste gratuito',
  },
  {
    before: 'Custo total: até R$5.000',
    after: 'Redução de até 80%',
  },
]

export function WhatChanged() {
  return (
    <section id="o-que-mudou" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              O que mudou com a nova lei?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-12 text-lg text-gray-600">
              A CNH do Brasil revolucionou o processo de habilitação. Veja as principais mudanças:
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            <FadeIn direction="left">
              <div className="rounded-2xl bg-red-50 p-6">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-red-700">
                  <X className="h-6 w-6" />
                  Antes
                </h3>
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {changes.map((change, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-200 text-red-700">
                          <X className="h-3 w-3" />
                        </span>
                        <span className="text-gray-700">{change.before}</span>
                      </li>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-green-700">
                  <Check className="h-6 w-6" />
                  Agora (CNH do Brasil)
                </h3>
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {changes.map((change, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200 text-green-700">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="font-medium text-gray-900">{change.after}</span>
                      </li>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
