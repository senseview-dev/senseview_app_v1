/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#087aa2',
          dark: '#172a4f',
        },
        gray: {
          50: '#ffffff',
          100: '#f0f0f0',
          200: '#adadad',
          300: '#757575',
          400: '#474747',
          500: '#333333',
          600: '#292929',
          700: '#222222',
          800: '#1a1a1a',
          900: '#0f0f0f',
        },
        red: {
          500: '#c71606',
        },
        yellow: {
          500: '#e0bb00',
        },
        cyan: {
          500: '#00a5cf',
        },
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '3.99': '3.99px',
      },
      lineHeight: {
        '16.8': '16.8px',
        '21.6': '21.6px',
        '22.4': '22.4px',
        '25.6': '25.6px',
        '33.6': '33.6px',
      },
    },
  },
  plugins: [],
} 