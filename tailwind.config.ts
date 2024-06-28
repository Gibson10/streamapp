import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)', 'sans-serif'],
    },
    extend: {
      colors: {
        'grey-1': '#3C3C3C',
        'grey-2': '#AAAAAA',
        'grey-3': '#D0D0D0',
        'grey-4': '#9F9F9F',
        'grey-5': '#232323',
        'grey-6': '#494A4E',
        'grey-7': '#1F1F1F',
        'grey-8': '#363636',
        'grey-9': '#202020',
        'blue-1': '#1433C9',
        'blue-2': '#3C50FE',
        'blue-3': '#7482FF',
        'blue-4': '#3D50FF',
        'blue-5': '#2736C1',
        'black-1': '#101010',
      },
      width: {
        'platform': 'calc(100vw - 10rem)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "team-1": "url('/assets/img/team-1.svg')"
      },
    },
  },
  plugins: [],
};
export default config;
