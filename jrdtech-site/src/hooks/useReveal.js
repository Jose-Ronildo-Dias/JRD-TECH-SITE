import { useEffect, useRef } from 'react'

// Adds the "is-visible" class to elements with the "reveal" class as they
// enter the viewport. A single, restrained scroll pattern used across the
// whole site instead of scattered per-component effects.
export function useReveal(deps = []) {
  const scopeRef = useRef(null)

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const targets = scope.classList.contains('reveal')
      ? [scope, ...scope.querySelectorAll('.reveal')]
      : [...scope.querySelectorAll('.reveal')]

    if (targets.length === 0) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scopeRef
}
