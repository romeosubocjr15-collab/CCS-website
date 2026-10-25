<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { college } from '@/data/college'
import { faculty } from '@/data/faculty'
import SectionHeading from '@/components/common/SectionHeading.vue'
import GlassCard from '@/components/common/GlassCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import FacultyCard from '@/components/faculty/FacultyCard.vue'
import FacultyModal from '@/components/faculty/FacultyModal.vue'

const props = defineProps({ program: { type: Object, required: true } })
const selected = ref(null)
const logoFailed = ref(false)
const people = computed(() => faculty.filter((f) => f.programs.includes(props.program.slug)))
const sections = [['overview', 'Overview'], ['objectives', 'Objectives'], ['areas', 'Areas of Study'], ['curriculum', 'Curriculum'], ['careers', 'Careers'], ['faculty', 'Faculty'], ['community', 'Student Life']]
const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
const accent = computed(() => ({ color: props.program.accent }))
</script>

<template>
  <div>
    <section :class="['always-dark relative isolate overflow-hidden bg-deep pb-20 pt-36', program.pattern]">
      <img src="/images/cpu-campus-section.jpg" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full object-cover object-center" />
      <div class="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/75 to-deep/85" />
      <div class="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full blur-[120px]" :style="{ background: program.accent, opacity: 0.18 }" />
      <div class="container-ccs relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div class="animate-rise">
          <p class="eyebrow" :style="accent">Academic Program</p>
          <h1 class="mt-3 font-serif text-5xl font-bold text-ink sm:text-6xl">{{ program.code }}</h1>
          <p class="mt-2 font-serif text-xl" :style="accent">{{ program.name }}</p>
          <p class="mt-5 max-w-2xl text-lg text-muted">{{ program.description }}</p>
          <div class="mt-8 flex flex-wrap gap-4">
            <BaseButton to="/contact" arrow>Inquire About {{ program.code }}</BaseButton>
            <BaseButton variant="outline" @click="jump('faculty')">Meet the Faculty</BaseButton>
          </div>
        </div>
        <component :is="program.icon" class="hidden h-56 w-56 lg:block" :style="accent" stroke-width="0.6" />
      </div>
    </section>

    <nav class="always-dark sticky top-24 z-30 border-b border-gold/20 bg-deep/90 backdrop-blur" aria-label="Page sections">
      <div class="container-ccs flex gap-2 overflow-x-auto py-3">
        <button v-for="[id, label] in sections" :key="id" class="shrink-0 rounded-full border border-gold/30 px-4 py-1.5 text-sm text-ink transition hover:border-gold hover:text-gold" @click="jump(id)">{{ label }}</button>
      </div>
    </nav>

    <section id="overview" class="container-ccs scroll-mt-40 py-16">
      <SectionHeading eyebrow="Program Overview" title="What you will study" />
      <div class="grid items-start gap-8 lg:grid-cols-[1fr_280px]">
        <p class="text-lg leading-relaxed text-muted">{{ program.overview }}</p>
        <GlassCard class="flex items-center justify-center">
          <img v-if="!logoFailed" :src="program.logo" :alt="`${program.code} program emblem`" class="max-h-48 object-contain" @error="logoFailed = true" />
          <component :is="program.icon" v-else class="h-24 w-24" :style="accent" />
        </GlassCard>
      </div>
      <GlassCard v-if="program.achievement" class="mt-8"><p class="eyebrow">Achievement</p><p class="mt-2 text-ink">{{ program.achievement }}</p></GlassCard>
    </section>

    <section id="objectives" class="container-ccs scroll-mt-40 py-12">
      <SectionHeading eyebrow="Program Educational Objectives" title="Objectives" />
      <ol class="grid gap-4 md:grid-cols-2">
        <li v-for="(o, i) in college.peos" :key="i" class="glass flex gap-4 p-5"><span class="font-serif text-3xl" :style="accent">{{ i + 1 }}</span><span class="text-muted">{{ o }}</span></li>
      </ol>
      <p class="mt-3 text-xs text-muted">Objectives are listed as published on the CCS program pages.</p>
    </section>

    <section id="areas" class="container-ccs scroll-mt-40 py-12">
      <SectionHeading eyebrow="Relevant Areas of Study" :title="program.areasTitle" />
      <ul class="flex flex-wrap gap-3">
        <li v-for="a in program.areas" :key="a" class="glass glass-hover px-5 py-3 text-sm text-ink">{{ a }}</li>
      </ul>
    </section>

    <section id="curriculum" class="container-ccs scroll-mt-40 py-12">
      <SectionHeading eyebrow="Curriculum Highlights" title="Curriculum and graduate outcomes" />
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-4"><p v-for="c in program.curriculum" :key="c" class="leading-relaxed text-muted">{{ c }}</p></div>
        <GlassCard>
          <h3 class="eyebrow">Graduates are able to</h3>
          <ul class="mt-4 space-y-3 text-sm text-muted"><li v-for="o in program.outcomes" :key="o" class="flex gap-3"><span :style="accent">◆</span>{{ o }}</li></ul>
        </GlassCard>
      </div>
    </section>

    <section id="careers" class="container-ccs scroll-mt-40 py-12">
      <SectionHeading eyebrow="Career Opportunities" :title="program.careersTitle" />
      <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="c in program.careers" :key="c" class="glass glass-hover p-5 text-ink" :style="{ borderLeft: `3px solid ${program.accent}` }">{{ c }}</li>
      </ul>
      <p v-if="program.careerNote" class="mt-6 max-w-3xl text-muted">{{ program.careerNote }}</p>
    </section>

    <section id="faculty" class="container-ccs scroll-mt-40 py-12">
      <SectionHeading eyebrow="Teachers Associated With This Program" :title="`${program.code} Faculty`" />
      <div v-if="people.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <FacultyCard v-for="p in people" :key="p.id" :person="p" @select="selected = $event" />
      </div>
      <p v-else class="text-muted">No faculty are assigned to this program on the official CCS website.</p>
      <p class="mt-4 text-xs text-muted">Assignments are exactly as published on the CCS Faculty and Staff page. <RouterLink to="/faculty" class="text-gold underline">See all faculty</RouterLink></p>
    </section>

    <section id="community" class="container-ccs scroll-mt-40 py-12 pb-20">
      <SectionHeading eyebrow="Campus Life" title="Student organization" />
      <GlassCard v-if="program.org"><h3 class="font-serif text-2xl text-gold">{{ program.org.name }}</h3><p class="mt-3 max-w-3xl text-muted">{{ program.org.text }}</p></GlassCard>
      <p v-else class="text-muted">The official CCS website does not list a student organization for this program.</p>
      <a :href="program.source" target="_blank" rel="noopener" class="mt-8 inline-flex items-center gap-2 text-sm text-gold hover:underline">Source: official CCS {{ program.code }} page <ArrowTopRightOnSquareIcon class="h-4 w-4" /></a>
    </section>

    <FacultyModal v-if="selected" :person="selected" @close="selected = null" />
  </div>
</template>
