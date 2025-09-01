/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const Cards: FC<Pick<THomePage, 'cards'>> = ({ cards }) => {
  return (
    <Styled.Cards>
      {cards.map(({ title, text }) => (
        <Styled.Card key={title}>
          <Styled.CardTitle>
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </Styled.CardTitle>
          <Styled.CardText>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </Styled.CardText>
        </Styled.Card>
      ))}
    </Styled.Cards>
  )
}
