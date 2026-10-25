import { defineStore } from 'pinia'
import { reactive, ref, watch } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const theme = ref(localStorage.getItem('ccs-theme') || 'light')
  const toasts = reactive([])
  let nextId = 1

  watch(theme, (v) => {
    document.documentElement.classList.toggle('light', v === 'light')
    localStorage.setItem('ccs-theme', v)
  }, { immediate: true })

  const toggleTheme = () => { theme.value = theme.value === 'dark' ? 'light' : 'dark' }

  function pushToast(message, type = 'success', duration = 3500) {
    const id = nextId++
    toasts.push({ id, message, type })
    setTimeout(() => dismissToast(id), duration)
  }
  function dismissToast(id) {
    const i = toasts.findIndex((t) => t.id === id)
    if (i !== -1) toasts.splice(i, 1)
  }

  return { theme, toasts, toggleTheme, pushToast, dismissToast }
})
