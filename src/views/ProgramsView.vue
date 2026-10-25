<script setup>
import PageHero from '@/components/common/PageHero.vue'
import ProgramCard from '@/components/home/ProgramCard.vue'
import { programs } from '@/data/programs'
</script>

<template>
  <PageHero eyebrow="Academic Programs" title="Your Future Begins Here" subtitle="Four degree programs, each with its own page covering objectives, curriculum, careers and faculty." />
  <section class="container-ccs py-16"><div class="grid gap-6 md:grid-cols-2"><ProgramCard v-for="p in programs" :key="p.slug" :program="p" detailed /></div></section>
</template>
