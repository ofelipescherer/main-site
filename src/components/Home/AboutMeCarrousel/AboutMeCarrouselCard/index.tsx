import React from 'react'
import { AboutMeCard } from 'types/AboutMe'
import * as S from './styles'

type ItemCard = {
  item: AboutMeCard
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
        <S.CardIcon>{item.icon}</S.CardIcon>
        <S.CardTitle>{item.title}</S.CardTitle>
        <S.CardDescription>{item.description}</S.CardDescription>
      </S.Container>
    </S.Wraper>
  )
}
