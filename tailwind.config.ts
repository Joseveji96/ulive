import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: 'var(--font-satoshi)',
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
      colors: {
      }
    },
  },
  plugins: [],
}
export default config
