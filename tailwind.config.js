export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        forest: '#064C3B',
        emerald: '#073F34',
        gold: '#C6A15B',
        ivory: '#F8F6F0',
        cream: '#F2EEE4',
        charcoal: '#202722',
        sage: '#A7B8A5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      maxWidth: {
        page: '1440px',
      },
    },
  },
  plugins: [],
};
