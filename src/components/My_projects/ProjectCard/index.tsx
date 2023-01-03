import ChevronUp from 'icons/ChevronUp/ChevronUp'
import ChevronDown from 'icons/ChevronDown/ChevronDown'
import GithubIcon from 'icons/Github/indext'
import React from 'react'
import { useTheme } from 'styled-components'
import {
  CardProject,
  CardProjectColors,
  CardProjectType,
  Month
} from 'types/MyProjects'
import * as S from './styles'
import Link from 'next/link'

type CardProjectComponent = {
  card: CardProject
}

export default function ProjectCard({ card }: CardProjectComponent) {
  const theme = useTheme()
  const [cardDate, setCardDate] = React.useState('')
  const [tagsOpen, setTagsOpen] = React.useState(false)

  React.useEffect(() => {
    if (card?.date) {
      const date = new Date(card.date)

      setCardDate(`${Month[date.getMonth()]}, ${date.getFullYear()}`)
    }
  }, [card])

  function handleTagsOpen() {
    setTagsOpen((prev) => !prev)
  }

  return (
    <S.Wraper style={{ border: `3px solid ${CardProjectColors[card.type]}` }}>
      <S.CardType style={{ backgroundColor: CardProjectColors[card.type] }}>
        {CardProjectType[card.type]}
      </S.CardType>

      <S.CardImage src={card.image} alt="Image Project" width={0} height={0} />

      <S.Container>
        <S.HeaderContainer>
          <S.TitleContainer>
            <S.CardTitle>{card.title}</S.CardTitle>
            <S.CardDate>{cardDate}</S.CardDate>
          </S.TitleContainer>
          <span onClick={handleTagsOpen}>
            {tagsOpen ? (
              <S.TagTitleContainer>
                <span>Esconder Tags</span>
                <ChevronDown color={theme.colors.typografy.description} />
              </S.TagTitleContainer>
            ) : (
              <S.TagTitleContainer>
                <span>Mostrar Tags</span>
                <ChevronUp color={theme.colors.typografy.description} />
              </S.TagTitleContainer>
            )}
          </span>
        </S.HeaderContainer>

        <S.Description>{card.description}</S.Description>

        {tagsOpen ? (
          <S.TagContainer>
            {card.tags.map((tag) => (
              <S.Tag
                style={{
                  backgroundColor: tag.backgroundColor,
                  color: tag.color
                }}
                key={`${card.id}-${tag.id}`}
              >
                {tag.title}
              </S.Tag>
            ))}
          </S.TagContainer>
        ) : (
          <div />
        )}

        <S.EndContainer>
          <GithubIcon color={theme.colors.typografy.text} />
          <Link href={`my_projects/${card.slug}`}>
            <S.MoreButton
              style={{ backgroundColor: CardProjectColors[card.type] }}
            >
              Saiba Mais
            </S.MoreButton>
          </Link>
        </S.EndContainer>
      </S.Container>
    </S.Wraper>
  )
}
