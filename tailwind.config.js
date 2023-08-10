/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontSize : {
      '4xl' : '1.875vw',
      '2xl' : '1.25vw',
      '6xl' : '3.333vw',
      '9xl' : '6.666vw',
      'xl' : '1.04vw',
      'base' : '0.833vw',
    }
  },
  plugins: [require("daisyui")]
};