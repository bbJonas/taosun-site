/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDB813",   // Solar Gold
        secondary: "#002D62"  // Navy
      }
    }
  },
  plugins: []
};
