import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  padding: 26px;
  background: #15232e;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 107px;
`

const LeftPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`

const TitleFont = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #0092ff;
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
    font-size: 20px;
    font-weight: 400;
    position: relative;
  }
`

export const Styled = {
  HeaderContainer,
  LeftPart,
  TitleFont,
  RightPart,
  Navbar,
}
