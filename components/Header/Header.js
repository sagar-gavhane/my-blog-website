import React, { useState, Fragment } from 'react'

import IconMenu from 'assets/icons/IconMenu'
import OpenedMenu from 'components/OpenedMenu'

import { StyledWrapper } from './styles'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Fragment>
      <OpenedMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <StyledWrapper onClick={() => setShowMenu(showMenu => !showMenu)}>
        <IconMenu />
      </StyledWrapper>
    </Fragment>
  )
}

export default Header
