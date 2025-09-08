import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const Footer: FC<Pick<THomePage, 'footer'>> = ({ footer }) => {
  const currentYear: number = new Date().getFullYear()

  return <Styled.FooterContainer>{footer.text.replace('{year}', String(currentYear))}</Styled.FooterContainer>
}
