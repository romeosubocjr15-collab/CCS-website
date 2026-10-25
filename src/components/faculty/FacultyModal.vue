<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import PersonAvatar from '@/components/common/PersonAvatar.vue'
import { getProgram } from '@/data/programs'

defineProps({ person: { type: Object, required: true } })
const emit = defineEmits(['close'])
const onKey = (e) => e.key === 'Escape' && emit('close')
onMounted(() => { window.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden' })
onBeforeUnmount(() => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' })
</script>

<template>
  <Teleport to="body">
    <div class="always-dark fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" :aria-label="person.name" @click.self="emit('close')">
      <div class="glass relative grid max-h-[92vh] w-full max-w-3xl overflow-y-auto md:grid-cols-[260px_1fr]" style="background:rgba(10,31,51,.97)">
        <button class="absolute right-3 top-3 z-10 rounded-full bg-deep/80 p-2 text-gold hover:bg-gold hover:text-deep" aria-label="Close" @click="emit('close')"><XMarkIcon class="h-5 w-5" /></button>
        <div class="aspect-[4/5] md:aspect-auto"><PersonAvatar :name="person.name" :src="person.img" /></div>
        <div class="p-7">
          <p class="eyebrow">{{ person.title }}</p>
          <h3 class="mt-2 font-serif text-2xl text-ink">{{ person.name }}</h3>
          <dl class="mt-5 space-y-3 text-sm text-muted">
            <div><dt class="text-xs uppercase tracking-wider text-gold">Assignment</dt><dd>{{ person.assignment }}</dd></div>
            <div><dt class="text-xs uppercase tracking-wider text-gold">Specialization</dt><dd>Not published on the official CCS website.</dd></div>
          </dl>
          <div v-if="person.programs.length" class="mt-6 flex flex-wrap gap-2">
            <RouterLink v-for="s in person.programs" :key="s" :to="`/programs/${s}`" class="rounded-full border border-gold/50 px-4 py-1 text-sm text-gold hover:bg-gold hover:text-deep" @click="emit('close')">{{ getProgram(s).code }} page</RouterLink>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
