/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('resource/bg/background.png')",
      },
      fontFamily: {
        'ubuntu': 'Ubuntu',
        'nunito': 'Nunito',
      }
    },
  },
  plugins: [],
}
