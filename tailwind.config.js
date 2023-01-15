/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#755CDE",
          secondary: "#EB7565",
          accent: "#F6A560",
          neutral: "#FFF7F0",
          "neutral-content": "#7A746E",
          "base-100": "#030303",
        },
      },
    ],
  },
};
