<script setup>
import { RouterLink } from 'vue-router'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import PageHero from '@/components/common/PageHero.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import GlassCard from '@/components/common/GlassCard.vue'
import PersonAvatar from '@/components/common/PersonAvatar.vue'
import { college } from '@/data/college'
import { faculty } from '@/data/faculty'

const dean = faculty.find((f) => f.id === 'quijano')
const chips = [['history', 'History'], ['mission', 'Vision & Mission'], ['dean', 'Dean’s Message'], ['linkages', 'Linkages'], ['sources', 'Sources']]
const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <PageHero eyebrow="About Us" title="About the College" subtitle="Building bridges between gaps since 1995 — different people united by one goal.">
    <div class="mt-8 flex flex-wrap gap-2">
      <button v-for="[id, l] in chips" :key="id" class="rounded-full border border-gold/40 px-4 py-1.5 text-sm text-ink hover:border-gold hover:text-gold" @click="jump(id)">{{ l }}</button>
    </div>
  </PageHero>

  <section id="history" class="container-ccs scroll-mt-28 py-16">
    <SectionHeading eyebrow="Remember" title="College History" />
    <ol class="relative ml-3 space-y-8 border-l border-gold/40 pl-8">
      <li v-for="h in college.history" :key="h.year" class="relative">
        <span class="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-gold bg-deep" />
        <p class="font-serif text-2xl text-gold">{{ h.year }}</p><p class="mt-1 max-w-3xl text-muted">{{ h.text }}</p>
      </li>
    </ol>
  </section>

  <section id="mission" class="container-ccs scroll-mt-28 py-16">
    <SectionHeading eyebrow="Purpose" title="Vision and Mission" />
    <div class="grid gap-6 lg:grid-cols-3">
      <GlassCard><h3 class="eyebrow">Vision</h3><p class="mt-3 text-muted">{{ college.vision }}</p></GlassCard>
      <GlassCard><h3 class="eyebrow">Mission</h3><p class="mt-3 text-muted">{{ college.mission }}</p></GlassCard>
      <GlassCard><h3 class="eyebrow">Quality Policy</h3><p class="mt-3 text-muted">{{ college.qualityPolicy }}</p></GlassCard>
    </div>
    <h3 class="mt-12 font-serif text-2xl text-ink">Program Educational Objectives</h3>
    <ol class="mt-5 grid gap-4 md:grid-cols-2"><li v-for="(o, i) in college.peos" :key="i" class="glass flex gap-4 p-5"><span class="font-serif text-3xl text-gold">{{ i + 1 }}</span><span class="text-muted">{{ o }}</span></li></ol>
  </section>

  <section id="dean" class="container-ccs scroll-mt-28 py-16">
    <SectionHeading eyebrow="Engage" title="Message of the Dean" />
    <GlassCard class="grid gap-8 md:grid-cols-[220px_1fr]">
      <div class="aspect-[4/5] overflow-hidden rounded-lg"><PersonAvatar :name="dean.name" :src="dean.img" /></div>
      <div class="space-y-4 italic text-muted"><p v-for="p in college.dean.message" :key="p">{{ p }}</p>
        <p class="not-italic"><span class="font-serif text-xl text-gold">{{ college.dean.name }}</span><br /><span class="text-sm">{{ college.dean.title }}</span></p></div>
    </GlassCard>
  </section>

  <section id="linkages" class="container-ccs scroll-mt-28 py-16">
    <SectionHeading eyebrow="Connect" title="Partners and Memberships" />
    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><li v-for="p in college.partners" :key="p" class="glass glass-hover p-6 text-center font-serif text-xl text-ink">{{ p }}</li></ul>
    <p class="mt-4 text-sm text-muted">The official Linkages page shows additional partner logos that are not named in text; see it for the full list.
      <a href="https://ccs.cpu.edu.ph/linkages/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-gold hover:underline">Open linkages <ArrowTopRightOnSquareIcon class="h-4 w-4" /></a></p>
  </section>

  <section id="sources" class="container-ccs scroll-mt-28 py-16 pb-24">
    <SectionHeading eyebrow="References" title="Information sources" />
    <p class="mb-4 text-sm text-muted">College, program, faculty and news content on this site is taken from the official CCS website. Faculty photos and program emblems are linked from it.</p>
    <ul class="grid gap-2 text-sm sm:grid-cols-2"><li v-for="[l, u] in college.sources" :key="u"><a :href="u" target="_blank" rel="noopener" class="text-gold hover:underline">{{ l }}</a></li></ul>
  </section>
</template>
