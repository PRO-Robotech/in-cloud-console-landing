// import React, { FC, useState, useEffect, useMemo, useCallback } from 'react'
import React, { FC, useState, useEffect, useCallback } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { HamburgerIcon, HeaderIcon, ScrollLink } from 'src/components/atoms'
// import { useActiveSection } from 'src/hooks/useActiveSection'
import { Styled } from './styled'

export const Header: FC<Pick<THomePage, 'navigation'>> = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false)

  // const internalIds = useMemo(() => {
  //   return navigation.menuItems
  //     .map(({ internalHref, isButton }) => {
  //       if (internalHref && !isButton) {
  //         return internalHref?.slice(1)
  //       }
  //       return undefined
  //     })
  //     .filter((id): id is string => Boolean(id))
  // }, [navigation.menuItems])

  // const activeId = useActiveSection(internalIds, {
  //   minVisibleRatio: 0.9,
  // })

  const closeMenu = useCallback(() => setIsOpen(false), [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = original
    }
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  // Close on outside click
  // useEffect(() => {
  //   if (!isOpen) {
  //     return undefined
  //   }

  //   const onClick = (e: MouseEvent) => {
  //     if (!panelRef.current) return
  //     if (panelRef.current.contains(e.target as Node) || buttonRef.current?.contains(e.target as Node)) {
  //       return
  //     }
  //     closeMenu()
  //   }
  //   document.addEventListener('mousedown', onClick)
  //   return () => document.removeEventListener('mousedown', onClick)
  // }, [isOpen, closeMenu])

  const onItemClick = () => {
    // Close the panel after navigation
    closeMenu()
  }

  return (
    <Styled.HeaderContainer>
      <Styled.LeftPart>
        <HeaderIcon />
        <Styled.TitleFont>{navigation.title}</Styled.TitleFont>
      </Styled.LeftPart>
      <Styled.RightPart>
        <Styled.Navbar>
          <Styled.MenuButton onClick={() => setIsOpen(v => !v)}>
            <HamburgerIcon />
          </Styled.MenuButton>
          {navigation.menuItems.map(({ label, internalHref, isButton, href }) => {
            if (internalHref) {
              return (
                <ScrollLink
                  key={label}
                  to={internalHref}
                  // active={activeId === internalHref.slice(1)}
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

      {/* <Styled.Backdrop $open={isOpen} onClick={closeMenu} /> */}

      <Styled.MobilePanel
        // ref={panelRef}
        $isOpen={isOpen}
      >
        <Styled.MobileHeader>
          <Styled.MobileTitleRow>
            <HeaderIcon />
            <Styled.TitleFont>{navigation.title}</Styled.TitleFont>
          </Styled.MobileTitleRow>
          <Styled.CloseButton onClick={closeMenu}>✕</Styled.CloseButton>
        </Styled.MobileHeader>
        <Styled.MobileNav>
          {navigation.menuItems.map(({ label, internalHref, isButton, href }) => {
            if (internalHref) {
              return (
                <ScrollLink
                  key={label}
                  to={internalHref}
                  // active={activeId === internalHref.slice(1)}
                  isButton={isButton}
                  onItemClick={onItemClick}
                  mobMenu
                >
                  {label}
                </ScrollLink>
              )
            }
            return (
              <a key={label} href={href} onClick={onItemClick}>
                {label}
              </a>
            )
          })}
        </Styled.MobileNav>
      </Styled.MobilePanel>
    </Styled.HeaderContainer>
  )
}
