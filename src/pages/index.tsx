import { AboutMeCarrousel } from 'compoents/Home/AboutMeCarrousel'
import { Meet } from 'compoents/Home/Meet'
import { ProjectsCarrousel } from 'compoents/Home/ProjectsCarrousel'
import * as S from 'styles/styles'

export default function Home() {
  return (
    <>
      <S.MainContent>
        <Meet />
        <AboutMeCarrousel />
        <ProjectsCarrousel id={'myProjects'} />
      </S.MainContent>
    </>
  )
}
