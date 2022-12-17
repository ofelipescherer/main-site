import * as S from './styles'

type ItemCard = {
  item: Card
}

type Card = {
  id: number
  title: string
}

export const AboutMeCarrouselCard = ({ item }: ItemCard) => {
  return (
    <S.Container>
      <S.Card>{item.title}</S.Card>
    </S.Container>
  )
}
