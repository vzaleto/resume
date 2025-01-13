import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightBackground: '#ffffff',
        darkBackground: '#0a0a0a',
        lightText: '#171717',
        darkText: '#ededed'
      },
    },
  },
  plugins: [],
} satisfies Config;
