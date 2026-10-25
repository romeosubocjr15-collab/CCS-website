<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

defineProps({
  to: { type: [String, Object], default: null },
  variant: { type: String, default: 'solid', validator: (v) => ['solid', 'outline'].includes(v) },
  arrow: { type: Boolean, default: false }
})
defineEmits(['click'])

const base = 'group inline-flex items-center justify-center gap-3 rounded-md px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
const variants = {
  solid: 'bg-gradient-to-br from-gold to-premium text-deep shadow-glow hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(200,155,60,0.3)]',
  outline: 'border border-gold/70 bg-deep/40 text-gold backdrop-blur hover:bg-gold hover:text-deep'
}
</script>

<template>
  <component :is="to ? RouterLink : 'button'" :to="to || undefined" :class="[base, variants[variant]]" @click="$emit('click', $event)">
    <slot />
    <ArrowRightIcon v-if="arrow" class="h-4 w-4 transition group-hover:translate-x-1" />
  </component>
</template>
