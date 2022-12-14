import styled from 'styled-components'

interface Attrs {
  id?: string | undefined | null
}

export const Wraper = styled.div.attrs(({ id = '#' }: Attrs) => ({
  id
}))`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
  height: 100vh;
  padding-top: 10%;
  max-width: 1000px;
  margin: auto;
  width: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProjectCarrousel = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CardCarrousel = styled.button`
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.util.auxiliar_gray};
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  transition: width 0.25s;

  &:hover {
    opacity: 0.8;
  }

  &.selected {
    width: 25px;
    border-radius: 10px;
    opacity: 1;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`

export const Button = styled.div`
  cursor: pointer;
  position: absolute;
  transform: scale(0.8);

  z-index: 5;
  opacity: 0.5;
  transition: 0.4s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

export const ButtonLeft = styled(Button)`
  left: 0;
`
export const ButtonRight = styled(Button)`
  right: 0;
`
