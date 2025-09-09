import styled from 'styled-components'

const K8sTodayContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 1280px;
    padding: 40px 80px;
    gap: 40px;
  }
`

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  span {
    color: rgba(0, 146, 255, 1);
  }

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`

const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  padding: 20px 10px;
  border-radius: 20px;

  border: 3px solid rgba(0, 0, 0, 0.2);

  @media (min-width: 1440px) {
    padding-right: 40px;
    padding-left: 40px;
    border-width: 6px;

    height: 202px;
  }
`

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: rgba(255, 207, 207, 1);
  margin-bottom: 6px;

  @media (min-width: 1440px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`

const CardText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: rgba(255, 207, 207, 1);

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`

export const Styled = {
  K8sTodayContainer,
  Title,
  Description,
  CardsGrid,
  Card,
  CardTitle,
  CardText,
}
