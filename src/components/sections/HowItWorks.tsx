'use client'

import { MessageSquare, FileText, BookOpen, Car, Trophy } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultoria Inicial Gratuita',
    description: 'Entendemos sua situação e montamos seu plano personalizado',
  },
  {
    icon: FileText,
    title: 'Abertura do Processo',
    description: 'Cuidamos de toda a burocracia no Detran e App CNH do Brasil',
  },
  {
    icon: BookOpen,
    title: 'Preparação Teórica',
    description: 'Te guiamos pelo conteúdo gratuito disponibilizado pelo governo',
  },
  {
    icon: Car,
    title: 'Aulas Práticas',
    description: 'Com nossos instrutores credenciados em São Paulo',
  },
  {
    icon: Trophy,
    title: 'Aprovação',
    description: 'Suporte completo nos exames até você conquistar sua CNH',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Como funciona nosso serviço
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-12 text-lg text-gray-600">
              Simplificamos todo o processo para você. Veja como é fácil tirar sua CNH com a gente:
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-blue-200 md:block"></div>

            <StaggerContainer className="space-y-8" staggerDelay={0.15}>
              {steps.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="relative flex gap-6">
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1 rounded-xl bg-gray-50 p-6">
                      <div className="mb-1 text-sm font-medium text-blue-600">
                        Passo {index + 1}
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
