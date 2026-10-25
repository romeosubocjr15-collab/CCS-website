<script setup>
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/common/BaseButton.vue'
import ProgramCard from './ProgramCard.vue'
import { programs } from '@/data/programs'
import { college } from '@/data/college'

const scrollDown = () => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <section class="always-dark relative isolate flex min-h-screen flex-col overflow-hidden bg-deep pt-24">
    <img src="/images/admin-building.webp" alt="Central Philippine University Administration Building" class="absolute inset-0 h-full w-full object-cover object-[center_58%]" />
    <div class="absolute inset-0" style="background: linear-gradient(90deg, rgba(10,31,51,.97) 0%, rgba(10,31,51,.86) 36%, rgba(10,31,51,.38) 68%, rgba(10,31,51,.56) 100%), linear-gradient(180deg, rgba(10,31,51,.62) 0%, rgba(10,31,51,.06) 45%, rgba(10,31,51,.96) 100%)" />
    <div class="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-ccs/20 blur-[140px]" />
    <div class="pointer-events-none absolute -right-32 bottom-20 -z-10 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[140px]" />
    <div class="pointer-events-none absolute left-0 top-32 -z-10 h-px w-72 origin-left -rotate-[35deg] bg-gradient-to-r from-gold/60 to-transparent" />

    <div class="container-ccs relative z-10 flex flex-1 items-center py-12">
      <div class="max-w-4xl animate-rise">
        <div class="flex items-center gap-4"><span class="h-px w-14 bg-gold" /><p class="eyebrow">Central Philippine University <span class="mx-2">•</span> Iloilo, Philippines</p></div>
        <h1 class="mt-8 font-serif font-bold uppercase leading-[1.05]">
          <span class="block text-5xl text-ink sm:text-6xl lg:text-7xl">College of</span>
          <span class="text-gold-gradient block text-5xl sm:text-6xl lg:text-7xl">Computer Studies</span>
        </h1>
        <p class="mt-8 font-serif text-xl text-ink sm:text-2xl">{{ college.motto }}</p>
        <p class="font-serif text-xl italic text-ink sm:text-2xl">{{ college.tagline }}</p>
        <div class="mt-10 flex flex-wrap gap-5">
          <BaseButton to="/programs" arrow>Explore Programs</BaseButton>
          <BaseButton to="/about" variant="outline">Learn More</BaseButton>
        </div>
      </div>
    </div>

    <button class="absolute bottom-56 right-8 z-10 hidden animate-bob text-gold lg:block" aria-label="Scroll to programs" @click="scrollDown"><ChevronDoubleDownIcon class="h-6 w-6" /></button>

    <div id="programs" class="container-ccs relative z-10 pb-10">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><ProgramCard v-for="p in programs" :key="p.slug" :program="p" /></div>
    </div>
  </section>
</template>
