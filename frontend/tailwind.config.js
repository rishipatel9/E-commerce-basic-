/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'mainTheme':'rgb(120,196,48)',
      'black' :'black',
      'white' :'white',
      'lightgrey':'rgba(222, 218, 218, 0.448)',
      'lighttext':'#C5C5C5'
    }
  },
  plugins: [],
}
