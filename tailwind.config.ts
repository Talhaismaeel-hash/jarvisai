import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Base surfaces — near-black, not pure black, so glass layers read.
        background: "#0A0B0F",
        foreground: "#E8EAED",
        surface: {
          DEFAULT: "#0F1116",
          raised: "#14161D",
          glass: "rgba(255,255,255,0.04)",
          "glass-strong": "rgba(255,255,255,0.07)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
        },
        // Signature accent — arc-reactor cyan, not the default indigo/violet.
        accent: {
          DEFAULT: "#3DD9EB",
          dim: "#1F8C99",
          bright: "#7FF0FA",
          50: "#EAFCFE",
          100: "#C6F6FB",
          400: "#3DD9EB",
          500: "#22C3D6",
          600: "#1A9AAA",
        },
        // Secondary — repulsor amber, used sparingly for active/alert states.
        signal: {
          DEFAULT: "#FFB454",
          dim: "#B97F2E",
          bright: "#FFD08A",
        },
        muted: {
          DEFAULT: "#8B8F99",
          foreground: "#5C6068",
        },
        success: "#3DE08A",
        warning: "#FFB454",
        danger: "#FF5C6C",
        card: {
          DEFAULT: "#11131A",
          foreground: "#E8EAED",
        },
        primary: {
          DEFAULT: "#3DD9EB",
          foreground: "#04141A",
        },
        secondary: {
          DEFAULT: "#1A1D26",
          foreground: "#E8EAED",
        },
        input: "rgba(255,255,255,0.08)",
        ring: "#3DD9EB",
        destructive: {
          DEFAULT: "#FF5C6C",
          foreground: "#1A0506",
        },
        popover: {
          DEFAULT: "#14161D",
          foreground: "#E8EAED",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
        xl: "1.25rem",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(10,11,15,1) 90%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "hud-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(61,217,235,0.18) 0%, rgba(10,11,15,0) 70%)",
        "signal-glow":
          "radial-gradient(40% 40% at 50% 50%, rgba(255,180,84,0.15) 0%, rgba(10,11,15,0) 70%)",
      },
      keyframes: {
        "scan-sweep": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        "scan-sweep": "scan-sweep 3s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.2,1) infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        blink: "blink 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
