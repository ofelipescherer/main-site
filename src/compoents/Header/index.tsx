import Link from 'next/link'
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

  return (
    <header>
      <S.Container>
        {firstHalf.map((item) => {
          return (
            <Link
              key={item.value}
              href={'/' + item.value}
              onClick={() => setMenuSelected(item.value)}
            >
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
            <Link
              key={item.value}
              href={item.value}
              onClick={() => setMenuSelected(item.value)}
            >
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
