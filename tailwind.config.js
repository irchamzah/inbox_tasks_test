/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "primary-blue": "#2F80ED",
        "primary-gray": "#828282",
        "primary-gray-dark": "#4F4F4F",
        "primary-gray-light": "#E0E0E0",
        "indicator-orange": "#F8B76B",
        "indicator-violet": "#8785FF",
        "indicator-red": "#EB5757",
        "indicator-yellow": "#F2C94C",
        "chats-orange": "#E5A443",
        "chats-orange-light": "#FCEED3",
        "chats-purple": "#9B51E0",
        "chats-purple-light": "#EEDCFF",
        "chats-green": "#43B78D",
        "chats-green-light": "#D2F2EA",
        "stikers-white": "#E9F3FF",
        "stikers-orange": "#FDCFA4",
        "stikers-tequila": "#F9E9C3",
        "stikers-mint": "#AFEBDB",
        "stikers-green": "#CBF1C2",
        "stikers-violet": "#CFCEF9",
        "stikers-pink": "#F9E0FD",
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollbar: false,
  },
};
