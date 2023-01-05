import Image from 'next/image'
import styled from 'styled-components'

export const Wraper = styled.div`
  width: 378px;
  height: 423px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.background};
  z-index: 10;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
`

export const CardType = styled.span`
  color: #ffffff;
  padding: 0.25rem;
  width: 70%;
  text-align: center;
  border-radius: 0 0 10px 10px;
  font-size: 16px;
  font-family: 'Share Tech';
  position: absolute;
  z-index: 10;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

export const CardImage = styled(Image)`
  width: 100%;
  height: 180px;
  aspect-ratio: 16 / 9;
`

export const TagToggleButton = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled.span`
  color: #04030fb5;
  font-size: 150%;
  font-family: 'Share Tech';
`

export const CardDate = styled.span`
  font-size: 80%;
  color: ${({ theme }) => theme.colors.typografy.description};
`

export const TagTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.default.white};
  cursor: pointer;
  user-select: none;
  font-size: 80%;

  &:hover {
    filter: contrast(0.1);
  }
`

export const Description = styled.div`
  font-size: 18px;
  flex: 1;
`

export const TagWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 18px;
`

export const EndContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const MoreButton = styled.button`
  border-radius: 5px;
  padding: 0.5rem 2rem;
  text-align: center;
  cursor: pointer;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px;
  font-family: 'Share Tech';

  &:hover {
    filter: brightness(0.7);
    transform: scale(1.05);
  }
`
