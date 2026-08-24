/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Single warm amber/gold accent, used sparingly.
        brand: {
          50: "#fff8eb",
          100: "#feefc7",
          200: "#fddf8a",
          300: "#fbc94d",
          400: "#f6b524",
          500: "#e09b0f",
          600: "#bd7a06",
          700: "#96590a",
          800: "#7b470f",
          900: "#683c10",
        },
      },
      fontFamily: {
        // One clean, neutral sans-serif across the whole site (Claude-style look).
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
