<script setup>
import { RouterLink } from 'vue-router'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import LogoMark from './LogoMark.vue'
import { programs } from '@/data/programs'
import { contactInfo } from '@/data/navigation'

const quickLinks = [
  { label: 'About CCS', to: '/about' },
  { label: 'Faculty and Staff', to: '/faculty' },
  { label: 'News and Updates', to: '/news' },
  { label: 'Event Calendar', to: '/events' },
  { label: 'Contact Us', to: '/contact' }
]
const year = new Date().getFullYear()
</script>

<template>
  <footer class="always-dark relative border-t border-white/10 bg-deep">
    <div class="container-ccs grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <div class="flex items-center gap-3"><LogoMark /><p class="font-serif text-lg uppercase tracking-wider text-ink">College of Computer Studies</p></div>
        <p class="mt-5 text-sm leading-relaxed text-muted">Remember. Connect. Engage. Build. Share. Different people, one goal.</p>
      </div>

      <div>
        <h3 class="eyebrow">Quick Links</h3><div class="gold-line mt-3" />
        <ul class="mt-5 space-y-3 text-sm text-muted">
          <li v-for="l in quickLinks" :key="l.label"><RouterLink :to="l.to" class="transition-colors hover:text-gold-hover">{{ l.label }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="eyebrow">Programs</h3><div class="gold-line mt-3" />
        <ul class="mt-5 space-y-3 text-sm text-muted">
          <li v-for="p in programs" :key="p.slug"><RouterLink :to="`/programs/${p.slug}`" class="transition-colors hover:text-gold-hover">{{ p.code }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="eyebrow">Contact</h3><div class="gold-line mt-3" />
        <ul class="mt-5 space-y-4 text-sm text-muted">
          <li class="flex gap-3"><MapPinIcon class="h-5 w-5 shrink-0 text-gold" />{{ contactInfo.address }}</li>
          <li class="flex gap-3"><PhoneIcon class="h-5 w-5 shrink-0 text-gold" />{{ contactInfo.phone }}</li>
          <li class="flex gap-3"><EnvelopeIcon class="h-5 w-5 shrink-0 text-gold" />{{ contactInfo.email }}</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gold/15 py-6 text-center text-xs text-muted">© {{ year }} College of Computer Studies, Central Philippine University. All rights reserved.</div>
  </footer>
</template>
