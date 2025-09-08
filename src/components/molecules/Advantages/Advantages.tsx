/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const Advantages: FC<Pick<THomePage, 'advantages'>> = ({ advantages }) => {
  return <Styled.Container>{advantages.title}</Styled.Container>
}
