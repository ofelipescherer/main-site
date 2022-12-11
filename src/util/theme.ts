import { Theme, ColorPalette } from 'types/Theme'

const palette: ColorPalette = {
  red: {
    100: '#FF476B',
    200: '#FF5252',
    300: '#FF0000'
  },
  green: {
    50: '#00C5A5',
    100: '#00BD69',
    200: '#008000'
  },
  gray: {
    100: '#F8F8F8',
    200: '#F5F8FA',
    300: '#F1F5F9',
    400: '#E2E8F0',
    500: '#CBD5E1',
    600: '#94A3B8',
    700: '#64748B'
  },
  dark_gray: {
    50: '#4E4E4E',
    100: '#2F2F2F',
    200: '#212121',
    300: '#1E1E1E',
    400: '#151515'
  },
  blue: {
    50: '#0085FF',
    100: '#0C2249',
    200: '#1C1A38',
    300: '#06042B'
  },
  orange: {
    100: '#ffe4c4',
    200: '#FF9F49',
    300: '#FF9F70'
  },
  white: '#FFFFFF',
  black: '#000000',
  yellow: '#EBFF00'
}

export const theme: Theme = {
  dark: {
    colors: {
      main: {
        primary_01: palette.yellow as string
      },
      default: {
        white: palette.white as string,
        black: palette.black as string
      },
      background: {
        background: palette.black as string,
        foreground: palette.dark_gray[100]
      },
      typografy: {
        text: palette.black as string,
        title: palette.white as string
      },
      util: {
        hover: palette.dark_gray[50],
        divider: '#000'
      }
    },
    assets: {
      test: ''
    }
  },
  light: {
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
        foreground: palette.gray[500]
      },
      typografy: {
        text: palette.white as string,
        title: palette.black as string
      },
      util: {
        hover: palette.gray[100],
        divider: '#000'
      }
    },
    assets: {
      test: ''
    }
  },

  desert: {
    colors: {
      main: {
        primary_01: palette.orange[200]
      },
      default: {
        white: palette.white as string,
        black: palette.black as string
      },
      background: {
        background: palette.orange[300],
        foreground: palette.orange[100]
      },
      typografy: {
        text: palette.black as string,
        title: palette.black as string
      },
      util: {
        hover: palette.dark_gray[50],
        divider: '#000'
      }
    },
    assets: {
      test: ''
    }
  },

  green: {
    colors: {
      main: {
        primary_01: palette.green[50]
      },
      default: {
        white: palette.white as string,
        black: palette.black as string
      },
      background: {
        background: palette.green[100],
        foreground: palette.green[200]
      },
      typografy: {
        text: palette.white as string,
        title: palette.white as string
      },
      util: {
        hover: palette.gray[100],
        divider: '#000'
      }
    },
    assets: {
      test: ''
    }
  }
}
