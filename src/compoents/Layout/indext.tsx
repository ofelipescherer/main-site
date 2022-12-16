import { Header } from 'compoents/Header'
import { Children } from 'types/Global'
import * as S from './styles'

export const Layout = ({ children }: Children) => {
  return (
    <S.Container>
      <Header />
      <div>{children}</div>
    </S.Container>
  )
}
