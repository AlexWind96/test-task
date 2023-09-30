import { Button, InputBase, Text, createTheme } from '@mantine/core'
import text from './Text.module.css'

export const theme = createTheme({
  primaryShade: { light: 5, dark: 5 },
  primaryColor: 'primary',
  black: '#202A44',
  fontFamily:
    'Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  colors: {
    primary: [
      '#fdfbe9',
      '#fdf5c4',
      '#fbe88d',
      '#f9d44b',
      '#f5bd1a',
      '#f1ae0f', // BRAND
      '#c57e09',
      '#9d590b',
      '#824711',
      '#6f3a14',
      '#411d07',
    ],
    gray: [
      '#F4F6F9',
      '#edf0f2',
      '#dfe2e6',
      '#cbd0d6',
      '#b4bbc5',
      '#a0a7b4',
      '#9499a8', // BRAND GRAY
      '#777b8b',
      '#626671',
      '#52555d',
      '#303236',
    ],
    red: [
      '#fef4f2',
      '#fee6e2',
      '#fed1ca',
      '#fcb0a5',
      '#f98270',
      '#f05a43',
      '#e04f39', // BRAND RED
      '#ba301b',
      '#9a2b1a',
      '#7f2a1d',
      '#45120a',
    ],
  },
  radius: {
    xxl: 'calc(3.125rem * var(--mantine-scale))',
  },
  components: {
    Text: Text.extend({ classNames: text }),
    Button: Button.extend({
      defaultProps: {
        radius: 'xxl',
        tt: 'capitalize',
        fz: 'md',
        fw: 700,
      },
    }),
    InputBase: InputBase.extend({
      defaultProps: {
        radius: 'xxl',
      },
    }),
  },

  /* Put your mantine theme override here */
})
