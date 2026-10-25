<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import PageHero from '@/components/common/PageHero.vue'
import NewsCard from '@/components/news/NewsCard.vue'
import PaginationBar from '@/components/common/PaginationBar.vue'
import { useSearch } from '@/composables/useSearch'
import { news } from '@/data/news'

const route = useRoute()
const PAGE_SIZE = 2
const topics = ['All', ...new Set(news.map((n) => n.topic))]
const topic = ref('All')
const newestFirst = ref(true)
const page = ref(1)

const { query, filtered } = useSearch(news, ['title', 'excerpt', 'topic'], String(route.query.q ?? ''))
watch(() => route.query.q, (q) => { query.value = String(q ?? '') })
watch([query, topic, newestFirst], () => { page.value = 1 })

const results = computed(() => {
  const list = filtered.value.filter((n) => topic.value === 'All' || n.topic === topic.value)
  return [...list].sort((a, b) => (newestFirst.value ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)))
})
const pages = computed(() => Math.max(1, Math.ceil(results.value.length / PAGE_SIZE)))
const visible = computed(() => results.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE))
const reset = () => { query.value = ''; topic.value = 'All' }
</script>

<template>
  <PageHero eyebrow="News and Updates" title="Be Updated With the College" subtitle="College news, activities and announcements." />
  <section class="container-ccs py-12">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center">
      <label class="relative flex-1"><span class="sr-only">Search news</span>
        <MagnifyingGlassIcon class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold" />
        <input v-model="query" type="search" placeholder="Search news…" class="w-full rounded-md border border-gold/40 bg-transparent py-3 pl-12 pr-4 text-ink placeholder:text-muted focus:border-gold focus:outline-none" />
      </label>
      <div class="flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
        <button v-for="t in topics" :key="t" :class="['rounded-full border px-4 py-2 text-sm transition', topic === t ? 'border-gold bg-gold text-deep' : 'border-gold/40 text-ink hover:border-gold']" @click="topic = t">{{ t }}</button>
      </div>
      <button class="rounded-md border border-gold/40 px-4 py-2 text-sm text-ink hover:border-gold" @click="newestFirst = !newestFirst">Sort: {{ newestFirst ? 'Newest' : 'Oldest' }} first</button>
    </div>

    <div v-if="visible.length" class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"><NewsCard v-for="n in visible" :key="n.id" :item="n" /></div>
    <div v-else class="mt-16 text-center"><p class="text-muted">No news match your search.</p><button class="mt-4 text-gold underline" @click="reset">Clear filters</button></div>
    <PaginationBar v-model:page="page" :total="pages" />
  </section>
</template>
