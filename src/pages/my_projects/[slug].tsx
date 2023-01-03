import React from 'react'

import ReactMarkdown from 'react-markdown'
import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { CardProject } from 'types/MyProjects'
import {
  MdBlockQuote,
  MdH1,
  MdH2,
  MdH3,
  MdH4,
  MdH5,
  MdBold,
  MdItalic,
  MdCodeBlock
} from 'components/Markdown'

type ProjectPage = {
  fontmatterdata: CardProject
  content: string
  slug: string
}

export default function ProjectPage({
  fontmatterdata,
  content,
  slug
}: ProjectPage) {
  if (!fontmatterdata || !content)
    return <div>Projeto {slug} não foi encontrado</div>

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
            h1: ({ children }) => <MdH1>{children}</MdH1>,
            h2: ({ children }) => <MdH2>{children}</MdH2>,
            h3: ({ children }) => <MdH3>{children}</MdH3>,
            h4: ({ children }) => <MdH4>{children}</MdH4>,
            h5: ({ children }) => <MdH5>{children}</MdH5>,
            strong: ({ children }) => <MdBold>{children}</MdBold>,
            em: ({ children }) => <MdItalic>{children}</MdItalic>,
            blockquote: ({ children }) => (
              <MdBlockQuote>{children}</MdBlockQuote>
            ),
            code: ({ children, className }) => (
              <MdCodeBlock language={className}>{children}</MdCodeBlock>
            )
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
  console.log(paths)
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({
  params: { slug }
}: {
  params: { slug: string }
}) {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/projects', slug + '.md'),
      'utf-8'
    )

    const { data: fontmatterdata, content } = matter(markdownWithMeta)

    return {
      props: { fontmatterdata, slug, content }
    }
  } catch {
    return {
      props: {
        fontmatterdata: null,
        slug,
        content: null
      }
    }
  }
}
