import styled from 'styled-components'

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  padding: 20px;

  @media (min-width: 1440px) {
    max-width: 1280px;
    padding: 40px 80px;
  }
`

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`

const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 15px 10px;
  border-radius: 20px;
  background: #111c25;

  @media (min-width: 1440px) {
    padding: 40px 50px;
    justify-content: center;
    align-items: flex-start;
  }
`

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`

const CardText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  text-align: center;

  @media (min-width: 1440px) {
    text-align: initial;
    font-size: 20px;
  }
`

export const Styled = {
  Container,
  Title,
  CardsGrid,
  Card,
  CardTitle,
  CardText,
}
