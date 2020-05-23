import fs from 'fs'
import { join } from 'path'

const getPostSlugs = () => {
  const postsDirectory = join(process.cwd(), 'contents')
  return fs.readdirSync(postsDirectory)
}

export default getPostSlugs
