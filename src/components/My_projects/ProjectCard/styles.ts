import Image from 'next/image'
import styled from 'styled-components'

export const Wraper = styled.div`
  width: 378px;
  height: 504px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.background};
  z-index: 10;
  position: relative;
  overflow: hidden;
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
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const CardImage = styled(Image)`
  width: 100%;
  height: 180px;
  aspect-ratio: 16 / 9;
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
  color: ${({ theme }) => theme.colors.typografy.description};
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

export const TagContainer = styled.div`
  display: flex;
  overflow: scroll;
  padding-bottom: 0.8rem;
  gap: 0.5rem;
`

export const Tag = styled.div`
  font-size: 80%;
  background-color: red;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.typografy.description};
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
