import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { THomePage } from '@localTypes/pageTypes'
import { Header, Spacer, HeaderSecondRow, MarginTopContainer, VideoRow } from '@components'

export const HomePage: FC<Omit<THomePage, 'meta'>> = ({ navigation, mainTitle, videoSettings }) => {
  return (
    <HomeTemplate>
      {/* <a href="/in-cloud-console-docs/docs/">To docs test link</a> */}
      <div id="medusa-root" />
      <Header navigation={navigation} />
      <MarginTopContainer $margin="107px">
        <Spacer $space={50} $samespace />
        <HeaderSecondRow mainTitle={mainTitle} />
        <Spacer $space={30} $samespace />
        <VideoRow videoSettings={videoSettings} />
      </MarginTopContainer>
    </HomeTemplate>
  )
}
