import React from 'react'
import Link from 'next/link'
import { useTransition } from 'react-spring'

import IconClose from 'assets/icons/IconClose'

import {
  StyledWrapper,
  StyledMenuText,
  StyledIconCloseWrapper,
  StyledNav,
  StyledNavItem,
} from './styled'

const OpenedMenu = ({ setShowMenu, showMenu }) => {
  const transitions = useTransition(showMenu, null, {
    from: { height: '0vh' },
    enter: {
      height: '100vh',
    },
    leave: {
      height: '0vh',
    },
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <StyledWrapper key={key} style={props}>
          <StyledIconCloseWrapper onClick={() => setShowMenu(false)}>
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
  )
}

export default OpenedMenu
