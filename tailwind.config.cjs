/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/banner.webp')",
        hero_sm: "url('/banner-sm.webp')",
        hero_xm: "url('/banner-xm.webp')",
        hero_smallest: "url('/banner-smallest.webp')",
        faq: "url('/bg-faq.webp')",
        main: "url('/Background.jpg')",
        about: "url('/aboutpage-bg.png')",
        services: "url('/servicespage-bg.jpg')",
        contact: "url('/contactpage-bg.jpg')",
      },
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        jost: ["Jost", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
        primary: ["DM Serif Display", "serif"],
        secondary: ["Jost", "sans-serif"], 
      },
      colors: {
        // Configure your color palette here
        primary: {
          100: "#CDA274",
          200: "#292F36",
          300: "#F4F0EC",
          400: "#E2E2E2",
        },
        primaryColor:  "#cda274", 
        secondaryClr: "#1cc8ee",
        text: {
          blue: "#1B2534",
          gray: "#4D4F52",
          "gray-100": "#5F5F5F",
          "gray-200": "#4D5053",
          "gray-300": "#E5E5E5",
        },
      },
    },
    screens: {
			xm: { min: "360px" },
			sm: { min: "636px" },
			md: { min: "768px" },
			lg: { min: "1024px" }, 
			xl: { min: "1280px" },
		},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".startCenter": {
          display: "flex",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
      });
    }),
  ],
};
