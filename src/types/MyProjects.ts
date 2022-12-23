export type CardProject = {
  id: number
  type:
    | 'draw'
    | 'codeWeek'
    | 'codingCourseLesson'
    | 'codeScript'
    | 'original'
    | 'computerScienceCollegeProjects'
    | 'recipe'
  title: string
  image: string
  description: string
  tags: string[]
}

export enum CardProjectType {
  draw = 'Drawing',
  codeWeek = 'Coding Week',
  codingCourseLesson = 'Coding Course Lesson',
  codeScript = 'Coding Scrips',
  original = 'Original',
  computerScienceCollegeProjects = 'Computer Science College Projects',
  recipe = 'Receita'
}

export enum CardProjectColors {
  draw = '#FF28CFA6 ',
  codeWeek = '#F6D319A6',
  codingCourseLesson = '#00C06BA6',
  codeScript = '#3272EFA6',
  original = '#8F47ECA6',
  computerScienceCollegeProjects = '#EE0A0AA6',
  recipe = '#ff455555'
}
