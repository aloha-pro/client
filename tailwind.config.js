/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        'blue-wapple': '#081590',
      },
      colors: {
        blue: {
          wapple: '#081590',
        },
      },
    },
  },
  plugins: [],
}
