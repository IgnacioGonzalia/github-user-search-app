import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-background": "#F6F8FF",
        "dark-background": "#141D2F",
        "light-text": "#4B6A9B",
        "dark-text": "#FFFFFF",
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
