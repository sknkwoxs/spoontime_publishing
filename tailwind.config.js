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
      },
      fontFamily: {
        Pretendard: ["Pretendard-Regular"],
        PretendardSemiBold: ["Pretendard-SemiBold"],
        PretendardBold: ["Pretendard-Bold"],
      },
      backgroundImage: {
        down: "url('../public/images/svgIcons/down.svg')",
      },
    },
  },
  plugins: [],
};
