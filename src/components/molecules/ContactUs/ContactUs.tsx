/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { ContactUsIcon, MailIcon, TelegramIcon } from 'src/components/atoms'
import { Styled } from './styled'

export const ContactUs: FC<Pick<THomePage, 'contactUs'>> = ({ contactUs }) => {
  return (
    <Styled.Container id="contacts">
      <Styled.Title dangerouslySetInnerHTML={{ __html: contactUs.title }} />
      <Styled.WidthContainer>
        <Styled.ContactsContainer>
          <div>
            <Styled.ContactsItemLink href={contactUs.mailLink}>
              <MailIcon />
              {contactUs.mail}
            </Styled.ContactsItemLink>
          </div>
          <div>
            <Styled.ContactsItemLink href={contactUs.tgLink}>
              <TelegramIcon />
              {contactUs.tg}
            </Styled.ContactsItemLink>
          </div>
        </Styled.ContactsContainer>
        <Styled.IconContainer>
          <ContactUsIcon />
        </Styled.IconContainer>
      </Styled.WidthContainer>
    </Styled.Container>
  )
}
