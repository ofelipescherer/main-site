import { dataCards } from 'components/My_projects/data'
import ProjectCard from 'components/My_projects/ProjectCard'
import * as S from 'styles/my_projects'

export default function MyProjects() {
  const dataCard = dataCards

  return (
    <>
      <S.TitleContainer>
        <S.Title>MY PROJECTS</S.Title>
        <S.Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </S.Description>

        <S.FiltersContainer>
          <S.FilterContainer>
            <S.FilterByType>Project Type Filter</S.FilterByType>
            <S.FilterByName>Name Filter</S.FilterByName>
          </S.FilterContainer>

          <S.FilterByDate>Date Filter</S.FilterByDate>
        </S.FiltersContainer>
      </S.TitleContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {dataCard.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </div>
    </>
  )
}
