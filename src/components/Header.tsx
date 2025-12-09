'use client'

import { useCallback } from 'react'
import { Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const navLinks = [
  { href: 'o-que-mudou', label: 'O que mudou' },
  { href: 'como-funciona', label: 'Como funciona' },
  { href: 'diferenciais', label: 'Diferenciais' },
  { href: 'faq', label: 'Dúvidas' },
]

export function Header() {
  const { scrollTo } = useSmoothScroll()

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault()
      scrollTo(targetId)
    },
    [scrollTo]
  )

  const scrollToForm = useCallback(() => {
    scrollTo('formulario')
  }, [scrollTo])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Car className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">CNH Fácil SP</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-gray-600 transition-colors duration-200 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button onClick={scrollToForm} className="bg-blue-600 hover:bg-blue-700">
          Quero minha CNH
        </Button>
      </div>
    </header>
  )
}
