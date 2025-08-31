import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { THomePage } from '@localTypes/pageTypes'

export const HomePage: FC<Omit<THomePage, 'meta'>> = ({ title }) => {
  return (
    <HomeTemplate>
      <div>{title}</div>
      <div>
        <a href="/in-cloud-console-docs/docs/">To docs test link</a>
      </div>
    </HomeTemplate>
  )
}
