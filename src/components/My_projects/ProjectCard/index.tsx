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
import ProjectCardTag from './ProjectCardTag'
import { Tags } from '../dataTag'
import { useScrollContainer } from 'react-indiana-drag-scroll'
import SimpleBar from 'simplebar-react'

type CardProjectComponent = {
  card: CardProject
}

export default function ProjectCard({ card }: CardProjectComponent) {
  const theme = useTheme()
  const [cardDate, setCardDate] = React.useState('')
  const [tagsOpen, setTagsOpen] = React.useState(false)
  const { ref } = useScrollContainer()
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
    <S.Wraper>
      <S.CardType style={{ backgroundColor: CardProjectColors[card.type] }}>
        {CardProjectType[card.type]}
      </S.CardType>

      <S.ImageContainer>
        <S.CardImage
          src={card.image}
          alt="Image Project"
          width={0}
          height={0}
        />
        <S.TagToggleButton onClick={handleTagsOpen}>
          {tagsOpen ? (
            <S.TagTitleContainer>
              <span>Esconder Tags</span>
              <ChevronDown color={theme.colors.default.white} />
            </S.TagTitleContainer>
          ) : (
            <S.TagTitleContainer>
              <span>Mostrar Tags</span>
              <ChevronUp color={theme.colors.default.white} />
            </S.TagTitleContainer>
          )}
        </S.TagToggleButton>{' '}
      </S.ImageContainer>

      <S.Container>
        <S.HeaderContainer>
          <S.TitleContainer>
            <S.CardTitle>{card.title}</S.CardTitle>
            {
              <S.TagWrapper>
                {tagsOpen ? (
                  <SimpleBar scrollableNodeProps={{ ref }}>
                    <div
                      style={{
                        flexShrink: 0,
                        display: 'flex',
                        borderBottom: '1px solid red',
                        minHeight: '50px'
                      }}
                    >
                      {card.tags.map((tag) => (
                        <ProjectCardTag
                          key={`${card.id}-${tag}`}
                          tag={Tags[tag as string]}
                        />
                      ))}
                    </div>
                  </SimpleBar>
                ) : (
                  <S.CardDate>{cardDate}</S.CardDate>
                )}
              </S.TagWrapper>
            }
          </S.TitleContainer>
        </S.HeaderContainer>

        <S.Description>{card.description}</S.Description>

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
