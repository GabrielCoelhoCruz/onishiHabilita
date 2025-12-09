import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Hero } from '@/components/sections/Hero'
import { WhatChanged } from '@/components/sections/WhatChanged'
import { GoodDriver } from '@/components/sections/GoodDriver'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ForWho } from '@/components/sections/ForWho'
import { Benefits } from '@/components/sections/Benefits'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { LeadForm } from '@/components/sections/LeadForm'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatChanged />
        <GoodDriver />
        <HowItWorks />
        <ForWho />
        <Benefits />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
