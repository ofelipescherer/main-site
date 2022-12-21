import * as S from './styles'

export const Meet = () => {
  return (
    <S.WraperNextPage>
      <S.Wrapper>
        <S.Container>
          <S.MeetText>Meet</S.MeetText>
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

      <S.ButtonNextFragment href="#myProjects" scroll={false}>
        Next
      </S.ButtonNextFragment>
    </S.WraperNextPage>
  )
}
