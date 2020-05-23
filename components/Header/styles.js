import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: grid;
  justify-content: flex-end;

  > svg {
    fill: #1e1e3f;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`
