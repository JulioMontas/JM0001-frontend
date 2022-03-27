// 404.js
import Link from 'next/link'
import Container from '../components/Container'
import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function FourOhFour() {
  return (
    <Container>
    <Head>
      <title>404 - Page Not Found | Julio Montas</title>
      <meta name='twitter:url' content='https://juliomontas.com/' />
      <meta property='og:url' content='https://juliomontas.com/' />
      <meta property='og:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta property='og:title' content='404 - Page Not Found | Julio Montas' />
      <meta name='twitter:title' content='404 - Page Not Found | Julio Montas' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC" key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC' />
      <link rel="canonical" href="https://juliomontas.com/" />
      <link rel="alternate" href="https://juliomontas.com/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/" hreflang="es-us" />
    </Head>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>
          Go back home
        </a>
      </Link>
    </Container>
  )
}
