const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ".flowbite-react/class-list.json"
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
  plugins: [flowbiteReact],
}