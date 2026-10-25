<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

defineProps({ item: { type: Object, required: true } })
const failed = ref(false)
const fmt = (d) => new Date(d + 'T00:00:00').toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })
</script>

<template>
  <RouterLink :to="`/news/${item.id}`" class="glass glass-hover group flex flex-col overflow-hidden">
    <div class="aspect-[16/9] bg-gradient-to-br from-mid to-deep">
      <img v-if="!failed" :src="item.img" :alt="item.title" loading="lazy" class="h-full w-full object-cover" @error="failed = true" />
    </div>
    <div class="flex flex-1 flex-col p-6">
      <div class="flex items-center justify-between text-xs"><span class="eyebrow !tracking-[0.18em]">{{ item.topic }}</span><time class="text-muted" :datetime="item.date">{{ fmt(item.date) }}</time></div>
      <h3 class="mt-3 font-serif text-xl text-ink group-hover:text-gold">{{ item.title }}</h3>
      <p class="mt-2 flex-1 text-sm text-muted">{{ item.excerpt }}</p>
      <span class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">Read more <ArrowRightIcon class="h-4 w-4 transition group-hover:translate-x-1" /></span>
    </div>
  </RouterLink>
</template>
