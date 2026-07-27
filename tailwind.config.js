/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f2d52',
          'navy-dark': '#0a1f3a',
          'navy-light': '#1a4070',
          green: '#5aaa28',
          'green-dark': '#448a1e',
          'green-light': '#6dbf35',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
