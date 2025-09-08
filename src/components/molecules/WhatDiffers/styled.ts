import styled from 'styled-components'

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  padding: 40px 80px;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
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
  align-items: flex-start;
  flex-flow: column;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 20px;
  background: #111c25;
  min-height: 202px;
`

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  margin-bottom: 10px;
`

const CardText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;

  span {
    color: rgba(0, 146, 255, 1);
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
