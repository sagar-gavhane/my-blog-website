import React from 'react'
import NextLink from 'next/link'

import { StyledLink } from './styles'

const Link = props => {
  const { text = 'link', href = '/', isExternalLink = false } = props

  if (isExternalLink) {
    return (
      <StyledLink href={href} rel="noopener noreferrer" target="_blank">
        {text}
      </StyledLink>
    )
  }

  return (
    <NextLink href={href}>
      <StyledLink>{text}</StyledLink>
    </NextLink>
  )
}

export default Link
