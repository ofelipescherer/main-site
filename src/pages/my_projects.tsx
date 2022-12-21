import Card from 'components/My_projects/Card'
import { dataCards } from 'components/My_projects/data'
import * as S from 'styles/styles'

export default function MyProjects() {
  const dataCard = dataCards

  return (
    <>
      <div>MyProjects</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {dataCard.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  )
}
