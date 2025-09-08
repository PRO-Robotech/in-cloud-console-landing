/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Spacer } from 'src/components/atoms'
import { Styled } from './styled'

export const WhatDiffers: FC<Pick<THomePage, 'whatDiffers'>> = ({ whatDiffers }) => {
  return (
    <Styled.Container>
      <Styled.Title dangerouslySetInnerHTML={{ __html: whatDiffers.title }} />
      <Spacer $space={40} $samespace />
      <Styled.CardsGrid>
        {whatDiffers.cards.map(card => (
          <Styled.Card key={card.title}>
            <Styled.CardTitle dangerouslySetInnerHTML={{ __html: card.title }} />
            <Styled.CardText dangerouslySetInnerHTML={{ __html: card.text }} />
          </Styled.Card>
        ))}
      </Styled.CardsGrid>
    </Styled.Container>
  )
}
