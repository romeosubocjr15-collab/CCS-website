import { programs } from './programs'
import { college } from './college'

export const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us', to: '/about',
    children: [
      { label: 'History', to: '/about#history' },
      { label: 'Vision And Mission', to: '/about#mission' },
      { label: 'Message Of The Dean', to: '/about#dean' },
      { label: 'Linkages', to: '/about#linkages' },
      { label: 'News And Updates', to: '/news' }
    ]
  },
  { label: 'Academic Programs', to: '/programs', children: programs.map((p) => ({ label: p.code, desc: p.name, to: `/programs/${p.slug}` })) },
  { label: 'Faculty and Staff', to: '/faculty' },
  { label: 'Event Calendar', to: '/events' },
  { label: 'Contact Us', to: '/contact' }
]

export const contactInfo = { address: college.contact.address, phone: college.contact.phone, email: college.contact.email }
