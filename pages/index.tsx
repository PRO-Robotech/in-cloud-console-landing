import React, { FC } from 'react'
import type { GetStaticProps } from 'next'
import Script from 'next/script'
import { Meta } from '@components'
import { HomePage } from '@pages'
import { THomePage } from '@localTypes/pageTypes'
import { homePageMock } from '@mocks/pages/homePage'

export const getStaticProps: GetStaticProps<THomePage> = async () => {
  return { props: { ...homePageMock } }
}

const Home: FC<THomePage> = ({ meta, ...rest }) => (
  <>
    <Meta {...meta} />
    <Script src={`${process.env.NEXT_PUBLIC_BASE_PATH}/js/header.bundle.js`} strategy="afterInteractive" />
    <HomePage {...rest} />
  </>
)

export default Home
