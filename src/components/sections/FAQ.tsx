'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FadeIn } from '@/components/animations'

const faqs = [
  {
    question: 'Posso usar meu próprio veículo nas aulas?',
    answer:
      'Com a nova lei, você pode sim utilizar seu próprio veículo para as aulas práticas, desde que ele esteja em conformidade com as exigências do Detran (equipamentos de segurança, documentação em dia). Mas também disponibilizamos veículos para quem preferir.',
  },
  {
    question: 'Quanto tempo leva para tirar a CNH agora?',
    answer:
      'Com a nova lei, não há prazo obrigatório para conclusão. Você pode fazer no seu ritmo. Na prática, quem se dedica consegue em 2-3 meses. Mas o importante é que você não perde o processo se demorar.',
  },
  {
    question: 'E se eu reprovar no exame?',
    answer:
      'Com a nova CNH do Brasil, o primeiro reteste é gratuito! Isso vale tanto para a prova teórica quanto para a prática. Além disso, oferecemos suporte adicional para você se preparar melhor.',
  },
  {
    question: 'Vocês atendem qual região de São Paulo?',
    answer:
      'Atendemos toda a região de São Paulo Capital. Nossos instrutores estão distribuídos por várias regiões para facilitar seu acesso às aulas práticas.',
  },
  {
    question: 'Qual a diferença entre vocês e uma autoescola tradicional?',
    answer:
      'Somos uma assessoria especializada no NOVO processo. Enquanto autoescolas tradicionais ainda cobram pelo curso teórico (que agora é gratuito), nós te orientamos a aproveitar todas as vantagens da nova lei, pagando apenas pelo que realmente precisa.',
  },
  {
    question: 'Como funciona o benefício Bom Motorista?',
    answer:
      'Se você já tem CNH e não possui infrações, a nova lei garante 40% de desconto nos exames médicos e psicológicos, além de renovação automática da habilitação sem precisar ir ao Detran.',
  },
  {
    question: 'O curso teórico é realmente gratuito?',
    answer:
      'Sim! Com a CNH do Brasil, todo o conteúdo teórico está disponível gratuitamente online, através do site e app do governo. Nós te guiamos pelo conteúdo e tiramos suas dúvidas durante o processo.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Perguntas Frequentes
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-12 text-lg text-gray-600">
              Tire suas dúvidas sobre o novo processo de habilitação
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
