import styled from 'styled-components'

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0 40px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  gap: 40px;
  background: #111c25;
  border-radius: 20px;
  box-sizing: border-box;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;

  margin-bottom: 40px;

  span {
    font-weight: 700;
    font-size: 40px;
    line-height: 130%;
    color: rgba(0, 146, 255, 1);
  }
`

const MainGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`

const LeftFlex = styled.div`
  display: flex;
  gap: 20px;
  flex-flow: column;
`

type TCardProps = {
  $marginLeft: number
}

const Card = styled.div<TCardProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  padding: 16px 40px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  min-height: 180px;
  box-sizing: border-box;
  width: 364px;
  margin-left: ${({ $marginLeft }) => $marginLeft}px;
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
`

const RightIcon = styled.div`
  padding-top: 36px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const Styled = {
  Container,
  Title,
  MainGrid,
  LeftFlex,
  Card,
  CardText,
  CardTitle,
  RightIcon,
}
