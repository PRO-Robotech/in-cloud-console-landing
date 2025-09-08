/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { WhomFitsIcon } from 'src/components/atoms'
import { Styled } from './styled'

export const WhomFits: FC<Pick<THomePage, 'whomFits'>> = ({ whomFits }) => {
  return (
    <Styled.Container id="fits">
      <Styled.MainGrid>
        <div>
          <Styled.Title dangerouslySetInnerHTML={{ __html: whomFits.title }} />
          <Styled.LeftFlex>
            <Styled.Card $marginLeft={50}>
              <Styled.CardTitle dangerouslySetInnerHTML={{ __html: whomFits.cards[0]?.title }} />
              <Styled.CardText dangerouslySetInnerHTML={{ __html: whomFits.cards[0]?.text }} />
            </Styled.Card>
            <Styled.Card $marginLeft={100}>
              <Styled.CardTitle dangerouslySetInnerHTML={{ __html: whomFits.cards[1]?.title }} />
              <Styled.CardText dangerouslySetInnerHTML={{ __html: whomFits.cards[1]?.text }} />
            </Styled.Card>
            <Styled.Card $marginLeft={150}>
              <Styled.CardTitle dangerouslySetInnerHTML={{ __html: whomFits.cards[2]?.title }} />
              <Styled.CardText dangerouslySetInnerHTML={{ __html: whomFits.cards[2]?.text }} />
            </Styled.Card>
          </Styled.LeftFlex>
        </div>
        <div>
          <Styled.RightIcon>
            <WhomFitsIcon />
          </Styled.RightIcon>
        </div>
      </Styled.MainGrid>
    </Styled.Container>
  )
}
