import styled from 'styled-components'

type TMarginTopContainerProps = {
  $margin: string
  $marginMob: string
}

export const MarginTopContainer = styled.div<TMarginTopContainerProps>`
  margin-top: ${({ $marginMob }) => $marginMob};

  @media (min-width: 1024px) {
    margin-top: ${({ $margin }) => $margin};
  }
`
