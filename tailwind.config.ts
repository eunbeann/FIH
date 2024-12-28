import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard-Regular', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: '#ffffff',
        gray1: '#1C1E22',
        gray1_3: '#e7e7e7',
        gray1_5: '#d4e1e7',
        gray2: '#c9d4da',
        gray3: '#b3bac0',
        gray4: '#ACB3C0',
        gray5: '#454545',
        gray6: '#191919',
        black: '#000000',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
