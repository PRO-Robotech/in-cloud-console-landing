/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const WhatDiffers: FC<Pick<THomePage, 'whatDiffers'>> = ({ whatDiffers }) => {
  return <Styled.Container>{whatDiffers.title}</Styled.Container>
}
