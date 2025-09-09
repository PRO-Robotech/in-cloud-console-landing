import styled from 'styled-components'

const K8sTitle = styled.div`
  background: rgba(0, 146, 255, 1);
  width: min-content;
  height: 26px;
  margin: 0 auto;
  gap: 10px;
  padding: 4px;

  font-family: 'Roboto Condensed';
  font-weight: 700;
  font-size: 26px;
  text-align: center;
  line-height: 1;

  @media (min-width: 1440px) {
    font-size: 60px;
    padding: 0 10px;
    height: 60px;
  }
`

const MainTitle = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;

  font-size: 46px;
  line-height: 98%;
  text-align: center;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 1);

  @media (min-width: 1440px) {
    font-size: 120px;
  }
`

export const Styled = {
  K8sTitle,
  MainTitle,
}
