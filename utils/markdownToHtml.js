import html from 'remark-html'
import highlight from 'remark-highlight.js'
import unified from 'unified'
import markdown from 'remark-parse'

const markdownToHtml = async content => {
  // const result = await remark().use(highlight).use(html).process(markdown)
  const result = await unified()
    .use(markdown)
    .use(highlight)
    .use(html)
    .process(content)
  return result.toString()
}

export default markdownToHtml
