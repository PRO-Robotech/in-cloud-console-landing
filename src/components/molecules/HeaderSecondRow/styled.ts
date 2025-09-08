import styled from 'styled-components'

const K8sTitle = styled.div`
  background: rgba(0, 146, 255, 1);
  width: 346px;
  height: 60px;
  margin: 0 auto;
  gap: 10px;
  padding-right: 10px;
  padding-left: 10px;

  color: rgba(255, 255, 255, 1);
  font-family: 'Roboto Condensed';
  font-weight: 700;
  font-size: 60px;
  text-align: center;
`

const MainTitle = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;

  font-size: 120px;
  line-height: 98%;
  letter-spacing: 0%;
  text-align: center;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 1);
`

export const Styled = {
  K8sTitle,
  MainTitle,
}
