module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        'hover-hover': {'raw': '(hover: hover)'},
      },
      inset: {
        '5/6': '83%'
      },
      translate: {
        '1/5': '20%'
      },
      keyframes: {
        grow: {
          '0%': {
            transform: 'scaleX(0)'
          },
          '100%': {
            transform: 'scaleX(1)'
          }
        }
      }, 
      animation: {
        grow: 'grow 2s ease-in-out both',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}