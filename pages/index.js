import Head from 'next/head'
import Link from 'next/link'
import stylesHome from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import CaseStudiesWrap from '../components/CaseStudiesWrap'
import LinkList from '../components/LinkList'
import TechStack from '../components/TechStack'
import Container from '../components/Container'
import Accordion from '../components/Accordion'

export default function Homepage({ data }) {
  return (
    <>
    <Head>
      <title>Julio Montas - UI Developer • Full Stack Designer</title>
      <meta name='twitter:url' content='https://juliomontas.com/' />
      <meta property='og:url' content='https://juliomontas.com/' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name='twitter d:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/" />
      <link rel="alternate" href="https://juliomontas.com/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/" hreflang="es-us" />
    </Head>
      <div className={stylesHome.main}>
      <NavBar />
      <Container>
        <HeroSection
          title="Product Designer + Developer"
        />

        <div className={stylesHome.spacePadding}>
          <CaseStudiesWrap
            title="Case Studies"
          />
        </div>

        <div className={stylesHome.spacePadding}>
          <h2>Links & Projects</h2>
          <LinkList />
        </div>

        <div className={stylesHome.spacePadding}>
          <h2>Services</h2>
          <Accordion title="Design" content="this is content 1" />
          <Accordion title="Development" content="this is content 2" />
        </div>

        <div className={stylesHome.spacePadding}>
          <h3>
            <Link href={`https://forms.gle/9uVudBpW7YE6n2CNA`}>
              <a>Let's Talk</a>
            </Link>
          </h3>
        </div>

      </Container>
      </div>
    </>
  );
}
