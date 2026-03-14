/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./destination_details.tsx",
    "./about_destinations.tsx",
    "./constants.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        heritage: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
        narrative: ['Playfair Display', 'serif'],
        racing: ['Racing Sans One', 'cursive'],
        righteous: ['Righteous', 'cursive'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        theme: {
          primary: '#0EA5E9',
          secondary: '#3B82F6',
          accent: '#0284C7',
          blue: '#0EA5E9',
          midnight: '#0a0a0a',
          cream: '#fdfcf9',
          gold: '#c5a059',
        }
      }
    },
  },
  plugins: [],
}
