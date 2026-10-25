<script setup>
import { computed } from 'vue'
import { ChevronUpIcon } from '@heroicons/vue/24/outline'
import { useScrollY } from '@/composables/useScrollY'

const { y } = useScrollY()
const visible = computed(() => y.value > 500)
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <Transition name="toast">
    <button v-if="visible" aria-label="Scroll to top" class="fixed bottom-6 right-6 z-50 rounded-full border border-gold/60 bg-deep/90 p-3 text-gold shadow-glow backdrop-blur transition hover:bg-gold hover:text-deep" @click="toTop">
      <ChevronUpIcon class="h-5 w-5" />
    </button>
  </Transition>
</template>
