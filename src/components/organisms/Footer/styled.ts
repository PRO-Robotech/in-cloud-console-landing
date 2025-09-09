import styled from 'styled-components'

const FooterContainer = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: rgba(153, 153, 153, 1);

  @media (min-width: 1024px) {
    height: 67px;
    font-size: 24px;
  }
`

export const Styled = {
  FooterContainer,
}
