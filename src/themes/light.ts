import { palette } from 'themes/pallete'

export const lightTheme = {
  colors: {
    main: {
      primary_01: palette.blue[50]
    },
    default: {
      white: palette.white as string,
      black: palette.black as string
    },
    background: {
      background: palette.white as string,
      foreground: palette.gray[200]
    },
    typografy: {
      text: palette.black as string,
      title: palette.black as string
    },
    util: {
      hover: palette.gray[100],
      divider: '#000',
      disabled: palette.gray[500],
      auxiliar_gray: palette.gray[800]
    }
  },
  assets: {
    test: ''
  }
}
