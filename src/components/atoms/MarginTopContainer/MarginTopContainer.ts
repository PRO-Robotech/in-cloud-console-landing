import styled from 'styled-components'

type TMarginTopContainerProps = {
  $margin: string
}

export const MarginTopContainer = styled.div<TMarginTopContainerProps>`
  margin-top: ${({ $margin }) => $margin};
`
