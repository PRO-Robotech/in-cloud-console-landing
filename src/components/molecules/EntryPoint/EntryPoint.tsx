/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const EntryPoint: FC<Pick<THomePage, 'entryPoint'>> = ({ entryPoint }) => {
  return <Styled.Container>{entryPoint.title}</Styled.Container>
}
