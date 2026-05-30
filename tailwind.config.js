/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C5A23E', // Gold
        background: '#050505',
        surface: '#0A0A12',
        panel: '#111118',
        'panel-hover': '#1A1A25',
        violet: '#7B2FBE',
        success: '#00FF9F',
        danger: '#FF0A3E',
        'text-primary': '#E8E6E3',
        'text-secondary': '#6B6B7B',
        'text-muted': '#3A3A4A',
        border: '#1F1F2E',
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'sans-serif'],
        display: ['Space Grotesk', 'Clash Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to bottom right, #C5A23E, #8C6F2A)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ticker-scroll': 'ticker-scroll 30s linear infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(197, 162, 62, 0.2)' },
          '50%': { opacity: .7, boxShadow: '0 0 40px rgba(197, 162, 62, 0.4)' },
        },
        'ticker-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
