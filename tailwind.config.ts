/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#1a472a', // Dark green
          light: '#2d5a3c',
          dark: '#0d3319',
        },
        'secondary': {
          DEFAULT: '#718096', // Professional grey
          light: '#A0AEC0',
          dark: '#4A5568',
        },
        'accent': {
          DEFAULT: '#c5a880', // Warm gold
          light: '#d4bc99',
          dark: '#b69566',
        },
        'background': {
          DEFAULT: '#1a1a1a', // Dark background
          light: '#2d2d2d',
          paper: '#ffffff',
        }
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
  },
  plugins: [],
};

module.exports = config;