import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollY() {
  const y = ref(0)
  const update = () => { y.value = window.scrollY }
  onMounted(() => { update(); window.addEventListener('scroll', update, { passive: true }) })
  onBeforeUnmount(() => window.removeEventListener('scroll', update))
  return { y }
}
