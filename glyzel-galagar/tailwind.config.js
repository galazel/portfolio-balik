/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 900: "#050F23", 800: "#0A1F44", 700: "#12305F", 600: "#1E4784", 400: "#5C7BA8" },
        paper: "#FBFCFE",
        mist: { 100: "#F2F5F9", 200: "#E4EAF2", 300: "#CBD5E3", 500: "#8A98AC" },
        bubblegum: { DEFAULT: "#FF5FA2", soft: "#FFE3EF" },
        mint: { DEFAULT: "#25C08D", soft: "#D9F7EC" },
        lemon: { DEFAULT: "#FFD447", soft: "#FFF4CF" },
        grape: { DEFAULT: "#7C3AED", soft: "#EDE4FF" },
        sky: { DEFAULT: "#38BDF8", soft: "#DDF2FE" },
      },
      fontFamily: {
        display: ["Stellost", "Stellost Slanted", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
