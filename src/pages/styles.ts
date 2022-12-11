import styled from 'styled-components'

export const MainContent = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.h1`
  border-radius: 10px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.typografy.title};
  background-color: ${({ theme }) => theme.colors.background.foreground};
  text-align: center;
`
