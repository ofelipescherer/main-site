import { Tag } from 'types/MyProjects'
import * as S from './styles'

type ProjectCardTagProps = {
  tag: Tag
}

export default function ProjectCardTag({ tag }: ProjectCardTagProps) {
  return (
    <S.Tag
      style={{
        backgroundColor: tag.backgroundColor,
        color: tag.color
      }}
    >
      {tag.title}
    </S.Tag>
  )
}
