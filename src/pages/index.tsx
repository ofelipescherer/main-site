import { AboutMeCarrousel } from 'compoents/Home/AboutMeCarrousel'
import { ProjectsCarrousel } from 'compoents/Home/ProjectsCarrousel'
import * as S from 'styles/styles'

export default function Home() {
  return (
    <>
      <S.MainContent>
        <AboutMeCarrousel />
        <ProjectsCarrousel />
      </S.MainContent>
    </>
  )
}
