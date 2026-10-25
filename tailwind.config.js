/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        deep: '#0A1F33',
        mid: '#0D5C63',
        emerald: '#0F766E',
        nav: '#0B4A43',
        'nav-scrolled': 'rgba(7, 31, 30, 0.95)',
        'nav-active': '#C89B3C',
        'nav-hover': '#E6B85C',
        'gold-hover': '#E6B85C',
        logo: '#96D83E',
        ccs: '#0F766E',
        gold: '#C89B3C',
        premium: '#E6B85C',
        surface: '#062E2A',
        'surface-alt': '#0A3934',
        ink: '#F8F9FA',
        muted: '#C7D2D9'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0,0,0,0.08)',
        glow: '0 8px 20px rgba(200,155,60,0.3)',
        navbar: '0 8px 30px rgba(0,0,0,0.18)'
      },
      keyframes: {
        rise: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'none' } },
        bob: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(8px)' } }
      },
      animation: { rise: 'rise .8s cubic-bezier(.2,.7,.2,1) both', bob: 'bob 1.8s ease-in-out infinite' }
    }
  }
}
