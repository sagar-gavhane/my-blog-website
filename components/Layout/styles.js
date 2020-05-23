import styled from 'styled-components'

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 2rem;

  @media screen and (min-width: 991px) {
    width: 75%;
    margin: 0 auto;
    margin-top: 100px;
    padding: 0;

    .half-content {
      width: 50%;
    }
  }
`
