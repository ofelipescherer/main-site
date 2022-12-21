import {
  CardProject,
  CardProjectColors,
  CardProjectType
} from 'types/MyProjects'
import * as S from './styles'

type CardProjectComponent = {
  card: CardProject
}

export default function Card({ card }: CardProjectComponent) {
  return (
    <S.Wraper style={{ border: `3px solid ${CardProjectColors[card.type]}` }}>
      <S.CardType style={{ backgroundColor: CardProjectColors[card.type] }}>
        {CardProjectType[card.type]}
      </S.CardType>
      <S.Container>
        <S.CardTitle>{card.title}</S.CardTitle>
        <S.CardImage
          src={card.image}
          alt="Image Project"
          width={0}
          height={0}
        />
        <S.Description>{card.description}</S.Description>

        <S.MoreButton style={{ backgroundColor: CardProjectColors[card.type] }}>
          Saiba Mais
        </S.MoreButton>
      </S.Container>
    </S.Wraper>
  )
}
