// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        BrandColor: {
          green01: "#112F30",
          green02: "#98B584",
          green03: "#C0D6B1",
          green04: "#E6EFE0",
        },
        ContentsColor: {
          yellow: "#F2D186",
          pink: "#F3CAC2",
          blue: "#D3E3DF",
          heart: "#E13F00",
        },
        GreyScale: {
          grey01: "#2A2A2A",
          grey02: "#555555",
          grey03: "#B7B7B7",
          grey04: "#E8E8E8",
          grey05: "#F5F5F5",
          White: "#FFFFFF",
        },
        Message: {
          info: "#0172CB",
          error: "#F93232",
        },
      },
      dropShadow: {
        button: [
          "0 8px 16px rgba(52, 60, 68, 0.1)",
          "0 2px 4px rgba(117, 131, 142, 0.04)",
        ],
        popup: [
          "0 19px 38px rgba(0, 0, 0, 0.3)",
          "0 15px 12px rgba(0, 0, 0, 0.22)",
        ],
      },
      fontFamily: {
        Pretendard: ["Pretendard-Regular"],
        PretendardSemiBold: ["Pretendard-SemiBold"],
        PretendardBold: ["Pretendard-Bold"],
      },
      backgroundImage: {
        down: "url('../public/images/svgIcons/down.svg')",
        heart: "url('../public/images/svgIcons/heart.svg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
