import styled from 'styled-components'

type Card = {
  color: string
}

export const Card = styled.div<Card>`
  border: 1px solid gray;
  background-color: ${(props) => props.color};
  height: 500px;
  width: 400px;
  z-index: 10;
`
