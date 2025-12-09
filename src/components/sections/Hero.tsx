'use client'

import { ArrowRight, BadgePercent, Clock, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export function Hero() {
  const { scrollTo } = useSmoothScroll()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn direction="down" duration={0.6}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500"></span>
              </span>
              Nova Lei em vigor desde 09/12/2025
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Tirar CNH ficou até{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                80% mais barato
              </span>
              . Você sabe como?
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Com a nova lei CNH do Brasil, é possível economizar milhares de reais.
              Nós te guiamos por todo o processo em São Paulo.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => scrollTo('formulario')}
                className="bg-yellow-500 text-gray-900 hover:bg-yellow-400"
              >
                Quero minha CNH
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('o-que-mudou')}
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Ver o que mudou
              </Button>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3" staggerDelay={0.15}>
            <StaggerItem>
              <div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur">
                <BadgePercent className="h-8 w-8 text-yellow-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-sm text-blue-200">mais barato</div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur">
                <Clock className="h-8 w-8 text-yellow-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">2h</div>
                  <div className="text-sm text-blue-200">de aula prática</div>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur">
                <RotateCcw className="h-8 w-8 text-yellow-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Grátis</div>
                  <div className="text-sm text-blue-200">primeiro reteste</div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
