/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#00CED1',
          cyan: '#00BFFF',
          'dark-blue': '#1E3A5F',
          'darker-blue': '#0F1F3A',
        },
      },
    },
  },
  plugins: [],
}

