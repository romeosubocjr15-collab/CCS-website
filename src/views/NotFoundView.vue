<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<template>
  <section class="container-ccs flex min-h-[80vh] flex-col items-center justify-center pt-32 text-center">
    <p class="eyebrow">Error 404</p><div class="gold-line mx-auto mt-4" />
    <h1 class="mt-6 font-serif text-5xl text-ink">Page not found</h1>
    <p class="mt-4 text-muted">The page you are looking for does not exist or has moved.</p>
    <div class="mt-10 flex gap-4"><BaseButton to="/" arrow>Back Home</BaseButton><BaseButton to="/contact" variant="outline">Contact Us</BaseButton></div>
  </section>
</template>
