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
        "dark-green": "#1B4332",
        "medium-green": "#2D6A4F",
        "light-green": "#40916C",
        "accent-green": "#52B788",
        "pale-green": "#D8F3DC",
        "dark-text": "#1a1a1a",
        background: "#fafaf8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
