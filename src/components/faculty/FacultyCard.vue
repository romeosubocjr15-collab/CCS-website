<script setup>
import PersonAvatar from '@/components/common/PersonAvatar.vue'
defineProps({ person: { type: Object, required: true } })
defineEmits(['select'])
</script>

<template>
  <button class="glass glass-hover group overflow-hidden text-left" @click="$emit('select', person)">
    <div class="aspect-[4/5] w-full"><PersonAvatar :name="person.name" :src="person.img" /></div>
    <div class="p-5">
      <h3 class="font-serif text-lg leading-snug text-ink group-hover:text-gold">{{ person.name }}</h3>
      <p class="mt-1 text-sm text-muted">{{ person.title }}</p>
      <p class="mt-1 text-xs uppercase tracking-wider text-gold">{{ person.assignment }}</p>
    </div>
  </button>
</template>
