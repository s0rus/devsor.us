/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '5rem',
          lg: '10rem',
          xl: '15rem',
          '2xl': '20rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
