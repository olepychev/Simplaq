/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nekst': ['nekst', 'system-ui'],
      },
      screens: {
        'xs': '500px',
        'sm': '600px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1920px',
      },
      backgroundImage: {
        'linearPink': 'linear-gradient(180.19deg, rgba(0, 0, 0, 0.2) 0.16%, rgba(0, 0, 0, 0.16) 59.34%, rgba(233, 59, 101, 0.48) 99.84%)',
      },
      colors: {
        'black': '#17181B',
        'black-500': '#232528',
        'white': '#FFFFFF',
        'orange': '#F18C53',
        'pink': '#E83A64',
        'gray': '#F9FAFB',
        'graylight': '#EEF1F4',
        'gray-light-500': '#F5F5F5',
        'grayDark': '#646572',
        'grayDark2': '#94959F',
        "grayDark3": "#646572",
        'redLight': '#FDF4F5',
        'red': '#F64D4D',
        'yellow': '#FFC738',
        'yellowLight': '#FDF3ED',
        'greenLight': '#F4FCF9',
        'green': '#22C55E',
        'overlay': 'rgb(23,24,27,70%)',
        'purple': '#B353FF',
        'blue': '#18BFFB',
      },
      boxShadow: {
        'sm': '0px 24px 70px -16px rgba(188, 194, 197, 0.12)',
      },
      fontSize: {
        's': '10px',
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '32px',
        '2.5xl': '44px',
        '3xl': '56px',
      }
    },
  },
  plugins: [],
}

