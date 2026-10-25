<script setup>
defineProps({ eyebrow: String, title: { type: String, required: true }, centered: Boolean })
</script>

<template>
  <div :class="['mb-10', centered && 'text-center']">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <div :class="['gold-line mt-3', centered && 'mx-auto']" />
    <h2 class="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl"><slot>{{ title }}</slot></h2>
  </div>
</template>
