import { AboutMeCarrousel } from 'components/Home/AboutMeCarrousel'
import { Meet } from 'components/Home/Meet'
import { ProjectsCarrousel } from 'components/Home/ProjectsCarrousel'
import * as S from 'styles/styles'

export default function Home() {
  return (
    <>
      <S.MainContent>
        <Meet />
        <S.BackgroundEffect>
          <AboutMeCarrousel id={'aboutMe'} />
        </S.BackgroundEffect>
        <ProjectsCarrousel id={'myProjects'} />
      </S.MainContent>
    </>
  )
}
