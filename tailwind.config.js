/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: '#0D6EFD',
        secondary: '#ADB5BD',
        accent: '#fbfcfd',
        success: '#198754',
        danger: '#DC3545',
        warning: '#FFC107',
        info: '#0DCAF0',
        light: '#fff',
        dark: '#000',
        idk: '#fff',
        default: '#F0F8FF',
        choco: '#252525'
      },
      screens: {
        smol: '576px',
        almost: '800px',
        medium: '870px',
        large: '1050px',
        xlarge: '1200px',
        xxlarge: '1400px'
      },
      boxShadow: {
        block: '0 8px 32px 0 rgba(19,48,125,0.35)',
        darks: '0 5px 15px rgba(0, 0, 0, .2)',
        dangers: '0 5px 15px rgba(220, 53, 69, .4)',
        primarys: '0 5px 15px rgba(13, 110, 253 , .4)',
        mdw: '0px 3px 9px rgba(0, 0, 0, .1)',
        cos: '0 7px 29px 0px rgba(100, 100, 111, 0.2)'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}