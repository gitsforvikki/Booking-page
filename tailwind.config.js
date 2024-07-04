/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      darkMode: ['selector', '[data-mode="dark"]'],
      screens:{
        xs :"400px"
      },
    },
  },
  plugins: [],
};
