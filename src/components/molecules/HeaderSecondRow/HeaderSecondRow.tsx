import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Spacer } from 'src/components/atoms'
import { Styled } from './styled'

export const HeaderSecondRow: FC<Pick<THomePage, 'mainTitle'>> = ({ mainTitle }) => {
  return (
    <>
      <Styled.K8sTitle>{mainTitle.firstRow}</Styled.K8sTitle>
      <Spacer $space={20} $samespace />
      <Styled.MainTitle>{mainTitle.secondRow}</Styled.MainTitle>
    </>
  )
}
