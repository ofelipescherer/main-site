import { Children } from 'types/Global'
import * as S from './styles'

import CopyToClipboard from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
// import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import agate from 'react-syntax-highlighter/dist/cjs/styles/hljs/agate'
import React from 'react'

import { toast } from 'react-toastify'
import { useTheme } from 'styled-components'

type MdCodeBlockProps = {
  language?: string
}

export function MdH1({ children }: Children) {
  return <S.MdH1>{children}</S.MdH1>
}

export function MdH2({ children }: Children) {
  return <S.MdH2>{children}</S.MdH2>
}

export function MdH3({ children }: Children) {
  return <S.MdH3>{children}</S.MdH3>
}

export function MdH4({ children }: Children) {
  return <S.MdH4>{children}</S.MdH4>
}

export function MdH5({ children }: Children) {
  return <S.MdH5>{children}</S.MdH5>
}

export function MdBold({ children }: Children) {
  return <S.MdBold>{children}</S.MdBold>
}

export function MdItalic({ children }: Children) {
  return <S.MdItalic>{children}</S.MdItalic>
}

export function MdOrderedList({ children }: Children) {
  return <S.MdOrderedList>{children}</S.MdOrderedList>
}

export function MdUnordered({ children }: Children) {
  return <S.MdUnordered>{children}</S.MdUnordered>
}

export function MdBlockQuote({ children }: Children) {
  return <S.MdBlockQuote>{children}</S.MdBlockQuote>
}

export function MdCodeBlock({
  children,
  language
}: Children & MdCodeBlockProps) {
  const codeLanguage = language?.split('-')[1]
  const theme = useTheme()
  const notify = () =>
    toast('Código copiado', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      style: { backgroundColor: theme.colors.main.primary_01 }
    })

  return (
    <S.MdCodeBlockContainer>
      <S.MdCodeBlock>
        <CopyToClipboard text={children?.toString() ?? ''}>
          <S.MdCodeBlockButton onClick={notify}>Copy Code</S.MdCodeBlockButton>
        </CopyToClipboard>

        <SyntaxHighlighter language={codeLanguage} style={agate}>
          {children?.toString() ?? ''}
        </SyntaxHighlighter>
      </S.MdCodeBlock>
    </S.MdCodeBlockContainer>
  )
}

export function MdImage({ children }: Children) {
  return <S.MdImage>{children}</S.MdImage>
}

export function MdHr({ children }: Children) {
  return <S.MdHr>{children}</S.MdHr>
}

export function MdA({ children }: Children) {
  return <S.MdA>{children}</S.MdA>
}
