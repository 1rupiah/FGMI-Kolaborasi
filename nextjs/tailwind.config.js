/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ini untuk Next.js dengan struktur src
    './pages/**/*.{js,ts,jsx,tsx}', // Jika Anda masih memiliki folder pages di luar src
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Jika Anda menggunakan App Router di Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}