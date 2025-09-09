import styled, { css } from 'styled-components'

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
  z-index: 3;

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

const MenuButton = styled.button`
  all: unset;
  display: inline-flex;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`

// const Backdrop = styled.div<{ $open: boolean }>`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.4);
//   z-index: 50;
//   opacity: 0;
//   pointer-events: none;
//   transition: opacity 200ms ease;

//   ${({ $open }) =>
//     $open &&
//     css`
//       opacity: 1;
//       pointer-events: auto;
//     `}

//   @media (min-width: 1440px) {
//     display: none;
//   }
// `

type TMobilePanelProps = {
  $isOpen: boolean
}

const MobilePanel = styled.div<TMobilePanelProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 80;
  height: 100dvh;
  width: 100vw;
  background: #0f1a22;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;

  /* Start hidden */
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  transition:
    opacity 10ms ease,
    transform 100ms ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    `}

  @media (min-width: 1440px) {
    display: none;
  }
`

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 24px;
    height: 26px;
  }
`

const MobileTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const CloseButton = styled.div`
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 24px;

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
  MenuButton,
  // Backdrop,
  MobilePanel,
  MobileHeader,
  MobileTitleRow,
  CloseButton,
  MobileNav,
}
