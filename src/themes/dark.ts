import { palette } from 'themes/pallete'

export const darkTheme = {
  colors: {
    main: {
      primary_01: '#744CE9'
    },
    default: {
      white: palette.white as string,
      black: palette.black as string
    },
    background: {
      background: palette.black as string,
      foreground: palette.dark_gray[200]
    },
    typografy: {
      text: palette.white as string,
      title: palette.white as string,
      description: `${palette.white}B3`
    },
    util: {
      hover: palette.dark_gray[50],
      divider: '#000',
      disabled: palette.gray[500],
      auxiliar_gray: palette.gray[800]
    }
  },
  assets: {
    test: ''
  }
}
