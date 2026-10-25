<script setup>
import { computed } from 'vue'
const props = defineProps({ page: { type: Number, required: true }, total: { type: Number, required: true } })
const emit = defineEmits(['update:page'])
const pages = computed(() => Array.from({ length: props.total }, (_, i) => i + 1))
const go = (n) => emit('update:page', Math.min(Math.max(1, n), props.total))
const btn = 'rounded-md border border-gold/40 px-4 py-2 text-sm text-ink transition hover:border-gold hover:text-gold disabled:opacity-40'
</script>

<template>
  <nav v-if="total > 1" class="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
    <button :class="btn" :disabled="page === 1" @click="go(page - 1)">Previous</button>
    <button v-for="n in pages" :key="n" :class="[btn, n === page && '!border-gold !bg-gold !text-deep']" :aria-current="n === page ? 'page' : undefined" @click="go(n)">{{ n }}</button>
    <button :class="btn" :disabled="page === total" @click="go(page + 1)">Next</button>
  </nav>
</template>
