'use client'

import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/animations'

const testimonials = [
  {
    name: 'João Silva',
    role: 'Motoboy',
    content:
      'Consegui tirar minha CNH gastando muito menos do que imaginava. O atendimento foi excelente e me guiaram em todo o processo.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Estudante',
    content:
      'Tinha desistido de tirar CNH por causa do preço. Com a nova lei e a ajuda da assessoria, finalmente realizei esse sonho!',
    rating: 5,
  },
  {
    name: 'Carlos Oliveira',
    role: 'Profissional Liberal',
    content:
      'Precisava da CNH para trabalho e eles me ajudaram a conseguir no menor tempo possível. Super recomendo!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              O que nossos alunos dizem
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-12 text-lg text-gray-600">
              Veja os depoimentos de quem já conquistou a CNH com nossa ajuda
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <ScaleOnHover scale={1.02}>
                <Card className="h-full border-0 bg-white shadow-md">
                  <CardContent className="p-6">
                    <Quote className="mb-4 h-8 w-8 text-blue-200" />
                    <p className="mb-6 text-gray-600">&quot;{testimonial.content}&quot;</p>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-600">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
