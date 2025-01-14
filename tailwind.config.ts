import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        audiowide: ['"Audiowide"', 'sans-serif'], // إضافة الخط هنا
      },
    },
  },
  plugins: [],
} satisfies Config;
