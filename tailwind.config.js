/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f7',
          100: '#dce5ec',
          200: '#b9ccd9',
          300: '#8faabf',
          400: '#6288a6',
          500: '#406b8c',
          600: '#0B3B5A',
          700: '#093147',
          800: '#072635',
          900: '#051c23',
          950: '#021115',
        },
        secondary: {
          50: '#f2f8fa',
          100: '#e1eef3',
          200: '#bfdbe6',
          300: '#93c1d3',
          400: '#5193B3',
          500: '#3d7a9a',
          600: '#2f6181',
          700: '#244968',
          800: '#1a314f',
          900: '#101e36',
          950: '#081220',
        },
        cream: {
          50: '#fffefa',
          100: '#FFF5DE',
          200: '#fff0c4',
          300: '#ffe69b',
          400: '#ffd766',
          500: '#ffc933',
          600: '#ffa600',
          700: '#cc8500',
          800: '#996400',
          900: '#664200',
          950: '#332100',
        },
        background: '#FBF7E8',
      },
    },
  },
  plugins: [],
};