/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172018',
        'deep-green': '#172A1C',
        'primary-green': '#326B45',
        sage: '#AABBA7',
        cream: '#F3EDE3',
        'off-white': '#FCFAF6',
        'light-surface': '#FFFDF9',
        'soft-border': '#D7D8CD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
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
