import { useEffect, createContext, useState } from 'react'
import { ThemeProvider as ThemeProviderStyle } from 'styled-components'
import { theme } from 'theme'
import { appConfig } from 'util/config'

enum ThemeType {
  light = 'light',
  dark = 'dark'
}

type ThemeContextType = {
  theme: ThemeType
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeType.light,
  toggleTheme: () => undefined
})

const themes = {
  dark: theme.dark,
  light: theme.light
}

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.light)

  const loadTheme = async () => {
    if (typeof window !== 'undefined') {
      const storagedTheme = window.localStorage.getItem(
        `${appConfig.appName}:theme`
      )

      if (storagedTheme) {
        setTheme(ThemeType[storagedTheme as ThemeType])
      } else {
        window.localStorage.setItem(
          `${appConfig.appName}:theme`,
          ThemeType.light
        )
      }
    }
  }

  useEffect(() => {
    loadTheme()
  }, [])

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      let selectedTheme

      if (theme === ThemeType.light) {
        selectedTheme = ThemeType.dark
      } else {
        selectedTheme = ThemeType.light
      }

      setTheme(selectedTheme)
      window.localStorage.setItem(`${appConfig.appName}:theme`, selectedTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyle theme={themes[theme]}>{children}</ThemeProviderStyle>
    </ThemeContext.Provider>
  )
}
