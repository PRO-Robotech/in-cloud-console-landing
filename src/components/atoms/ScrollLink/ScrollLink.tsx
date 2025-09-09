import React, { FC } from 'react'
import { Styled } from './styled'

type TScrollLinkProps = {
  to: string // id of target element
  offset?: number // negative offset in px (e.g., -100)
  children: React.ReactNode
  active?: boolean
  isButton?: boolean
  onItemClick?: () => void
  mobMenu?: boolean
}

export const ScrollLink: FC<TScrollLinkProps> = ({
  to,
  offset = -100,
  children,
  active,
  isButton,
  onItemClick,
  mobMenu,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetElement = document.getElementById(to.slice(1))

    if (targetElement) {
      const y = targetElement.getBoundingClientRect().top + window.scrollY + offset

      window.scrollTo({ top: y, behavior: 'smooth' })
    }

    onItemClick?.()
  }

  return (
    <Styled.CustomLink href={to} onClick={handleClick} $active={active} $isButton={isButton} $mobMenu={mobMenu}>
      {children}
    </Styled.CustomLink>
  )
}
