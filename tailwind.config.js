/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1A24',
        'deep-green': '#0F1E2E',
        'primary-green': '#1B4D6E',
        sage: '#8FAAB8',
        cream: '#F3EDE3',
        'off-white': '#FCFAF6',
        'light-surface': '#FFFDF9',
        'soft-border': '#D7D8CD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
