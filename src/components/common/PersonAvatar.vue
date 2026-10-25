<script setup>
import { ref, computed } from 'vue'
const props = defineProps({ name: String, src: String })
const failed = ref(false)
const initials = computed(() => props.name.replace(/,.*$/, '').split(' ').filter((w) => /^[A-Za-zÑñ]/.test(w)).slice(0, 2).map((w) => w[0]).join('').toUpperCase())
</script>

<template>
  <div class="relative h-full w-full overflow-hidden bg-gradient-to-br from-mid to-deep">
    <img v-if="src && !failed" :src="src" :alt="`Photo of ${name}`" loading="lazy" class="h-full w-full object-cover object-top" @error="failed = true" />
    <div v-else class="flex h-full w-full items-center justify-center font-serif text-4xl text-gold" role="img" :aria-label="name">{{ initials }}</div>
  </div>
</template>
