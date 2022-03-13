import Head from 'next/head'
import styles from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import HeroSection from '../components/HeroSection'
import CaseStudiesWrap from '../components/CaseStudiesWrap'
import SideProjectWrap from '../components/SideProjectWrap'
import TechStack from '../components/TechStack'
import Container from '../components/Container'

export default function Homepage({ data }) {
  return (
    <>
    <Head>
      <title>Julio Montás - UI Developer • Full Stack Designer</title>
      <meta name='twitter:url' content='https://juliomontas.com/blog/' />
      <meta property='og:url' content='https://juliomontas.com/blog/' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Julio Montás - UI Developer • Full Stack Designer' />
      <meta name='twitter d:title' content='Julio Montás - UI Developer • Full Stack Designer' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/" />
      <link rel="alternate" href="https://juliomontas.com/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/" hreflang="es-us" />
    </Head>
      <div className={styles.main}>
      <Container>
        <HeroSection
          title="Product Designer"
        />
        <CaseStudiesWrap
          title="Case Studies"
        />
        <TechStack />
        <SideProjectWrap
          title="Side Projects"
        />
      </Container>
      </div>
    </>
  );
}
