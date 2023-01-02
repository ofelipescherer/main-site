import React from 'react'

import ReactMarkdown from 'react-markdown'
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import * as S from 'styles/my_projects'
import { Children } from 'types/Global'
import { CardProject } from 'types/MyProjects'

type ProjectPage = {
  fontmatterdata: CardProject
  content: string
}

const Test = ({ children }: Children) => {
  return (
    <div>
      <S.Markdownh1>{children}</S.Markdownh1>
    </div>
  )
}

export default function ProjectPage({ fontmatterdata, content }: ProjectPage) {
  return (
    <div>
      <div>
        <span>{fontmatterdata.title}</span>

        {/* {fontmatterdata.tags.map((tag) => (
          <div key={tag.id}>{tag.title}</div>
        ))} */}

        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={content}
          components={{
            h1: ({ children }) => <Test>{children}</Test>
          }}
        />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/projects'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/projects', slug + '.md'),
    'utf-8'
  )

  const { data: fontmatterdata, content } = matter(markdownWithMeta)

  return {
    props: { fontmatterdata, slug, content }
  }
}
