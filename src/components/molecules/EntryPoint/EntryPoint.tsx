/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { EntryPointIcon } from 'src/components/atoms'
import { Styled } from './styled'

export const EntryPoint: FC<Pick<THomePage, 'entryPoint'>> = ({ entryPoint }) => {
  return (
    <Styled.Container id="solution">
      <Styled.Title dangerouslySetInnerHTML={{ __html: entryPoint.title }} />
      <Styled.MainGrid>
        <div>
          <Styled.LeftText dangerouslySetInnerHTML={{ __html: entryPoint.text }} />
          <Styled.LeftIcon>
            <EntryPointIcon />
          </Styled.LeftIcon>
        </div>
        <div>
          <Styled.RightFlex>
            <Styled.Card $marginLeft={150}>
              <Styled.CardTitle dangerouslySetInnerHTML={{ __html: entryPoint.cards[0]?.title }} />
              <Styled.CardText dangerouslySetInnerHTML={{ __html: entryPoint.cards[0]?.text }} />
            </Styled.Card>
            <Styled.Card $marginLeft={75}>
              <Styled.CardTitle dangerouslySetInnerHTML={{ __html: entryPoint.cards[1]?.title }} />
              <Styled.CardText dangerouslySetInnerHTML={{ __html: entryPoint.cards[1]?.text }} />
            </Styled.Card>
            <Styled.Card $marginLeft={0}>
              <Styled.CardTitle dangerouslySetInnerHTML={{ __html: entryPoint.cards[2]?.title }} />
              <Styled.CardText dangerouslySetInnerHTML={{ __html: entryPoint.cards[2]?.text }} />
            </Styled.Card>
          </Styled.RightFlex>
        </div>
      </Styled.MainGrid>
    </Styled.Container>
  )
}
