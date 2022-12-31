/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    //실험적인 기능 추가했기 때문에 설정해줘야함
    "./app/**/*.{js,ts,jsx,tsx}", 

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['NotoSans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}