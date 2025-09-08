/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Spacer } from 'src/components/atoms'
import { Styled } from './styled'

export const Advantages: FC<Pick<THomePage, 'advantages'>> = ({ advantages }) => {
  return (
    <Styled.Container>
      <Styled.Title dangerouslySetInnerHTML={{ __html: advantages.title }} />
      <Spacer $space={40} $samespace />
      <Styled.CardsGrid>
        {advantages.cards.map(card => (
          <Styled.Card key={card.title}>
            <Styled.CardTitle dangerouslySetInnerHTML={{ __html: card.title }} />
            <Styled.CardText dangerouslySetInnerHTML={{ __html: card.text }} />
          </Styled.Card>
        ))}
      </Styled.CardsGrid>
    </Styled.Container>
  )
}
