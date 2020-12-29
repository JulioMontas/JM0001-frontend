import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="author" content="Julio Montas"/>
          <meta name='application-name' content='Julio Montas | UI Developer • Interaction Designer' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Julio Montas | UI Developer • Interaction Designer' />
          <meta name="keywords" content="HTML, App, CSS, JavaScript, UX Design, UI Design, Full Stack Designer"/>
          {/* <meta name='description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' key="description" /> */}
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />
          <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/static/icons/favicon.ico' />
          {/* <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' /> */}
          <meta name='twitter:card' content='summary' />
          {/* <meta name='twitter:url' content='https://llegojulio.com' /> */}
          {/* <meta name='twitter:title' content='Julio Montas | UI Developer • Interaction Designer' /> */}
          {/* <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' /> */}
          {/* <meta name='twitter:image' content='https://llegojulio.com/static/icons/android-chrome-192x192.png' /> */}
          <meta name='twitter:creator' content='@juliomontas' />
          <meta property='og:type' content='website' />
          {/* <meta property='og:title' content='Julio Montas | UI Developer • Interaction Designer' key="title"/> */}
          {/* <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' /> */}
          <meta property='og:site_name' content='Llegó Julio' />
          {/* <meta property='og:url' content='https://llegojulio.com' /> */}
          {/* <meta property='og:image' content='https://llegojulio.com/static/icons/apple-touch-icon.png' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
