const fs = require('fs')
const matter = require('gray-matter')

const getBlogBySlug = slug => {
  const path = `${process.cwd()}/contents/${slug}.md`
  const rawContent = fs.readFileSync(path, {
    encoding: 'utf-8',
  })

  return matter(rawContent)
}

export default getBlogBySlug
