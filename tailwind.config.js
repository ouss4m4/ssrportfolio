module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script', 'cursive'],
      lines: ['Merriweather', 'Georgia', 'serif'],
      headers: ['Montserrat', 'sans-serif'],
    },

    extend: {
      screens: {
        '3xl': '1800px',
      },
      maxWidth: {
        '8xl': '100rem',
      },
      colors: {
        accent: {
          DEFAULT: '#00FFFF',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#282c35',
          700: '#363c48',
        },
        whitetxt: {
          DEFAULT: 'rgba(255, 255, 255, 0.88)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
