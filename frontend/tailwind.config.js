/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e02129",
        secondary: "#fbcc0e",
        tertiary: "#35363a",
        bgprimary: "#d5cac4",
      },
      boxShadow: {
        // Light inner shadow for elevated effect
        "inner-light":
          "inset 4px 4px 8px rgba(255, 255, 255, 0.6), inset -4px -4px 8px rgba(0, 0, 0, 0.1)",

        // Dark inner shadow for sunken effect
        "inner-dark":
          "inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.05)",

        // 3D polymorphic effect
        "inner-3d":
          "inset 6px 6px 12px rgba(0, 0, 0, 0.25), inset -6px -6px 12px rgba(255, 255, 255, 0.3)",
        // Soft elevated effect
        "polymorphic-light":
          "4px 4px 6px rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7)",

        // Sunken effect
        "polymorphic-dark":
          "inset 4px 4px 6px rgba(0, 0, 0, 0.2), inset -4px -4px 6px rgba(255, 255, 255, 0.1)",

        // 3D polymorphic button effect
        "polymorphic-3d":
          "4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.5)",

        // Custom large shadow for more depth
        "polymorphic-xl":
          "8px 8px 12px rgba(0, 0, 0, 0.25), -8px -8px 12px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
