/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Styled } from './styled'

export const K8sToday: FC<Pick<THomePage, 'k8sToday'>> = ({ k8sToday }) => {
  return (
    <Styled.K8sTodayContainer>
      <Styled.Title dangerouslySetInnerHTML={{ __html: k8sToday.title }} />
      <Styled.Description dangerouslySetInnerHTML={{ __html: k8sToday.description }} />
      <Styled.CardsGrid>
        {k8sToday.cards.map(card => (
          <Styled.Card key={card.title}>
            <Styled.CardTitle>{card.title}</Styled.CardTitle>
            <Styled.CardText dangerouslySetInnerHTML={{ __html: card.text }} />
          </Styled.Card>
        ))}
      </Styled.CardsGrid>
    </Styled.K8sTodayContainer>
  )
}
