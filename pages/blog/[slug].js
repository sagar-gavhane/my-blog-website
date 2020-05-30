import React from 'react'
import ErrorPage from 'next/error'
import Layout from 'components/Layout'

const PostPage = props => {
  if (!props.blog?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      <Layout>
        <h1>{props.blog.title}</h1>
        <section
          className="markdown"
          dangerouslySetInnerHTML={{ __html: props.blog.content }}
        />
      </Layout>
    </div>
  )
}

export async function getStaticProps(context) {
  const getBlogBySlug = require('utils/getBlogBySlug').default
  const markdownToHtml = require('utils/markdownToHtml').default

  const { data, content } = getBlogBySlug(context.params.slug)

  const result = await markdownToHtml(content)

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      },
    },
  }
}

export async function getStaticPaths() {
  const fs = require('fs')

  const allFileNames = fs.readdirSync(`${process.cwd()}/contents`, 'utf-8')
  const markdownFileNames = allFileNames
    .filter(fn => fn.endsWith('.md'))
    .map(fn => fn.replace('.md', ''))

  return {
    paths: markdownFileNames.map(fileName => {
      return {
        params: {
          slug: fileName,
        },
      }
    }),
    fallback: false,
  }
}

export default PostPage
