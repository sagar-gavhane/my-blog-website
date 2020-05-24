import React, { useState } from 'react'

import IconMenu from 'assets/icons/IconMenu'
import OpenedMenu from 'components/OpenedMenu'

import { StyledWrapper } from './styles'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  if (showMenu) {
    return <OpenedMenu setShowMenu={setShowMenu} />
  }

  return (
    <StyledWrapper onClick={() => setShowMenu(showMenu => !showMenu)}>
      <IconMenu />
    </StyledWrapper>
  )
}

export default Header
