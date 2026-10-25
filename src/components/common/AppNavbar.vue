<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon, ChevronDownIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import LogoMark from './LogoMark.vue'
import { navItems } from '@/data/navigation'
import { useUiStore } from '@/stores/ui'
import { useScrollY } from '@/composables/useScrollY'

const route = useRoute()
const router = useRouter()
const ui = useUiStore()
const { y: scrollPosition } = useScrollY()

const activeDropdownLabel = ref(null)
const isMobileMenuOpen = ref(false)
const isSearchFormOpen = ref(false)
const searchQuery = ref('')
let dropdownCloseTimer

const shouldShowSolidNavbar = computed(() => scrollPosition.value > 40 || isMobileMenuOpen.value)

const openDropdown = (label) => { clearTimeout(dropdownCloseTimer); activeDropdownLabel.value = label }
const scheduleDropdownClose = () => { dropdownCloseTimer = setTimeout(() => (activeDropdownLabel.value = null), 140) }

function submitNewsSearch() {
  const searchTerm = searchQuery.value.trim()
  if (!searchTerm) return
  router.push({ name: 'news', query: { q: searchTerm } })
  searchQuery.value = ''
}

watch(() => route.fullPath, () => {
  activeDropdownLabel.value = null
  isMobileMenuOpen.value = false
  isSearchFormOpen.value = false
})
</script>

<template>
  <header :class="['fixed inset-x-0 top-0 z-50 h-[110px] border-b transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out', shouldShowSolidNavbar ? 'border-slate-200 bg-white shadow-navbar' : 'always-dark border-transparent bg-transparent shadow-none backdrop-blur-0']">
    <div class="flex h-[110px] w-full items-center justify-between gap-4 px-6 md:px-12">
      <RouterLink to="/" class="flex shrink-0 items-center" aria-label="CCS home">
        <img v-if="shouldShowSolidNavbar" src="/images/Warriors-Logo-2.png" alt="CCS Warriors" class="h-[82px] w-auto shrink-0 object-contain" />
        <LogoMark v-else navbar />
      </RouterLink>

      <nav class="hidden items-center gap-7 xl:flex 2xl:gap-9" aria-label="Primary">
        <div v-for="navigationItem in navItems" :key="navigationItem.label" class="relative" @mouseenter="navigationItem.children && openDropdown(navigationItem.label)" @mouseleave="navigationItem.children && scheduleDropdownClose()">
          <component :is="navigationItem.to ? RouterLink : 'button'" :to="navigationItem.to" :class="['group relative flex items-center gap-2 py-4 text-lg font-semibold transition-colors duration-200 after:absolute after:bottom-2 after:left-0 after:h-0.5 after:w-0 after:transition-[width] after:duration-200 after:content-[\'\'] hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nav-hover', shouldShowSolidNavbar ? 'text-slate-800 after:bg-nav-active hover:text-nav-active' : 'text-white after:bg-nav-hover hover:text-nav-hover']" :active-class="navigationItem.to === '/' ? '' : '!text-nav-active after:!w-full after:!bg-nav-active'" exact-active-class="!text-nav-active after:!w-full after:!bg-nav-active">
            {{ navigationItem.label }}
            <ChevronDownIcon v-if="navigationItem.children" :class="['h-3 w-3 transition-transform duration-200', activeDropdownLabel === navigationItem.label && 'rotate-180']" />
          </component>

          <Transition name="toast">
            <ul v-if="navigationItem.children && activeDropdownLabel === navigationItem.label" :class="['glass absolute left-0 top-[calc(100%-12px)] overflow-hidden !rounded-md py-1', navigationItem.children[0].desc ? 'w-80' : 'w-64']" @mouseenter="openDropdown(navigationItem.label)" @mouseleave="scheduleDropdownClose()">
              <li v-for="dropdownItem in navigationItem.children" :key="dropdownItem.label">
                <RouterLink :to="dropdownItem.to" class="block border-l-2 border-transparent px-5 py-3 text-sm text-ink transition-colors duration-300 hover:border-nav-hover hover:bg-nav-hover/10 hover:text-nav-hover">
                  <span class="font-semibold">{{ dropdownItem.label }}</span>
                  <span v-if="dropdownItem.desc" class="mt-0.5 block text-xs text-muted">{{ dropdownItem.desc }}</span>
                </RouterLink>
              </li>
            </ul>
          </Transition>
        </div>
      </nav>

      <div :class="['flex items-center gap-2 xl:hidden', shouldShowSolidNavbar ? 'text-slate-800' : 'text-white']">
        <button aria-label="Toggle theme" :class="['rounded-full p-2 transition-colors duration-200 hover:text-nav-active', shouldShowSolidNavbar ? 'hover:bg-slate-900/5' : 'hover:bg-white/10']" @click="ui.toggleTheme()">
          <SunIcon v-if="ui.theme === 'dark'" class="h-6 w-6" />
          <MoonIcon v-else class="h-6 w-6" />
        </button>
        <button aria-label="Search" :class="['rounded-full p-2 transition-colors duration-200 hover:text-nav-active', shouldShowSolidNavbar ? 'hover:bg-slate-900/5' : 'hover:bg-white/10']" @click="isSearchFormOpen = !isSearchFormOpen">
          <MagnifyingGlassIcon class="h-6 w-6" />
        </button>
        <button aria-label="Menu" :class="['rounded-full p-2 transition-colors duration-200 hover:text-nav-active xl:hidden', shouldShowSolidNavbar ? 'hover:bg-slate-900/5' : 'hover:bg-white/10']" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <XMarkIcon v-if="isMobileMenuOpen" class="h-7 w-7" />
          <Bars3Icon v-else class="h-7 w-7" />
        </button>
      </div>
    </div>

    <Transition name="page">
      <form v-if="isSearchFormOpen" class="absolute inset-x-0 top-full bg-nav-scrolled px-6 pb-4 shadow-navbar backdrop-blur-[12px]" @submit.prevent="submitNewsSearch">
        <input v-model="searchQuery" type="search" autofocus placeholder="Search news, events, programs…" class="mx-auto block w-full max-w-[1400px] rounded-md border border-white/20 bg-white/5 px-5 py-3 text-white placeholder:text-white/60 focus:border-nav-hover focus:outline-none focus:ring-2 focus:ring-nav-hover/40" />
      </form>
    </Transition>

    <Transition name="page">
      <nav v-if="isMobileMenuOpen" class="absolute inset-x-0 top-full max-h-[calc(100dvh-110px)] overflow-y-auto bg-nav-scrolled px-6 pb-6 shadow-navbar backdrop-blur-[12px] xl:hidden" aria-label="Mobile">
        <div v-for="navigationItem in navItems" :key="navigationItem.label" class="border-t border-white/10 py-3">
          <RouterLink v-if="navigationItem.to && !navigationItem.children" :to="navigationItem.to" class="block text-base font-bold text-white transition-colors hover:text-nav-hover">{{ navigationItem.label }}</RouterLink>
          <template v-else>
            <p class="text-base font-bold text-nav-active">{{ navigationItem.label }}</p>
            <RouterLink v-for="childItem in navigationItem.children" :key="childItem.label" :to="childItem.to" class="mt-2 block pl-4 text-sm text-white/80 transition-colors hover:text-nav-hover">{{ childItem.label }}<span v-if="childItem.desc"> — {{ childItem.desc }}</span></RouterLink>
          </template>
        </div>
      </nav>
    </Transition>
  </header>
  
</template>
