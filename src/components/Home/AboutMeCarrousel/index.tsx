import ArrowDown from 'icons/ArrowDown'
import CollegeIcon from 'icons/College/indext'
import { useTheme } from 'styled-components'
import TitleCarrousel from '../TitleCarrousel'
import { AboutMeCarrouselCard } from './AboutMeCarrouselCard'
import * as S from './styles'

type AboutMe = {
  id: React.ReactNode
}
export const AboutMeCarrousel = ({ id }: AboutMe) => {
  const theme = useTheme()

  const cards = [
    {
      id: 1,
      title: 'Degree Computer Science',
      description: 'By Unip Campinas Swift 2022',
      image:
        'https://user-images.githubusercontent.com/62115215/208220161-87997c39-7737-438a-b8af-4b6dea50bd30.jpg',
      icon: <CollegeIcon color={theme.colors.typografy.text} />
    },
    {
      id: 2,
      title: 'Degree Tecnical Eletronics',
      description: 'By Rosa Perrone Scavonne 2019',
      image:
        'https://user-images.githubusercontent.com/62115215/208220161-87997c39-7737-438a-b8af-4b6dea50bd30.jpg',
      icon: <CollegeIcon color={theme.colors.typografy.text} />
    },
    {
      id: 3,
      title: 'Courses',
      description: 'External Courses',
      image:
        'https://user-images.githubusercontent.com/62115215/208220161-87997c39-7737-438a-b8af-4b6dea50bd30.jpg',
      icon: <CollegeIcon color={theme.colors.typografy.text} />
    }
  ]

  return (
    <S.Wraper id={id}>
      <TitleCarrousel>About me</TitleCarrousel>

      <S.Container>
        {cards.map((item) => (
          <AboutMeCarrouselCard key={item.id} item={item} />
        ))}
      </S.Container>

      <S.ButtonNextFragment href="#myProjects" scroll={false}>
        <ArrowDown color={theme.colors.typografy.title} />
      </S.ButtonNextFragment>
    </S.Wraper>
  )
}
