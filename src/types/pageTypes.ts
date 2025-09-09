import { TMeta } from '@localTypes/meta'

type TNavigation = {
  title: string
  menuItems: {
    label: string
    href?: string
    internalHref?: string
    isButton?: boolean
  }[]
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
    widthMob: number
    heightMob: number
  }
  darkLine?: {
    title: string
    description: string
    docs: {
      text: string
      link: string
    }
    features: string[]
  }
  k8sToday?: {
    title: string
    description: string
    cards: {
      title: string
      text: string
    }[]
  }
  entryPoint?: {
    title: string
    text: string
    cards: {
      title: string
      text: string
    }[]
  }
  advantages?: {
    title: string
    cards: {
      title: string
      text: string
    }[]
  }
  whomFits?: {
    title: string
    cards: {
      title: string
      text: string
    }[]
  }
  whatDiffers?: {
    title: string
    cards: {
      title: string
      text: string
    }[]
  }
  contactUs?: {
    title: string
    mail: string
    mailLink: string
    tg: string
    tgLink: string
  }
  footer: {
    text: string
  }
}
