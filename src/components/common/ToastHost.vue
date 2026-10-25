<script setup>
import { CheckCircleIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useUiStore } from '@/stores/ui'
const ui = useUiStore()
</script>

<template>
  <div class="pointer-events-none fixed right-4 top-24 z-[100] flex w-80 flex-col gap-3">
    <TransitionGroup name="toast">
      <div v-for="t in ui.toasts" :key="t.id" class="glass pointer-events-auto flex items-start gap-3 p-4 text-sm text-ink">
        <CheckCircleIcon v-if="t.type === 'success'" class="h-5 w-5 shrink-0 text-logo" />
        <ExclamationTriangleIcon v-else class="h-5 w-5 shrink-0 text-gold" />
        <p class="flex-1">{{ t.message }}</p>
        <button aria-label="Dismiss" @click="ui.dismissToast(t.id)"><XMarkIcon class="h-4 w-4 text-muted hover:text-gold" /></button>
      </div>
    </TransitionGroup>
  </div>
</template>
