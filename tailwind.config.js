/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors:{
        lime_green: '#16bf63',
        bright_red: '#ee4266',
        facebook: "#3b5998",
        twitter: "#1da1f2",
        instagram_start: '#ffc466',
        instagram_end: '#e85e85',
        youtube: '#e63227',
        background_color: '#ffffff',
        top_bg_pattern: '#f5f7ff',
        card_bg: '#e1e4f0',
        text_color: '#5a6872',
        text_color_alt: '#1a1f26',
        toggle_color: '#e1e4f0',
      },
      fontSize: {
        250: "clamp(0.80rem, calc(0.785rem + 0.04vw), 0.92rem)",
        350: "clamp(1rem, calc(0.97rem + 0.17vw), 1.15rem)",
        300: "clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem)",
        400: "clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem)",
        500: "clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem)",
        600: "clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem)",
        700: "clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem)",
        800: "clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem)",
        900: "clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem)",
      },
    },
  },
  plugins: [],
}

