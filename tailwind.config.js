/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#891F1F",
        gray1: "#9B9797",
        gray2: "#CFCFCF",
        gray3: "#FFFFFF",
      },
      fontFamily: {
        lucidity: ['"lucidity"', 'sans-serif'],
        poppins: ['"poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
