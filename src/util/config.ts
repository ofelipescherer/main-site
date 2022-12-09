// import { Inter } from '@next/font/google'
import { Font } from 'types/Theme'

export const appConfig = {
  appName: 'Playscores',
  title: 'Teste',
  metaTagName: 'Created by Playscores',
  metaTagContent: 'Web white label da Playscores',
  metaTagOgContent: 'Facebook meta tag'
}

// export const inter = Inter({
//   weight: ['400', '500', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   fallback: [
//     'apple-system',
//     'BlinkMacSystemFont',
//     'Segoe UI',
//     'Noto Sans',
//     'Helvetica,Arial,sans-serif',
//     'Apple Color Emoji',
//     'Segoe UI Emoji'
//   ]
// })

export const fontConfig: Font = {
  fontSize: {
    xl: '1rem',
    lg: '0.875rem',
    base: '0.75rem',
    sm: '0.6875rem',
    xs: '0.625rem',
    xxs: '0.5rem'
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700'
  }
}
