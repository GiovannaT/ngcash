/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'ng-pink': '#FE00FE',
      'ng-green': '#01CA30',
      'ng-white': '#FFFFFF',
      'ng-gray':{
        100: '#505050',
        200: '#1E1E1E',
        300: '#141414',
        400: '#0E0E0E',
      },
      'ng-red': '#A83737'
    }
  },
  plugins: [],
};
