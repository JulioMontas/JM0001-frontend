import Head from 'next/head'
import Link from 'next/link'
import stylesHome from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import CaseStudiesWrap from '../components/CaseStudiesWrap'
import LinkCTA from '../components/LinkCTA'
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
          title="✋🏾 I'm Julio, I ❤️ building and designing eCommerce shops, content management system (CMS) with a serverless architectures to boost your search engine optimization (SEO) results."
          description="Experience with early-stage startup, luxury fashion and beauty brands. Providing an all-inclusive design and development service tailored specifically to meet your needs using design thinking strategy."
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
            contUnoTitle="Digital Designer"
            contUno="Multi-disciplinary designer that care deeply about the users who use the product. Using user-centered design methods to craft industry-leading user experiences from concept to execution."
            contDosTitle="User Experience Design"
            contDos="Pleasing the eye for legibility and capture inspiration."
            logoUno="figma"
            logoDos="css"
            logoTres="invision"
            logoFour="google"
            logoFive="sketch"
            logoSix="jira"
          />
          <Accordion
            title="From Visual To Develoment 🍭 "
            quote="Publish your product to the cloud"
            contUnoTitle="Web and Mobile Development"
            contUno="Expert level knowledge of HTML/CSS and JavaScript with hands on experience with Node.js, ReactJS cross-platform development and other component-based framework."
            contDosTitle="eCommerce"
            contDos="Building custom online experience combine with 5 year of retail store experience."
            logoUno="nextjs"
            logoDos="pwa"
            logoTres="gatsbyjs"
            logoFour="github"
            logoFive="shopify"
            logoSix="docker"
          />
          <Accordion
            title="Experimental 🚀 "
            quote="The Creative Lab"
            contUnoTitle="Creative Technologist"
            contUno="Comfortable conceptually and technically with a variety of devices, from mobile to wearable to VR and AR, communication through code."
            contDosTitle="Prototype"
            contDos="VR / AR experience"
            logoUno="terminal"
            logoDos="linux"
            logoTres="raspberrypi"
            logoFour="mongodb"
            logoFive="webxr"
            logoSix="p5js"
          />
          <h2 className={stylesHome.mobileHtwo}>
            <Link href={`https://forms.gle/9uVudBpW7YE6n2CNA`}>
              <a>Let's Talk</a>
            </Link>
          </h2>
        </div>

        <div className={stylesHome.spacePadding}>
          <h2 className={stylesHome.mobileHtwo}>
            Social Links & Projects
          </h2>
          <div className="LinkList">
            <LinkCTA
              theme="card-false"
              title="Hello Code"
              summary="Archive of programming languages that have been developed from past to present to improve how software architects choose their stack."
              url="/side-project/hellocode-the-home-for-programming-languages"
            />
            <LinkCTA
              theme="card-true"
              title="SoundCloud"
              summary="Playing Minimal House / Techno"
              url="https://soundcloud.com/juliomontas"
              alt="Dj playing music"
              png="png/dj-playing-music.png"
            />
            <LinkCTA
              theme="card-false"
              title="Meliorem"
              summary="Reward self task manager to stimulate your existence"
              url="side-project/meliorem-cultivating-your-passion-to-level-up"
            />
            <LinkCTA
              theme="card-true"
              title="Unsplas"
              summary="Open source photography"
              url="https://unsplash.com/@juliomontas"
              alt="camera"
              png="png/camera.png"
            />
            <LinkCTA
              theme="card-false"
              title="Surveillance Culture"
              summary="A social experiment using the top social media channels to farm users sensitive data"
              url="side-project/surveillance-culture"
            />
            <LinkCTA
              theme="card-true"
              title="Github"
              summary="Code portfolio in JavaScript and other programming languages"
              url="https://github.com/JulioMontas"
              alt="Creating new facility using VR technology"
              png="png/creating-new-facility-using-vr-technology.png"
            />
            <LinkCTA
              theme="card-false"
              title="Width - Take Over the Screen"
              summary="A two-player game in which you must defeat your opponents by clicking to take over the screen."
              url="side-project/width-take-over-the-screen"
            />
            <LinkCTA
              theme="card-true"
              title="Dribbble"
              summary="UI Design Portfolio"
              url="https://dribbble.com/juliomontas"
              alt="House plant for decoration"
              png="png/house-plant-for-decoration.png"
            />
            <LinkCTA
              theme="card-false"
              title="COLOR"
              summary="Teaching toddler how to learn the basic of colors pronunciation and visual recognition memory."
              url="side-project/basic-color-fundamentals"
            />
            <LinkCTA
              theme="card-true"
              title="CodePen"
              summary="Front-end Code Snippet"
              url="https://codepen.io/JulioMontas/"
              alt="Blockchain Platform in Virtual Reality"
              png="png/blockchain-platform-in-virtual-reality.png"
            />
          </div>
        </div>

      </Container>
      </div>
    </>
  );
}
