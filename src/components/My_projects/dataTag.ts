import { Tag } from 'types/MyProjects'

export const Tags: Record<string, Tag> = {
  react: {
    id: 1, // trocar numero por string
    title: 'React',
    color: '#000000A6',
    backgroundColor: '#FFA5A5A6',
    linkToProjects: '' // Um link que leva até a página de projetos com essa tag, naquela página podemos ter um link para a docs daquilo, ou seja ex, react
  },

  figma: {
    id: 2,
    title: 'Figma',
    color: '#000000A6',
    backgroundColor: '#EDBAFFA6',
    linkToProjects: ''
  },

  javascript: {
    id: 3,
    title: 'Javascript',
    color: '#000000A6',
    backgroundColor: '#ACAAFFA6',
    linkToProjects: ''
  },

  next: {
    id: 4,
    title: 'Next',
    color: '#000000A6',
    backgroundColor: '#CAFFD6A6',
    linkToProjects: ''
  },

  angular: {
    id: 5,
    title: 'Angular',
    color: '#000000A6',
    backgroundColor: '#FFE6C1A6',
    linkToProjects: ''
  }
}
