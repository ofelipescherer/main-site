export type CardProject = {
  id: number
  type:
    | 'draw'
    | 'codeWeek'
    | 'codingCourseLesson'
    | 'codeScript'
    | 'original'
    | 'computerScienceCollegeProjects'
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
  computerScienceCollegeProjects = 'Computer Science College Projects'
}
