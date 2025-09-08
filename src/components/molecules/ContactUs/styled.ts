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

  margin-top: 20px;

  span {
    font-weight: 700;
    font-size: 40px;
    line-height: 130%;
    color: rgba(0, 146, 255, 1);
  }
`

const WidthContainer = styled.div`
  width: 777px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 303px;
`

const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  gap: 20px;
`

const ContactsItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-style: Bold;
  font-size: 40px;
  line-height: 100%;
  text-decoration: none;
`

export const Styled = {
  Container,
  Title,
  WidthContainer,
  ContactsContainer,
  ContactsItemLink,
}
