<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import PageHero from '@/components/common/PageHero.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { news } from '@/data/news'

const props = defineProps({ id: String })
const item = computed(() => news.find((n) => n.id === props.id))
const failed = ref(false)
const fmt = (d) => new Date(d + 'T00:00:00').toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })
</script>

<template>
  <template v-if="item">
    <PageHero :eyebrow="`${item.topic} • ${fmt(item.date)}`" :title="item.title" />
    <article class="container-ccs max-w-4xl py-12">
      <img v-if="!failed" :src="item.img" :alt="item.title" class="mb-8 w-full rounded-xl border border-gold/30" @error="failed = true" />
      <p v-for="p in item.body" :key="p" class="mb-5 text-lg leading-relaxed text-muted">{{ p }}</p>
      <div class="mt-8 flex flex-wrap gap-4">
        <BaseButton to="/news" variant="outline"><ArrowLeftIcon class="h-4 w-4" /> Back to News</BaseButton>
        <a :href="item.url" target="_blank" rel="noopener" class="inline-flex items-center gap-2 py-4 text-sm text-gold hover:underline">Read the original post <ArrowTopRightOnSquareIcon class="h-4 w-4" /></a>
      </div>
    </article>
  </template>
  <section v-else class="container-ccs py-40 text-center"><h1 class="font-serif text-4xl text-ink">Post not found</h1><RouterLink to="/news" class="mt-6 inline-block text-gold underline">Back to news</RouterLink></section>
</template>
