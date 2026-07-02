'use client'

import { useEffect, useRef } from 'react'
import type { NeatConfig } from '@firecms/neat'

type NeatGradientInstance = {
  yOffset: number
  destroy: () => void
}

type NeatBackgroundProps = {
  config: NeatConfig
}

export function NeatBackground({ config }: NeatBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let gradient: NeatGradientInstance | null = null
    let isLoading = false
    let cancelled = false
    const allowed = () => desktopQuery.matches && !reduceMotionQuery.matches
    const handleScroll = () => {
      if (gradient) {
        gradient.yOffset = window.scrollY
      }
    }
    const destroyGradient = () => {
      gradient?.destroy()
      gradient = null
    }
    const createGradient = async () => {
      if (gradient || isLoading || cancelled || !allowed()) return

      isLoading = true
      const { NeatGradient } = await import('@firecms/neat')
      isLoading = false
      if (cancelled || !allowed()) return
      gradient = new NeatGradient({
        ref: canvas,
        ...config,
      }) as unknown as NeatGradientInstance
      gradient.yOffset = window.scrollY
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          void createGradient()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(canvas)
    const handleAllowedChange = () => {
      if (allowed()) void createGradient()
      else destroyGradient()
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    desktopQuery.addEventListener('change', handleAllowedChange)
    reduceMotionQuery.addEventListener('change', handleAllowedChange)
    return () => {
      cancelled = true
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      desktopQuery.removeEventListener('change', handleAllowedChange)
      reduceMotionQuery.removeEventListener('change', handleAllowedChange)
      destroyGradient()
    }
  }, [config])
  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block"
      ref={canvasRef}
    />
  )
}
