import { ref, onMounted, onBeforeUnmount } from 'vue'

/** Animates 0 -> target once the element scrolls into view. */
export function useCountUp(target, duration = 1400) {
  const value = ref(0)
  const el = ref(null)
  let observer, done = false

  const run = () => {
    const t0 = performance.now()
    const tick = (t) => {
      const k = Math.min((t - t0) / duration, 1)
      value.value = Math.round(target * (1 - Math.pow(1 - k, 3)))
      if (k < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done) { done = true; run() }
    }, { threshold: 0.4 })
    if (el.value) observer.observe(el.value)
  })
  onBeforeUnmount(() => observer && observer.disconnect())
  return { value, el }
}
