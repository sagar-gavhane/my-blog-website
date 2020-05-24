import React, { useRef } from 'react'
import Link from 'next/link'

import IconClose from 'assets/icons/IconClose'

import {
  StyledWrapper,
  StyledMenuText,
  StyledIconCloseWrapper,
  StyledNav,
  StyledNavItem,
} from './styled'

const OpenedMenu = ({ setShowMenu }) => {
  const wrapper = useRef(null)
  return (
    <StyledWrapper ref={wrapper}>
      <StyledIconCloseWrapper
        onClick={() => {
          wrapper.current.style.height = 0
          setTimeout(() => {
            setShowMenu(showMenu => !showMenu)
          }, 600)
        }}
      >
        <IconClose />
      </StyledIconCloseWrapper>
      <StyledMenuText>Menu</StyledMenuText>
      <StyledNav>
        <StyledNavItem>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </StyledNavItem>
      </StyledNav>
    </StyledWrapper>
  )
}

export default OpenedMenu
