/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xxs: "0.6rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        green: {
          main: "#389B7A",
          second: "#6CA02A",
          third: "#11826D",
        },
        red: {
          main: "#9B3859",
        },
        dark:{
          main:"#2D2D2D",
          second:"#5A5A5A",
          third:"#282828",
        },
        gray: {
          1: "#EDEDED",
          2: "#757575",
          3: "#C3CADD",
          4: "#CBCBCB",
          5: "#00000009",
          6: "#F9F9F9",
          8:"#C6C6C6",
        },
        blue: {
          main: "#212144",
          second: "#5353AB",
          third: "#229AF0",
        },
      },
      lineHeight: {
        20: "4rem",
        24: "5rem",
      },
      width: {
        inherit: "inherit",
        mc: "94%",
        15: "3.75rem",
        26: "6.5rem",
        64: "16rem",
        66: "16.5rem",
        68: "17rem",
        76: "19rem",
        78: "19.5rem",
        80: "20rem",
        82: "20.5rem",
        83: "20.75rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        89: "22.25rem",
        90: "22.5rem",
        97: "24.25rem",
        98: "24.5rem",
        100: "25rem",
        102: "25.5rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        114: "28.5rem",
        116: "29rem",
        120: "30rem",
        121: "30.25rem",
        122: "30.5rem",
        124: "31rem",
        126: "31.5rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        192:"48rem"
      },
      height: {
        3: "3px",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        120: "30rem",
      },
      borderRadius: {
        40: "40px",
      },
      container: {
        screens: {
          xs: "600px",
          sm: "800px",
          md: "991px",
          lg: "1220px",
          xl: "1400px",
          "2xl": "1640px",
        },
      }
    },
    screens: {
      xs: "600px",
      sm: "800px",
      md: "991px",
      lg: "1220px",
      xl: "1400px",
      "2xl": "1640px",
    },
  },
  plugins: [],
};