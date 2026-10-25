<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import PageHero from '@/components/common/PageHero.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { events } from '@/data/news'
import { college } from '@/data/college'

const today = new Date()
const cursor = ref(new Date(today.getFullYear(), today.getMonth(), 1))
const selectedDate = ref(null)
const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const iso = (y, m, d) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

const title = computed(() => cursor.value.toLocaleDateString('en-PH', { month: 'long', year: 'numeric' }))
const cells = computed(() => {
  const y = cursor.value.getFullYear(), m = cursor.value.getMonth()
  const blanks = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate()
  return [...Array(blanks).fill(null), ...Array.from({ length: days }, (_, i) => { const date = iso(y, m, i + 1); return { day: i + 1, date, items: events.filter((e) => e.date === date) } })]
})
const monthEvents = computed(() => events.filter((e) => e.date.startsWith(iso(cursor.value.getFullYear(), cursor.value.getMonth(), 1).slice(0, 7))))
const shown = computed(() => (selectedDate.value ? events.filter((e) => e.date === selectedDate.value) : monthEvents.value))
const shift = (n) => { cursor.value = new Date(cursor.value.getFullYear(), cursor.value.getMonth() + n, 1); selectedDate.value = null }
const goToday = () => { cursor.value = new Date(today.getFullYear(), today.getMonth(), 1); selectedDate.value = null }
const jumpToLatest = () => { const d = new Date([...events].sort((a, b) => b.date.localeCompare(a.date))[0].date + 'T00:00:00'); cursor.value = new Date(d.getFullYear(), d.getMonth(), 1); selectedDate.value = null }
const isToday = (c) => c.date === iso(today.getFullYear(), today.getMonth(), today.getDate())
</script>

<template>
  <PageHero eyebrow="Event Calendar" title="Upcoming College Events" subtitle="Dated college activities from the CCS news and history. No upcoming events are currently posted on the official site." />
  <section class="container-ccs grid gap-8 py-12 lg:grid-cols-[1.3fr_1fr]">
    <div class="glass p-6">
      <div class="flex items-center justify-between">
        <button class="rounded-full p-2 text-gold hover:bg-gold/15" aria-label="Previous month" @click="shift(-1)"><ChevronLeftIcon class="h-6 w-6" /></button>
        <h2 class="font-serif text-2xl text-ink">{{ title }}</h2>
        <button class="rounded-full p-2 text-gold hover:bg-gold/15" aria-label="Next month" @click="shift(1)"><ChevronRightIcon class="h-6 w-6" /></button>
      </div>
      <div class="mt-4 grid grid-cols-7 gap-1 text-center text-xs uppercase tracking-wider text-gold"><span v-for="d in dow" :key="d">{{ d }}</span></div>
      <div class="mt-2 grid grid-cols-7 gap-1">
        <template v-for="(c, i) in cells" :key="i">
          <span v-if="!c" />
          <button v-else :class="['relative aspect-square rounded-md border text-sm transition', selectedDate === c.date ? 'border-gold bg-gold text-deep' : 'border-transparent text-ink hover:border-gold/60', isToday(c) && selectedDate !== c.date && '!border-gold/70']" @click="selectedDate = selectedDate === c.date ? null : c.date">
            {{ c.day }}<span v-if="c.items.length" class="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-logo" />
          </button>
        </template>
      </div>
      <div class="mt-6 flex flex-wrap gap-3"><BaseButton variant="outline" class="!px-5 !py-2" @click="goToday">Today</BaseButton><BaseButton variant="outline" class="!px-5 !py-2" @click="jumpToLatest">Jump to latest recorded event</BaseButton></div>
    </div>

    <div>
      <h3 class="eyebrow">{{ selectedDate ? 'Selected day' : 'This month' }}</h3>
      <ul v-if="shown.length" class="mt-4 space-y-4">
        <li v-for="e in shown" :key="e.id" class="glass p-5">
          <p class="text-xs uppercase tracking-wider text-gold">{{ new Date(e.date + 'T00:00:00').toLocaleDateString('en-PH', { dateStyle: 'long' }) }}</p>
          <h4 class="mt-1 font-serif text-lg text-ink">{{ e.title }}</h4><p class="mt-1 text-sm text-muted">{{ e.note }}</p>
          <RouterLink v-if="e.newsId" :to="`/news/${e.newsId}`" class="mt-2 inline-block text-sm text-gold hover:underline">Read the news post →</RouterLink>
        </li>
      </ul>
      <div v-else class="glass mt-4 p-6 text-muted"><p>No events recorded for {{ selectedDate ? 'this day' : 'this month' }}.</p>
        <p class="mt-2 text-sm">Follow the college for announcements: <a :href="college.contact.facebook" target="_blank" rel="noopener" class="text-gold underline">CCS Facebook group</a></p></div>
    </div>
  </section>
</template>
