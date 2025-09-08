import styled from 'styled-components'

type TCustomLinkProps = {
  $active?: boolean
  $isButton?: boolean
}

const CustomLink = styled.a<TCustomLinkProps>`
  padding: ${({ $isButton }) => ($isButton ? '8px 10px' : 'initial')};
  border-radius: ${({ $isButton }) => ($isButton ? '8px' : 'initial')};
  background: ${({ $isButton }) => ($isButton ? 'rgba(0, 146, 255, 1)' : 'initial')};
  margin-top: ${({ $isButton }) => ($isButton ? '-8px' : 'initial')};

  &&::after {
    content: '';
    display: ${({ $isButton }) => ($isButton ? 'none' : 'block')};
    width: 100%;
    height: 3px;
    background-color: #fff;
    margin-top: 8px;
    opacity: ${p => (p.$active ? 1 : 0)};
    transform: ${p => (p.$active ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: left;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }
`

export const Styled = {
  CustomLink,
}
