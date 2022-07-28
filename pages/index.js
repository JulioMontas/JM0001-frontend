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
          title="Hey, I'm Julio, Building content management system (CMS) websites, eCommerce sites and apps, so you don't have to."
        />

        <div className={stylesHome.spacePadding}>
          <CaseStudiesWrap
            title="Case Studies"
          />
        </div>

        <div className={stylesHome.spacePadding}>
          <h2 className={stylesHome.mobileHtwo}>
            Services
          </h2>
          <Accordion
            title="Sculpting Your Vision 🌱 "
            quote="Your entrepreneur goals on the road to a visual solution"
            contUnoTitle="Visual Designer"
            contUno="Multi-disciplinary designer that care deeply about the users who use the product. Using user-centered design methods to craft industry-leading user experiences from concept to execution."
            contDosTitle="User Experience Design"
            contDos="Pleasing the eye for legibility and capture inspiration."
            logoUno="Figma"
            logoDos="CSS"
            logoTres="InVision"
            logoFour="Google"
            logoFive="Sketch"
            logoSix="Jira"
          />
          <Accordion
            title="From Visual To Develoment 🍭 "
            quote="Publish your product to the cloud"
            contUnoTitle="Web and Mobile Development"
            contUno="Expert level knowledge of HTML/CSS and JavaScript with hands on experience with Node.js, ReactJS cross-platform development and other component-based framework."
            contDosTitle="eCommerce"
            contDos="Building custom online experience combine with 5 year of retail store experience."
            logoUno="NextJS"
            logoDos="PWA"
            logoTres="GatsbyJS"
            logoFour="GitHub"
            logoFive="Shopify"
            logoSix="Docker"
          />
          <Accordion
            title="Experimental 🚀 "
            quote="The Creative Lab"
            contUnoTitle="Creative Technologist"
            contUno="Comfortable conceptually and technically with a variety of devices, from mobile to wearable to XR, communication through code."
            contDosTitle="Prototype"
            contDos="VR / AR experience"
            logoUno="Terminal"
            logoDos="Linux"
            logoTres="RaspberryPi"
            logoFour="MongoDB"
            logoFive="WebXR"
            logoSix="P5js"
          />
          <h2 className={stylesHome.mobileHtwo}>
            <Link href={`https://forms.gle/9uVudBpW7YE6n2CNA`}>
              <a>Let's Talk</a>
            </Link>
          </h2>
        </div>

      </Container>
      </div>
    </>
  );
}
