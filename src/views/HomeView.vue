<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/home/HeroSection.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import GlassCard from '@/components/common/GlassCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import Counter from '@/components/common/Counter.vue'
import PersonAvatar from '@/components/common/PersonAvatar.vue'
import NewsCard from '@/components/news/NewsCard.vue'
import { college } from '@/data/college'
import { programs } from '@/data/programs'
import { faculty } from '@/data/faculty'
import { news } from '@/data/news'

const latest = computed(() => [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3))
const years = new Date().getFullYear() - college.founded
const stats = [
  { target: years, label: 'Years since 1995', suffix: '+' },
  { target: faculty.length, label: 'Faculty & Staff Listed' },
  { target: programs.length, label: 'Degree Programs Featured' },
  { target: college.partners.length, label: 'Named Partner Academies' }
]
const orgs = programs.filter((p) => p.org)
const dean = faculty.find((f) => f.id === 'quijano')
</script>

<template>
  <HeroSection />

  <section class="container-ccs py-20">
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><Counter v-for="s in stats" :key="s.label" v-bind="s" /></div>
  </section>

  <section class="container-ccs grid items-center gap-10 py-12 lg:grid-cols-2">
    <div>
      <SectionHeading eyebrow="Remember" title="How it started" />
      <p class="text-lg leading-relaxed text-muted">{{ college.history[0].text }}</p>
      <BaseButton to="/about#history" class="mt-8" arrow>Read Our History</BaseButton>
    </div>
    <GlassCard class="flex gap-6">
      <div class="h-40 w-32 shrink-0 overflow-hidden rounded-lg"><PersonAvatar :name="dean.name" :src="dean.img" /></div>
      <div>
        <p class="eyebrow">Engage</p>
        <h3 class="mt-2 font-serif text-xl text-ink">Message from the Dean</h3>
        <p class="mt-3 text-sm text-muted">{{ college.dean.message[0] }}</p>
        <RouterLink to="/about#dean" class="mt-3 inline-block text-sm font-semibold text-gold hover:underline">{{ college.dean.name }}, {{ college.dean.title }} →</RouterLink>
      </div>
    </GlassCard>
  </section>

  <section class="container-ccs py-16">
    <SectionHeading eyebrow="Student Organizations" title="Find your community" />
    <div class="grid gap-6 md:grid-cols-3">
      <RouterLink v-for="p in orgs" :key="p.slug" :to="`/programs/${p.slug}`" class="glass glass-hover p-6">
        <p class="eyebrow">{{ p.code }}</p><h3 class="mt-2 font-serif text-xl text-ink">{{ p.org.name }}</h3><p class="mt-3 text-sm text-muted">{{ p.org.text }}</p>
      </RouterLink>
    </div>
  </section>

  <section class="container-ccs py-16">
    <SectionHeading eyebrow="News and Updates" title="Be updated with the college" />
    <div class="grid gap-6 md:grid-cols-3"><NewsCard v-for="n in latest" :key="n.id" :item="n" /></div>
    <div class="mt-8 text-center"><BaseButton to="/news" variant="outline">View More News</BaseButton></div>
  </section>

  <section class="container-ccs py-16">
    <SectionHeading eyebrow="Connect" title="Our partners and memberships" centered />
    <ul class="flex flex-wrap justify-center gap-4">
      <li v-for="p in college.partners" :key="p" class="glass px-8 py-4 font-serif text-lg text-ink">{{ p }}</li>
    </ul>
    <p class="mt-4 text-center"><RouterLink to="/about#linkages" class="text-sm text-gold hover:underline">See linkages</RouterLink></p>
  </section>

  <section class="always-dark relative mt-10 overflow-hidden bg-gradient-to-br from-mid to-deep py-20 text-center">
    <div class="container-ccs">
      <p class="eyebrow">Your future begins here</p>
      <h2 class="mt-4 font-serif text-3xl font-bold text-ink sm:text-5xl">Ready to join the CCS family?</h2>
      <p class="mx-auto mt-4 max-w-2xl text-muted">Questions about programs or admission? Reach the college secretary or message us.</p>
      <div class="mt-8 flex flex-wrap justify-center gap-4"><BaseButton to="/contact" arrow>Contact Us</BaseButton><BaseButton to="/faculty" variant="outline">Meet Our Faculty</BaseButton></div>
    </div>
  </section>
</template>
