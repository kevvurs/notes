import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nord0: '#2e3440',
        nord1: '#3b4252',
        nord2: '#434c5e',
        nord3: '#4c566a',
        nord4: '#d8dee9',
        nord5: '#e5e9f0',
        nord6: '#eceff4',
        nord7: '#8fbcbb',
        nord8: '#88c0d0',
        nord9: '#81a1c1',
        nord10: '#5e81ac',
        nord11: '#bf616a',
        nord12: '#d08770',
        nord13: '#ebcb8b',
        nord14: '#a3be8c',
        nord15: '#b48ead',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
