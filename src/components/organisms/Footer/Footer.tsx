import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const Footer: FC<Pick<THomePage, 'footer'>> = ({ footer }) => {
  return <Styled.FooterContainer>{footer.text}</Styled.FooterContainer>
}
