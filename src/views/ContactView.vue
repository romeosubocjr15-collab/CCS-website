<script setup>
import { reactive, ref } from 'vue'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
import PageHero from '@/components/common/PageHero.vue'
import GlassCard from '@/components/common/GlassCard.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { college } from '@/data/college'
import { programs } from '@/data/programs'
import { useUiStore } from '@/stores/ui'

const c = college.contact
const ui = useUiStore()
const form = reactive({ name: '', email: '', topic: '', message: '' })
const errors = reactive({ name: '', email: '', topic: '', message: '' })
const sent = ref(false)

const rules = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your full name.'),
  email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? '' : 'Enter a valid email address.'),
  topic: (v) => (v ? '' : 'Choose a topic.'),
  message: (v) => (v.trim().length >= 10 ? '' : 'Message must be at least 10 characters.')
}
const check = (k) => (errors[k] = rules[k](form[k]))

function submit() {
  const bad = Object.keys(rules).filter((k) => check(k))
  if (bad.length) return ui.pushToast('Please fix the highlighted fields.', 'error')
  // Demonstration-only: no server. We open the visitor's email app addressed to the college secretary.
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
  window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(form.topic)}&body=${body}`
  sent.value = true
  ui.pushToast('Opening your email app to send this message (demo form).')
}
const reset = () => { Object.assign(form, { name: '', email: '', topic: '', message: '' }); Object.keys(errors).forEach((k) => (errors[k] = '')); sent.value = false }
const input = 'w-full rounded-md border bg-transparent px-4 py-3 text-ink placeholder:text-muted focus:outline-none'
</script>

<template>
  <PageHero eyebrow="We Will Gladly Assist You" title="Contact Details" subtitle="Reach the College of Computer Studies by phone, email or social media, or visit us on campus." />

  <section class="container-ccs py-14">
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <GlassCard hover><PhoneIcon class="h-8 w-8 text-gold" /><h3 class="eyebrow mt-4">Telephone</h3><a :href="c.phoneHref" class="mt-2 block text-ink hover:text-gold">{{ c.phone }}</a></GlassCard>
      <GlassCard hover><EnvelopeIcon class="h-8 w-8 text-gold" /><h3 class="eyebrow mt-4">CPU Mail</h3><a :href="`mailto:${c.email}`" class="mt-2 block break-all text-ink hover:text-gold">{{ c.email }}</a></GlassCard>
      <GlassCard hover><UserGroupIcon class="h-8 w-8 text-gold" /><h3 class="eyebrow mt-4">Social Media</h3><a :href="c.facebook" target="_blank" rel="noopener" class="mt-2 block text-ink hover:text-gold">College of Computer Studies – CPU</a></GlassCard>
      <GlassCard hover><MapPinIcon class="h-8 w-8 text-gold" /><h3 class="eyebrow mt-4">Location</h3><a :href="c.mapLink" target="_blank" rel="noopener" class="mt-2 block text-ink hover:text-gold">{{ c.address }}</a></GlassCard>
    </div>
  </section>

  <section class="container-ccs grid gap-10 pb-20 lg:grid-cols-2">
    <div>
      <SectionHeading eyebrow="Send a message" title="Contact form" />
      <p class="mb-5 rounded-md border border-gold/40 px-4 py-3 text-sm text-muted"><b class="text-gold">Demonstration only:</b> this form has no server. On submit it opens your email app with a message addressed to {{ c.email }}.</p>
      <form class="space-y-4" novalidate @submit.prevent="submit">
        <div><label class="mb-1 block text-sm text-muted" for="name">Full name</label><input id="name" v-model="form.name" :class="[input, errors.name ? 'border-red-400' : 'border-gold/40']" @blur="check('name')" /><p v-if="errors.name" class="mt-1 text-sm text-red-400" role="alert">{{ errors.name }}</p></div>
        <div><label class="mb-1 block text-sm text-muted" for="email">Email</label><input id="email" v-model="form.email" type="email" :class="[input, errors.email ? 'border-red-400' : 'border-gold/40']" @blur="check('email')" /><p v-if="errors.email" class="mt-1 text-sm text-red-400" role="alert">{{ errors.email }}</p></div>
        <div><label class="mb-1 block text-sm text-muted" for="topic">Topic</label>
          <select id="topic" v-model="form.topic" :class="[input, 'bg-surface text-ink', errors.topic ? 'border-red-400' : 'border-gold/40']" @blur="check('topic')">
            <option value="">Select a topic…</option><option>General inquiry</option><option v-for="p in programs" :key="p.slug">{{ p.code }} program inquiry</option><option>Faculty and staff</option>
          </select><p v-if="errors.topic" class="mt-1 text-sm text-red-400" role="alert">{{ errors.topic }}</p></div>
        <div><label class="mb-1 block text-sm text-muted" for="message">Message</label><textarea id="message" v-model="form.message" rows="5" :class="[input, errors.message ? 'border-red-400' : 'border-gold/40']" @blur="check('message')" /><p v-if="errors.message" class="mt-1 text-sm text-red-400" role="alert">{{ errors.message }}</p></div>
        <div class="flex flex-wrap gap-3"><BaseButton type="submit" arrow>Send Message</BaseButton><BaseButton variant="outline" @click="reset">Clear</BaseButton></div>
        <p v-if="sent" class="text-sm text-logo">Your email app should have opened. If not, write to {{ c.email }} directly.</p>
      </form>
    </div>
    <div>
      <SectionHeading eyebrow="Find us" title="Campus location" />
      <div class="glass overflow-hidden"><iframe :src="c.mapEmbed" title="Map to Mary Thomas Hall, Central Philippine University" class="h-[420px] w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /></div>
      <a :href="c.mapLink" target="_blank" rel="noopener" class="mt-4 inline-block text-gold hover:underline">Open in Google Maps →</a>
    </div>
  </section>
</template>
