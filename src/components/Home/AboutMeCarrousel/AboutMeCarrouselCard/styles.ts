import Image from 'next/image'
import styled from 'styled-components'

export const Wraper = styled.div`
  flex: 0 0 30%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.colors.typografy.text};
  fill: ${({ theme }) => theme.colors.typografy.text};
  background-color: ${({ theme }) => theme.colors.background.foreground};
`

export const BackgroundImage = styled(Image)`
  width: 100%;
  aspect-ratio: 4 /2;
  background-color: ${({ theme }) => theme.colors.main.primary_01};
`

export const Container = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.typografy.text};
`

export const CardIcon = styled.span`
  position: absolute;
  font-size: 200%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 0.25rem;
  top: -2rem;
  width: 3.5rem;
  background-color: ${({ theme }) => theme.colors.background.foreground};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.24);
`

export const CardTitle = styled.div`
  font-size: 18px;
  padding-top: 1rem;
  padding-left: 0.25rem;
  font-weight: 600;
`

export const CardDescription = styled.span`
  font-size: 12px;
  padding-left: 0.25rem;
  opacity: 0.7;
`
