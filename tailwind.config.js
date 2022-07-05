/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      colors: {
        "dark-700": "#252525",
        "dark-100": "#7C7B7B",
        "white-400": "#EDEDED",
        "white-700": "#767676",
        "blue-400": "#BAD2FF",
        "blue-600": "#6F7F9B",
      },
      fontSize: {
        8: "8px",
        10: "10px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        34: "34px",
        36: "36px",
        48: "48px",
      },
    },
  },
  plugins: [],
};
