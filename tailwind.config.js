/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage:{
        'hero-image':'url("./assets/switchbg.jpg")',
        'work-image':'url("./assets/home-digital-agency-img-02.jpg")'
      }
    },
  },
  plugins: [],
};
