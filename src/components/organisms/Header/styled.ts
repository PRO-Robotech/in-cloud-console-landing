import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  background: #15232e;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 55px;
  padding: 4px;

  @media (min-width: 1024px) {
    height: 107px;
    padding: 26px;
  }
`

const LeftPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  svg {
    width: 22px;
    height: 24.2px;

    @media (min-width: 1024px) {
      width: 50px;
      height: 55px;
    }
  }
`

const TitleFont = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  line-height: 100%;
  color: #0092ff;
  font-size: 16px;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`

const RightPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Navbar = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    position: relative;
    font-size: 16px;

    @media (min-width: 1440px) {
      font-size: 24px;
    }
  }
`

export const Styled = {
  HeaderContainer,
  LeftPart,
  TitleFont,
  RightPart,
  Navbar,
}
