/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cherry: {
          DEFAULT: '#870A1E',
          dark: '#38050E',
          burgundy: '#540915',
          deep: '#240307',
          light: '#AB132B',
          crimson: '#C9183B',
          rose: '#E2526E',
          blush: '#FCE7EB',
          soft: '#FFF1F3',
          card: '#FCEBEF',
        },
        plum: {
          DEFAULT: '#870A1E',
          dark: '#38050E',
          burgundy: '#540915',
          light: '#AB132B',
          soft: '#FFF1F3',
        },
        taupe: {
          DEFAULT: '#B8999E',
          light: '#E2D1D4',
          border: '#E5CBD0',
          dark: '#7A5B61',
        },
        cream: {
          DEFAULT: '#FFF5F6',
          ivory: '#FFFBFB',
          card: '#FCEBEF',
        },
        rose: {
          muted: '#D97E90',
        },
        ink: {
          DEFAULT: '#36161B',
          muted: '#684B50',
          light: '#9C7D82',
        },
        gold: {
          subtle: '#D4AF37',
          light: '#F3D89D',
        }
      },
      fontFamily: {
        serif: ['"Bodoni Moda"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Bodoni Moda"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', '"Inter"', 'sans-serif'],
        script: ['"Pinyon Script"', '"Alex Brush"', 'cursive'],
        editorial: ['"Italiana"', '"Bodoni Moda"', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(56, 5, 14, 0.08)',
        'luxury': '0 30px 60px -12px rgba(56, 5, 14, 0.18)',
        'cherry-glow': '0 0 35px rgba(201, 24, 59, 0.35)',
        'plum-glow': '0 0 35px rgba(201, 24, 59, 0.35)',
      }
    },
  },
  plugins: [],
}
