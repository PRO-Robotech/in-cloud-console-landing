import styled from 'styled-components'

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 0 40px;
`

const Card = styled.div`
  padding: 50px 40px;
  border-radius: 40px;
  border: 3px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 20px 0px rgba(0, 146, 255, 1);
  background: rgba(21, 35, 46, 1);
`

const CardTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;

  span {
    color: rgba(0, 146, 255, 1);
  }
`

const CardText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0%;
  text-align: center;

  span {
    color: rgba(0, 146, 255, 1);
  }
`

export const Styled = {
  Cards,
  Card,
  CardTitle,
  CardText,
}
