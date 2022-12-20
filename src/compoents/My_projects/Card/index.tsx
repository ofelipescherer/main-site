import { CardProject } from 'types/MyProjects'
import * as S from './styles'

type CardProjectComponent = {
  card: CardProject
}

export default function Card({ card }: CardProjectComponent) {
  return (
    <S.Wraper>
      <S.CardType>{card.type}</S.CardType>
      <S.CardTitle>{card.title}</S.CardTitle>
    </S.Wraper>
  )
}
