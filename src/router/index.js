import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const page = (title, loader) => ({ component: loader, meta: { title } })

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', ...page('Home', () => import('@/views/HomeView.vue')) },
      { path: 'about', name: 'about', ...page('About the College', () => import('@/views/AboutView.vue')) },
      { path: 'programs', name: 'programs', ...page('Academic Programs', () => import('@/views/ProgramsView.vue')) },
      { path: 'programs/bsit', name: 'bsit', ...page('BSIT', () => import('@/views/BsitView.vue')) },
      { path: 'programs/bscs', name: 'bscs', ...page('BSCS', () => import('@/views/BscsView.vue')) },
      { path: 'programs/bsdmia', name: 'bsdmia', ...page('BSDMIA', () => import('@/views/BsdmiaView.vue')) },
      { path: 'programs/blis', name: 'blis', ...page('BLIS', () => import('@/views/BlisView.vue')) },
      { path: 'faculty', name: 'faculty', ...page('Faculty and Staff', () => import('@/views/FacultyView.vue')) },
      { path: 'news', name: 'news', ...page('News and Updates', () => import('@/views/NewsView.vue')) },
      { path: 'news/:id', name: 'news-detail', ...page('News', () => import('@/views/NewsDetailView.vue')), props: true },
      { path: 'events', name: 'events', ...page('Event Calendar', () => import('@/views/EventsView.vue')) },
      { path: 'contact', name: 'contact', ...page('Contact Us', () => import('@/views/ContactView.vue')) },
      { path: ':pathMatch(.*)*', name: 'not-found', ...page('Page Not Found', () => import('@/views/NotFoundView.vue')) }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 110, behavior: 'smooth' }
    return { top: 0 }
  }
})

router.afterEach((to) => { document.title = `${to.meta.title ?? 'CCS'} | College of Computer Studies, CPU` })
export default router
