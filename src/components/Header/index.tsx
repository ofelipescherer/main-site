import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { ThemeContext } from 'context/theme.context'
import * as S from './styles'
import MoonIcon from 'icons/MoonIcon'
import SunIcon from 'icons/SunIcon'
import { useTheme } from 'styled-components'

export const Header = () => {
  const menuItems = [
    { title: 'My Projects', value: 'my_projects' },
    { title: 'About Me', value: 'about_me' },
    { title: 'Config', value: 'config' }
  ]
  const middleIndex = Math.ceil(menuItems.length / 2)
  const firstHalf = menuItems.splice(0, middleIndex)
  const secondHalf = menuItems.splice(-middleIndex)

  const { toggleTheme, theme } = useContext(ThemeContext)
  const themeColors = useTheme()

  const { route, events, locale, locales, asPath } = useRouter()
  const [menuSelected, setMenuSelected] = React.useState<string>(route.slice(1))

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      setMenuSelected(url.slice(1))
    }
    events.on('routeChangeStart', handleRouteChange)
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, [events])

  function changeTheme() {
    // const themes = ['light', 'dark', 'desert', 'green']

    // toggleTheme(themes[Math.floor(Math.random() * themes.length)])
    toggleTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header>
      <S.Container>
        {firstHalf.map((item) => {
          return (
            <Link key={item.value} href={'/' + item.value}>
              <S.MenuItem
                className={menuSelected === item.value ? 'selected' : ''}
              >
                {item.title}
              </S.MenuItem>
            </Link>
          )
        })}

        <S.MenuItemLogo onClick={() => setMenuSelected('')}>
          <Link href={'/'}>
            <S.Logo />
          </Link>
        </S.MenuItemLogo>

        {secondHalf.map((item) => {
          return (
            <Link key={item.value} href={item.value}>
              <S.MenuItem
                className={menuSelected === item.value ? 'selected' : ''}
              >
                {item.title}
              </S.MenuItem>
            </Link>
          )
        })}

        <button onClick={changeTheme}>
          {theme === 'light' ? (
            <MoonIcon color={themeColors.colors.typografy.title} />
          ) : (
            <SunIcon color={themeColors.colors.typografy.title} />
          )}
        </button>

        <div>
          {locales &&
            locales.map((l, i) => {
              return (
                <span key={i} style={{ color: l === locale ? 'red' : 'blue' }}>
                  <Link href={asPath} locale={l}>
                    {l}
                  </Link>
                </span>
              )
            })}
        </div>
      </S.Container>
    </header>
  )
}
