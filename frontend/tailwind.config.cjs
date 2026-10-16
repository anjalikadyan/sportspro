/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "hsl(var(--primary))", 50: "#fff7ed", 100: "#ffedd5", 500: "#f97316", 600: "#ea580c", 700: "#c2410c" },
        secondary: { DEFAULT: "hsl(var(--secondary))", 500: "#0ea5e9", 600: "#0284c7" },
        accent: "hsl(var(--accent))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        success: "#16a34a", warning: "#d97706", danger: "#dc2626",
        neutral: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 500: "#64748b", 700: "#334155", 900: "#0f172a" },
      },
      fontFamily: { display: ["Manrope", "sans-serif"], sans: ["Inter", "sans-serif"] },
      borderRadius: { xl: "var(--radius)", '2xl': "calc(var(--radius) + 4px)" },
      boxShadow: { soft: "0 8px 30px rgb(15 23 42 / 0.08)", glow: "0 12px 40px rgb(249 115 22 / 0.18)" },
      animation: {
        float: "float 3s ease-in-out infinite",
        "modal-slide-in": "modalSlideIn 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        modalSlideIn: {
          from: { opacity: "0", transform: "translateY(-50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
