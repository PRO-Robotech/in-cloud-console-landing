import { THomePage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'

export const homePageMock: THomePage = {
  meta: Metas.homepage,
  navigation: {
    title: 'in-Cloud',
    menuItems: [
      { label: 'inCloud', href: '/' },
      { label: 'Документация', href: '/docs/tech-docs/introduction' },
    ],
  },
  mainTitle: {
    firstRow: 'KUBERNETES',
    secondRow: 'in-Cloud console',
  },
  videoSettings: {
    // url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', // mp4 only
    url: '', // mp4 only
    width: 766,
    height: 440,
  },
  afterBannerMiddleText: `Единая платформа, которая объединяет управление кластерами,<br />
приложениями и сервисами в одном интерфейсе на базе <span>Kubernetes</span>.<br />
Cнизит расходы на сопровождение, ускорит внедрение изменений<br />
и сделает инфраструктуру более прозрачной и предсказуемой.<br />`,
  cards: [
    {
      title: `Единый инструмент<br />
для управления<br />
и визуализации<br />
<span>K8s</span>-инфраструктуры`,
      text: `В каждой компании десятки<br>
кластеров, и у каждой<br>
команды они устроены<br>
по-своему. Поэтому<br>
интерфейс должен быть<br>
гибким и подстраиваться<br>
под конкретные нужды:<br>
быстрые ссылки, важные<br>
панели и актуальные<br>
метрики.
`,
    },
    {
      title: `<span>Kubernetes</span><br />
как API-фреймворк,<br />
а не только оркестратор<br />
контейнеров`,
      text: `Это универсальный<br>
механизм, который можно<br>
использовать для построения<br>
самых разных процессов.<br>
UI должен не ограничивать,<br>
а помогать адаптировать<br>
интерфейс под любой<br>
сценарий работы с этим<br>
фреймворком<br>`,
    },
    {
      title: `<span>NoCode</span>-будущее`,
      text: `Мы создадим landing-<br>
платформу, где бизнес-<br>
логику можно собирать<br>
без кода, опираясь<br>
на OpenAPI-схемы<br>
бэкенд-сервисов и ядро<br>
визуализации. Это позволит<br>
компаниям быстрее строить<br>
решения и снижать<br>
зависимость от специфики<br>
<span>Kubernetes</span>.`,
    },
  ],
  footer: {
    text: 'PRO Robotech © 2025',
  },
}
