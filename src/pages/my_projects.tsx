import Card from 'compoents/My_projects/Card'
import { dataCards } from 'compoents/My_projects/data'
import * as S from 'styles/styles'

export default function MyProjects() {
  const dataCard = dataCards

  return (
    <>
      <div>MyProjects</div>

      {dataCard.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  )
}
