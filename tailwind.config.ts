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
        "main-t": "#002",
        "blue-1": "#072AC8",
        "blue-2": "#1A3EC1",
        "blue-3": "#1F64FF",
        "green-1": "#15D6B3",
        "green-2": "#73FBD3",
        "green-3": "#30F2F2",
      },
    },
  },
  plugins: [],
};
export default config;
