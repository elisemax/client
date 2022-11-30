/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('resource/background.png')",
      },
      fontFamily: {
        'ubuntu': 'Ubuntu',
        'nunito': 'Nunito',
      }
    },
  },
  plugins: [],
}
