/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-cadet": "#283044",
        "air-blue": "#78A1BB",
        "mint-cream": "#EBF5EE",
        "khaki": "#BFA89E",
        "cinereous": "#8B786D",
        "med-gray": "#757575",
        "dark-red": "#6F1E1E",
        "dark-gray": "#464947",
        "light-gray": "#5E625F",
        "green": "#44AA55",
        "dark-mint-cream": "#757575",
      },
      fontFamily: {
        "kite-one": "Kite One",
        "karma": "Karma",
      },
      dropShadow: {
        'custom': '5px 6px 4px rgba(0, 0, 0, 0.35)',
        'custom-h2': '5px 5px 3px rgba(0, 0, 0, 0.25)',
        'custom-h3': '3px 3px 2px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};
