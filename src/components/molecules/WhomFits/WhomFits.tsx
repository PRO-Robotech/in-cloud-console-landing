/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const WhomFits: FC<Pick<THomePage, 'whomFits'>> = ({ whomFits }) => {
  return <Styled.Container>{whomFits.title}</Styled.Container>
}
