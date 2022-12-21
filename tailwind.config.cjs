const twColors = require('tailwindcss/colors')
const twFontFamily = require('tailwindcss/defaultTheme').fontFamily
const forms = require('@tailwindcss/forms')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      background: {
        base: 'var(--color-bg-base)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...twFontFamily.sans],
      },
    },
  },
  plugins: [
    forms,
    plugin(function ({ addBase, addVariant, addComponents, theme }) {
      const hover = '&:not([disabled]):hover'
      const active = '&:not([disabled]):active,&.is-active'

      const rootColors = {
        ':root': {
          '--color-bg-base': '#fff',
        },
        '[data-mode="dark"]': {
          '--color-bg-base': '#0f0f0f',
        },
      }

      const buttons = {
        '.btn': {
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          letterSpacing: theme('letterSpacing.normal'),
          borderRadius: theme('borderRadius.sm'),
          whiteSpace: 'nowrap',
          transition: '.2s all',
        },
      }

      addBase([rootColors])
      addComponents([buttons])
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('group-hocus', [':merge(.group):focus &', ':merge(.group):hover &'])
    }),
  ],
}
