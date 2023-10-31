import type { Config } from 'tailwindcss'
import themeConfig from './src/config/theme/base'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: themeConfig.palette
    },
  },
  plugins: [],
}
export default config
