import { ref, computed, unref } from 'vue'

/** Generic text search over a list. `keys` are the object fields that are searched. */
export function useSearch(items, keys, initial = '') {
  const query = ref(initial)
  const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    const list = unref(items)
    return q ? list.filter((item) => keys.some((k) => String(item[k] ?? '').toLowerCase().includes(q))) : list
  })
  return { query, filtered }
}
