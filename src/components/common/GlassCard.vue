<script setup>
defineProps({ hover: Boolean, tag: { type: String, default: 'div' } })
</script>

<template>
  <component :is="tag" :class="['glass p-6', hover && 'glass-hover']"><slot /></component>
</template>
