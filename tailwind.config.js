/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        roboto: ["var(--font-roboto)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
        montserrat: ["var(--font-montserrat)"],
        oswald: ["var(--font-oswald)"],

        // New Design System Fonts
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },

      colors: {
        /* Existing Colors */
        basketballOrange: "#E75719",
        deepBlue: "#17408B",
        blacksmoke: "#4C4D4F",

        grassGreen: "#88B04B",
        cricketWhite: "#FFFFFF",

        vibrantRed: "#C9082A",
        neutralGray: "#C4CED4",

        black: "#000000",
        white: "#FFFFFF",
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        yellow: "#FFFF00",

        error: "#E63946",
        success: "#2A9D8F",
        warning: "#FFC107",
        info: "#00BFFF",

        background: "#FFFFFF",
        textPrimary: "#212121",
        textSecondary: "#757575",

        /* New Design System */
        primary: "#0F172A",
        secondary: "#1E3A5F",
        accent: "#2563EB",

        surface: "#FFFFFF",
        page: "#F8FAFC",

        heading: "#111827",
        body: "#6B7280",

        border: "#E5E7EB",

        successGreen: "#16A34A",
        warningOrange: "#D97706",
        danger: "#DC2626",
        infoBlue: "#0EA5E9",
      },

      maxWidth: {
        content: "1280px",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      boxShadow: {
        soft: "0 5px 20px rgba(0,0,0,.05)",
        card: "0 10px 30px rgba(15,23,42,.08)",
        hover: "0 20px 40px rgba(15,23,42,.12)",
      },

      spacing: {
        section: "7rem",
      },

      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },

  plugins: [],
};