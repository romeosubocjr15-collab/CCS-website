<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
defineProps({ program: { type: Object, required: true }, detailed: Boolean })
</script>

<template>
  <RouterLink :to="`/programs/${program.slug}`" class="glass glass-hover group relative flex gap-5 overflow-hidden p-6" :style="{ borderColor: detailed ? program.accent + '99' : undefined }">
    <component :is="program.icon" class="relative h-14 w-14 shrink-0" :style="{ color: program.accent }" stroke-width="1.2" />
    <div class="relative">
      <h3 class="font-serif text-2xl text-gold">{{ program.code }}</h3>
      <p class="mt-1 text-sm leading-snug text-ink">{{ program.name }}</p>
      <p v-if="detailed" class="mt-3 text-sm text-muted">{{ program.description }}</p>
      <ArrowRightIcon class="mt-4 h-5 w-5 text-gold transition group-hover:translate-x-2" />
    </div>
  </RouterLink>
</template>
