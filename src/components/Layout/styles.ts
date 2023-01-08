import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box !important;
  /* position: relative; */
  background-color: ${({ theme }) => theme.colors.background.background};
`

export const Contain = styled.div`
  overflow: hidden;
  margin: auto;
  z-index: 10;
  position: inherit;
`

export const MainLayout = styled.main`
  min-height: calc(100vh - 140px);
`
