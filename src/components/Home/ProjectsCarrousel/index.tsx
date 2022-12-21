import React from 'react'
import { TitleCarrousel } from '../TitleCarrousel'
import ProjectCarrouselCard from './ProjectCarrouselCard'

import * as S from './styles'

type ProjectCarrousel = {
  id: React.ReactNode
}

export const ProjectsCarrousel = ({ id }: ProjectCarrousel) => {
  const cards = [
    <ProjectCarrouselCard key={1} color="#155" content="1" />,
    <ProjectCarrouselCard key={2} color="#255" content="2" />,
    <ProjectCarrouselCard key={3} color="#355" content="3" />,
    <ProjectCarrouselCard key={4} color="#455" content="4" />,
    <ProjectCarrouselCard key={5} color="#555" content="5" />,
    <ProjectCarrouselCard key={6} color="#655" content="6" />,
    <ProjectCarrouselCard key={7} color="#755" content="7" />,
    <ProjectCarrouselCard key={8} color="#855" content="8" />
  ]
  const [cardSelected, setCardSelected] = React.useState(0)

  const setPreviousCard = () => {
    if (cardSelected === 0) setCardSelected(cards.length - 1)
    else setCardSelected(cardSelected - 1)
  }

  const setNextCard = () => {
    if (cardSelected === cards.length - 1) setCardSelected(0)
    else setCardSelected(cardSelected + 1)
  }

  const getPreviousCard = () => {
    if (cardSelected === 0) return cards[cards.length - 1]
    else return cards[cardSelected - 1]
  }

  const getNextCard = () => {
    if (cardSelected === cards.length - 1) return cards[0]
    else return cards[cardSelected + 1]
  }

  return (
    <S.Wraper id={id}>
      <S.TitleContainer>
        <TitleCarrousel>My Projects</TitleCarrousel>
        <S.ProjectCarrousel>
          {cards.map((item, index) => (
            <S.CardCarrousel
              key={index}
              onClick={() => setCardSelected(cards.indexOf(item))}
              className={cardSelected === cards.indexOf(item) ? 'selected' : ''}
            />
          ))}
        </S.ProjectCarrousel>
      </S.TitleContainer>

      <S.Container>
        <S.ButtonLeft onClick={setPreviousCard}>
          {getPreviousCard()}
        </S.ButtonLeft>

        {cards[cardSelected]}

        <S.ButtonRight onClick={setNextCard}>{getNextCard()}</S.ButtonRight>
      </S.Container>
    </S.Wraper>
  )
}
