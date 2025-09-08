import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { DarkLineIcon, Spacer } from 'src/components/atoms'
import { Styled } from './styled'

export const DarkLine: FC<Pick<THomePage, 'darkLine'>> = ({ darkLine }) => {
  return (
    <>
      <Styled.FirstRow>
        <Styled.FirstRowGrid>
          <div>
            <Styled.FirstRowTitle dangerouslySetInnerHTML={{ __html: darkLine.title }} />
            <Spacer $space={10} $samespace />
            <Styled.FirstRowDescription dangerouslySetInnerHTML={{ __html: darkLine.description }} />
          </div>
          <div>
            <Styled.NoDecorationLink href={darkLine.docs.link}>
              <Styled.DocsContainer>
                <DarkLineIcon />
                <Spacer $space={20} $samespace />
                <Styled.DocsText>{darkLine.docs.text}</Styled.DocsText>
              </Styled.DocsContainer>
            </Styled.NoDecorationLink>
          </div>
        </Styled.FirstRowGrid>
      </Styled.FirstRow>
      <Styled.SecondRow>
        <Styled.SecondRowGrid>
          {darkLine.features.map(el => (
            <Styled.Feature key={el}>{el}</Styled.Feature>
          ))}
        </Styled.SecondRowGrid>
      </Styled.SecondRow>
    </>
  )
}
