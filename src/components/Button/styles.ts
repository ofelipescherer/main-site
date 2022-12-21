import styled from 'styled-components'
import { LightenDarkenColor } from 'util/functions'

export const ThemeButton = styled.button`
  padding: 1rem;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.main.primary_01};
  color: ${({ theme }) => theme.colors.typografy.text};
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.background.foreground};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) =>
      LightenDarkenColor(theme.colors.main.primary_01, -20)};
  }
`
