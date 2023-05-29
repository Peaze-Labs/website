/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xl": ["30px", { lineHeight: "110%", letterSpacing: "-0.04em" }],
      "6xl": ["80px", { lineHeight: "103.1%", letterSpacing: "-0.04em" }],
      base: ["20px", { lineHeight: "150%" }],
      lg: ["25px", { lineHeight: "110%" }],
      sm: ["16px", { lineHeight: "22px" }],
      xs: ["12px", { lineHeight: "18px" }],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        accent: "#6486FF",
        raised: "#4f46e5",
        white1: "#f9f9f9",
        feature: "linear-gradient(331.83deg, #EDEDED -34.02%, #6486FF 64.37%)",
      },
    },
  },
  plugins: [],
};
