import { Header } from 'compoents/Header'
import Head from 'next/head'
import { Children } from 'types/Global'
import { appConfig } from 'util/config'
import * as S from './styles'

export const Layout = ({ children }: Children) => {
  return (
    <S.Container>
      <S.Contain>
        <Head>
          <title>{appConfig.title}</title>
        </Head>
        <Header />
        <S.MainLayout>{children}</S.MainLayout>
      </S.Contain>
      {/* <S.Footer /> */}
    </S.Container>
  )
}
