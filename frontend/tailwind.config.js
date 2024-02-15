/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'mainTheme':'#95C54F',
      'black' :'black',
      'white' :'white',
      'lightgrey':'rgba(222, 218, 218, 0.448)',
      'lighttext':'#C5C5C5'
    }
  },
  plugins: [],
}

