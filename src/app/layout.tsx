import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cnhfacilsp.com.br'),
  title: 'CNH Fácil SP | Assessoria para Habilitação em São Paulo',
  description:
    'Assessoria especializada no novo processo CNH do Brasil. Tire sua habilitação com até 80% de economia em São Paulo Capital. Consultoria gratuita!',
  keywords: [
    'CNH',
    'habilitação',
    'carteira de motorista',
    'CNH do Brasil',
    'autoescola São Paulo',
    'tirar CNH',
    'primeira habilitação',
    'CNH categoria A',
    'CNH categoria B',
  ],
  authors: [{ name: 'CNH Fácil SP' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cnhfacilsp.com.br',
    siteName: 'CNH Fácil SP',
    title: 'CNH Fácil SP | Tire sua CNH com até 80% de economia',
    description:
      'Assessoria especializada no novo processo CNH do Brasil. Consultoria gratuita em São Paulo Capital.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CNH Fácil SP - Assessoria para Habilitação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CNH Fácil SP | Assessoria para Habilitação',
    description: 'Tire sua CNH com até 80% de economia em São Paulo',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
