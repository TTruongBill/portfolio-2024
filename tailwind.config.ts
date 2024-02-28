import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(120%) rotate(90deg)', scale: '0.5' },
          '50%': { transform: 'translateY(40%) rotate(90deg)', scale: '0.5' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': "var(--primary-color)",
        'blue-1': "var(--blue-1)",
        'blue-2': "var(--blue-2)",
        'blue-3': "var(--blue-3)",
        'gray-1': "var(--gray-1)",
      },
      animation: {
        'bounce': 'bounce 0.75s ease-in infinite',
      }
    },
  },
  plugins: [],
};
export default config;
