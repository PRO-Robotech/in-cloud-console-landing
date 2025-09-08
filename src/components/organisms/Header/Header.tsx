import React, { FC, useMemo } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { HeaderIcon, ScrollLink } from 'src/components/atoms'
import { useActiveSection } from 'src/hooks/useActiveSection'
import { Styled } from './styled'

export const Header: FC<Pick<THomePage, 'navigation'>> = ({ navigation }) => {
  const internalIds = useMemo(() => {
    return navigation.menuItems
      .map(({ internalHref, isButton }) => {
        if (internalHref && !isButton) {
          return internalHref?.slice(1)
        }
        return undefined
      })
      .filter((id): id is string => Boolean(id))
  }, [navigation.menuItems])

  const activeId = useActiveSection(internalIds, {
    minVisibleRatio: 0.9,
  })

  return (
    <Styled.HeaderContainer>
      <Styled.LeftPart>
        <HeaderIcon />
        <Styled.TitleFont>{navigation.title}</Styled.TitleFont>
      </Styled.LeftPart>
      <Styled.RightPart>
        <Styled.Navbar>
          {navigation.menuItems.map(({ label, internalHref, isButton, href }) => {
            if (internalHref) {
              return (
                <ScrollLink
                  key={label}
                  to={internalHref}
                  active={activeId === internalHref.slice(1)}
                  isButton={isButton}
                >
                  {label}
                </ScrollLink>
              )
            }
            return (
              <a key={label} href={href}>
                {label}
              </a>
            )
          })}
        </Styled.Navbar>
      </Styled.RightPart>
    </Styled.HeaderContainer>
  )
}
