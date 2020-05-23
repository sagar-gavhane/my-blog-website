import React from 'react'

import Layout from 'components/Layout'
import Header from 'components/Header'
import HelloText from 'components/HelloText'
import Text from 'components/Text'
import Link from 'components/Link'
import Nav from 'components/Nav'

const IndexPage = () => {
  return (
    <Layout>
      <Nav />
      <div className="half-content">
        <Header />
        <HelloText />
        <Text>My name is Sagar Gavhane.</Text>
        <Text>
          Passionate software engineer with 3.5 years of experience building
          products for different domains like retail, e-commerce, real estate,
          and now Fin-Tech.
        </Text>
        <Text>
          <span>
            I’m currently available for work, you can take a look at my{' '}
          </span>
          <Link
            text="resume"
            href="https://resume.io/r/zUMxWOl6F"
            isExternalLink
          />
          .
        </Text>
        <Text>
          <span>
            I have an old blog which I no longer actively update - you probably
            want to follow me on{' '}
          </span>
          <Link
            text="Twitter"
            href="https://twitter.com/sagar_codes"
            isExternalLink
          />
          <span>, </span>
          <Link
            text="Medium"
            href="https://medium.com/@sagar_gavhane"
            isExternalLink
          />
          <span>, and </span>
          <Link text="Dev" href="https://dev.to/sagar" isExternalLink />
          <span>
            {' '}
            for more up-to-date content. Most of my work is open source and
            publicly available on{' '}
          </span>
          <Link
            text="GitHub"
            href="https://github.com/sagar-gavhane"
            isExternalLink
          />
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
