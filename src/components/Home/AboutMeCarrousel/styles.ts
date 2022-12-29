import Link from 'next/link'
import styled from 'styled-components'

interface Attrs {
  id?: string | undefined | null
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export const ButtonNextFragment = styled(Link)`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.background.foreground};
  padding: 1rem;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }
`

export const Wraper = styled.div.attrs(({ id = '#' }: Attrs) => ({
  id
}))`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  padding-top: 20%;
`
