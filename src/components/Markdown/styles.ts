import styled from 'styled-components'

export const MdH1 = styled.h1`
  font-size: 200%;
`

export const MdH2 = styled.h1`
  font-size: 180%;
`
export const MdH3 = styled.h1`
  font-size: 160%;
`
export const MdH4 = styled.h1`
  font-size: 140%;
`
export const MdH5 = styled.h1`
  font-size: 120%;
`

export const MdBold = styled.strong`
  font-weight: 800;
`

export const MdItalic = styled.em`
  font-style: italic;
`
export const MdOrderedList = styled.ol``
export const MdUnordered = styled.ul``

export const MdBlockQuote = styled.blockquote`
  border-left: 0.25em solid ${({ theme }) => theme.colors.main.primary_01};
  margin: 0;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.colors.util.auxiliar_gray};
`

export const MdCodeBlock = styled.code``
export const MdImage = styled.img``
export const MdLink = styled.a``
export const MdHorizontalLine = styled.hr``

export const MdA = styled.a``
