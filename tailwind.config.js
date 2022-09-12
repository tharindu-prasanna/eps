/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/background.svg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
