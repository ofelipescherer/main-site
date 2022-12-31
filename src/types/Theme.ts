export type Font = {
  fontSize: {
    xl: string
    lg: string
    base: string
    sm: string
    xs: string
    xxs: string
  }
  fontWeight: {
    regular: string
    medium: string
    bold: string
  }
}

export type Theme = {
  dark: ThemeConfig
  light: ThemeConfig
}

export type ThemeString = 'dark' | 'light'

export const ThemeStringArray = ['dark', 'light']

export type Colors = {
  main: {
    primary_01: string
  }
  default: {
    white: string
    black: string
  }
  background: {
    background: string
    foreground: string
  }
  typografy: {
    text: string
    title: string
    description: string
  }
  util: {
    hover: string
    divider: string
    disabled: string
    auxiliar_gray: string
  }
}

export type Spacements = {
  xxs?: string
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

export type Typography = {
  sizes?: {
    xxs?: string
    xs?: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
  }
}

export type Assets = {
  test: string
}

export type ThemeConfig = {
  colors: Colors
  spacements?: Spacements
  typography?: Typography
  assets: Assets
}
export type ColorValue = Record<number | string, string>

export type ColorPalette = Record<string, ColorValue | string>
