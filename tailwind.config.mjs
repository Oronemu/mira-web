/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1C1B1F',
          soft: '#3A3940',
          muted: '#6B6A72',
          faint: '#9C9BA3',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          deep: '#F2EDE4',
        },
        rose: { DEFAULT: '#D9B7B0', deep: '#B98D85' },
        sage: { DEFAULT: '#A4B5A2', deep: '#7A8E78' },
        ochre: { DEFAULT: '#D9B36C', deep: '#B5904B' },
        night: {
          DEFAULT: '#0F0F12',
          surface: '#17171B',
          deep: '#070708',
        },
      },
      borderRadius: {
        glass: '28px',
        'glass-sm': '18px',
        'glass-lg': '36px',
      },
      boxShadow: {
        glass:
          '0 30px 60px -20px rgba(28,27,31,0.18), 0 8px 24px -8px rgba(28,27,31,0.08)',
        'glass-soft':
          '0 10px 30px -10px rgba(28,27,31,0.10), 0 2px 8px -2px rgba(28,27,31,0.04)',
        'glass-dark':
          '0 30px 60px -20px rgba(0,0,0,0.7), 0 8px 24px -8px rgba(0,0,0,0.4)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(0.6deg)' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(40px,-30px,0) scale(1.06)' },
          '66%': { transform: 'translate3d(-30px,20px,0) scale(0.96)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        floaty: 'floaty 8s ease-in-out infinite',
        drift: 'drift 24s ease-in-out infinite',
        'drift-slow': 'drift 36s ease-in-out infinite',
        shimmer: 'shimmer 1.4s ease-out',
        'fade-up': 'fade-up 0.9s cubic-bezier(.2,.8,.2,1) both',
        'fade-in': 'fade-in 1.2s ease-out both',
      },
      transitionTimingFunction: {
        quiet: 'cubic-bezier(.2,.8,.2,1)',
      },
    },
  },
  plugins: [],
};
