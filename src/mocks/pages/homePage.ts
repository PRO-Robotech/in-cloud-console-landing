import { THomePage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'

export const homePageMock: THomePage = {
  meta: Metas.homepage,
  navigation: {
    title: 'in-Cloud',
    menuItems: [
      { label: 'inCloud', href: '/' },
      { label: 'Видео', href: '/' },
      { label: 'Блог', href: '/' },
    ],
  },
  mainTitle: {
    firstRow: 'in-Cloud',
    secondRow: 'console',
  },
  videoSettings: {
    // url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', // mp4 only
    url: '', // mp4 only
    width: 766,
    height: 440,
  },
}
