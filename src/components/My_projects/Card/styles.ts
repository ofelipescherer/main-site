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
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`

export const CardType = styled.span`
  color: #ffffff;
  padding: 0.25rem;
  width: 70%;
  text-align: center;
  border-radius: 0 0 10px 10px;
  font-size: 16px;
  font-family: 'Share Tech';
`

export const CardTitle = styled.span`
  color: #04030fb5;
  font-size: 20px;
  font-family: 'Share Tech';
`

export const CardImage = styled(Image)`
  width: 100%;
  height: 180px;
  aspect-ratio: 16 / 9;
  border: 1px solid ${({ theme }) => theme.colors.default.black};
  border-radius: 3px;
`

export const Description = styled.div`
  font-size: 18px;
  flex: 1;
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
