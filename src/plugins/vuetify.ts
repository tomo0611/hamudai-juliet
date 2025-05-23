/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'Theme',
    themes: {
      Theme: {
        dark: false,
        colors: {
          primary: '#caa82b',
          'primary-lighter': '#FEFDD8',
          secondary: '#F7C6D0',
          lightGrey: '#565757'
        },
      },
    },
  },
})
