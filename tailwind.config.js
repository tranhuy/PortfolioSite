module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '5/6': '83%'
      },
      translate: {
        '1/5': '20%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}