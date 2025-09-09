import { TMeta } from '@localTypes/meta'

type TMetas = {
  [k: string]: TMeta
}

export const Metas: TMetas = {
  homepage: {
    title: 'in-Cloud console',
    description: 'Одна Kubernetes консоль для кластеров, сервисов и приложений',
  },
}
