import styled from 'styled-components'

export const Tag = styled.div`
  font-size: 70%;
  background-color: red;
  padding: 0.2rem 0.25rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.typografy.description};
`
