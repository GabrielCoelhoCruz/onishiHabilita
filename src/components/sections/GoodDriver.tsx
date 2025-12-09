'use client'

import { Award, BadgePercent, RefreshCw } from 'lucide-react'
import { FadeIn } from '@/components/animations'

export function GoodDriver() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-800 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur md:p-12">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <FadeIn direction="left" delay={0.1}>
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                    <Award className="h-10 w-10 text-yellow-400" />
                  </div>
                </FadeIn>

                <div className="text-center md:text-left">
                  <FadeIn direction="right" delay={0.15}>
                    <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                      Benefício &quot;Bom Motorista&quot;
                    </h2>
                  </FadeIn>
                  <FadeIn direction="right" delay={0.2}>
                    <p className="mb-6 text-blue-100">
                      Já tem CNH e não tem infrações? Você também se beneficia da nova lei!
                    </p>
                  </FadeIn>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <FadeIn delay={0.3}>
                      <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
                        <BadgePercent className="h-6 w-6 text-yellow-400" />
                        <span className="text-white">
                          <strong>40% de desconto</strong> em exames médicos
                        </span>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                      <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
                        <RefreshCw className="h-6 w-6 text-yellow-400" />
                        <span className="text-white">
                          <strong>Renovação automática</strong> sem ir ao Detran
                        </span>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
