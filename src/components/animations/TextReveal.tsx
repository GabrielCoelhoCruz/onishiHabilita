'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Component = 'span',
}: TextRevealProps) {
  const MotionComponent = motion.create(Component)

  return (
    <span className="inline-block overflow-hidden">
      <MotionComponent
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        className={`inline-block ${className ?? ''}`}
      >
        {children}
      </MotionComponent>
    </span>
  )
}
