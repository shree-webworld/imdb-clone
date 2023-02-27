import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta charSet="UTF-8"/>
      <meta name="description" content="This is a IMDB Clone"/>
      <meta name="keywords" content="IMDB Clone"/>
      <meta name="author" content="Shreedhar Sawant"/>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"/>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;800&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
