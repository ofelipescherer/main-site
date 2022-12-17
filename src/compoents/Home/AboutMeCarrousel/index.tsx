import CollegeIcon from 'icons/College/indext'
import { TitleCarrousel } from '../TitleCarrousel'
import { AboutMeCarrouselCard } from './AboutMeCarrouselCard'
import * as S from './styles'

export const AboutMeCarrousel = () => {
  const cards = [
    {
      id: 1,
      title: 'Degree Computer Science',
      description: 'By Unip Campinas Swift 2022',
      icon: <CollegeIcon color="#fff" />
    },
    {
      id: 2,
      title: 'Degree Tecnical Eletronics',
      description: 'By Rosa Perrone Scavonne 2019',
      icon: <CollegeIcon color="#fff" />
    },
    {
      id: 3,
      title: 'Courses',
      description: 'External Courses',
      icon: <CollegeIcon color="#fff" />
    }
  ]

  return (
    <S.Wraper>
      <TitleCarrousel>About me</TitleCarrousel>

      <S.Container>
        {cards.map((item) => (
          <AboutMeCarrouselCard key={item.id} item={item} />
        ))}
      </S.Container>
    </S.Wraper>
  )
}
