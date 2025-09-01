import { TMeta } from '@localTypes/meta'

type TNavigation = {
  title: string
  menuItems: {
    label: string
    href: string
  }[]
}

type TCardsItem = {
  title: string
  text: string
}

export type THomePage = {
  meta: TMeta
  navigation: TNavigation
  mainTitle?: {
    firstRow: string
    secondRow: string
  }
  videoSettings?: {
    url: string
    width: number
    height: number
  }
  afterBannerMiddleText?: string
  cards?: TCardsItem[]
  footer: {
    text: string
  }
}
