/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#874e58',
          light: '#ffb6c1',
          container: '#ffd9de',
          fixed: '#ffd9de',
        },
        secondary: {
          DEFAULT: '#645495',
          container: '#e8ddff',
          fixed: '#e8ddff',
        },
        tertiary: {
          DEFAULT: '#316385',
          container: '#cfe5ff',
        },
        surface: {
          DEFAULT: '#fbf9f5',
          container: {
            high: '#efebe4',
            highest: '#e4e2de',
          },
          variant: '#e8e2d9',
        },
        'on-surface': '#1b1c1a',
        'on-surface-variant': '#514345',
        'on-secondary-container': '#201047',
        'on-primary-container': '#3d0712',
      },
      fontSize: {
        'display-lg': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px' }],
        'display-lg-mobile': ['36px', { lineHeight: '44px', letterSpacing: '0px' }],
        'headline-md': ['28px', { lineHeight: '36px' }],
        'headline-sm': ['24px', { lineHeight: '32px' }],
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0.5px' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.5px' }],
        'label-sm': ['11px', { lineHeight: '16px', letterSpacing: '0.5px' }],
      }
    },
  },
  plugins: [],
}
