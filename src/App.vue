<script setup>
import { RouterView } from 'vue-router'
import ToastHost from '@/components/common/ToastHost.vue'
import ScrollTopButton from '@/components/common/ScrollTopButton.vue'
</script>

<template>
  <RouterView />
  <ToastHost />
  <ScrollTopButton />
</template>
