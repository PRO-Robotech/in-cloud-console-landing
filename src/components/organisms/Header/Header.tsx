import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { HeaderIcon } from 'src/components/atoms'
import { Styled } from './styled'

export const Header: FC<Pick<THomePage, 'navigation'>> = ({ navigation }) => {
  return (
    <Styled.HeaderContainer>
      <Styled.LeftPart>
        <HeaderIcon />
        <Styled.TitleFont>{navigation.title}</Styled.TitleFont>
      </Styled.LeftPart>
      <Styled.RightPart>
        <Styled.Navbar>
          {navigation.menuItems.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </Styled.Navbar>
      </Styled.RightPart>
    </Styled.HeaderContainer>
  )
}
