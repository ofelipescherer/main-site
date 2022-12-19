import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import * as S from './styles'

export const Header = () => {
  const menuItems = [
    { title: 'News', value: 'news' },
    { title: 'My Projects', value: 'my_projects' },
    { title: 'About Me', value: 'about_me' },
    { title: 'Config', value: 'config' }
  ]
  const middleIndex = Math.ceil(menuItems.length / 2)
  const firstHalf = menuItems.splice(0, middleIndex)
  const secondHalf = menuItems.splice(-middleIndex)

  const [menuSelected, setMenuSelected] = React.useState<string>('')

  const router = useRouter()
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      setMenuSelected(url.slice(1))
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

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
      </S.Container>
    </header>
  )
}
