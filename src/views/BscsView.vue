<script setup>
import ProgramPage from '@/components/program/ProgramPage.vue'
import { getProgram } from '@/data/programs'
</script>

<template>
  <ProgramPage :program="getProgram('bscs')" />
</template>
