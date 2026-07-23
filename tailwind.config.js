/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nodeflow: {
          bg: "#070B14",
          card: "rgba(13, 22, 41, 0.7)",
          border: "rgba(0, 242, 254, 0.15)",
          cyan: "#00F2FE",
          cyanGlow: "#00C6FF",
          orange: "#FF5E36",
          orangeLight: "#FF7B00",
          whatsapp: "#25D366",
          purple: "#A855F7",
          darkNavy: "#090D16"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 242, 254, 0.4)',
        'orange-glow': '0 0 25px -5px rgba(255, 94, 54, 0.4)',
        'whatsapp-glow': '0 0 25px -5px rgba(37, 211, 102, 0.4)',
        'purple-glow': '0 0 25px -5px rgba(168, 85, 247, 0.4)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(0, 242, 254, 0.08) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-line': 'glowLine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowLine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        }
      }
    },
  },
  plugins: [],
}
