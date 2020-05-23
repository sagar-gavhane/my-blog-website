import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: flex-end;
  grid-column-gap: 1rem;

  a {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
