/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    darkMode: ["class"],
    content: [
			"./app/**/*.{js,ts,jsx,tsx}",
			"./components/**/*.{js,ts,jsx,tsx}",
			"./ui/**/*.{js,ts,jsx,tsx}",
		],
  theme: {
  	extend: {
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
}