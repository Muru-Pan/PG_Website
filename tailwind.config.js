/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm cream backgrounds
        cream: {
          50: '#FDFAF5',
          100: '#FAF4E8',
          200: '#F5E9D1',
          300: '#EEDCB8',
          400: '#E5CB99',
          500: '#D9B87A',
        },
        // Terracotta primary
        terra: {
          50: '#FDF3EF',
          100: '#FAE1D8',
          200: '#F3BFB0',
          300: '#E99A86',
          400: '#DC7660',
          500: '#C9583E',  // main
          600: '#A84430',
          700: '#863424',
          800: '#622519',
          900: '#40170F',
        },
        // Forest green accent
        forest: {
          50: '#EEF5F1',
          100: '#D2E8DA',
          200: '#A6D0B5',
          300: '#72B48C',
          400: '#469568',
          500: '#2D7A4F',  // main
          600: '#226040',
          700: '#1A4B31',
          800: '#113522',
          900: '#0A2014',
        },
        // Sandy warm neutrals
        sand: {
          50: '#FDFAF6',
          100: '#F8F1E5',
          200: '#EEE0CA',
          300: '#E0CAA9',
          400: '#CEB28A',
          500: '#B99870',
          600: '#9D7E58',
          700: '#7E6344',
          800: '#5C4830',
          900: '#3A2E1E',
        },
        // Warm dark (replaces black)
        charcoal: {
          50: '#F5F3F0',
          100: '#E8E4DE',
          200: '#D0C9BF',
          300: '#B4AB9E',
          400: '#958B7D',
          500: '#766D60',
          600: '#5C5449',
          700: '#433E36',
          800: '#2C2924',
          900: '#1A1713',
          950: '#0E0C09',
        },
        // Warm accent yellow
        saffron: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          400: '#FBBC04',
          500: '#F59C00',
          600: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        accent: ['"DM Serif Display"', 'serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-warm': 'pulseWarm 2.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.7s ease forwards',
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseWarm: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,88,62, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(201,88,62, 0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      boxShadow: {
        'warm': '0 4px 24px rgba(201,88,62, 0.15)',
        'warm-lg': '0 12px 48px rgba(201,88,62, 0.25)',
        'card': '0 2px 16px rgba(58,46,30, 0.08)',
        'card-hover': '0 12px 40px rgba(58,46,30, 0.16)',
        'green': '0 4px 20px rgba(45,122,79, 0.2)',
      },
    },
  },
  plugins: [],
}
