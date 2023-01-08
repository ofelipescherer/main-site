import React from 'react'
import * as S from './styles'

type Card = {
  id: number
  image: string
  title: string
  icon: string
  iconDesc: string
  description: string
}

type ItemCard = {
  item: Card
}

export const AboutMeCarrouselCard = ({ item }: ItemCard) => {
  return (
    <S.Wraper>
      <S.BackgroundImage
        src={item.image}
        alt={item.title}
        height={150}
        width={300}
      />
      <S.Container>
        <S.CardIcon aria-label={item.iconDesc}>{item.icon}</S.CardIcon>
        <S.CardTitle>{item.title}</S.CardTitle>
        <S.CardDescription>{item.description}</S.CardDescription>
      </S.Container>
    </S.Wraper>
  )
}
