import { FC } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document: FC = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon/favicon-96x96.png`}
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon/favicon.svg`} />
        <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon/favicon.ico`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon/apple-touch-icon.png`}
        />
        <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon/site.webmanifest`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
