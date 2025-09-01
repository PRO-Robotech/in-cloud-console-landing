import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { THomePage } from '@localTypes/pageTypes'
import {
  Header,
  Spacer,
  HeaderSecondRow,
  MarginTopContainer,
  VideoRow,
  AfterBannerRow,
  Cards,
  Footer,
} from '@components'

export const HomePage: FC<Omit<THomePage, 'meta'>> = ({
  navigation,
  mainTitle,
  videoSettings,
  afterBannerMiddleText,
  cards,
  footer,
}) => {
  return (
    <HomeTemplate>
      <div id="medusa-root" />
      <Header navigation={navigation} />
      <MarginTopContainer $margin="107px">
        {mainTitle && (
          <>
            <Spacer $space={50} $samespace />
            <HeaderSecondRow mainTitle={mainTitle} />
          </>
        )}
        {videoSettings && (
          <>
            <Spacer $space={30} $samespace />
            <VideoRow videoSettings={videoSettings} />
          </>
        )}
        {afterBannerMiddleText && (
          <>
            <Spacer $space={50} $samespace />
            <AfterBannerRow afterBannerMiddleText={afterBannerMiddleText} />
          </>
        )}
        {cards && (
          <>
            <Spacer $space={100} $samespace />
            <Cards cards={cards} />
          </>
        )}
        <Spacer $space={75} $samespace />
        <Footer footer={footer} />
      </MarginTopContainer>
    </HomeTemplate>
  )
}
