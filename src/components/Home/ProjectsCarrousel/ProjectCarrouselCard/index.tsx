import * as S from './styles'

type ProjectCarrouselCard = {
  color: string
  content: string
}

const ProjectCarrouselCard = ({ color, content }: ProjectCarrouselCard) => {
  return <S.Card color={color}>{content}</S.Card>
}

export default ProjectCarrouselCard
