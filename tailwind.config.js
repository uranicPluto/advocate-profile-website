/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D17',
          900: '#0B1726',
          850: '#0F1E32',
          800: '#15253E',
          700: '#1F3454',
          600: '#2E4973',
        },
        charcoal: {
          900: '#121418',
          800: '#171A1F',
          700: '#262A32',
          600: '#3D434E',
        },
        ivory: {
          50: '#FCFBF9',
          100: '#F7F5F0',
          200: '#EFECE3',
          300: '#E2DDD0',
          400: '#D1C9B6',
        },
        brass: {
          50: '#FAF7F0',
          100: '#F3EDE0',
          200: '#E6D7BA',
          300: '#D5BE8F',
          400: '#C5A96E',
          500: '#B89B5E',
          600: '#A18449',
          700: '#7F6736',
          800: '#5F4D27',
        },
        slate: {
          muted: '#68717C',
          dark: '#48505B',
          light: '#8F99A5',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 23, 38, 0.05)',
        'card': '0 10px 30px -4px rgba(11, 23, 38, 0.07)',
        'elevated': '0 20px 40px -10px rgba(11, 23, 38, 0.12)',
        'brass': '0 8px 24px -4px rgba(184, 155, 94, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
