/** @type {import('tailwindcss').Config} */
import plugin from 'flowbite/plugin';
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {}
  },
  plugins: [plugin]
}
