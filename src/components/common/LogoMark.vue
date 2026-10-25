<script setup>
defineProps({ navbar: Boolean })
</script>

<template>
  <img src="/images/logo.png" alt="CCS logo" :class="['shrink-0 object-contain', navbar ? 'h-[68px] w-auto' : 'h-12 w-12 rounded-md']" />
</template>
