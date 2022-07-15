import Head from 'next/head'
import Link from 'next/link'
import stylesHome from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import LinkList from '../components/LinkList'
import Container from '../components/Container'

export default function MePage({ data }) {
  return (
    <>
    <Head>
      <title>Julio Montas - UI Developer • Full Stack Designer</title>
      <meta name='twitter:url' content='https://juliomontas.com/me' />
      <meta property='og:url' content='https://juliomontas.com/me' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name='twitter d:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/me" />
      <link rel="alternate" href="https://juliomontas.com/me" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/me" hreflang="es-us" />
    </Head>
      <div className={stylesHome.main}>
        <NavBar />
        <Container>

        <h1>Hola!</h1>

         </Container>
      </div>
    </>
  );
}
