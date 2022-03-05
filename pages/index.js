import Head from 'next/head'
import styles from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import ThirdCol from '../components/ThirdCol'
import CaseStudiesWrap from '../components/CaseStudiesWrap'
import SideProjectWrap from '../components/SideProjectWrap'
import TechStack from '../components/TechStack'
import Container from '../components/Container'

const MY_HOMEPAGE = `
{
  homePage(locale: en, fallbackLocales: en) {
    title
    content {
      value
    }
  }
}`;

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
      <meta name='twitter:title' content='Julio Montás - UI Developer • Full Stack Designer' />
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
          description="Building a website or app for your idea? Let's build it together. Creative solutions for every stage of your company's growth - strategy, design, development and management. Based in NYC."
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
