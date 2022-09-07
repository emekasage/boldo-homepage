/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/slider/LogoSlider.js",
    "./src/components/navbar/Navbar.js",
    "./src/components/navbar/MenuItems.js",
    "./src/components/sections/Hero.js",
    "./src/components/sections/Services.js",
    "./src/components/service/ServiceGrid.js",
    "./src/components/service/ServiceFlow.js",
    "./src/components/sections/Testimonials.js",
    "./src/components/sections/Footer.js",
  ],
  theme: {
    fontSize: {
      sm: [
        "14px",
        {
          lineHeight: "1.25rem",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "1.5rem",
        },
      ],
      xl: [
        "20px",
        {
          lineHeight: "1.75rem",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "30px",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "34px",
        {
          lineHeight: "1.56em",
        },
      ],
      "5xl": [
        "36px",
        {
          lineHeight: "56px",
        },
      ],
      "6xl": [
        "48px",
        {
          lineHeight: "72px",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
