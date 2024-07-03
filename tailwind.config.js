/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#1a202c", // Dark mode background color
          text: "#ffffff", // Dark mode text color
          // Add more dark mode colors as needed
        },
      },
      screens:{
        xs :"400px"
      },
    },
  },
  plugins: [],
};
