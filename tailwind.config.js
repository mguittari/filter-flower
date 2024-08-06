/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-sm": "0.05em 0.05em",
        "custom-md": "0.1em 0.1em",
        "custom-lg": "0.15em 0.15em",
        "custom-xl": "0.2em 0.2em",
      },
      translate: {
        0.05: "0.05em",
        "-0.05": "-0.05em",
        0.1: "0.1em",
        "-0.1": "-0.1em",
      },
      fontFamily: {
        violetsans: ["violet-sans", "sans-serif"],
        healtheweb: ["healtheweb", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      translate: ["active", "hover"],
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
