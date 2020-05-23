import React from 'react'
import Link from 'next/link'

import Layout from 'components/Layout'
import getAllPosts from 'utils/getAllPosts'

const BlogsPage = props => {
  return (
    <div>
      <Layout>
        <div>Blog works!!</div>
        <ul>
          {props.posts.map(post => {
            return (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug'])
  return {
    props: { posts },
  }
}

export default BlogsPage
