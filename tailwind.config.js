/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        PrimaryColor: ["#ffc702"],
        SecondaryColor: ["#2f6eff"],
        HoverColor: ["#0a2a99"],
        HeadingColor: ["#00197e"],
        TextColor: ["#3a4268"],
        BodyBg: ["#f3f4f8"],
        BorderColor: ["#0202021a"],
        BorderColor2: ["#223FA2"],
        BorderColor3: ["#83A8FF"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px ",
        "4xl": "1700px",
        // 1400-1600, 1300-1399,1200-1299,992-1199(1170),768-991,600-767,480-599,320-479
      },
      keyframes: {
        movebtn: {
          "0%,50%, 100%": { transform: "translateY(0px)" },
          "25%": { transform: "translateY(10px)" },
          "75%": { transform: "translateY(-10px)" },
        },
        dance7: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(320px)" },
        },
        dance3: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-35px)" },
        },
        shrink: {
          "0%": { transform: "translateY(20px) translateX(-50%)" },
          "50%": { transform: "translateY(-20px) translateX(-50%)" },
          "100%": { transform: "translateY(0px) translateX(-50%)" },
        },
        Dance: {
          "0%,100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(35px)" },
        },
        rotateme: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        dance2: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": {
            transform: "translate3d(25px, -25px, 0)",
          },
          "100%": { transform: "translate3d(0, -25px, 25px)" },
        },
        headerSlideDown: {
          "0%": { margin: "-150px 0 0" },
          "100%": { margin: "0" },
        },
        zoomInOut: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1.2)" },
        },
        swing: {
          "0%": { transform: "rotate(25deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "translateY(-50px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        rotational: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        movebtn: "movebtn 3s ease-in-out infinite",
        wiggle: "wiggle 5s ease-in-out infinite",
        rotational: "rotational 10s linear infinite",
        zoomInOut: "zoomInOut 2s alternate infinite",
        dance2: "dance2 2s alternate infinite",
        dance3: "dance3 2s alternate infinite",
        dance7: "dance7 4s alternate infinite",
        swing: "swing 1s ease-in-out 1s forwards infinite alternate",
        headerSlideDown:
          "500ms ease-in-out 0s normal none 1 running headerSlideDown",
      },
      boxShadow: {
        cases: "0px 10px 15px rgba(187, 187, 187, 0.2)",
        shade: "0px 0px 20px rgba(187, 187, 187, 0.2)",
        shadow: "0px 30px 50px rgba(152,178,240,0.5)",
      },
      lineHeight: {},
    },
  },
  plugins: [],
};
