export default {
  plugins: [require("@tailwindcss/line-clamp")],
  important: true,
  theme: {
    fontFamily: {
      lato: ["Lato"],
      poppins: ["Poppins"],
    },
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        primary: {
          DEFAULT: "#D30000",
          red: {
            DEFAULT: "#D30000",
            60: "#E56666",
            20: "#F6CCCC",
            10: "#FBE6E6",
          },
          blue: {
            DEFAULT: "#3C91E6",
            60: "#8ABDF0",
            20: "#D8E9FA",
            10: "#EBF4FC",
          },
        },
        semantic: {
          blue: {
            DEFAULT: "#00A1E4",
            60: "#66C7EF",
            20: "#CCECFA",
          },
          green: {
            DEFAULT: "#00CC66",
            60: "#66E0A3",
            20: "#CCF5E0",
          },
          red: {
            DEFAULT: "#DD403A",
            60: "#E67998",
            20: "#F7D2DD",
          },
          yellow: {
            DEFAULT: "#F5B700",
            60: "#F9D466",
            20: "#FDF1CC",
          },
        },
        neutral: {
          black: {
            DEFAULT: "#00171F",
            60: "#847F82",
            20: "#D6D4D5",
            5: "#F2F3F4",
          },
          background: "#F7FAFC",
          white: "#FFFFFF",
        },
      },
      boxShadow: {
        nav: "0px 0px 8px rgba(113, 115, 115, 0.16);",
        "card-xl": "0px 0px 48px rgba(132, 127, 130, 0.32)",
        "card-l": "2px 4px 32px rgba(132, 127, 130, 0.24)",
        card: "2px 4px 16px rgba(132, 127, 130, 0.16)",
        "card-s": "0px 0px 8px rgba(113, 115, 115, 0.16)",
        "card-xs": "0px 0px 4px rgba(113, 115, 115, 0.08)",
        "card-benefit": "0px 16px 40px rgba(112, 144, 176, 0.15)",
        "card-location": "0px 8px 16px rgba(112, 144, 176, 0.12)",
      },
    },
  },
};
