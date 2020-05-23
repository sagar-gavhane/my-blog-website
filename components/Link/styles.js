import styled from 'styled-components'

export const StyledLink = styled.a`
  color: #4d21fc;
  margin: 1rem 0;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    text-decoration: underline;
  }
`
