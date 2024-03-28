import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        light_navy: "#112240",
        lightest_navy: "#233554",
        custom_slate: "#8892b0",
        light_slate: "#a8b2d1",
        lightest_slate: "#ccd6f6",
        custom_white: "#e6f1ff",
        custom_green: "#64ffda",
        dark: "#0F172A",
        light_text: "#E2E8F0",
        dark_navy: "#475569",
        faded_text: "#9eabc9",
        light_green: "#5EEAD4",
        dark_green: "#2DD4BF",
      },
    },
  },
  plugins: [],
};
export default config;
