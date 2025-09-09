import { THomePage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'

export const homePageMock: THomePage = {
  meta: Metas.homepage,
  navigation: {
    title: 'in-Cloud',
    menuItems: [
      { label: 'in-Cloud', internalHref: '#start' },
      { label: 'Проблема', internalHref: '#pr' },
      { label: 'Решение', internalHref: '#solution' },
      { label: 'Преимущества', internalHref: '#advantages' },
      { label: 'Кому подходит', internalHref: '#fits' },
      { label: 'Отличия', internalHref: '#diffs' },
      // { label: 'Документация', href: '/in-cloud-console-docs/docs/' },
      { label: 'Попробовать', internalHref: '#contacts', isButton: true },
    ],
  },
  mainTitle: {
    firstRow: 'KUBERNETES',
    secondRow: 'in-Cloud console',
  },
  // videoSettings: {
  //   // url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', // mp4 only
  //   url: '', // mp4 only
  //   width: 766,
  //   height: 440,
  //   widthMob: 420,
  //   heightMob: 240,
  // },
  darkLine: {
    title: `Наведите порядок<br />в <span>Kubernetes</span>‑хаосе`,
    description: `Одна консоль для кластеров, сервисов и приложений.<br /><span>Быстрее. Дешевле. Прозрачнее.</span>`,
    docs: {
      text: 'Документация',
      link: '/docs/tech-docs/introduction',
    },
    features: ['Лицензия MIT', 'Декларативный UI', 'OpenAPI', 'Вектор на NoCode'],
  },
  k8sToday: {
    title: `Сегодня <span>Kubernetes</span> есть у всех - и у всех свой зоопарк`,
    description: `Разные интерфейсы и инструменты, раздробленные процессы, рост расходов и сложность масштабирования.<br />Сотни кластеров, десятки команд - и ни одной общей точки зрения.`,
    cards: [
      {
        title: 'Разрозненные инструменты',
        text: `Команды используют разные панели и практики - знания не масштабируются.`,
      },
      {
        title: 'Сложный вход',
        text: `Каждый кластер - отдельная история: доступы, метрики, ссылки, сценарии.`,
      },
      {
        title: 'Высокие затраты',
        text: `Поддерживать самодельные наборы тулов с помощью раздутого штата дорого и рискованно для бизнеса.`,
      },
    ],
  },
  entryPoint: {
    title: `<span>In‑Cloud Console</span> - единая точка входа в вашу инфраструктуру`,
    text: `Мы смотрим на <span>Kubernetes</span> как на API‑фреймворк: интерфейсы и процессы описываются декларативно, а консоль подстраивается под ваши команды и сценарии.`,
    cards: [
      {
        title: 'Общая панель',
        text: `Единый интерфейс для инфраструктуры и приложений: меньше переключений, больше прозрачности и контроля.`,
      },
      {
        title: 'Декларативный UI',
        text: `Интерфейсы описываются как код и подстраиваются под ваши процессы.`,
      },
      {
        title: 'NoCode‑вектор',
        text: `Любой процесс можно отразить в интерфейсе: простая сборка, понятная визуализация и никакой разработки.`,
      },
    ],
  },
  advantages: {
    title: 'Преимущества для команд и бизнеса',
    cards: [
      {
        title: 'Единый инструмент',
        text: `Больше никаких хаотичных ссылок и тулзов - все собрано в одной консоли.`,
      },
      {
        title: 'Полная настраиваемость',
        text: `Подстраивается под процессы компании: роли, интерфейсы, правила и сценарии работы.`,
      },
      {
        title: 'MIT‑лицензия',
        text: `Прозрачность и доверие: навсегда без перехода на закрытые модели лицензирования.`,
      },
      {
        title: 'Интеграции',
        text: `Единый подход к управлению от Crossplane до вендорных и кастомных операторов, без ограничений и сложных доработок.`,
      },
      {
        title: 'Единая аутентификация на все инсталляции',
        text: `Единый вход, интеграция с корпоративными IdP (Gitlab, Keycloak, etc) и поддержка многофакторной аутентификации.`,
      },
      {
        title: 'Готовность к масштабу',
        text: `От стартапа до Enterprise: разные команды, сотни кластеров, единые подходы и правила.`,
      },
    ],
  },
  whomFits: {
    title: 'Кому подойдет',
    cards: [
      {
        title: 'Enterprise',
        text: `Унифицированные подходы, общие практики и единый интерфейс в масштабе компании.`,
      },
      {
        title: 'DevOps / SRE',
        text: `Разгрузка специалистов: пользователи сами выполняют типовые операции в рамках построенных процессов.`,
      },
      {
        title: 'Бизнес‑команды',
        text: `Прозрачные правила игры: четкий маршрут от идеи до продакшена с поддержкой на каждом шаге.`,
      },
    ],
  },
  whatDiffers: {
    title: 'Чем отличаемся',
    cards: [
      {
        title: 'Не просто панель',
        text: `Это фреймворк поверх <span>Kubernetes</span> API: интерфейсы, роли, процессы.`,
      },
      {
        title: 'Не жесткая коробка',
        text: `Гибкий конструктор UI вместо фиксированного «вида из коробки».`,
      },
      {
        title: 'Не «vendor lock‑in»',
        text: `MIT‑экосистема, совместимость и понятные обещания для бизнеса.`,
      },
    ],
  },
  contactUs: {
    title: 'Связаться с нами',
    mail: 'info@prorobotech.ru',
    mailLink: 'mailto:info@prorobotech.ru',
    tg: '@prt_architecture',
    tgLink: 'https://t.me/prt_architecture',
  },
  footer: {
    text: 'PRO Robotech © {year}',
  },
}
