import React from 'react'

import Layout from 'components/Layout'
import Header from 'components/Header'
import HelloText from 'components/HelloText'
import Text from 'components/Text'
import ExternalLink from 'components/ExternalLink'

const IndexPage = () => {
  return (
    <Layout>
      <div className="half-content">
        <Header />
        <HelloText />
        <Text>
          My name is <strong>Sagar Gavhane</strong>.
        </Text>
        <Text>
          Passionate software engineer with 3.5 years of experience building
          products for different domains like retail, e-commerce, real estate,
          and now Fin-Tech.
        </Text>
        <Text>
          <span>
            I’m currently available for work, you can take a look at my{' '}
          </span>
          <ExternalLink text="resume" href="https://resume.io/r/zUMxWOl6F" />.
        </Text>
        <Text>
          <span>
            I have an old blog which I no longer actively update - you probably
            want to follow me on{' '}
          </span>
          <ExternalLink text="Twitter" href="https://twitter.com/sagar_codes" />
          <span>, </span>
          <ExternalLink
            text="Medium"
            href="https://medium.com/@sagar_gavhane"
          />
          <span>, and </span>
          <ExternalLink text="Dev" href="https://dev.to/sagar" />
          <span>
            {' '}
            for more up-to-date content. Most of my work is open source and
            publicly available on{' '}
          </span>
          <ExternalLink text="GitHub" href="https://github.com/sagar-gavhane" />
          .
        </Text>
        <Text>
          I spend my time Tweeting, taking photographs, making art &amp; music,
          and writing code. I also write about design, courage, and lack
          thereof.
        </Text>
        <Text>Thank you 😊</Text>
      </div>
    </Layout>
  )
}

export default IndexPage
