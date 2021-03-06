import React from 'react'

import Link from 'components/Link'

import { StyledNav } from './styles'

const Nav = () => {
  return (
    <StyledNav role="navigation">
      <Link text="Blogs" href="/blogs" />
      <Link text="Portfolio" href="/portfolio" />
    </StyledNav>
  )
}

export default Nav
