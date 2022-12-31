import Card from 'components/My_projects/Card'
import { dataCards } from 'components/My_projects/data'
import React from 'react'
import TitleCarrousel from '../TitleCarrousel'

import * as S from './styles'

type ProjectCarrousel = {
  id: React.ReactNode
}

export const ProjectsCarrousel = ({ id }: ProjectCarrousel) => {
  const [cardSelected, setCardSelected] = React.useState(0)
  const [previousCard, setPreviousCard] = React.useState(0)
  const [nextCard, setNextCard] = React.useState(0)

  const getCards = (): React.ReactNode[] => {
    const array: React.ReactNode[] = []
    dataCards.map((card) => array.push(<Card card={card} />))
    return array
  }

  const cards = getCards()

  React.useEffect(() => {
    if (!cards || cards.length === 0) return

    const next = cardSelected === cards.length - 1 ? 0 : cardSelected + 1
    const previous = cardSelected === 0 ? cards.length - 1 : cardSelected - 1
    setNextCard(next)
    setPreviousCard(previous)
  }, [cardSelected, cards])

  const setCardSelectedPrevious = () => {
    if (cardSelected === 0) setCardSelected(cards.length - 1)
    else setCardSelected(cardSelected - 1)
  }

  const setCardSelectedNext = () => {
    if (cardSelected === cards.length - 1) setCardSelected(0)
    else setCardSelected(cardSelected + 1)
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
        <S.ButtonLeft onClick={setCardSelectedPrevious}>
          {cards[previousCard]}
        </S.ButtonLeft>

        {cards[cardSelected]}

        <S.ButtonRight onClick={setCardSelectedNext}>
          {cards[nextCard]}
        </S.ButtonRight>
      </S.Container>
    </S.Wraper>
  )
}
