import { i18n } from 'i18n'
import ArrowDown from 'icons/ArrowDown'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import * as S from './styles'

export const Meet = () => {
  const theme = useTheme()
  const { locale } = useRouter()

  if (!locale) return <>Loading Locale...</>

  return (
    <S.WraperNextPage>
      <S.Wrapper>
        <S.Container>
          <S.MeetText>{i18n[locale].homePageTitle}</S.MeetText>
          <S.Title>Felipe Scherer</S.Title>
          <S.Subtitle>Frontend Developer</S.Subtitle>

          <S.ExploreContainer>
            <S.ExploreTitle>Explore</S.ExploreTitle>
            <S.ExploreItemsContainer>
              <S.ExploreItem href={'news'}>News</S.ExploreItem>
              <S.ExploreItem href={'my_projects'}>My Projects</S.ExploreItem>
              <S.ExploreItem href={'about_me'}> About Me</S.ExploreItem>
              <S.ExploreItem href={'config'}>Config</S.ExploreItem>
            </S.ExploreItemsContainer>
          </S.ExploreContainer>
        </S.Container>

        <S.ImageMeet />
      </S.Wrapper>

      <S.ButtonNextFragment href="#aboutMe" scroll={false}>
        <ArrowDown color={theme.colors.typografy.title} />
      </S.ButtonNextFragment>
    </S.WraperNextPage>
  )
}
