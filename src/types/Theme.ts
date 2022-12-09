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

export type Colors = {
  brand: {
    primary_01: string
    primary_02: string
    secondary_01: string
  }
  button: string
  background: string
  foreground: string
  aside_foreground: string
  background_auxiliar: string

  text: string
  text_subtitle: string
  text_description: string
  title_highlight: string
  title_background_highlight: string
  text_timer: string

  divider: string
  hover_background_auxiliar: string
  hover_brand_primary: string

  white: string
  black: string
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
  backgroundCamp: string
  backgroundCampPrelive: string
}

export type ThemeConfig = {
  colors: Colors
  spacements?: Spacements
  typography?: Typography
  assets: Assets
}
export type ColorValue = Record<number | string, string>

export type ColorPalette = Record<string, ColorValue | string>
