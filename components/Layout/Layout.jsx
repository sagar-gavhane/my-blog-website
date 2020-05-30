import React from 'react'
import { StyledWrapper } from './styles'

const Layout = ({ children }) => {
  return <StyledWrapper role="main">{children}</StyledWrapper>
}

export default Layout
