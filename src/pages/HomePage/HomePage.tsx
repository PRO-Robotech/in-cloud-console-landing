import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { THomePage } from '@localTypes/pageTypes'
import {
  Header,
  Spacer,
  HeaderSecondRow,
  MarginTopContainer,
  VideoRow,
  DarkLine,
  BackgroundContainer,
  K8sToday,
  EntryPoint,
  Advantages,
  WhomFits,
  WhatDiffers,
  ContactUs,
  Footer,
} from '@components'

export const HomePage: FC<Omit<THomePage, 'meta'>> = ({
  navigation,
  mainTitle,
  videoSettings,
  darkLine,
  k8sToday,
  entryPoint,
  advantages,
  whomFits,
  whatDiffers,
  contactUs,
  footer,
}) => {
  return (
    <HomeTemplate>
      <div id="start" />
      <div id="medusa-root" />
      <Header navigation={navigation} />
      <MarginTopContainer $margin="107px" $marginMob="55px">
        {mainTitle && (
          <>
            <Spacer $space={40} $spaceMob={14} />
            <HeaderSecondRow mainTitle={mainTitle} />
          </>
        )}
        {videoSettings && (
          <>
            <Spacer $space={60} $spaceMob={26} />
            <VideoRow videoSettings={videoSettings} />
          </>
        )}
        {darkLine && <DarkLine darkLine={darkLine} />}
        <BackgroundContainer>
          {k8sToday && <K8sToday k8sToday={k8sToday} />}
          {entryPoint && <EntryPoint entryPoint={entryPoint} />}
          {advantages && <Advantages advantages={advantages} />}
          {whomFits && <WhomFits whomFits={whomFits} />}
          {whatDiffers && <WhatDiffers whatDiffers={whatDiffers} />}
          {contactUs && <ContactUs contactUs={contactUs} />}
          <Spacer $space={40} $samespace />
          <Footer footer={footer} />
        </BackgroundContainer>
      </MarginTopContainer>
    </HomeTemplate>
  )
}
