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
        "primary": "#1A1A1A",
        "secondary": "#F5F5F5",
        "accent": "#FF5A5F",
        "accent2": "#FFC371",
        "dark" : "#212529",
        "light" : "#f8f9fa"
      },
      fontFamily: {
        "sans": ["var(--font-inter)"],
      },

    },
  },
  plugins: [],
};
