import { Theme, ColorPalette } from 'types/Theme'

const palette: ColorPalette = {
  red: {
    100: '#FF476B',
    200: '#FF5252',
    300: '#FF0000'
  },
  green: {
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
    100: '#0C2249',
    200: '#1C1A38',
    300: '#06042B'
  },
  orange: '#FF9F49',
  white: '#FFFFFF',
  black: '#000000'
}

export const theme: Theme = {
  dark: {
    colors: {
      brand: {
        primary_01: palette.red[100],
        primary_02: palette.white as string,
        secondary_01: palette.blue[200]
      },
      button: palette.blue[100],
      background: palette.white as string,
      foreground: palette.white as string,
      aside_foreground: palette.gray[200],
      background_auxiliar: palette.gray[300],

      text: palette.blue[300],
      text_description: palette.gray[600],
      text_subtitle: palette.gray[600],
      title_highlight: palette.blue[300],
      title_background_highlight: palette.gray[200],
      text_timer: palette.dark_gray[50],

      divider: `${palette.black}1A`,
      hover_background_auxiliar: `${palette.black}1A`,
      hover_brand_primary: `${palette.red[100]}33`,

      white: palette.white as string,
      black: palette.black as string
    },
    assets: {
      backgroundCamp:
        'https://cdn.playscores.com/web-whitelabel/header-bg/bg-live.png',
      backgroundCampPrelive:
        'https://cdn.playscores.com/web-whitelabel/header-bg/bg-prelive.png'
    }
  },
  light: {
    colors: {
      brand: {
        primary_01: palette.red[100],
        primary_02: palette.white as string,
        secondary_01: palette.blue[200]
      },
      button: palette.green[100],
      background: palette.black as string,
      foreground: palette.dark_gray[400],
      aside_foreground: palette.dark_gray[300],
      background_auxiliar: palette.dark_gray[100],

      text: palette.white as string,
      text_description: palette.white as string,
      text_subtitle: palette.gray[300],
      title_highlight: palette.gray[100],
      title_background_highlight: palette.dark_gray[200],
      text_timer: palette.white as string,

      divider: `${palette.white}1A`,
      hover_background_auxiliar: `${palette.dark_gray[100]}b3`,
      hover_brand_primary: `${palette.red[100]}b3`,

      white: palette.white as string,
      black: palette.black as string
    },
    assets: {
      backgroundCamp:
        'https://cdn.playscores.com/web-whitelabel/header-bg/bg-live.png',
      backgroundCampPrelive:
        'https://cdn.playscores.com/web-whitelabel/header-bg/bg-prelive.png'
    }
  }
}
