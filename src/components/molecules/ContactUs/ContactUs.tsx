/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const ContactUs: FC<Pick<THomePage, 'contactUs'>> = ({ contactUs }) => {
  return <Styled.Container>{contactUs.title}</Styled.Container>
}
