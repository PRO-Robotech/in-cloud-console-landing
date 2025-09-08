import { useEffect, useMemo, useRef, useState } from 'react'

type TOptions = {
  minVisibleRatio?: number
  rootMargin?: string
  bottomOffset?: number
}

export const useActiveSection = (ids: string[] = [], options: TOptions = {}): string | null => {
  const { minVisibleRatio = 0.001, rootMargin = '0px', bottomOffset = 0 } = options

  const [closestId, setClosestId] = useState<string | null>(null)
  const visibleIdsRef = useRef<Set<string>>(new Set())

  const idToIndex = useMemo(() => {
    const m = new Map<string, number>()
    ids.forEach((id, i) => m.set(id, i))
    return m
  }, [ids])

  useEffect(() => {
    if (typeof window === 'undefined' || ids.length === 0) {
      return () => {}
    }

    const elements = ids.map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el)

    if (elements.length === 0) {
      return () => {}
    }

    let rafId: number | null = null

    function distanceToPageEnd(el: HTMLElement) {
      const { bottom } = el.getBoundingClientRect()
      const bottomDocY = window.scrollY + bottom
      const docEndY = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - bottomOffset
      return Math.max(0, docEndY - bottomDocY)
    }

    function updateClosest() {
      if (visibleIdsRef.current.size === 0) {
        // 🚫 Do NOT reset to null — keep previous closestId
        return
      }

      const candidates: Array<{
        id: string
        dist: number
        absBottom: number
        order: number
      }> = []

      visibleIdsRef.current.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        const { bottom } = el.getBoundingClientRect()
        const absBottom = window.scrollY + bottom
        const dist = distanceToPageEnd(el)
        const order = idToIndex.get(id) ?? Number.MAX_SAFE_INTEGER
        candidates.push({ id, dist, absBottom, order })
      })

      if (candidates.length === 0) {
        return // 🚫 don’t overwrite previous value
      }

      candidates.sort((a, b) => {
        if (a.dist !== b.dist) return a.dist - b.dist
        if (a.absBottom !== b.absBottom) return b.absBottom - a.absBottom
        return a.order - b.order
      })

      const best = candidates[0]?.id
      if (best && best !== closestId) {
        setClosestId(best)
      }
    }

    const scheduleUpdate = () => {
      if (rafId != null) return
      rafId = window.requestAnimationFrame(() => {
        rafId = null
        updateClosest()
      })
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { target, isIntersecting, intersectionRatio } = entry
          const { id } = target as HTMLElement
          if (!id) return
          if (isIntersecting && intersectionRatio >= minVisibleRatio) {
            visibleIdsRef.current.add(id)
          } else {
            visibleIdsRef.current.delete(id)
          }
        })
        scheduleUpdate()
      },
      { root: null, rootMargin, threshold: [minVisibleRatio] },
    )

    elements.forEach(el => observer.observe(el))

    const onScroll = () => scheduleUpdate()
    const onResize = () => scheduleUpdate()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    const ro = new ResizeObserver(() => scheduleUpdate())
    ro.observe(document.body)

    scheduleUpdate()

    return () => {
      elements.forEach(el => observer.unobserve(el))
      observer.disconnect()
      window.removeEventListener('scroll', onScroll as EventListener)
      window.removeEventListener('resize', onResize as EventListener)
      ro.disconnect()
      if (rafId != null) cancelAnimationFrame(rafId)
    }
  }, [ids, idToIndex, minVisibleRatio, rootMargin, bottomOffset, closestId])

  return closestId
}
