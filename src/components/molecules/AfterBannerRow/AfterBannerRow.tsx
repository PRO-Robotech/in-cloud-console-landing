/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const AfterBannerRow: FC<Pick<THomePage, 'afterBannerMiddleText'>> = ({ afterBannerMiddleText }) => {
  return (
    <Styled.AfterBannerContainer>
      <div dangerouslySetInnerHTML={{ __html: afterBannerMiddleText }} />
    </Styled.AfterBannerContainer>
  )
}
