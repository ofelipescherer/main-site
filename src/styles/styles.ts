import styled from 'styled-components'

export const MainContent = styled.main`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 1rem;
`

export const BackgroundEffect = styled.div`
  background-color: ${({ theme }) => theme.colors.main.primary_01}30;
`
