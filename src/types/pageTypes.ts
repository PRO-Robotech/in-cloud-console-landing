import { TMeta } from '@localTypes/meta'

type TNavigation = {
  title: string
  menuItems: {
    label: string
    href: string
  }[]
}

export type THomePage = {
  meta: TMeta
  navigation: TNavigation
  mainTitle: { firstRow: string; secondRow: string }
  videoSettings: {
    url: string
    width: number
    height: number
  }
}
