/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "curs": ["Playwrite PE, cursive"],
        "base": ["Rajdhani, sans-serif"]
      },
      backgroundImage: {
        'cg': 'linear-gradient(to right, #d4ffe5, #fff2d4, #ffe5e6)',
      },
    },
  },
  plugins: [],
}

