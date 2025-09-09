import { THomePage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'

export const homePageMock: THomePage = {
  meta: Metas.homepage,
  navigation: {
    title: 'in-Cloud',
    menuItems: [
      { label: 'inCloud', internalHref: '#start' },
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
  videoSettings: {
    // url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', // mp4 only
    url: '', // mp4 only
    width: 766,
    height: 440,
    widthMob: 420,
    heightMob: 240,
  },
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
        text: `Команды используют разные<br />панели и практики - знания<br />не масштабируются.`,
      },
      {
        title: 'Сложный вход',
        text: `Каждый кластер - отдельная<br />история: доступы, метрики,<br />ссылки, сценарии.`,
      },
      {
        title: 'Высокие затраты',
        text: `Поддерживать самодельные<br />наборы тулов с помощью<br />раздутого штата дорого<br />и рискованно для бизнеса.`,
      },
    ],
  },
  entryPoint: {
    title: `<span>In‑Cloud Console</span> - единая точка входа в вашу инфраструктуру`,
    text: `Мы смотрим на <span>Kubernetes</span> как на API‑фреймворк:<br />интерфейсы и процессы описываются декларативно,<br />а консоль подстраивается под ваши команды и сценарии.`,
    cards: [
      {
        title: 'Общая панель',
        text: `Единый интерфейс<br />для инфраструктуры<br />и приложений: меньше<br />переключений, больше<br />прозрачности и контроля.`,
      },
      {
        title: 'Декларативный UI',
        text: `Интерфейсы описываются<br />как код и подстраиваются<br />под ваши процессы.`,
      },
      {
        title: 'NoCode‑вектор',
        text: `Любой процесс можно<br />отразить в интерфейсе:<br />простая сборка, понятная<br />визуализация и никакой<br />разработки.`,
      },
    ],
  },
  advantages: {
    title: 'Преимущества для команд и бизнеса',
    cards: [
      {
        title: 'Единый инструмент',
        text: `Больше никаких хаотичных<br />ссылок и тулзов - все собрано<br />в одной консоли.`,
      },
      {
        title: 'Полная настраиваемость',
        text: `Подстраивается под процессы<br />компании: роли, интерфейсы,<br />правила и сценарии работы.`,
      },
      {
        title: 'MIT‑лицензия',
        text: `Прозрачность и доверие: навсегда<br />без перехода на закрытые модели<br />лицензирования.`,
      },
      {
        title: 'Интеграции',
        text: `Единый подход<br />к управлению от Crossplane<br />до вендорных и кастомных<br />операторов, без ограничений<br />и сложных доработок.`,
      },
      {
        title: 'Единая аутентификация<br />на все инсталляции',
        text: `Единый вход, интеграция<br />с корпоративными IdP<br />(Gitlab, Keycloak, etc) и поддержка<br />многофакторной аутентификации.`,
      },
      {
        title: 'Готовность к масштабу',
        text: `От стартапа до Enterprise:<br />разные команды, сотни кластеров,<br />единые подходы и правила.`,
      },
    ],
  },
  whomFits: {
    title: 'Кому подойдет',
    cards: [
      {
        title: 'Enterprise',
        text: `Унифицированные подходы,<br />общие практики и единый<br />интерфейс в масштабе<br />компании.`,
      },
      {
        title: 'DevOps / SRE',
        text: `Разгрузка специалистов:<br />пользователи сами<br />выполняют типовые<br />операции в рамках<br />построенных процессов.`,
      },
      {
        title: 'Бизнес‑команды',
        text: `Прозрачные правила игры:<br />четкий маршрут от идеи<br />до продакшена с поддержкой<br />на каждом шаге.`,
      },
    ],
  },
  whatDiffers: {
    title: 'Чем отличаемся',
    cards: [
      {
        title: 'Не просто панель',
        text: `Это фреймворк поверх <span>Kubernetes</span><br />API: интерфейсы, роли, процессы.`,
      },
      {
        title: 'Не жесткая коробка',
        text: `Гибкий конструктор UI<br />вместо фиксированного<br />«вида из коробки».`,
      },
      {
        title: 'Не «vendor lock‑in»',
        text: `MIT‑экосистема, совместимость<br />и понятные обещания<br />для бизнеса.`,
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
