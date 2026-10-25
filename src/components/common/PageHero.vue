<script setup>
defineProps({ eyebrow: String, title: { type: String, required: true }, subtitle: String, pattern: { type: String, default: '' } })
</script>

<template>
  <section :class="['always-dark relative isolate overflow-hidden bg-deep pb-16 pt-36', pattern]">
    <img src="/images/cpu-campus-section.jpg" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full object-cover object-center" />
    <div class="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/75 to-deep/85" />
    <div class="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-ccs/20 blur-[110px]" />
    <div class="container-ccs relative z-10 animate-rise">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1 class="mt-3 font-serif text-4xl font-bold text-gold-gradient sm:text-5xl lg:text-6xl">{{ title }}</h1>
      <p v-if="subtitle" class="mt-5 max-w-3xl text-lg text-muted">{{ subtitle }}</p>
      <slot />
    </div>
  </section>
</template>
