import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxl: ['30px', '35.8px'],
      xl: '24px',
      l: '20px',
      m: '18px',
      s: '16px',
      xs: '14px',
    },
    extend: {
      fontWeight: {
        bold: 700,
        medium: 500,
        regular: 400,
        thin: 300,
      },
      lineHeight: {
        xxl: '35.8px',
        l: '28.8px',
        m: '21.48px',
        s: '19.09px',
        xs: '16.8px',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        unselected: '#9CA3AF',
        primary: '#7A40F2',
        secondary: '#3B3A48',
        tertiary: '#9747FF33',
        card: '#E6E9EC',
        divider: '#B3B3B3',
        badge: '#6B7280',
      },
    },
  },
  plugins: [],
};
export default config;
