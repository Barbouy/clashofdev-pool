/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["Inter", "serif"],
    },
    fontSize: {
      "content-medium": ["12px", {
        lineHeight: "20px",
        fontWeight: "500",
      }],
      "content-bold": ["12px", {
        lineHeight: "20px",
        fontWeight: "700",
      }],
      "header-desktop": ["115px", {
        lineHeight: "123px",
        fontWeight: "600",
      }],
      "header-mobile": ["74px", {
        lineHeight: "82px",
        fontWeight: "600",
      }],
    },
    colors: {
      "light": "#F3F3F1",
      "dark": "#262625",
      "purple": "#EBEDFF",
      "fg-purple": "#262625",
      "border-purple": "#8A92E3",
      "pink": "#FFEDF5",
      "fg-pink": "#F588B9",
      "border-pink": "#D6699A",
      "green": "#ECFFCE",
      "fg-green": "#A2B87E",
      "border-green": "#95AE6D",
      "blue": "#BADAFF",
      "fg-blue": "#6B93C0",
      "border-blue": "#6B93C0",
      "yellow": "#FFFAC2",
      "fg-yellow": "#CAC48E",
      "border-yellow": "#C2BB82",
      "orange": "#FFBCAB",
      "fg-orange": "#F28164",
      "border-orange": "#D46F55",
    },
    extend: {
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    }
  },
  plugins: [],
}

