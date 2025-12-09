import { useCallback } from 'react'

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function smoothScrollTo(targetId: string, duration = 800) {
  const target = document.getElementById(targetId)
  if (!target) return

  const headerOffset = 80
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset
  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const easeProgress = easeInOutCubic(progress)

    window.scrollTo(0, startPosition + distance * easeProgress)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

export function useSmoothScroll() {
  const scrollTo = useCallback((targetId: string, duration?: number) => {
    smoothScrollTo(targetId, duration)
  }, [])

  return { scrollTo }
}
