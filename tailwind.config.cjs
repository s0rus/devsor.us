import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
        pink: "var(--pink)",
      },
      fontFamily: {
        main: ["var(--font-main)", ...fontFamily.sans],
        secondary: ["var(--font-secondary)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "5rem",
          lg: "10rem",
          xl: "15rem",
          "2xl": "20rem",
        },
      },
      animation: {
        "pulse-slow": "pulse 16s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        flash: "flash 8s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
