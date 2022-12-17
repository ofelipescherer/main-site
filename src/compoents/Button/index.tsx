import { ThemeContext } from 'context/theme.context'
import { useContext } from 'react'
import * as S from './styles'

export default function ThemeButton() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  function changeTheme() {
    // const themes = ['light', 'dark', 'desert', 'green']

    // toggleTheme(themes[Math.floor(Math.random() * themes.length)])
    toggleTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <S.ThemeButton onClick={changeTheme}>Troca Tema</S.ThemeButton>
}
