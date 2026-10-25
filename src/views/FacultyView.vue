<script setup>
import { ref, computed } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import PageHero from '@/components/common/PageHero.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import FacultyCard from '@/components/faculty/FacultyCard.vue'
import FacultyModal from '@/components/faculty/FacultyModal.vue'
import { useSearch } from '@/composables/useSearch'
import { faculty } from '@/data/faculty'
import { programs } from '@/data/programs'

const { query, filtered } = useSearch(faculty, ['name', 'title', 'assignment'])
const active = ref('all')
const selected = ref(null)

const groups = computed(() => [
  ...programs.filter((p) => active.value === 'all' || active.value === p.slug)
    .map((p) => ({ key: p.slug, title: `${p.code} — ${p.name}`, members: filtered.value.filter((f) => f.programs.includes(p.slug)) })),
  ...(active.value === 'all' ? [{ key: 'other', title: 'College Leadership and Staff', members: filtered.value.filter((f) => !f.programs.length) }] : [])
])
const total = computed(() => groups.value.reduce((n, g) => n + g.members.length, 0))
const chips = computed(() => [{ slug: 'all', code: 'All' }, ...programs])
</script>

<template>
  <PageHero eyebrow="Faculty and Staff" title="Meet Our People" subtitle="Teaching as a way of life. Faculty are grouped by program; coordinators and department heads appear under the programs they lead." />
  <section class="container-ccs py-12">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center">
      <label class="relative flex-1"><span class="sr-only">Search faculty</span>
        <MagnifyingGlassIcon class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold" />
        <input v-model="query" type="search" placeholder="Search by name, title or program…" class="w-full rounded-md border border-gold/40 bg-transparent py-3 pl-12 pr-4 text-ink placeholder:text-muted focus:border-gold focus:outline-none" />
      </label>
      <div class="flex flex-wrap gap-2" role="group" aria-label="Filter by program">
        <button v-for="c in chips" :key="c.slug" :class="['rounded-full border px-4 py-2 text-sm transition', active === c.slug ? 'border-gold bg-gold text-deep' : 'border-gold/40 text-ink hover:border-gold']" @click="active = c.slug">{{ c.code }}</button>
      </div>
    </div>
    <p class="mt-4 text-sm text-muted" aria-live="polite">{{ total }} result{{ total === 1 ? '' : 's' }}</p>

    <template v-for="g in groups" :key="g.key">
      <div class="mt-12">
        <SectionHeading :title="g.title" />
        <div v-if="g.members.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FacultyCard v-for="p in g.members" :key="p.id" :person="p" @select="selected = $event" />
        </div>
        <p v-else class="text-muted">No matching people. The official CCS site lists no additional faculty for this group.</p>
      </div>
    </template>
    <p class="mt-12 text-xs text-muted">Source: official CCS Faculty and Staff page. Specializations are not published there, so none are shown.</p>
  </section>
  <FacultyModal v-if="selected" :person="selected" @close="selected = null" />
</template>
