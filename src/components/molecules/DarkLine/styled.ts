import styled from 'styled-components'

const FirstRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 80px 0 40px 0;
  background: #111c25;
`

const FirstRowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 208px;
  grid-gap: 40px;
`

const FirstRowTitle = styled.div`
  font-weight: 700;
  font-size: 56px;
  line-height: 130%;
  text-align: center;

  span {
    color: rgba(0, 146, 255, 1);
  }
`

const FirstRowDescription = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;

  span {
    font-weight: 700;
  }
`

const NoDecorationLink = styled.a`
  text-decoration: none;
`

const DocsContainer = styled.div`
  border: 3px solid rgba(255, 255, 255, 1);
  width: 208px;
  height: 208px;
  border-radius: 20px;
  border-width: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 1);
`

const DocsText = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
`

const SecondRow = styled.div`
  padding: 20px 0 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111c25;
`

const SecondRowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  grid-gap: 20px;
`

const Feature = styled.div`
  padding: 10px;
  border-radius: 20px;
  border-width: 1px;
  border: 1px solid rgba(255, 255, 255, 1);

  font-weight: 400;
  font-style: Italic;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
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
