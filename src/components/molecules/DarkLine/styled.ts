import styled from 'styled-components'

const FirstRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 80px 0 40px 0;
  background: #111c25;
  padding: 47px 20px 20px 20px;

  @media (min-width: 1440px) {
    padding: 80px 0 21px 0;
  }
`

const FirstRowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 130px;
  grid-gap: 10px;

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 208px;
    grid-gap: 40px;
  }
`

const FirstRowTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: left;

  span {
    color: rgba(0, 146, 255, 1);
  }

  @media (min-width: 1440px) {
    font-size: 56px;
    text-align: center;
  }
`

const FirstRowDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  span {
    font-weight: 700;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`

const NoDecorationLink = styled.a`
  text-decoration: none;
`

const DocsContainer = styled.div`
  border: 3px solid rgba(255, 255, 255, 1);
  width: 130px;
  height: 130px;
  border-radius: 20px;
  border-width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 1);
  box-sizing: border-box;

  svg {
    width: 40px;
    height: 44px;

    @media (min-width: 1440px) {
      width: 78px;
      height: 86px;
    }
  }

  @media (min-width: 1440px) {
    width: 208px;
    height: 208px;
    border-width: 3px;
  }
`

const DocsText = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  text-align: center;

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`

const SecondRow = styled.div`
  padding: 0 20px 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111c25;

  @media (min-width: 1440px) {
    padding: 20px 0 80px 0;
  }
`

const SecondRowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: 375px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }

  @media (min-width: 425px) {
    grid-template-columns: repeat(2, minmax(187px, 1fr));
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 220px);
  }
`

const Feature = styled.div`
  padding: 5px;
  border-radius: 20px;
  border-width: 1px;
  border: 1px solid rgba(255, 255, 255, 1);

  font-weight: 400;
  font-style: Italic;
  font-size: 12px;
  line-height: 100%;
  text-align: center;

  @media (min-width: 425px) {
    padding: 10px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`

export const Styled = {
  FirstRow,
  FirstRowGrid,
  FirstRowTitle,
  FirstRowDescription,
  NoDecorationLink,
  DocsContainer,
  DocsText,
  SecondRow,
  SecondRowGrid,
  Feature,
}
