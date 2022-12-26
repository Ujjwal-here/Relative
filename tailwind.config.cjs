/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-bg": "#1e2033",
        btc: "#212029",
        solana: "#281b3f",
        ethereum: "#282b3e",
        binance: "#212129",
        shiba: "#271b2a",
        "heading-primary": "#737BAE",
        "heading-secondary": "#5A5F7D",
        "card-ele-bg": "#14172B",
      },
      width: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};
