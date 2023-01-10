import { enUS } from './en-US'
import { ptBR } from './pt-BR'

type language = {
  homePageTitle: string
}

type i18nProps = {
  [key: string]: language
}

export const locales = ['en-US', 'pt-BR']

export const i18n: i18nProps = {
  'pt-BR': ptBR,
  'en-US': enUS
}
