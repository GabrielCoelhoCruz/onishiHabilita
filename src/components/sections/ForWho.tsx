'use client'

import { Bike, Car, Briefcase, RotateCcw, PlusCircle, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/animations'

const profiles = [
  {
    icon: Bike,
    title: 'Motoboys e Entregadores',
    description: 'Que precisam regularizar a situação para trabalhar com segurança',
  },
  {
    icon: Car,
    title: 'Jovens de 18-24 anos',
    description: 'Querendo a primeira habilitação com economia',
  },
  {
    icon: Briefcase,
    title: 'Profissionais',
    description: 'Que precisam da CNH para oportunidades de trabalho',
  },
  {
    icon: RotateCcw,
    title: 'Quem Desistiu Antes',
    description: 'Pelo custo alto ou burocracia do processo antigo',
  },
  {
    icon: PlusCircle,
    title: 'Adicionar Categoria',
    description: 'Quem quer tirar carro + moto ou vice-versa',
  },
  {
    icon: Award,
    title: 'Bons Motoristas',
    description: 'Que querem aproveitar o benefício de renovação automática',
  },
]

export function ForWho() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Para quem é nosso serviço?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-12 text-lg text-gray-600">
              Atendemos diferentes perfis. Veja se você se identifica:
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {profiles.map((profile, index) => (
            <StaggerItem key={index}>
              <ScaleOnHover scale={1.03}>
                <Card className="h-full border-0 bg-white shadow-md transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <profile.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{profile.title}</h3>
                    <p className="text-sm text-gray-600">{profile.description}</p>
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
