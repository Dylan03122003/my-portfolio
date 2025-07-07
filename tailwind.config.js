/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light-mode": "#f9f7fd",
        "primary-dark-mode": "#0F172A",
        "text-light-mode": "#5e5c7f",
        "text-dark-mode": "#CBD5E1",
        "title-light-mode": "#353252",
        "card-dark-mode": "#1E293B",
        "card-light-mode": "#fff",
        "button-light-mode": "#0F172A",
        "button-dark-mode": "#f9f7fd",
        action: "#ff4d61",
      },
      boxShadow: {
        custom: "0px 5px 20px 0px rgb(69 67 96 / 10%)",
      },
    },
  },
  plugins: [],
};
