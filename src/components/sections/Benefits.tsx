'use client'

import { Check } from 'lucide-react'
import { FadeIn, AnimatedCounter } from '@/components/animations'

const benefits = [
  'Especialistas no novo processo CNH do Brasil',
  'Instrutores credenciados e experientes',
  'Veículos disponíveis para aulas práticas',
  'Flexibilidade total de horários',
  'Atendimento em toda São Paulo Capital',
  'Acompanhamento personalizado do início ao fim',
  'Preço justo — você paga só pelo que precisa',
]

export function Benefits() {
  return (
    <section id="diferenciais" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <FadeIn>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Por que escolher a gente?
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mb-8 text-lg text-gray-600">
                  Somos especialistas no novo processo de habilitação e oferecemos suporte
                  completo para você conquistar sua CNH.
                </p>
              </FadeIn>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <FadeIn key={index} direction="left" delay={0.15 + index * 0.08}>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <Check className="h-4 w-4 text-blue-600" />
                      </span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-8">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <AnimatedCounter
                      value={500}
                      prefix="+"
                      className="mb-4 text-6xl font-bold text-blue-600"
                    />
                    <div className="text-xl font-medium text-gray-700">
                      Alunos aprovados
                    </div>
                    <div className="mt-2 text-gray-500">em São Paulo Capital</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-yellow-400 p-4 shadow-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    <AnimatedCounter value={5} delay={0.5} /> <span>+ anos</span>
                  </div>
                  <div className="text-sm text-gray-700">de experiência</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
