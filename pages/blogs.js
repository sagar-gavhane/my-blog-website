import React from 'react'
import Link from 'next/link'

import Layout from 'components/Layout'

const BlogsPage = props => {
  return (
    <div>
      <Layout>
        <ul>
          {props.blogs.map(blog => {
            return (
              <li key={blog.id}>
                <Link href={`/blog/${blog.slug}`}>
                  <a>{blog.title}</a>
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
  const getAllBlogs = require('utils/getAllBlogs').default

  return {
    props: {
      blogs: getAllBlogs(),
    },
  }
}

export default BlogsPage
