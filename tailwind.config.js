/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This includes all files in the src folder and subfolders
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customRed: "#FF6363",
        customBlack: "#434343",
      },
    },
  },
  plugins: [],
};
