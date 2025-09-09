import styled from 'styled-components'

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  background: #111c25;
  border-radius: 20px;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    max-width: 1280px;
    padding: 40px 0 40px 40px;
    gap: 40px;
  }
`

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  margin-top: 20px;

  span {
    color: rgba(0, 146, 255, 1);
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

const WidthContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 140px;

  @media (min-width: 1024px) {
    width: 777px;
    grid-template-columns: 1fr 303px;
  }
`

const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  gap: 10px;

  @media (min-width: 1024px) {
    gap: 20px;
  }
`

const ContactsItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 100%;
  text-decoration: none;

  @media (min-width: 1024px) {
    gap: 10px;
    font-size: 40px;
  }

  svg {
    width: 16px;
    height: 16px;

    @media (min-width: 1024px) {
      width: 50px;
      height: 50px;
    }
  }
`

const IconContainer = styled.div`
  svg {
    width: 139.4px;
    height: 148.56px;
    margin-top: -36px;

    @media (min-width: 1024px) {
      width: 303px;
      height: 448px;
      margin-top: initial;
    }
  }
`

export const Styled = {
  Container,
  Title,
  WidthContainer,
  ContactsContainer,
  ContactsItemLink,
  IconContainer,
}
