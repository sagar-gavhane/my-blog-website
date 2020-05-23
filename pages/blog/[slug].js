import React from 'react'
import ErrorPage from 'next/error'
import Layout from 'components/Layout'
import getPostBySlug from 'utils/getPostBySlug'
import getAllPosts from 'utils/getAllPosts'

const PostPage = props => {
  if (!props.post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      <Layout>
        <h1>{props.post.title}</h1>
        <section
          className="markdown"
          dangerouslySetInnerHTML={{ __html: props.post.content }}
        />
      </Layout>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const markdownToHtml = require('utils/markdownToHtml').default

  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default PostPage
