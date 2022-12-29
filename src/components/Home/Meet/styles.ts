import Link from 'next/link'
import styled from 'styled-components'

export const WraperNextPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: calc(100vh - 60px - 1rem);
  padding-top: 20%;
  height: 100vh;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.typografy.title};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MeetText = styled.span`
  font-size: 25px;
  opacity: 0.7;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`

export const Subtitle = styled.span`
  font-size: 25px;
  opacity: 0.7;
`

export const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
`

export const ExploreTitle = styled.span`
  font-size: 15px;
  opacity: 0.7;
`

export const ExploreItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
`

export const ExploreItem = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.background.foreground};
  color: ${({ theme }) => theme.colors.typografy.title};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px 0px;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    transform: scale(1.1);
  }
`

export const ImageMeet = styled.div`
  flex: 0 0 60%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.main.primary_01};
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
