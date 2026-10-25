<script setup>
import { useCountUp } from '@/composables/useCountUp'
const props = defineProps({ target: { type: Number, required: true }, label: { type: String, required: true }, suffix: { type: String, default: '' } })
const { value, el } = useCountUp(props.target)
</script>

<template>
  <div ref="el" class="glass bg-white p-6 text-center">
    <p class="font-serif text-4xl font-semibold text-deep sm:text-5xl">{{ value }}{{ suffix }}</p>
    <p class="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{{ label }}</p>
  </div>
</template>
