import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const HeaderSecondRow: FC<Pick<THomePage, 'mainTitle'>> = ({ mainTitle }) => {
  return (
    <Styled.MainTitle>
      {mainTitle.firstRow}
      <br />
      {mainTitle.secondRow}
    </Styled.MainTitle>
  )
}
