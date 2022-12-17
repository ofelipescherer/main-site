import styled from 'styled-components'

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
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
  background-color: gray;
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

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  transform: scale(0.8);

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
