import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    height: 0;
  }

  to {
    height: 100%;
  }
`

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: #1e1e3f;
  margin: 0;
  overflow: hidden;
  animation: ${fadeIn} 500ms ease-in-out;
  transition: height 500ms ease-in-out;
`

export const StyledMenuText = styled.h1`
  display: grid;
  place-items: center;
  color: #a599e9;
  margin: 1rem;
  font-size: 36px;
  font-weight: bold;
`

export const StyledIconCloseWrapper = styled.div`
  display: grid;
  justify-content: flex-end;
  margin: 1rem;

  svg {
    fill: #a599e9;
  }
`

export const StyledNav = styled.nav`
  display: grid;
  margin: 1rem 0;
`

export const StyledNavItem = styled.div`
  display: block;
  text-align: center;

  a {
    display: inline-block;
    color: #a599e9;
    padding: 1rem;
    text-decoration: none;
  }
`
