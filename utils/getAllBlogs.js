const fs = require('fs')
const matter = require('gray-matter')
const { v4: uuid } = require('uuid')

const getAllBlogs = () => {
  const allFileNames = fs.readdirSync(`${process.cwd()}/contents`, 'utf-8')

  const blogs = allFileNames.map(fn => {
    const path = `${process.cwd()}/contents/${fn}`
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8',
    })
    const { data } = matter(rawContent)

    return { ...data, id: uuid() }
  })

  return blogs
}

export default getAllBlogs
