import getPostBySlug from './getPostBySlug'
import getPostSlugs from './getPostSlugs'

const getAllPosts = (fields = []) => {
  const slugs = getPostSlugs()
  return slugs.map(slug => getPostBySlug(slug, fields))
}

export default getAllPosts
