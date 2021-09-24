import { defineConfig } from 'windicss/helpers'
import defaultTheme from 'windicss/defaultTheme'

export default defineConfig({
  attributify: true,
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        ps: '320px',
        pm: '400px',
        ...defaultTheme.screens
      },
      fontFamily: {
        sans: [
          '"Chakra Petch"',
          'Quantico',
          ...defaultTheme.fontFamily.sans
        ].join(',')
      }
    }
  }
})
