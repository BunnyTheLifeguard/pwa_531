import { defineConfig } from 'windicss/helpers'
import defaultTheme from 'windicss/defaultTheme'

export default defineConfig({
  attributify: true,
  darkMode: 'media',
  theme: {
    extend: {
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
