/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#17213c',
        brand: { 50: '#eef8ff', 100: '#d9eeff', 500: '#1677ff', 600: '#0965e8', 700: '#0754c7' },
        coral: '#ff6b4a',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      boxShadow: { soft: '0 12px 35px rgba(22, 34, 66, 0.08)' },
    },
  },
  plugins: [],
}
