import styled from 'styled-components'

const K8sTodayContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  gap: 40px;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;

  span {
    color: rgba(0, 146, 255, 1);
  }
`

const Description = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
`

const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 202px;

  padding-right: 40px;
  padding-left: 40px;
  border-radius: 20px;
  border-width: 6px;

  border: 6px solid rgba(0, 0, 0, 0.2);
`

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  color: rgba(255, 207, 207, 1);
  margin-bottom: 10px;
`

const CardText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  color: rgba(255, 207, 207, 1);
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
