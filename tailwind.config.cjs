/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#edae9a",

          secondary: "#d3dd5d",

          accent: "#e067b8",

          neutral: "#2A2636",

          "base-100": "#E8EAED",

          info: "#539CD0",

          success: "#157E4C",

          warning: "#DF7307",

          error: "#E8697A",
        },
      },
    ],
  },
};
