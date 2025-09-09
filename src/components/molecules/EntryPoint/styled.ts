import styled from 'styled-components'

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  gap: 20px;
  background: #111c25;
  border-radius: 20px;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    max-width: 1280px;
    padding: 40px 40px 0 40px;
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

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    width: initial;
  }
`

const LeftText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  span {
    color: rgba(0, 146, 255, 1);
  }

  @media (min-width: 1440px) {
    font-size: 20px;
    padding: 34px 0 0 80px;
  }
`

type TLeftIcon = {
  $hideMobile?: boolean
  $hideDesktop?: boolean
}

const LeftIcon = styled.div<TLeftIcon>`
  display: ${({ $hideMobile }) => ($hideMobile ? 'none' : 'flex')};
  justify-content: center;
  width: 100%;

  svg {
    width: 208.08px;
    height: 200px;

    @media (min-width: 1440px) {
      width: 440px;
      height: 481px;
    }
  }

  @media (min-width: 1440px) {
    width: initial;
    display: ${({ $hideDesktop }) => ($hideDesktop ? 'none' : 'initial')};
    padding: 40px 0 0 100px;
  }
`

const RightFlex = styled.div`
  display: flex;
  gap: 20px;
  flex-flow: column;
  align-items: center;

  @media (min-width: 1440px) {
    align-items: initial;
  }
`

type TCardProps = {
  $marginLeft: number
}

const Card = styled.div<TCardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 10px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  min-height: 180px;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    align-items: flex-start;
    padding: 16px 40px;
    width: 364px;
    margin-left: ${({ $marginLeft }) => $marginLeft}px;
  }
`

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`

const CardText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`

export const Styled = {
  Container,
  Title,
  MainGrid,
  LeftText,
  LeftIcon,
  RightFlex,
  Card,
  CardText,
  CardTitle,
}
